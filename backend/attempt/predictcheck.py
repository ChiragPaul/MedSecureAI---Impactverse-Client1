import os
import sys
import json
import joblib
import pickle
import warnings
import pandas as pd
import numpy as np

warnings.filterwarnings('ignore')


class RealisticAvailabilityCLI:
    """CLI to load saved realistic models and predict availability with user input."""

    def __init__(self, models_dir: str = "models"):
        self.models_dir = models_dir
        self.model_info = None
        self.feature_names = None
        self.encoders = None
        self.scalers = None
        self.vectorizers = None
        self.available_models = []
        self.best_model_name = None
        self._load_artifacts()

    def _load_artifacts(self) -> None:
        """Load model info, feature names, encoders, scaler, and vectorizers."""
        info_path = os.path.join(self.models_dir, 'realistic_model_info.pkl')
        feat_path = os.path.join(self.models_dir, 'realistic_feature_names.pkl')
        enc_path = os.path.join(self.models_dir, 'realistic_encoders.pkl')
        sca_path = os.path.join(self.models_dir, 'realistic_scalers.pkl')
        vec_path = os.path.join(self.models_dir, 'realistic_vectorizers.pkl')

        if not os.path.exists(info_path):
            raise FileNotFoundError(f"Missing artifacts. Not found: {info_path}")

        self.model_info = joblib.load(info_path)
        with open(feat_path, 'rb') as f:
            self.feature_names = pickle.load(f)
        self.encoders = joblib.load(enc_path)
        self.scalers = joblib.load(sca_path)
        self.vectorizers = joblib.load(vec_path)

        self.available_models = sorted(list(self.model_info['results'].keys()))
        self.best_model_name = self.model_info.get('best_model')

    @staticmethod
    def _clean_text(s: str) -> str:
        return pd.Series([s]).astype(str).str.lower().str.replace('[^a-z0-9\s]', '', regex=True).iloc[0]

    def _derive_price_category(self, price: float) -> str:
        if price < 100: return 'Very Low'
        if price < 200: return 'Low'
        if price < 300: return 'Medium'
        if price < 500: return 'High'
        return 'Very High'

    def _derive_demand_category(self, demand: float) -> str:
        if demand < 0.3: return 'Very Low'
        if demand < 0.5: return 'Low'
        if demand < 0.7: return 'Medium'
        if demand < 0.9: return 'High'
        return 'Very High'

    def _derive_development_level(self, region: str) -> str:
        mapping = {
            "Delhi NCR": "Tier 1", "Mumbai": "Tier 1", "Bangalore": "Tier 1",
            "Chennai": "Tier 1", "Hyderabad": "Tier 1", "Pune": "Tier 2",
            "Kolkata": "Tier 2", "Ahmedabad": "Tier 2", "Jaipur": "Tier 2",
            "North India": "Tier 3", "South India": "Tier 3", "East India": "Tier 3",
            "West India": "Tier 3", "Central India": "Tier 3", "Northeast India": "Tier 3"
        }
        return mapping.get(region, 'Tier 3')

    def _encode_categorical(self, df_cat: pd.DataFrame) -> pd.DataFrame:
        encoded = df_cat.copy()
        for col, le in self.encoders.items():
            if col not in encoded.columns:
                # if missing, create with Unknown
                encoded[col] = 'Unknown'
            value = str(encoded[col].iloc[0])
            try:
                encoded[col] = le.transform([value])[0]
            except Exception:
                # unseen -> map to first known class index 0
                encoded[col] = 0
        return encoded

    def _vectorize_text(self, df_text: pd.DataFrame) -> pd.DataFrame:
        frames = []
        for col, tfidf in self.vectorizers.items():
            series = df_text[col].fillna('') if col in df_text.columns else pd.Series([''])
            mat = tfidf.transform(series)
            frame = pd.DataFrame(
                mat.toarray(),
                columns=[f"{col}_tfidf_{i}" for i in range(mat.shape[1])]
            )
            frames.append(frame)
        return pd.concat(frames, axis=1) if frames else pd.DataFrame()

    def _build_features(self, user: dict) -> pd.DataFrame:
        # Build a single-row DataFrame with required raw fields
        base = {
            'product_name': [user['product_name']],
            'salt_composition': [user.get('salt_composition', 'Unknown')],
            'manufacturer': [user.get('manufacturer', 'Unknown')],
            'region': [user['region']],
            'category': [user.get('category', 'general')],
            'sub_category': [user.get('sub_category', 'Unknown')],
            'price': [float(user.get('price', 100.0))],
            'demand_level': [float(user.get('demand_level', 0.5))],
        }

        df = pd.DataFrame(base)

        # Clean texts
        df['medicine_name_clean'] = self._clean_text(df['product_name'].iloc[0])
        df['salt_clean'] = self._clean_text(df['salt_composition'].iloc[0])
        df['manufacturer_clean'] = self._clean_text(df['manufacturer'].iloc[0])

        # Engineered non-leaky numerical features
        df['has_price'] = (~pd.Series([np.nan]).isna()).astype(int).iloc[0]
        df['name_length'] = len(df['product_name'].iloc[0])
        df['price_demand_ratio'] = df['price'] / (df['demand_level'] + 0.1)

        # Categorical helpers
        df['price_category'] = self._derive_price_category(df['price'].iloc[0])
        df['demand_category'] = self._derive_demand_category(df['demand_level'].iloc[0])
        df['development_level'] = self._derive_development_level(df['region'].iloc[0])

        # Manufacturer type (simple heuristic)
        manuf = df['manufacturer'].astype(str).str.lower().iloc[0]
        if any(w in manuf for w in ['ltd', 'pvt', 'pharma', 'labs']):
            df['manufacturer_type'] = 'International'
        elif any(w in manuf for w in ['india', 'indian']):
            df['manufacturer_type'] = 'Local'
        else:
            df['manufacturer_type'] = 'Other'

        # Stock category must exist because training included it (categorical only)
        df['stock_category'] = user.get('stock_category', 'Medium Stock')

        # Column groups (must match training script semantics)
        categorical_cols = [
            'sub_category', 'region', 'category', 'price_category',
            'stock_category', 'demand_category', 'development_level', 'manufacturer_type'
        ]
        numerical_cols = ['price', 'demand_level', 'name_length', 'has_price', 'price_demand_ratio']
        text_cols = ['medicine_name_clean', 'salt_clean', 'manufacturer_clean']

        X_cat = self._encode_categorical(df[categorical_cols])
        scaler = self.scalers.get('numerical')
        X_num_scaled = pd.DataFrame(
            scaler.transform(df[numerical_cols]),
            columns=numerical_cols
        )
        X_text = self._vectorize_text(df[text_cols])

        X = pd.concat([X_cat.reset_index(drop=True), X_num_scaled.reset_index(drop=True), X_text.reset_index(drop=True)], axis=1)

        # Ensure all expected features exist and order matches
        for feat in self.feature_names:
            if feat not in X.columns:
                X[feat] = 0
        X = X[self.feature_names]
        return X

    def _load_model(self, model_name: str):
        filename = f"realistic_{model_name.lower().replace(' ', '_')}_model.pkl"
        path = os.path.join(self.models_dir, filename)
        if not os.path.exists(path):
            raise FileNotFoundError(f"Model file not found for '{model_name}': {path}")
        return joblib.load(path)

    def predict(self, user: dict, model_choice: str) -> dict:
        if model_choice.lower() == 'best':
            model_name = self.best_model_name
        else:
            model_name = model_choice
        if model_name not in self.available_models:
            raise ValueError(f"Unknown model '{model_name}'. Choose from: {self.available_models} or 'best'.")

        X = self._build_features(user)
        model = self._load_model(model_name)
        y_pred = model.predict(X)[0]
        proba = None
        if hasattr(model, 'predict_proba'):
            proba = float(model.predict_proba(X)[0][1])
        else:
            proba = float(getattr(model, 'decision_function', lambda x: np.array([0.0]))(X))

        return {
            'model_used': model_name,
            'is_available': bool(y_pred),
            'probability': float(proba)
        }

    def interactive(self) -> None:
        print("\n" + "="*70)
        print("REALISTIC MEDICINE AVAILABILITY - PREDICT FROM SAVED MODELS")
        print("="*70)
        print(f"Available models: {', '.join(self.available_models)}")
        print(f"Best model: {self.best_model_name}")

        while True:
            try:
                name = input("\nEnter medicine name (or 'quit'): ").strip()
                if not name or name.lower() == 'quit':
                    break
                region = input("Enter region (e.g., Delhi NCR): ").strip() or 'Delhi NCR'
                category = input("Enter category (default 'general'): ").strip() or 'general'
                sub_category = input("Enter sub-category (optional): ").strip() or 'Unknown'
                manufacturer = input("Enter manufacturer (optional): ").strip() or 'Unknown'
                salt = input("Enter salt composition (optional): ").strip() or 'Unknown'
                stock_category = input("Enter stock category [Out of Stock/Low Stock/Medium Stock/High Stock/Very High Stock] (default 'Medium Stock'): ").strip() or 'Medium Stock'
                price_str = input("Enter price (default 100): ").strip() or '100'
                demand_str = input("Enter demand level 0-1 (default 0.5): ").strip() or '0.5'
                try:
                    price = float(price_str)
                except Exception:
                    price = 100.0
                try:
                    demand = float(demand_str)
                    demand = max(0.0, min(1.0, demand))
                except Exception:
                    demand = 0.5

                # Model choice
                print("\nSelect model: 'best' or one of:")
                for idx, m in enumerate(self.available_models, 1):
                    print(f"  {idx}. {m}")
                mc = input("Choice (number/name, default 'best'): ").strip() or 'best'
                if mc.isdigit():
                    i = int(mc) - 1
                    model_choice = self.available_models[i] if 0 <= i < len(self.available_models) else 'best'
                else:
                    model_choice = mc

                user = {
                    'product_name': name,
                    'region': region,
                    'category': category,
                    'sub_category': sub_category,
                    'manufacturer': manufacturer,
                    'salt_composition': salt,
                    'stock_category': stock_category,
                    'price': price,
                    'demand_level': demand,
                }

                result = self.predict(user, model_choice)
                print("\n" + "-"*50)
                print(f"Model Used   : {result['model_used']}")
                print(f"Medicine     : {name}")
                print(f"Region       : {region}")
                print(f"Available    : {'YES' if result['is_available'] else 'NO'}")
                print(f"Probability  : {result['probability']:.4f}")
                print("-"*50)
            except KeyboardInterrupt:
                print("\nExiting...")
                break
            except Exception as e:
                print(f"Error: {e}")


def main() -> None:
    cli = RealisticAvailabilityCLI(models_dir=os.path.join(os.path.dirname(os.path.dirname(__file__)), 'models'))
    if len(sys.argv) > 1 and sys.argv[1] == '--once':
        # One-shot mode from JSON on stdin
        payload = json.loads(sys.stdin.read())
        model_choice = payload.get('model', 'best')
        result = cli.predict(payload['input'], model_choice)
        print(json.dumps(result))
    else:
        cli.interactive()


if __name__ == '__main__':
    main()


