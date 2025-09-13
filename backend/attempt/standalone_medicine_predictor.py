"""
Standalone Medicine Availability Predictor
Simple Python script for training and predicting medicine availability
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
import joblib
import os
import warnings
warnings.filterwarnings('ignore')

class StandaloneMedicinePredictor:
    """Standalone medicine availability predictor"""
    
    def __init__(self):
        self.model = None
        self.scaler = StandardScaler()
        self.encoders = {}
        self.feature_names = None
        self.regions = [
            "Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Kolkata",
            "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "North India",
            "South India", "East India", "West India", "Central India", "Northeast India"
        ]
        
    def load_data(self, data_path="medicine_availability_synthetic.csv"):
        """Load the synthetic dataset"""
        print("Loading synthetic dataset...")
        self.df = pd.read_csv(data_path)
        print(f"Loaded {len(self.df)} records")
        return self.df
    
    def preprocess_data(self):
        """Preprocess the data for modeling"""
        print("Preprocessing data...")
        
        # Handle missing values
        self.df = self.df.fillna('Unknown')
        
        # Create text features
        self.df['medicine_name_clean'] = self.df['product_name'].str.lower().str.replace(r'[^a-z0-9\s]', '', regex=True)
        self.df['salt_clean'] = self.df['salt_composition'].str.lower().str.replace(r'[^a-z0-9\s]', '', regex=True)
        self.df['manufacturer_clean'] = self.df['manufacturer'].str.lower().str.replace(r'[^a-z0-9\s]', '', regex=True)
        
        # Create binary features
        self.df['has_price'] = (~self.df['price'].isna()).astype(int)
        self.df['has_stock'] = (self.df['stock_quantity'] > 0).astype(int)
        
        # Create interaction features
        self.df['price_stock_ratio'] = self.df['price'] / (self.df['stock_quantity'] + 1)
        self.df['demand_availability'] = self.df['demand_level'] * self.df['is_available']
        
        print("Data preprocessing completed")
        return self.df
    
    def create_features(self):
        """Create features for the model"""
        print("Creating features...")
        
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
        
        # Encode categorical features
        X_categorical = self.df[categorical_features].copy()
        for col in categorical_features:
            le = LabelEncoder()
            X_categorical[col] = le.fit_transform(X_categorical[col].astype(str))
            self.encoders[col] = le
        
        # Scale numerical features
        X_numerical = self.df[numerical_features].copy()
        X_numerical_scaled = pd.DataFrame(
            self.scaler.fit_transform(X_numerical),
            columns=numerical_features,
            index=X_numerical.index
        )
        
        # Combine features
        X_combined = pd.concat([X_categorical.reset_index(drop=True), X_numerical_scaled.reset_index(drop=True)], axis=1)
        self.feature_names = X_combined.columns.tolist()
        
        # Target variable
        y = self.df['is_available']
        
        print(f"Created {len(self.feature_names)} features")
        return X_combined, y
    
    def train_model(self, X, y):
        """Train the Random Forest model"""
        print("\nTraining Random Forest model...")
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        print(f"Training set: {X_train.shape}")
        print(f"Test set: {X_test.shape}")
        
        # Train model
        self.model = RandomForestClassifier(
            n_estimators=100,
            max_depth=10,
            random_state=42,
            n_jobs=-1
        )
        
        self.model.fit(X_train, y_train)
        
        # Evaluate model
        y_pred = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        
        print(f"Model trained successfully!")
        print(f"Accuracy: {accuracy:.4f}")
        
        # Show feature importance
        print("\nTop 10 Feature Importances:")
        feature_importance = pd.DataFrame({
            'feature': self.feature_names,
            'importance': self.model.feature_importances_
        }).sort_values('importance', ascending=False)
        
        print(feature_importance.head(10).to_string(index=False))
        
        return accuracy
    
    def save_model(self, save_dir="models"):
        """Save the trained model and preprocessors"""
        print(f"\nSaving model to {save_dir}...")
        
        # Create directory
        os.makedirs(save_dir, exist_ok=True)
        
        # Save model
        joblib.dump(self.model, os.path.join(save_dir, 'standalone_model.pkl'))
        joblib.dump(self.scaler, os.path.join(save_dir, 'standalone_scaler.pkl'))
        joblib.dump(self.encoders, os.path.join(save_dir, 'standalone_encoders.pkl'))
        
        # Save feature names
        with open(os.path.join(save_dir, 'standalone_feature_names.pkl'), 'wb') as f:
            import pickle
            pickle.dump(self.feature_names, f)
        
        print("Model saved successfully!")
    
    def load_model(self, save_dir="models"):
        """Load the trained model and preprocessors"""
        print("Loading trained model...")
        
        self.model = joblib.load(os.path.join(save_dir, 'standalone_model.pkl'))
        self.scaler = joblib.load(os.path.join(save_dir, 'standalone_scaler.pkl'))
        self.encoders = joblib.load(os.path.join(save_dir, 'standalone_encoders.pkl'))
        
        with open(os.path.join(save_dir, 'standalone_feature_names.pkl'), 'rb') as f:
            import pickle
            self.feature_names = pickle.load(f)
        
        print("Model loaded successfully!")
    
    def preprocess_input(self, medicine_name, region):
        """Preprocess input data for prediction"""
        # Create a DataFrame with the input data
        data = {
            'product_name': [medicine_name],
            'sub_category': ['Unknown'],
            'salt_composition': ['Unknown'],
            'manufacturer': ['Unknown'],
            'region': [region],
            'category': ['general'],
            'price': [100.0],
            'stock_quantity': [50],
            'demand_level': [0.5],
            'medicine_desc': ['Unknown'],
            'side_effects': ['Unknown']
        }
        
        df = pd.DataFrame(data)
        
        # Clean text data
        df['medicine_name_clean'] = df['product_name'].str.lower().str.replace(r'[^a-z0-9\s]', '', regex=True)
        df['salt_clean'] = df['salt_composition'].str.lower().str.replace(r'[^a-z0-9\s]', '', regex=True)
        df['manufacturer_clean'] = df['manufacturer'].str.lower().str.replace(r'[^a-z0-9\s]', '', regex=True)
        
        # Create binary features
        df['has_price'] = 1
        df['has_stock'] = 1
        
        # Create interaction features
        df['price_stock_ratio'] = df['price'] / (df['stock_quantity'] + 1)
        df['demand_availability'] = df['demand_level'] * 1
        
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
        
        # Encode categorical features
        X_categorical = df[categorical_features].copy()
        for col in categorical_features:
            if col in self.encoders:
                le = self.encoders[col]
                try:
                    X_categorical[col] = le.transform([str(df[col].iloc[0])])[0]
                except ValueError:
                    X_categorical[col] = 0
            else:
                X_categorical[col] = 0
        
        # Scale numerical features
        X_numerical = df[numerical_features].copy()
        X_numerical_scaled = pd.DataFrame(
            self.scaler.transform(X_numerical),
            columns=numerical_features,
            index=X_numerical.index
        )
        
        # Combine features
        X_combined = pd.concat([X_categorical.reset_index(drop=True), X_numerical_scaled.reset_index(drop=True)], axis=1)
        
        # Ensure all expected features are present
        for feature in self.feature_names:
            if feature not in X_combined.columns:
                X_combined[feature] = 0
        
        # Reorder columns to match training data
        X_combined = X_combined[self.feature_names]
        
        return X_combined
    
    def predict_availability(self, medicine_name, region):
        """Predict medicine availability"""
        if self.model is None:
            print("Model not loaded. Please train or load a model first.")
            return None
        
        # Preprocess input
        X = self.preprocess_input(medicine_name, region)
        
        # Make prediction
        prediction = self.model.predict(X)[0]
        probability = self.model.predict_proba(X)[0][1]
        
        return {
            'medicine_name': medicine_name,
            'region': region,
            'is_available': bool(prediction),
            'probability': float(probability),
            'confidence': 'High' if probability > 0.8 else 'Medium' if probability > 0.6 else 'Low'
        }
    
    def interactive_prediction(self):
        """Interactive prediction mode"""
        print("\n" + "="*60)
        print("INTERACTIVE MEDICINE AVAILABILITY PREDICTION")
        print("="*60)
        
        while True:
            print("\nAvailable regions:")
            for i, region in enumerate(self.regions, 1):
                print(f"{i:2d}. {region}")
            
            try:
                # Get medicine name
                medicine_name = input("\nEnter medicine name (or 'quit' to exit): ").strip()
                if medicine_name.lower() == 'quit':
                    break
                
                if not medicine_name:
                    print("Please enter a valid medicine name.")
                    continue
                
                # Get region
                region_choice = input("Enter region number (1-15): ").strip()
                try:
                    region_idx = int(region_choice) - 1
                    if 0 <= region_idx < len(self.regions):
                        region = self.regions[region_idx]
                    else:
                        print("Invalid region number. Please try again.")
                        continue
                except ValueError:
                    print("Please enter a valid number.")
                    continue
                
                # Make prediction
                print(f"\nPredicting availability for '{medicine_name}' in '{region}'...")
                result = self.predict_availability(medicine_name, region)
                
                if result:
                    print(f"\n{'='*50}")
                    print(f"PREDICTION RESULT")
                    print(f"{'='*50}")
                    print(f"Medicine: {result['medicine_name']}")
                    print(f"Region: {result['region']}")
                    print(f"Available: {'YES' if result['is_available'] else 'NO'}")
                    print(f"Probability: {result['probability']:.4f}")
                    print(f"Confidence: {result['confidence']}")
                    print(f"{'='*50}")
                
            except KeyboardInterrupt:
                print("\nExiting...")
                break
            except Exception as e:
                print(f"Error: {e}")

def main():
    """Main function"""
    print("="*80)
    print("STANDALONE MEDICINE AVAILABILITY PREDICTOR")
    print("="*80)
    
    predictor = StandaloneMedicinePredictor()
    
    # Check if model exists
    if os.path.exists("models/standalone_model.pkl"):
        print("Loading existing model...")
        predictor.load_model()
    else:
        print("Training new model...")
        
        # Load and preprocess data
        predictor.load_data()
        predictor.preprocess_data()
        
        # Create features and train model
        X, y = predictor.create_features()
        accuracy = predictor.train_model(X, y)
        
        # Save model
        predictor.save_model()
    
    # Start interactive prediction
    predictor.interactive_prediction()
    
    print("\n" + "="*80)
    print("THANK YOU FOR USING MEDICINE AVAILABILITY PREDICTOR!")
    print("="*80)

if __name__ == "__main__":
    main()
