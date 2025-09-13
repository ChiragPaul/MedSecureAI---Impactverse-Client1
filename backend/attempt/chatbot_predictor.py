import os
import sys
import joblib
import datetime
import traceback
import pandas as pd
import re
from typing import List, Tuple, Optional

# Ensure imports work when running from project root or this folder
def _ensure_import_path():
	current_dir = os.path.dirname(os.path.abspath(__file__))
	if current_dir not in sys.path:
		sys.path.insert(0, current_dir)

_ensure_import_path()

try:
	from realistic_medicine_availability_model import RealisticMedicineAvailabilityPredictor
except Exception:
	print("Error: Unable to import 'RealisticMedicineAvailabilityPredictor' from 'realistic_medicine_availability_model.py'.")
	print("Please ensure the file exists under 'attempt/realistic_medicine_availability_model.py'.")
	raise


# Use environment variable if set, otherwise use default path
MODELS_DIR = os.environ.get('MODELS_DIR', os.path.join(os.path.dirname(os.path.abspath(__file__)), "models"))
NOTIFY_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "notifications")
NOTIFY_LOG = os.path.join(NOTIFY_DIR, "authority_alerts.log")

# Preferred regions shown to the user (aligned with training data assumptions)
REGIONS = [
	"Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune",
	"Kolkata", "Ahmedabad", "Jaipur"
]


# --- Dataset-aware gating to prevent predicting availability for unknown medicines ---

def _normalize_name(text: str) -> str:
	text = str(text).lower()
	text = re.sub(r"[^a-z0-9\s]", "", text)
	return re.sub(r"\s+", " ", text).strip()


def _tokenize(text: str) -> List[str]:
	return _normalize_name(text).split()


def _edit_distance(a: str, b: str) -> int:
	# Classic Levenshtein distance (iterative, O(len(a) * len(b)))
	a = _normalize_name(a)
	b = _normalize_name(b)
	if a == b:
		return 0
	if len(a) == 0:
		return len(b)
	if len(b) == 0:
		return len(a)
	prev = list(range(len(b) + 1))
	for i, ca in enumerate(a, start=1):
		curr = [i]
		for j, cb in enumerate(b, start=1):
			cost = 0 if ca == cb else 1
			curr.append(min(
				prev[j] + 1,      # deletion
				curr[j - 1] + 1,  # insertion
				prev[j - 1] + cost  # substitution
			))
		prev = curr
	return prev[-1]


def _similarity_score(query: str, candidate: str) -> float:
	# Combine token overlap Jaccard and normalized edit distance into a single score [0,1]
	q_tokens = set(_tokenize(query))
	c_tokens = set(_tokenize(candidate))
	if q_tokens or c_tokens:
		intersection = len(q_tokens & c_tokens)
		union = len(q_tokens | c_tokens)
		jaccard = intersection / union if union > 0 else 0.0
	else:
		jaccard = 0.0
	ed = _edit_distance(query, candidate)
	max_len = max(len(_normalize_name(query)), len(_normalize_name(candidate)))
	norm_ed = 1.0 - (ed / max_len) if max_len > 0 else 0.0
	# Weighted blend: favor token match slightly
	return 0.6 * jaccard + 0.4 * norm_ed


def _candidate_dataset_paths():
	root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
	yield os.path.join(root, "attempt", "medicine_availability_synthetic.csv")
	# Fallback to absolute path used in trainer
	yield "C:/Users/CHIRAG PAUL/Desktop/Project/medical ai/attempt/medicine_availability_synthetic.csv"


# --- Dataset upgrader: ensure stockist column exists ---

