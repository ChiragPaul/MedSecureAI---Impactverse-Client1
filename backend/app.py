from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os
import sys
import json
from datetime import datetime
import uuid

# Add the attempt directory to Python path
attempt_dir = os.path.join(os.path.dirname(__file__), 'attempt')
sys.path.append(attempt_dir)

# Set the correct models directory path
os.environ['MODELS_DIR'] = os.path.join(attempt_dir, 'models')

try:
    from chatbot_predictor import (
        load_saved_predictor, 
        load_known_medicines, 
        KnownMedicineIndex,
        REGIONS
    )
except ImportError as e:
    print(f"Error importing chatbot_predictor: {e}")
    # Fallback for development
    REGIONS = [
        "Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune",
        "Kolkata", "Ahmedabad", "Jaipur"
    ]

app = FastAPI(title="Medicine Availability Chatbot API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ChatMessage(BaseModel):
    message: str
    timestamp: Optional[str] = None
    user: str = "user"

class ChatResponse(BaseModel):
    message: str
    timestamp: str
    user: str = "ai"
    data: Optional[Dict[str, Any]] = None

class MedicineSearchRequest(BaseModel):
    medicine_name: str
    region: str

class MedicineSearchResponse(BaseModel):
    query: str
    region: str
    matches: List[Dict[str, Any]]
    selected_medicine: Optional[str] = None
    selected_stockist: Optional[str] = None

class PredictionRequest(BaseModel):
    medicine_name: str
    region: str
    selected_medicine: Optional[str] = None
    selected_stockist: Optional[str] = None

class PredictionResponse(BaseModel):
    query: str
    selected_medicine: str
    selected_stockist: str
    region: str
    model_used: str
    probability: float
    confidence_band: str
    is_available: bool
    status: str
    advice: Optional[str] = None

class OrderRequest(BaseModel):
    medicine_name: str
    quantity: int
    region: str
    stockist: str
    preferred_stockist_id: Optional[int] = None

class OrderResponse(BaseModel):
    order_id: str
    message: str
    details: Dict[str, Any]

# Global variables for caching
predictor = None
medicine_index = None
stockist_data = {}  # Region-based stockist data
chat_history = {}  # In production, use a proper database

# Predefined Q&A responses
PREDEFINED_RESPONSES = {
    "hi": "Hello! I'm your AI assistant for medicine availability. How can I help you today?",
    "hello": "Hi there! I can help you check medicine availability, find stockists, and place orders. What medicine are you looking for?",
    "help": "I can help you with:\n• Check medicine availability\n• Find stockists in your region\n• Place orders for medicines\n• Answer questions about our services\n\nWhat would you like to do?",
    "what can you do": "I can help you with:\n• Check medicine availability\n• Find stockists in your region\n• Place orders for medicines\n• Answer questions about our services\n\nWhat would you like to do?",
    "how are you": "I'm doing great! Ready to help you find the medicines you need. What can I assist you with today?",
    "thank you": "You're welcome! I'm here whenever you need help with medicine availability or orders.",
    "bye": "Goodbye! Take care and stay healthy!",
    "goodbye": "See you later! Feel free to come back anytime you need help with medicines.",
}

def get_predefined_response(message: str) -> Optional[str]:
    """Check if message matches any predefined responses"""
    message_lower = message.lower().strip()
    for key, response in PREDEFINED_RESPONSES.items():
        if key in message_lower:
            return response
    return None

def load_stockist_data():
    """Load stockist data from JSON file"""
    global stockist_data
    try:
        stockist_file = os.path.join(os.path.dirname(__file__), "stockist_data.json")
        if os.path.exists(stockist_file):
            with open(stockist_file, 'r', encoding='utf-8') as f:
                stockist_data = json.load(f)
            print(f"Stockist data loaded: {len(stockist_data)} regions")
        else:
            print("Stockist data file not found, using empty data")
            stockist_data = {}
    except Exception as e:
        print(f"Error loading stockist data: {e}")
        stockist_data = {}

def initialize_models():
    """Initialize the ML models and medicine index"""
    global predictor, medicine_index
    try:
        predictor = load_saved_predictor()
        medicine_index = load_known_medicines()
        print("Models loaded successfully")
    except Exception as e:
        print(f"Error loading models: {e}")
        predictor = None
        medicine_index = None

# Initialize models and data on startup
load_stockist_data()
initialize_models()

@app.get("/")
async def root():
    return {"message": "Medicine Availability Chatbot API", "status": "running"}

@app.get("/regions")
async def get_regions():
    return {"regions": REGIONS}

@app.get("/stockists/{region}")
async def get_stockists_by_region(region: str):
    """Get all stockists for a specific region"""
    region_stockists = stockist_data.get(region, [])
    return {
        "region": region,
        "stockists": region_stockists,
        "count": len(region_stockists)
    }

@app.get("/stockists")
async def get_all_stockists():
    """Get stockists for all regions"""
    return {
        "regions": list(stockist_data.keys()),
        "stockist_data": stockist_data
    }

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatMessage):
    """Handle chat messages with predefined responses or medicine search"""
    session_id = request.timestamp or str(uuid.uuid4())
    
    # Check for predefined responses first
    predefined_response = get_predefined_response(request.message)
    if predefined_response:
        response = ChatResponse(
            message=predefined_response,
            timestamp=datetime.now().isoformat(),
            user="ai"
        )
        # Store in chat history
        if session_id not in chat_history:
            chat_history[session_id] = []
        chat_history[session_id].append({
            "user": "user",
            "message": request.message,
            "timestamp": request.timestamp or datetime.now().isoformat()
        })
        chat_history[session_id].append({
            "user": "ai",
            "message": predefined_response,
            "timestamp": response.timestamp
        })
        return response
    
    # Check if message contains medicine-related keywords
    medicine_keywords = ["medicine", "drug", "tablet", "capsule", "injection", "syrup", "availability", "stock", "find", "search"]
    if any(keyword in request.message.lower() for keyword in medicine_keywords):
        response = ChatResponse(
            message="I can help you search for medicines! Please tell me the name of the medicine you're looking for, and I'll check its availability in your region.",
            timestamp=datetime.now().isoformat(),
            user="ai",
            data={"action": "medicine_search_prompt"}
        )
    else:
        response = ChatResponse(
            message="I'm here to help with medicine availability and orders. You can ask me about specific medicines, check availability, or place orders. What would you like to do?",
            timestamp=datetime.now().isoformat(),
            user="ai"
        )
    
    # Store in chat history
    if session_id not in chat_history:
        chat_history[session_id] = []
    chat_history[session_id].append({
        "user": "user",
        "message": request.message,
        "timestamp": request.timestamp or datetime.now().isoformat()
    })
    chat_history[session_id].append({
        "user": "ai",
        "message": response.message,
        "timestamp": response.timestamp
    })
    
    return response

