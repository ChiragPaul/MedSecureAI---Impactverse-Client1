"""
Synthetic Dataset Generator for Medicine Availability Prediction
Creates a synthetic dataset with region-based medicine availability patterns
"""

import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta
import json

class MedicineAvailabilityGenerator:
    """Generate synthetic medicine availability data"""
    
    def __init__(self, medicine_data_path="../medicine_data.csv"):
        self.medicine_data_path = medicine_data_path
        self.medicine_df = None
        self.regions = [
            "North India", "South India", "East India", "West India", "Central India",
            "Northeast India", "Delhi NCR", "Mumbai", "Bangalore", "Chennai",
            "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur"
        ]
        
        # Regional availability patterns (some medicines more available in certain regions)
        self.regional_patterns = {
            "North India": {"diabetes": 0.9, "cardiac": 0.8, "respiratory": 0.7, "general": 0.85},
            "South India": {"diabetes": 0.95, "cardiac": 0.9, "respiratory": 0.8, "general": 0.9},
            "East India": {"diabetes": 0.7, "cardiac": 0.6, "respiratory": 0.8, "general": 0.75},
            "West India": {"diabetes": 0.85, "cardiac": 0.85, "respiratory": 0.9, "general": 0.88},
            "Central India": {"diabetes": 0.75, "cardiac": 0.7, "respiratory": 0.75, "general": 0.8},
            "Northeast India": {"diabetes": 0.6, "cardiac": 0.5, "respiratory": 0.7, "general": 0.65},
            "Delhi NCR": {"diabetes": 0.95, "cardiac": 0.95, "respiratory": 0.9, "general": 0.95},
            "Mumbai": {"diabetes": 0.9, "cardiac": 0.9, "respiratory": 0.95, "general": 0.92},
            "Bangalore": {"diabetes": 0.92, "cardiac": 0.88, "respiratory": 0.85, "general": 0.9},
            "Chennai": {"diabetes": 0.88, "cardiac": 0.85, "respiratory": 0.9, "general": 0.87},
            "Kolkata": {"diabetes": 0.8, "cardiac": 0.75, "respiratory": 0.85, "general": 0.82},
            "Hyderabad": {"diabetes": 0.9, "cardiac": 0.85, "respiratory": 0.88, "general": 0.88},
            "Pune": {"diabetes": 0.85, "cardiac": 0.8, "respiratory": 0.9, "general": 0.85},
            "Ahmedabad": {"diabetes": 0.8, "cardiac": 0.75, "respiratory": 0.85, "general": 0.8},
            "Jaipur": {"diabetes": 0.75, "cardiac": 0.7, "respiratory": 0.8, "general": 0.75}
        }
        
        # Medicine category mapping
        self.category_mapping = {
            "diabetes": ["Human Insulin", "Insulin", "Oral Antidiabetics", "Diabetes"],
            "cardiac": ["Cardiac", "Heart", "Blood Pressure", "Hypertension", "Cardiovascular"],
            "respiratory": ["Respiratory", "Asthma", "Bronchitis", "COPD", "Lung"],
            "general": ["Pain", "Fever", "Antibiotic", "Vitamin", "General", "Other"]
        }
    
    def load_medicine_data(self):
        """Load the original medicine data"""
        print("Loading medicine data...")
        self.medicine_df = pd.read_csv(self.medicine_data_path)
        print(f"Loaded {len(self.medicine_df)} medicine records")
        return self.medicine_df
    
    def categorize_medicine(self, sub_category, product_name):
        """Categorize medicine based on sub_category and product_name"""
        text = f"{sub_category} {product_name}".lower()
        
        for category, keywords in self.category_mapping.items():
            for keyword in keywords:
                if keyword.lower() in text:
                    return category
        return "general"
    
    def generate_availability_data(self, num_samples=50000):
        """Generate synthetic availability data"""
        print("Generating synthetic availability data...")
        
        if self.medicine_df is None:
            self.load_medicine_data()
        
        # Sample medicines for synthetic data
        sample_medicines = self.medicine_df.sample(n=min(10000, len(self.medicine_df)), random_state=42)
        
        synthetic_data = []
        
        for idx, medicine in sample_medicines.iterrows():
            # Generate multiple region entries for each medicine
            num_regions = random.randint(3, len(self.regions))  # Each medicine available in 3-15 regions
            selected_regions = random.sample(self.regions, num_regions)
            
            for region in selected_regions:
                # Categorize medicine
                category = self.categorize_medicine(medicine['sub_category'], medicine['product_name'])
                
                # Get regional availability probability
                base_probability = self.regional_patterns[region][category]
                
                # Add some randomness
                availability_prob = base_probability + random.uniform(-0.1, 0.1)
                availability_prob = max(0.1, min(0.99, availability_prob))  # Keep between 0.1 and 0.99
                
                # Generate availability
                is_available = random.random() < availability_prob
                
                # Generate additional features
                price = self.extract_price(medicine['product_price'])
                stock_quantity = self.generate_stock_quantity(is_available, category)
                demand_level = self.generate_demand_level(category, region)
                
                # Generate timestamp
                timestamp = self.generate_timestamp()
                
                synthetic_data.append({
                    'medicine_id': idx,
                    'product_name': medicine['product_name'],
                    'sub_category': medicine['sub_category'],
                    'salt_composition': medicine['salt_composition'],
                    'manufacturer': medicine['product_manufactured'],
                    'region': region,
                    'category': category,
                    'price': price,
                    'is_available': int(is_available),
                    'stock_quantity': stock_quantity,
                    'demand_level': demand_level,
                    'timestamp': timestamp,
                    'medicine_desc': medicine['medicine_desc'][:200] + "..." if len(medicine['medicine_desc']) > 200 else medicine['medicine_desc'],
                    'side_effects': medicine['side_effects'][:100] + "..." if len(medicine['side_effects']) > 100 else medicine['side_effects']
                })
        
        return pd.DataFrame(synthetic_data)
    
    def extract_price(self, price_str):
        """Extract numeric price from string"""
        if pd.isna(price_str):
            return random.uniform(50, 500)
        
        try:
            # Remove currency symbols and extract number
            price_clean = str(price_str).replace('₹', '').replace(',', '').strip()
            return float(price_clean)
        except:
            return random.uniform(50, 500)
    
    def generate_stock_quantity(self, is_available, category):
        """Generate stock quantity based on availability and category"""
        if not is_available:
            return 0
        
        # Different stock levels for different categories
        base_stock = {
            "diabetes": random.randint(50, 200),
            "cardiac": random.randint(30, 150),
            "respiratory": random.randint(40, 180),
            "general": random.randint(20, 100)
        }
        
        return base_stock.get(category, random.randint(20, 100))
    
    def generate_demand_level(self, category, region):
        """Generate demand level based on category and region"""
        # Base demand by category
        category_demand = {
            "diabetes": 0.8,
            "cardiac": 0.7,
            "respiratory": 0.6,
            "general": 0.5
        }
        
        # Regional multiplier
        regional_multiplier = {
            "Delhi NCR": 1.2,
            "Mumbai": 1.1,
            "Bangalore": 1.0,
            "Chennai": 0.9,
            "Kolkata": 0.8,
            "Hyderabad": 0.9,
            "Pune": 0.8,
            "Ahmedabad": 0.7,
            "Jaipur": 0.6
        }
        
        base_demand = category_demand.get(category, 0.5)
        multiplier = regional_multiplier.get(region, 0.8)
        
        demand = base_demand * multiplier + random.uniform(-0.2, 0.2)
        return max(0.1, min(1.0, demand))
    
    def generate_timestamp(self):
        """Generate random timestamp within last 6 months"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=180)
        
        random_days = random.randint(0, 180)
        random_date = start_date + timedelta(days=random_days)
        
        return random_date.strftime("%Y-%m-%d %H:%M:%S")
    
    def add_feature_engineering(self, df):
        """Add engineered features for better model performance"""
        print("Adding feature engineering...")
        
        # Price categories
        df['price_category'] = pd.cut(df['price'], 
                                    bins=[0, 100, 200, 300, 500, float('inf')], 
                                    labels=['Very Low', 'Low', 'Medium', 'High', 'Very High'])
        
        # Stock categories
        df['stock_category'] = pd.cut(df['stock_quantity'], 
                                    bins=[-1, 0, 20, 50, 100, float('inf')], 
                                    labels=['Out of Stock', 'Low Stock', 'Medium Stock', 'High Stock', 'Very High Stock'])
        
        # Demand categories
        df['demand_category'] = pd.cut(df['demand_level'], 
                                     bins=[0, 0.3, 0.5, 0.7, 0.9, 1.0], 
                                     labels=['Very Low', 'Low', 'Medium', 'High', 'Very High'])
        
        # Regional development level (simplified)
        development_level = {
            "Delhi NCR": "Tier 1", "Mumbai": "Tier 1", "Bangalore": "Tier 1",
            "Chennai": "Tier 1", "Hyderabad": "Tier 1", "Pune": "Tier 2",
            "Kolkata": "Tier 2", "Ahmedabad": "Tier 2", "Jaipur": "Tier 2",
            "North India": "Tier 3", "South India": "Tier 3", "East India": "Tier 3",
            "West India": "Tier 3", "Central India": "Tier 3", "Northeast India": "Tier 3"
        }
        
        df['development_level'] = df['region'].map(development_level)
        
        # Medicine name length (complexity indicator)
        df['name_length'] = df['product_name'].str.len()
        
        # Manufacturer type (simplified)
        df['manufacturer_type'] = df['manufacturer'].apply(
            lambda x: 'International' if any(word in x.lower() for word in ['ltd', 'pvt', 'pharma']) 
                     else 'Local' if any(word in x.lower() for word in ['india', 'indian']) 
                     else 'Other'
        )
        
        return df
    
    def save_synthetic_data(self, df, filename="medicine_availability_synthetic.csv"):
        """Save synthetic data to CSV"""
        print(f"Saving synthetic data to {filename}...")
        df.to_csv(filename, index=False)
        print(f"Saved {len(df)} records to {filename}")
        return filename

def main():
    """Main function to generate synthetic dataset"""
    print("="*60)
    print("MEDICINE AVAILABILITY SYNTHETIC DATASET GENERATOR")
    print("="*60)
    
    # Initialize generator
    generator = MedicineAvailabilityGenerator()
    
    # Load medicine data
    generator.load_medicine_data()
    
    # Generate synthetic data
    synthetic_df = generator.generate_availability_data(num_samples=50000)
    
    # Add feature engineering
    synthetic_df = generator.add_feature_engineering(synthetic_df)
    
    # Save data
    filename = generator.save_synthetic_data(synthetic_df)
    
    # Display summary
    print("\n" + "="*60)
    print("SYNTHETIC DATASET SUMMARY")
    print("="*60)
    print(f"Total records: {len(synthetic_df)}")
    print(f"Unique medicines: {synthetic_df['product_name'].nunique()}")
    print(f"Unique regions: {synthetic_df['region'].nunique()}")
    print(f"Availability rate: {synthetic_df['is_available'].mean():.2%}")
    print(f"Columns: {list(synthetic_df.columns)}")
    
    # Show sample data
    print("\nSample data:")
    print(synthetic_df.head().to_string())
    
    print("\n" + "="*60)
    print("SYNTHETIC DATASET GENERATION COMPLETED!")
    print("="*60)

if __name__ == "__main__":
    main()