def _generate_stockist_name(row: pd.Series) -> str:
	# Deterministic pseudo-random pick based on product/manufacturer/region
	candidates_by_region = {
		"Delhi NCR": ["Apollo Pharmacy", "PharmEasy Hub Delhi", "CityCare Chemists"],
		"Mumbai": ["Wellness Forever", "MedPlus Mumbai", "Local Chemist A"],
		"Bangalore": ["MedLife Koramangala", "1mg Stores", "Guardian Pharmacy"],
		"Chennai": ["Apollo Chennai", "Pharmacy Point", "Local Chemist B"],
		"Hyderabad": ["MedPlus Hyderabad", "NetMeds Store", "HealthKart Pharmacy"],
		"Pune": ["PharmEasy Pune", "Apollo Pune", "Local Chemist C"],
		"Kolkata": ["Dawakhana Kolkata", "Apollo Kolkata", "Local Chemist D"],
		"Ahmedabad": ["MedPlus Ahmedabad", "Apollo Ahmedabad", "Local Chemist E"],
		"Jaipur": ["Jaipur Meds", "CityCare Jaipur", "Local Chemist F"],
		"North India": ["Regional Meds North", "HealthFirst North", "Local Chemist N"],
		"South India": ["Regional Meds South", "HealthFirst South", "Local Chemist S"],
		"East India": ["Regional Meds East", "HealthFirst East", "Local Chemist E"],
		"West India": ["Regional Meds West", "HealthFirst West", "Local Chemist W"],
		"Central India": ["Regional Meds Central", "HealthFirst Central", "Local Chemist C"],
		"Northeast India": ["Regional Meds NE", "HealthFirst NE", "Local Chemist NE"],
	}
	region = str(row.get("region", "")).strip()
	pool = candidates_by_region.get(region, ["Apollo Pharmacy", "PharmEasy", "Local Chemist"])
	seed_str = f"{row.get('product_name','')}|{row.get('manufacturer','')}|{region}"
	seed = abs(hash(_normalize_name(seed_str)))
	return pool[seed % len(pool)]


def ensure_stockist_column() -> Optional[str]:
	"""Ensure the dataset has a 'stockist_name' column; if not, add and persist it.
	Returns the path updated or None if not updated.
	"""
	for path in _candidate_dataset_paths():
		if os.path.exists(path):
			try:
				df = pd.read_csv(path)
				if "stockist_name" not in df.columns:
					print("Adding 'stockist_name' column to dataset...")
					# Fill from region-aware generator
					if "region" not in df.columns:
						df["region"] = "Unknown"
					df["stockist_name"] = df.apply(_generate_stockist_name, axis=1)
					df.to_csv(path, index=False)
					print(f"Dataset updated with stockist_name at: {path}")
					return path
			except Exception as e:
				print(f"Warning: Could not update dataset at {path}: {e}")
	return None


class KnownMedicineIndex:
	def __init__(self, names_norm: List[str], names_raw: List[str], salts_norm: List[str], salts_raw: List[str], stockists_raw: List[str]):
		self.names_norm = names_norm
		self.names_raw = names_raw
		self.salts_norm = salts_norm
		self.salts_raw = salts_raw
		self.stockists_raw = stockists_raw  # aligned by row with names_raw/salts_raw

	def find_matches(self, query: str, limit: int = 10) -> Tuple[List[Tuple[str, float, str]], List[Tuple[str, float, str]]]:
		q = _normalize_name(query)
		if not q:
			return [], []
		name_hits: List[Tuple[str, float, str]] = []
		salt_hits: List[Tuple[str, float, str]] = []

		# Score by fuzzy similarity for names and compositions; carry stockist by row index
		for idx, (norm, raw) in enumerate(zip(self.names_norm, self.names_raw)):
			s = _similarity_score(q, norm)
			if s > 0:
				stockist = self.stockists_raw[idx] if idx < len(self.stockists_raw) else ""
				name_hits.append((raw, s, stockist))
		for idx, (norm, raw) in enumerate(zip(self.salts_norm, self.salts_raw)):
			s = _similarity_score(q, norm)
			if s > 0:
				stockist = self.stockists_raw[idx] if idx < len(self.stockists_raw) else ""
				salt_hits.append((raw, s, stockist))

		# Sort descending by score and take top-N
		name_hits.sort(key=lambda x: x[1], reverse=True)
		salt_hits.sort(key=lambda x: x[1], reverse=True)
		return name_hits[:limit], salt_hits[:limit]

	@property
	def is_loaded(self) -> bool:
		return len(self.names_norm) > 0 or len(self.salts_norm) > 0


