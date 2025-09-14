# MedSecure AI

MedSecure AI is a smart medicine management system designed to improve rural healthcare by accurately forecasting medicine demand and transparently tracking supply. The platform ensures essential medicines are available when and where they are needed, helping healthcare providers and patients manage medicine availability efficiently.

---

## Features

- AI-powered chatbot for medicine availability queries
- User authentication (signup and login)
- Search for medicines and stockists by region
- Predict medicine availability using machine learning models
- Place orders for medicines through the platform
- Region-based stockist data management
- Responsive and user-friendly frontend built with Next.js and Tailwind CSS

---

## Tech Stack

### Backend

- Python 3.x
- FastAPI - Web framework for building APIs
- Pydantic - Data validation and settings management
- Pandas, NumPy - Data processing
- Scikit-learn, XGBoost, LightGBM - Machine learning models for prediction
- Uvicorn - ASGI server for running FastAPI app

### Frontend

- React 18 with Next.js 13 (App Router)
- Tailwind CSS - Utility-first CSS framework
- Axios - HTTP client for API requests
- Recharts - Charting library for data visualization

---

## Installation and Setup

### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:

   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On Unix or MacOS
   source venv/bin/activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the FastAPI server:
   ```bash
   uvicorn app:app --reload --port 5000
   ```

### Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

---

## Usage

### Backend API Endpoints

- `POST /api/auth/signup` - User signup
- `POST /api/auth/login` - User login
- `GET /regions` - Get list of supported regions
- `GET /stockists/{region}` - Get stockists in a specific region
- `GET /stockists` - Get stockists for all regions
- `POST /chat` - Chat with AI assistant for medicine queries
- `POST /medicine/search` - Search medicines by name and region
- `POST /medicine/predict` - Predict medicine availability
- `POST /order` - Place an order for medicine
- `GET /health` - Health check endpoint

### Frontend

- Home page with introduction and navigation
- User authentication pages (login, signup)
- AI chat interface for medicine availability queries
- Dashboard and stockist information pages
- Contact and suggestion forms

---

## Project Structure

```
MedSecureAI---Impactverse-Client1/
├── backend/
│   ├── app.py                  # FastAPI application and API endpoints
│   ├── requirements.txt        # Backend dependencies
│   ├── stockist_data.json      # Stockist data by region
│   ├── attempt/                # Machine learning models and prediction logic
│   └── log-back/               # Authentication backend files
├── frontend/
│   ├── app/                    # Next.js app directory with pages and components
│   ├── components/             # Reusable React components
│   ├── public/                 # Static assets like images and icons
│   ├── package.json            # Frontend dependencies and scripts
│   ├── next.config.mjs         # Next.js configuration
│   └── globals.css             # Global styles
└── README.md                   # Project overview and instructions
```

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or support, please contact the project maintainer.
