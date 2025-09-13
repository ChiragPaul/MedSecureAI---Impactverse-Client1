"""
Test script for Medicine Availability Prediction API
"""

import requests
import json
import time

# API base URL
BASE_URL = "http://localhost:8000"

def test_health_check():
    """Test health check endpoint"""
    print("Testing health check...")
    try:
        response = requests.get(f"{BASE_URL}/health")
        if response.status_code == 200:
            print("✅ Health check passed")
            print(f"Response: {response.json()}")
        else:
            print(f"❌ Health check failed: {response.status_code}")
    except Exception as e:
        print(f"❌ Health check error: {e}")

def test_model_info():
    """Test model info endpoint"""
    print("\nTesting model info...")
    try:
        response = requests.get(f"{BASE_URL}/model-info")
        if response.status_code == 200:
            print("✅ Model info retrieved")
            print(f"Response: {json.dumps(response.json(), indent=2)}")
        else:
            print(f"❌ Model info failed: {response.status_code}")
    except Exception as e:
        print(f"❌ Model info error: {e}")

def test_single_prediction():
    """Test single medicine prediction"""
    print("\nTesting single prediction...")
    
    test_cases = [
        {"medicine_name": "Paracetamol 500mg Tablet", "region": "Delhi NCR"},
        {"medicine_name": "Insulin 40IU/ml Injection", "region": "Mumbai"},
        {"medicine_name": "Aspirin 75mg Tablet", "region": "Bangalore"},
        {"medicine_name": "Amoxicillin 250mg Capsule", "region": "Chennai"},
        {"medicine_name": "Metformin 500mg Tablet", "region": "Kolkata"}
    ]
    
    for i, test_case in enumerate(test_cases, 1):
        try:
            print(f"\nTest case {i}: {test_case['medicine_name']} in {test_case['region']}")
            response = requests.post(f"{BASE_URL}/predict", json=test_case)
            
            if response.status_code == 200:
                result = response.json()
                print("✅ Prediction successful")
                print(f"  Medicine: {result['medicine_name']}")
                print(f"  Region: {result['region']}")
                print(f"  Available: {result['is_available']}")
                print(f"  Probability: {result['probability']:.4f}")
                print(f"  Confidence: {result['confidence_level']}")
                print(f"  Model: {result['model_used']}")
                print(f"  Alternative regions: {result['alternative_regions']}")
            else:
                print(f"❌ Prediction failed: {response.status_code}")
                print(f"Error: {response.text}")
        except Exception as e:
            print(f"❌ Prediction error: {e}")

def test_batch_prediction():
    """Test batch medicine prediction"""
    print("\nTesting batch prediction...")
    
    batch_data = {
        "medicines": [
            {"medicine_name": "Paracetamol 500mg Tablet", "region": "Delhi NCR"},
            {"medicine_name": "Insulin 40IU/ml Injection", "region": "Mumbai"},
            {"medicine_name": "Aspirin 75mg Tablet", "region": "Bangalore"},
            {"medicine_name": "Amoxicillin 250mg Capsule", "region": "Chennai"},
            {"medicine_name": "Metformin 500mg Tablet", "region": "Kolkata"}
        ]
    }
    
    try:
        response = requests.post(f"{BASE_URL}/predict-batch", json=batch_data)
        
        if response.status_code == 200:
            result = response.json()
            print("✅ Batch prediction successful")
            print(f"Total medicines: {result['total_medicines']}")
            print(f"Available: {result['available_count']}")
            print(f"Unavailable: {result['unavailable_count']}")
            
            print("\nIndividual predictions:")
            for i, prediction in enumerate(result['predictions'], 1):
                print(f"  {i}. {prediction['medicine_name']} in {prediction['region']}: "
                      f"{'Available' if prediction['is_available'] else 'Not Available'} "
                      f"(Probability: {prediction['probability']:.4f})")
        else:
            print(f"❌ Batch prediction failed: {response.status_code}")
            print(f"Error: {response.text}")
    except Exception as e:
        print(f"❌ Batch prediction error: {e}")

def test_regions():
    """Test regions endpoint"""
    print("\nTesting regions endpoint...")
    try:
        response = requests.get(f"{BASE_URL}/regions")
        if response.status_code == 200:
            print("✅ Regions retrieved")
            regions = response.json()['regions']
            print(f"Available regions: {len(regions)}")
            for region in regions:
                print(f"  - {region}")
        else:
            print(f"❌ Regions failed: {response.status_code}")
    except Exception as e:
        print(f"❌ Regions error: {e}")

def test_error_handling():
    """Test error handling"""
    print("\nTesting error handling...")
    
    # Test invalid medicine name
    try:
        response = requests.post(f"{BASE_URL}/predict", json={
            "medicine_name": "",  # Empty name
            "region": "Delhi NCR"
        })
        print(f"Empty medicine name test: {response.status_code}")
    except Exception as e:
        print(f"Empty medicine name error: {e}")
    
    # Test invalid region
    try:
        response = requests.post(f"{BASE_URL}/predict", json={
            "medicine_name": "Paracetamol",
            "region": ""  # Empty region
        })
        print(f"Empty region test: {response.status_code}")
    except Exception as e:
        print(f"Empty region error: {e}")

def main():
    """Main test function"""
    print("="*80)
    print("MEDICINE AVAILABILITY PREDICTION API TEST")
    print("="*80)
    
    # Wait a moment for API to start
    print("Waiting for API to start...")
    time.sleep(2)
    
    # Run tests
    test_health_check()
    test_model_info()
    test_single_prediction()
    test_batch_prediction()
    test_regions()
    test_error_handling()
    
    print("\n" + "="*80)
    print("API TESTING COMPLETED!")
    print("="*80)

if __name__ == "__main__":
    main()