def load_known_medicines() -> KnownMedicineIndex:
	# Ensure dataset upgraded with stockist
	ensure_stockist_column()

	names_norm: List[str] = []
	names_raw: List[str] = []
	salts_norm: List[str] = []
	salts_raw: List[str] = []
	stockists_raw: List[str] = []
	for path in _candidate_dataset_paths():
		if os.path.exists(path):
			try:
				df = pd.read_csv(path)
				if "product_name" in df.columns:
					raw = df["product_name"].dropna().astype(str).tolist()
					names_raw = raw
					names_norm = [_normalize_name(v) for v in raw]
				if "salt_composition" in df.columns:
					raw_s = df["salt_composition"].dropna().astype(str).tolist()
					salts_raw = raw_s
					salts_norm = [_normalize_name(v) for v in raw_s]
				if "stockist_name" in df.columns:
					stockists_raw = df["stockist_name"].fillna("").astype(str).tolist()
				break
			except Exception:
				continue
	return KnownMedicineIndex(names_norm, names_raw, salts_norm, salts_raw, stockists_raw)


def load_saved_predictor() -> RealisticMedicineAvailabilityPredictor:
	"""Load saved artifacts and reconstruct predictor for inference only."""
	if not os.path.isdir(MODELS_DIR):
		raise FileNotFoundError(f"Models directory not found: {MODELS_DIR}")

	# Load model info to locate best model
	model_info_path = os.path.join(MODELS_DIR, "model_info.pkl")
	encoders_path = os.path.join(MODELS_DIR, "encoders.pkl")
	scalers_path = os.path.join(MODELS_DIR, "scalers.pkl")
	vectorizers_path = os.path.join(MODELS_DIR, "vectorizers.pkl")
	feature_names_path = os.path.join(MODELS_DIR, "feature_names.pkl")

	if not os.path.exists(model_info_path):
		raise FileNotFoundError("Saved model info not found. Please run the trainer to generate artifacts.")

	model_info = joblib.load(model_info_path)
	best_model_name = model_info.get("best_model")
	if not best_model_name:
		raise RuntimeError("Best model name not present in model info.")

	# Identify model file name - try both realistic and direct naming
	model_file = f"realistic_{best_model_name.lower().replace(' ', '_')}_model.pkl"
	model_path = os.path.join(MODELS_DIR, model_file)
	
	# If realistic model doesn't exist, try direct naming
	if not os.path.exists(model_path):
		model_file = f"{best_model_name.lower().replace(' ', '_')}_model.pkl"
		model_path = os.path.join(MODELS_DIR, model_file)
	if not os.path.exists(model_path):
		raise FileNotFoundError(f"Best model file not found: {model_path}")

	# Instantiate predictor and load components
	predictor = RealisticMedicineAvailabilityPredictor()
	predictor.encoders = joblib.load(encoders_path) if os.path.exists(encoders_path) else {}
	predictor.scalers = joblib.load(scalers_path) if os.path.exists(scalers_path) else {}
	predictor.vectorizers = joblib.load(vectorizers_path) if os.path.exists(vectorizers_path) else {}

	# feature names are saved via pickle by the trainer
	import pickle
	with open(feature_names_path, "rb") as f:
		predictor.feature_names = pickle.load(f)

	# Load and register the best model
	best_model = joblib.load(model_path)
	predictor.models = {best_model_name: {"model": best_model}}
	predictor.best_model = best_model
	predictor.best_model_name = best_model_name
	return predictor


