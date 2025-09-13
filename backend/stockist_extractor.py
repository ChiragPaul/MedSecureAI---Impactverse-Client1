#!/usr/bin/env python3
"""
Stockist Extractor - Reads CSV and creates region-based stockist lists
"""
import pandas as pd
import os
import json
from typing import Dict, List, Set

def extract_stockists_by_region(csv_path: str) -> Dict[str, List[str]]:
    """
    Extract unique stockists for each region from the CSV file
    
    Args:
        csv_path: Path to the medicine availability CSV file
        
    Returns:
        Dictionary with region as key and list of stockists as value
    """
    try:
        # Read the CSV file
        df = pd.read_csv(csv_path)
        
        # Check if required columns exist
        if 'region' not in df.columns or 'stockist_name' not in df.columns:
            raise ValueError("Required columns 'region' and 'stockist_name' not found in CSV")
        
        # Group by region and get unique stockists
        region_stockists = {}
        
        for region in df['region'].unique():
            if pd.isna(region):
                continue
                
            # Get all stockists for this region
            region_data = df[df['region'] == region]
            stockists = region_data['stockist_name'].dropna().unique().tolist()
            
            # Filter out empty strings and sort
            stockists = [s for s in stockists if s and s.strip()]
            stockists.sort()
            
            region_stockists[region] = stockists
        
        return region_stockists
        
    except Exception as e:
        print(f"Error reading CSV file: {e}")
        return {}

def save_stockist_data(stockist_data: Dict[str, List[str]], output_path: str):
    """
    Save stockist data to JSON file
    
    Args:
        stockist_data: Dictionary with region-stockist mapping
        output_path: Path to save the JSON file
    """
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(stockist_data, f, indent=2, ensure_ascii=False)
        print(f"Stockist data saved to: {output_path}")
    except Exception as e:
        print(f"Error saving stockist data: {e}")

def load_stockist_data(json_path: str) -> Dict[str, List[str]]:
    """
    Load stockist data from JSON file
    
    Args:
        json_path: Path to the JSON file
        
    Returns:
        Dictionary with region-stockist mapping
    """
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading stockist data: {e}")
        return {}

def get_stockists_for_region(region: str, stockist_data: Dict[str, List[str]]) -> List[str]:
    """
    Get stockists for a specific region
    
    Args:
        region: Region name
        stockist_data: Dictionary with region-stockist mapping
        
    Returns:
        List of stockists for the region
    """
    return stockist_data.get(region, [])

def main():
    """Main function to extract and save stockist data"""
    # Paths
    csv_path = os.path.join(os.path.dirname(__file__), 'attempt', 'medicine_availability_synthetic.csv')
    output_path = os.path.join(os.path.dirname(__file__), 'stockist_data.json')
    
    print("=" * 60)
    print("Medicine Availability - Stockist Extractor")
    print("=" * 60)
    
    # Check if CSV file exists
    if not os.path.exists(csv_path):
        print(f" CSV file not found: {csv_path}")
        return
    
    print(f" Reading CSV file: {csv_path}")
    
    # Extract stockists by region
    stockist_data = extract_stockists_by_region(csv_path)
    
    if not stockist_data:
        print(" No stockist data extracted")
        return
    
    # Display summary
    print(f"\n Successfully extracted stockist data!")
    print(f"   Total regions: {len(stockist_data)}")
    
    total_stockists = sum(len(stockists) for stockists in stockist_data.values())
    print(f"   Total unique stockists: {total_stockists}")
    
    # Show sample data
    print(f"\n Sample data:")
    for region, stockists in list(stockist_data.items())[:3]:
        print(f"   {region}: {len(stockists)} stockists")
        if stockists:
            print(f"      - {stockists[0]}")
            if len(stockists) > 1:
                print(f"      - {stockists[1]}")
            if len(stockists) > 2:
                print(f"      - ... and {len(stockists) - 2} more")
    
    # Save to JSON
    save_stockist_data(stockist_data, output_path)
    
    print(f"\n🎉 Stockist extraction completed!")
    print(f"   Data saved to: {output_path}")
    print(f"   Ready for backend integration!")

if __name__ == "__main__":
    main()
