"""
FastAPI Application for Medicine Availability Prediction
API for predicting medicine availability based on medicine name and region
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, validator
from typing import List, Dict, Any, Optional
import pandas as pd
import numpy as np
import joblib
import pickle
import os
from datetime import datetime
import warnings
warnings.filterwarnings('ignore')

# Initialize FastAPI app
app = FastAPI(
    title="Medicine Availability Prediction API",
    description="ML API for predicting medicine availability based on medicine name and region",
    version="1.0.0"
)

# Global variables for model and preprocessors
models = {}
scalers = {}
encoders = {}
vectorizers = {}
feature_names = []
model_info = {}
best_model = None

class MedicineRequest(BaseModel):
    """Request model for medicine availability prediction"""
    medicine_name: str
    region: str
    
    @validator('medicine_name')
    def validate_medicine_name(cls, v):
        if not v or len(v.strip()) < 2:
            raise ValueError('Medicine name must be at least 2 characters long')
        return v.strip()
    
    @validator('region')
    def validate_region(cls, v):
        if not v or len(v.strip()) < 2:
            raise ValueError('Region must be at least 2 characters long')
        return v.strip()

class MedicineResponse(BaseModel):
    """Response model for medicine availability prediction"""
    medicine_name: str
    region: str
    is_available: bool
    probability: float
    confidence_level: str
    model_used: str
    timestamp: str
    alternative_regions: Optional[List[str]] = None

class BatchMedicineRequest(BaseModel):
    """Request model for batch medicine availability prediction"""
    medicines: List[MedicineRequest]

class BatchMedicineResponse(BaseModel):
    """Response model for batch medicine availability prediction"""
    predictions: List[MedicineResponse]
    total_medicines: int
    available_count: int
    unavailable_count: int

def load_models():
    """Load the trained models and preprocessors"""
    global models, scalers, encoders, vectorizers, feature_names, model_info, best_model
    
    try:
        models_dir = "models"
        
        # Check if models directory exists
        if not os.path.exists(models_dir):
            raise FileNotFoundError("Models directory not found. Please train the models first.")
        
        # Load model info
        model_info = joblib.load(os.path.join(models_dir, 'model_info.pkl'))
        best_model_name = model_info['best_model']
        feature_names = model_info['feature_names']
        
        # Load individual models
        model_files = {
            'Random Forest': 'random_forest_model.pkl',
            'XGBoost': 'xgboost_model.pkl',
            'LightGBM': 'lightgbm_model.pkl',
            'Logistic Regression': 'logistic_regression_model.pkl',
            'Gradient Boosting': 'gradient_boosting_model.pkl'
        }
        
        for name, filename in model_files.items():
            model_path = os.path.join(models_dir, filename)
            if os.path.exists(model_path):
                models[name] = joblib.load(model_path)
                print(f"Loaded {name} model")
        
        # Load preprocessors
        scalers = joblib.load(os.path.join(models_dir, 'scalers.pkl'))
        encoders = joblib.load(os.path.join(models_dir, 'encoders.pkl'))
        vectorizers = joblib.load(os.path.join(models_dir, 'vectorizers.pkl'))
        
        # Set best model
        best_model = models.get(best_model_name)
        
        print(f"Models loaded successfully. Best model: {best_model_name}")
        print(f"Available models: {list(models.keys())}")
        print(f"Feature count: {len(feature_names)}")
        
    except Exception as e:
        print(f"Error loading models: {str(e)}")
        raise Exception("Failed to load models. Please ensure models are trained first.")

def preprocess_input(medicine_name: str, region: str):
    """Preprocess input data for prediction"""
    # Create a DataFrame with the input data
    data = {
        'product_name': [medicine_name],
        'sub_category': ['Unknown'],  # Default category
        'salt_composition': ['Unknown'],  # Default salt
        'manufacturer': ['Unknown'],  # Default manufacturer
        'region': [region],
        'category': ['general'],  # Default category
        'price': [100.0],  # Default price
        'stock_quantity': [50],  # Default stock
        'demand_level': [0.5],  # Default demand
        'medicine_desc': ['Unknown'],  # Default description
        'side_effects': ['Unknown']  # Default side effects
    }
    
    df = pd.DataFrame(data)
    
    # Clean text data
    df['medicine_name_clean'] = df['product_name'].str.lower().str.replace('[^a-z0-9\s]', '', regex=True)
    df['salt_clean'] = df['salt_composition'].str.lower().str.replace('[^a-z0-9\s]', '', regex=True)
    df['manufacturer_clean'] = df['manufacturer'].str.lower().str.replace('[^a-z0-9\s]', '', regex=True)
    
    # Create binary features
    df['has_price'] = 1
    df['has_stock'] = 1
    
    # Create interaction features
    df['price_stock_ratio'] = df['price'] / (df['stock_quantity'] + 1)
    df['demand_availability'] = df['demand_level'] * 1  # Assume available for now
    
    # Categorize medicine
    text = f"{medicine_name} {region}".lower()
    if any(word in text for word in ['diabetes', 'insulin', 'sugar']):
        df['category'] = ['diabetes']
    elif any(word in text for word in ['heart', 'cardiac', 'blood pressure']):
        df['category'] = ['cardiac']
    elif any(word in text for word in ['respiratory', 'asthma', 'lung']):
        df['category'] = ['respiratory']
    else:
        df['category'] = ['general']
    
    # Price categories
    price = df['price'].iloc[0]
    if price < 100:
        price_category = 'Very Low'
    elif price < 200:
        price_category = 'Low'
    elif price < 300:
        price_category = 'Medium'
    elif price < 500:
        price_category = 'High'
    else:
        price_category = 'Very High'
    
    df['price_category'] = [price_category]
    
    # Stock categories
    stock = df['stock_quantity'].iloc[0]
    if stock == 0:
        stock_category = 'Out of Stock'
    elif stock < 20:
        stock_category = 'Low Stock'
    elif stock < 50:
        stock_category = 'Medium Stock'
    elif stock < 100:
        stock_category = 'High Stock'
    else:
        stock_category = 'Very High Stock'
    
    df['stock_category'] = [stock_category]
    
    # Demand categories
    demand = df['demand_level'].iloc[0]
    if demand < 0.3:
        demand_category = 'Very Low'
    elif demand < 0.5:
        demand_category = 'Low'
    elif demand < 0.7:
        demand_category = 'Medium'
    elif demand < 0.9:
        demand_category = 'High'
    else:
        demand_category = 'Very High'
    
    df['demand_category'] = [demand_category]
    
    # Development level
    development_level = {
        "Delhi NCR": "Tier 1", "Mumbai": "Tier 1", "Bangalore": "Tier 1",
        "Chennai": "Tier 1", "Hyderabad": "Tier 1", "Pune": "Tier 2",
        "Kolkata": "Tier 2", "Ahmedabad": "Tier 2", "Jaipur": "Tier 2",
        "North India": "Tier 3", "South India": "Tier 3", "East India": "Tier 3",
        "West India": "Tier 3", "Central India": "Tier 3", "Northeast India": "Tier 3"
    }
    
    df['development_level'] = [development_level.get(region, "Tier 3")]
    
    # Medicine name length
    df['name_length'] = [len(medicine_name)]
    
    # Manufacturer type
    manufacturer = df['manufacturer'].iloc[0]
    if any(word in manufacturer.lower() for word in ['ltd', 'pvt', 'pharma']):
        manufacturer_type = 'International'
    elif any(word in manufacturer.lower() for word in ['india', 'indian']):
        manufacturer_type = 'Local'
    else:
        manufacturer_type = 'Other'
    
    df['manufacturer_type'] = [manufacturer_type]
    
    # Categorical features
    categorical_features = [
        'sub_category', 'region', 'category', 'price_category', 
        'stock_category', 'demand_category', 'development_level', 'manufacturer_type'
    ]
    
    # Numerical features
    numerical_features = [
        'price', 'stock_quantity', 'demand_level', 'name_length', 
        'has_price', 'has_stock', 'price_stock_ratio', 'demand_availability'
    ]
    
    # Text features
    text_features = ['medicine_name_clean', 'salt_clean', 'manufacturer_clean']
    
    # Encode categorical features
    X_categorical = df[categorical_features].copy()
    for col in categorical_features:
        if col in encoders:
            le = encoders[col]
            try:
                X_categorical[col] = le.transform([str(df[col].iloc[0])])[0]
            except ValueError:
                # Handle unseen categories
                X_categorical[col] = 0
        else:
            X_categorical[col] = 0
    
    # Scale numerical features
    X_numerical = df[numerical_features].copy()
    if 'numerical' in scalers:
        X_numerical_scaled = pd.DataFrame(
            scalers['numerical'].transform(X_numerical),
            columns=numerical_features,
            index=X_numerical.index
        )
    else:
        X_numerical_scaled = X_numerical
    
    # Create TF-IDF features for text
    text_features_combined = []
    for col in text_features:
        if col in vectorizers:
            tfidf = vectorizers[col]
            tfidf_matrix = tfidf.transform([df[col].iloc[0]])
            tfidf_df = pd.DataFrame(
                tfidf_matrix.toarray(),
                columns=[f"{col}_tfidf_{i}" for i in range(tfidf_matrix.shape[1])]
            )
            text_features_combined.append(tfidf_df)
        else:
            # Create dummy features if vectorizer not available
            tfidf_df = pd.DataFrame([[0] * 50], columns=[f"{col}_tfidf_{i}" for i in range(50)])
            text_features_combined.append(tfidf_df)
    
    # Combine all features
    X_combined = pd.concat([
        X_categorical.reset_index(drop=True),
        X_numerical_scaled.reset_index(drop=True)
    ] + [df.reset_index(drop=True) for df in text_features_combined], axis=1)
    
    # Ensure all expected features are present
    for feature in feature_names:
        if feature not in X_combined.columns:
            X_combined[feature] = 0
    
    # Reorder columns to match training data
    X_combined = X_combined[feature_names]
    
    return X_combined

def get_confidence_level(probability: float) -> str:
    """Get confidence level based on probability"""
    if probability >= 0.9:
        return "Very High"
    elif probability >= 0.8:
        return "High"
    elif probability >= 0.7:
        return "Medium"
    elif probability >= 0.6:
        return "Low"
    else:
        return "Very Low"

def get_alternative_regions(medicine_name: str, current_region: str) -> List[str]:
    """Get alternative regions where medicine might be available"""
    # This is a simplified implementation
    # In practice, you'd query the model for different regions
    
    all_regions = [
        "Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Kolkata",
        "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "North India",
        "South India", "East India", "West India", "Central India", "Northeast India"
    ]
    
    # Remove current region
    alternative_regions = [r for r in all_regions if r != current_region]
    
    # Return top 3 alternatives (simplified)
    return alternative_regions[:3]

@app.on_event("startup")
async def startup_event():
    """Load models on startup"""
    load_models()

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Medicine Availability Prediction API",
        "version": "1.0.0",
        "status": "running",
        "best_model": model_info.get('best_model', 'Not loaded'),
        "available_models": list(models.keys())
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "models_loaded": len(models) > 0,
        "best_model": model_info.get('best_model', 'Not loaded'),
        "feature_count": len(feature_names)
    }

@app.get("/model-info")
async def get_model_info():
    """Get information about available models"""
    if not model_info:
        raise HTTPException(status_code=500, detail="Model info not available")
    
    return {
        "best_model": model_info.get('best_model'),
        "available_models": list(models.keys()),
        "feature_count": len(feature_names),
        "model_performance": model_info.get('results', {})
    }

@app.post("/predict", response_model=MedicineResponse)
async def predict_availability(request: MedicineRequest):
    """
    Predict medicine availability for a given medicine and region
    """
    try:
        # Preprocess input
        X = preprocess_input(request.medicine_name, request.region)
        
        # Make prediction using best model
        if best_model is None:
            raise HTTPException(status_code=500, detail="No model available for prediction")
        
        # Predict
        prediction = best_model.predict(X)[0]
        probability = best_model.predict_proba(X)[0][1] if hasattr(best_model, 'predict_proba') else 0.5
        
        # Get alternative regions
        alternative_regions = get_alternative_regions(request.medicine_name, request.region)
        
        return MedicineResponse(
            medicine_name=request.medicine_name,
            region=request.region,
            is_available=bool(prediction),
            probability=float(probability),
            confidence_level=get_confidence_level(probability),
            model_used=model_info.get('best_model', 'Unknown'),
            timestamp=datetime.now().isoformat(),
            alternative_regions=alternative_regions
        )
        
    except Exception as e:
        print(f"Prediction error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

@app.post("/predict-batch", response_model=BatchMedicineResponse)
async def predict_batch_availability(request: BatchMedicineRequest):
    """
    Predict medicine availability for multiple medicines
    """
    try:
        predictions = []
        
        for medicine_request in request.medicines:
            # Preprocess input
            X = preprocess_input(medicine_request.medicine_name, medicine_request.region)
            
            # Make prediction
            prediction = best_model.predict(X)[0]
            probability = best_model.predict_proba(X)[0][1] if hasattr(best_model, 'predict_proba') else 0.5
            
            # Get alternative regions
            alternative_regions = get_alternative_regions(medicine_request.medicine_name, medicine_request.region)
            
            predictions.append(MedicineResponse(
                medicine_name=medicine_request.medicine_name,
                region=medicine_request.region,
                is_available=bool(prediction),
                probability=float(probability),
                confidence_level=get_confidence_level(probability),
                model_used=model_info.get('best_model', 'Unknown'),
                timestamp=datetime.now().isoformat(),
                alternative_regions=alternative_regions
            ))
        
        # Calculate summary statistics
        available_count = sum(1 for p in predictions if p.is_available)
        unavailable_count = len(predictions) - available_count
        
        return BatchMedicineResponse(
            predictions=predictions,
            total_medicines=len(predictions),
            available_count=available_count,
            unavailable_count=unavailable_count
        )
        
    except Exception as e:
        print(f"Batch prediction error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Batch prediction failed: {str(e)}")

@app.get("/regions")
async def get_available_regions():
    """Get list of available regions"""
    return {
        "regions": [
            "Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Kolkata",
            "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "North India",
            "South India", "East India", "West India", "Central India", "Northeast India"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "medicine_api:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