def notify_authorities(medicine_name: str, region: str, probability: float, stockist_name: str = "") -> None:
	"""Log an alert to notify authorities when medicine is unavailable."""
	os.makedirs(NOTIFY_DIR, exist_ok=True)
	timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
	message = (
		f"[{timestamp}] ALERT: Medicine unavailable\n"
		f"  - Medicine: {medicine_name}\n"
		f"  - Region: {region}\n"
		f"  - Stockist: {stockist_name}\n"
		f"  - Predicted availability probability: {probability:.4f}\n"
	)
	with open(NOTIFY_LOG, "a", encoding="utf-8") as f:
		f.write(message + "\n")


def ask_input(prompt: str) -> str:
	try:
		return input(prompt).strip()
	except EOFError:
		return "quit"
	except KeyboardInterrupt:
		print("\nExiting...")
		sys.exit(0)


def choose_region() -> str:
	print("\nAvailable regions:")
	for idx, region in enumerate(REGIONS, start=1):
		print(f" {idx:2d}. {region}")
	while True:
		choice = ask_input("Enter region number (1-15) or type name: ")
		if not choice:
			print("Please enter a region.")
			continue
		# Numeric choice
		if choice.isdigit():
			idx = int(choice) - 1
			if 0 <= idx < len(REGIONS):
				return REGIONS[idx]
			else:
				print("Invalid number. Try again.")
				continue
		# Text match (case-insensitive)
		for region in REGIONS:
			if region.lower() == choice.lower():
				return region
		print("Unknown region. Please pick a number from the list or type an exact name.")


def _probability_band(prob: float) -> str:
	if prob >= 0.80:
		return "High"
	elif prob >= 0.60:
		return "Medium"
	elif prob >= 0.35:
		return "Low"
	else:
		return "Very Low"


def _choose_from_matches(name_hits: List[Tuple[str, float, str]], salt_hits: List[Tuple[str, float, str]] , top_n: int = 5) -> Optional[Tuple[str, str]]:
	# Display combined list with labels and ask user to choose; returns (medicine_or_composition, stockist)
	combined: List[Tuple[str, float, str, str]] = []
	for raw, score, stockist in name_hits[:top_n]:
		combined.append((raw, score, "Name", stockist))
	for raw, score, stockist in salt_hits[:top_n]:
		combined.append((raw, score, "Composition", stockist))
	# Sort by score desc and take top_n overall
	combined.sort(key=lambda x: x[1], reverse=True)
	combined = combined[:top_n]
	if not combined:
		return None
	print("\nTop candidates:")
	for i, (raw, score, label, stockist) in enumerate(combined, start=1):
		stockist_str = f" | Stockist: {stockist}" if stockist else ""
		print(f" {i}. [{label}] {raw}{stockist_str}  (score: {score:.2f})")
	print("  0. None of these")
	while True:
		choice = ask_input("Select the best match (0-" + str(len(combined)) + "): ")
		if choice.isdigit():
			idx = int(choice)
			if idx == 0:
				return None
			if 1 <= idx <= len(combined):
				picked = combined[idx - 1]
				return picked[0], picked[3]
		print("Invalid choice. Try again.")


