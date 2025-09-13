"""
Data Explorer for Medicine Data
Examines the structure and content of medicine_data.csv
"""

import pandas as pd
import numpy as np

def explore_medicine_data():
    """Explore the medicine data structure"""
    print("Loading medicine data...")
    
    # Load the data
    df = pd.read_csv('../medicine_data.csv')
    
    print(f"Dataset Shape: {df.shape}")
    print(f"Columns: {df.columns.tolist()}")
    print("\n" + "="*50)
    
    # Basic info
    print("Dataset Info:")
    print(df.info())
    print("\n" + "="*50)
    
    # Missing values
    print("Missing Values:")
    print(df.isnull().sum())
    print("\n" + "="*50)
    
    # Sample data
    print("Sample Data (first 3 rows):")
    print(df.head(3).to_string())
    print("\n" + "="*50)
    
    # Unique values in each column
    print("Unique Values Count:")
    for col in df.columns:
        unique_count = df[col].nunique()
        print(f"{col}: {unique_count} unique values")
    
    print("\n" + "="*50)
    
    # Sample of unique values
    print("Sample Unique Values:")
    for col in df.columns:
        if df[col].dtype == 'object':
            print(f"\n{col} (first 10 unique values):")
            print(df[col].unique()[:10])
    
    return df

if __name__ == "__main__":
    df = explore_medicine_data()