@app.get("/chat/history/{session_id}")
async def get_chat_history(session_id: str):
    """Get chat history for a session"""
    return {"history": chat_history.get(session_id, [])}

@app.post("/medicine/search", response_model=MedicineSearchResponse)
async def search_medicine(request: MedicineSearchRequest):
    """Search for medicines and return matches with stockist information"""
    if not medicine_index or not medicine_index.is_loaded:
        raise HTTPException(status_code=500, detail="Medicine index not loaded")
    
    # If empty search, return all unique stockists for the region
    if not request.medicine_name.strip():
        # Get stockists from the pre-loaded stockist data
        region_stockists = stockist_data.get(request.region, [])
        
        # Convert to the expected format
        matches = []
        for i, stockist in enumerate(region_stockists):
            matches.append({
                "type": "stockist",
                "medicine": stockist,  # Use stockist as medicine for display
                "score": 1.0,  # Perfect match for stockist search
                "stockist": stockist,
                "region": request.region,
                "id": f"stockist_{i}"
            })
        
        return MedicineSearchResponse(
            query="stockists",
            region=request.region,
            matches=matches
        )
    
    # Search for matches
    name_hits, salt_hits = medicine_index.find_matches(request.medicine_name, limit=10)
    
    # Combine and format results
    matches = []
    
    # Add name matches
    for raw, score, stockist in name_hits[:5]:
        matches.append({
            "type": "name",
            "medicine": raw,
            "score": score,
            "stockist": stockist,
            "id": f"name_{len(matches)}"
        })
    
    # Add salt composition matches
    for raw, score, stockist in salt_hits[:5]:
        matches.append({
            "type": "composition",
            "medicine": raw,
            "score": score,
            "stockist": stockist,
            "id": f"salt_{len(matches)}"
        })
    
    # Sort by score
    matches.sort(key=lambda x: x["score"], reverse=True)
    
    return MedicineSearchResponse(
        query=request.medicine_name,
        region=request.region,
        matches=matches[:10]
    )