def run_chatbot() -> None:
	print("=" * 80)
	print("REALISTIC MEDICINE AVAILABILITY CHATBOT")
	print("=" * 80)
	print("This chatbot uses the trained realistic model and provides practical predictions.")

	try:
		predictor = load_saved_predictor()
		print(f"Loaded best model: {predictor.best_model_name}")
	except Exception as e:
		print("Failed to load saved model artifacts.")
		print(str(e))
		print("Please run the trainer first: 'attempt/realistic_medicine_availability_model.py'.")
		return

	# Load known medicines from the training dataset and gate predictions (ensures stockist present)
	index = load_known_medicines()
	if index.is_loaded:
		print(f"Loaded known medicine names and compositions (names: {len(index.names_norm)}, compositions: {len(index.salts_norm)}).")
	else:
		print("Warning: Could not load known medicines list. Unknown-name gating will be disabled.")

	while True:
		print("\nType 'quit' at any time to exit.")
		medicine_name = ask_input("Enter medicine name (or salt/composition): ")
		if not medicine_name:
			print("Please enter a valid medicine name.")
			continue
		if medicine_name.lower() == "quit":
			break

		region = choose_region()
		if region.lower() == "quit":
			break

		selected_for_prediction: Optional[str] = medicine_name
		selected_stockist: str = ""

		# Dataset-aware fuzzy gating across names and compositions
		if index.is_loaded:
			name_hits, salt_hits = index.find_matches(medicine_name, limit=10)
			# If no hits at all → Not Available
			if not name_hits and not salt_hits:
				prob = 0.0
				print("\n" + "-" * 60)
				print("PREDICTION RESULT")
				print("-" * 60)
				print(f"Query: {medicine_name}")
				print(f"Region: {region}")
				print("Model Used: Dataset Gate")
				print(f"Estimated Availability Probability: {prob:.4f}")
				print("Status: NOT AVAILABLE ❌")
				print("Reason: No matching medicine name or salt composition found in dataset.")
				notify_authorities(medicine_name, region, prob, stockist_name=selected_stockist)
				print(f"Notification logged to: {NOTIFY_LOG}")
				continue
			# Offer interactive selection from top candidates (with stockist)
			picked = _choose_from_matches(name_hits, salt_hits, top_n=5)
			if picked is None:
				prob = 0.0
				print("\n" + "-" * 60)
				print("PREDICTION RESULT")
				print("-" * 60)
				print(f"Query: {medicine_name}")
				print(f"Region: {region}")
				print("Model Used: Dataset Gate")
				print(f"Estimated Availability Probability: {prob:.4f}")
				print("Status: NOT AVAILABLE ❌")
				print("Reason: You did not select any known medicine/composition.")
				notify_authorities(medicine_name, region, prob, stockist_name=selected_stockist)
				print(f"Notification logged to: {NOTIFY_LOG}")
				continue
			selected_for_prediction, selected_stockist = picked

		try:
			# Use the selected candidate (best match) to run prediction
			result = predictor.predict_availability(selected_for_prediction, region)
			ais_available = bool(result.get("is_available", False))
			prob = float(result.get("probability", 0.0))
			band = _probability_band(prob)

			print("\n" + "-" * 60)
			print("PREDICTION RESULT")
			print("-" * 60)
			print(f"Query: {medicine_name}")
			print(f"Selected Candidate: {selected_for_prediction}")
			if selected_stockist:
				print(f"Preferred Stockist: {selected_stockist}")
			print(f"Region: {result.get('region', region)}")
			print(f"Model Used: {result.get('model_used', predictor.best_model_name)}")
			print(f"Estimated Availability Probability: {prob:.4f} ({band} confidence)")

			# Messaging logic
			if ais_available and prob >= 0.60:
				print("Status: AVAILABLE ✅")
			elif ais_available and 0.35 <= prob < 0.60:
				print("Status: AVAILABLE (LESS PROBABLE TO GET) ⚠️")
				print("Advice: Consider alternatives or check multiple pharmacies.")
			elif not ais_available and 0.35 <= prob < 0.60:
				print("Status: NOT AVAILABLE (LESS PROBABLE TO GET) ⚠️")
				print("Action: We will notify the concerned authorities about this potential shortage.")
				notify_authorities(selected_for_prediction, region, prob, stockist_name=selected_stockist)
				print(f"Notification logged to: {NOTIFY_LOG}")
			else:
				print("Status: NOT AVAILABLE ❌")
				print("Action: We will notify the concerned authorities about this shortage.")
				notify_authorities(selected_for_prediction, region, prob, stockist_name=selected_stockist)
				print(f"Notification logged to: {NOTIFY_LOG}")

		except KeyboardInterrupt:
			print("\nExiting...")
			break
		except Exception:
			print("An unexpected error occurred while predicting. Details:")
			print(traceback.format_exc())
			continue

	print("\n" + "=" * 80)
	print("Thank you for using the Realistic Medicine Availability Chatbot!")
	print("=" * 80)


if __name__ == "__main__":
	run_chatbot()
