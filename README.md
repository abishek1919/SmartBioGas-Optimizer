# SmartBioGas Optimizer 🌱⚡

A modern **biogas optimization dashboard** that analyzes digester conditions and predicts methane yield, biogas production, and efficiency.
This project simulates how environmental factors like **temperature, pH, C:N ratio, and retention time** affect biogas generation.

The platform provides **visual analytics and optimization suggestions** to help improve anaerobic digestion efficiency.

---

## 🚀 Project Overview

Biogas production systems often suffer from **low methane yield and inefficient digestion conditions**.
This dashboard helps simulate and analyze digester parameters to estimate **biogas output and optimization recommendations**.

Users can:

* Enter digester parameters
* Analyze predicted methane production
* View efficiency scores
* Receive recommendations for improving gas yield
* Visualize results using analytics charts

---

## 🖥️ Screenshots

### Dashboard Interface

![Dashboard Screenshot](./src/assets/dashboard.png)

### Biogas Prediction Results

![Prediction Screenshot](./src/assets/prediction.png)

### Analytics Charts

![Analytics Screenshot](./src/assets/analytics.png)



---

## ✨ Features

* Biogas production simulation
* Methane yield prediction
* Digester efficiency analysis
* Optimization recommendations
* Interactive charts and visual analytics
* Responsive dashboard interface
* Modern UI with animations

---

## 🧠 How It Works

The application simulates anaerobic digestion using simple rule-based logic.

Optimal conditions used for analysis:

* **Temperature:** ~35°C
* **pH Level:** 6.8 – 7.5
* **C:N Ratio:** 20 – 30

Based on the input parameters, the system calculates:

* Methane yield percentage
* Estimated biogas production
* Efficiency score
* Optimization suggestions

---

## 🛠️ Tech Stack

Frontend

* React (Vite)
* Tailwind CSS

Visualization

* Chart.js

Animations

* Framer Motion

---

## 📂 Project Structure

```
smart-biogas-optimizer
│
├── public
│   └── favicon.svg
│
├── src
│   ├── assets
│   │   └── biogas.svg
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── InputForm.jsx
│   │   ├── PredictionCard.jsx
│   │   ├── RecommendationPanel.jsx
│   │   ├── AnalyticsChart.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages
│   │   └── Dashboard.jsx
│   │
│   ├── utils
│   │   └── biogasCalculator.js
│   │
│   ├── styles
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

Clone the repository

```
git clone https://github.com/yourusername/smart-biogas-optimizer.git
```

Navigate to the project folder

```
cd smart-biogas-optimizer
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

The application will run locally on:

```
http://localhost:5173
```

---

## 🌍 Future Improvements

* IoT sensor integration for real-time digester monitoring
* Machine learning model for methane prediction
* Real-time biogas plant analytics
* Cloud database integration
* Mobile responsive analytics dashboard

---

## 📚 Research Background

This project is inspired by research on **biogas enhancement and anaerobic digestion optimization**, focusing on improving methane yield through better control of digestion parameters.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

Abishek R
Software Developer | IoT Enthusiast | Automation tester