@app.post("/medicine/predict", response_model=PredictionResponse)
async def predict_availability(request: PredictionRequest):
    """Predict medicine availability using the ML model"""
    if not predictor:
        raise HTTPException(status_code=500, detail="ML model not loaded")
    
    try:
        # Use selected medicine if provided, otherwise use the original query
        medicine_to_predict = request.selected_medicine or request.medicine_name
        
        # Get prediction
        result = predictor.predict_availability(medicine_to_predict, request.region)
        
        probability = float(result.get("probability", 0.0))
        is_available = bool(result.get("is_available", False))
        
        # Determine confidence band
        if probability >= 0.80:
            confidence_band = "High"
        elif probability >= 0.60:
            confidence_band = "Medium"
        elif probability >= 0.35:
            confidence_band = "Low"
        else:
            confidence_band = "Very Low"
        
        # Determine status and advice
        if is_available and probability >= 0.60:
            status = "AVAILABLE "
            advice = None
        elif is_available and 0.35 <= probability < 0.60:
            status = "AVAILABLE (LESS PROBABLE) "
            advice = "Consider alternatives or check multiple pharmacies."
        elif not is_available and 0.35 <= probability < 0.60:
            status = "NOT AVAILABLE (LESS PROBABLE) "
            advice = "We will notify authorities about this potential shortage."
        else:
            status = "NOT AVAILABLE "
            advice = "We will notify authorities about this shortage."
        
        return PredictionResponse(
            query=request.medicine_name,
            selected_medicine=medicine_to_predict,
            selected_stockist=request.selected_stockist or "",
            region=result.get('region', request.region),
            model_used=result.get('model_used', 'Unknown'),
            probability=probability,
            confidence_band=confidence_band,
            is_available=is_available,
            status=status,
            advice=advice
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

@app.post("/order", response_model=OrderResponse)
async def place_order(request: OrderRequest):
    """Place an order for medicine"""
    order_id = str(uuid.uuid4())
    
    # In a real application, this would integrate with an order management system
    order_details = {
        "order_id": order_id,
        "medicine_name": request.medicine_name,
        "quantity": request.quantity,
        "region": request.region,
        "stockist": request.stockist,
        "preferred_stockist_id": request.preferred_stockist_id,
        "status": "received",
        "timestamp": datetime.now().isoformat()
    }
    
    return OrderResponse(
        order_id=order_id,
        message=f"Order received! Your order ID is {order_id}. We'll process it shortly.",
        details=order_details
    )

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "predictor_loaded": predictor is not None,
        "medicine_index_loaded": medicine_index is not None and medicine_index.is_loaded,
        "stockist_data_loaded": len(stockist_data) > 0,
        "regions_with_stockists": len(stockist_data)
    }

def find_available_port(start_port=8000, max_port=8010):
    """Find an available port starting from start_port"""
    import socket
    for port in range(start_port, max_port + 1):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('localhost', port))
                return port
        except OSError:
            continue
    return None

if __name__ == "__main__":
    import uvicorn
    
    # Find available port
    port = find_available_port()
    if port is None:
        print("Error: No available ports found in range 8000-8010")
        sys.exit(1)
    
    print(f"Starting server on port {port}")
    uvicorn.run(app, host="0.0.0.0", port=port)
