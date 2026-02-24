# 🏏 Cricket World Cup Analytics Dashboard

> A full-stack modern analytics dashboard to explore ICC T20 World Cup 2024 match data with interactive charts, filters, and player insights.

<img width="1883" height="445" alt="image" src="https://github.com/user-attachments/assets/b7c3f1ab-0362-4ff3-b9f8-c5cadc39c81f" />


---

## 🌐 Live Demo

* 🚀 Frontend: [click to visit ](https://t20worldcup-2024-analysis.vercel.app/)
* ⚙️ Backend API: https://t20worldcup-2024-analysis-1.onrender.com/

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React, Tailwind CSS, Recharts       |
| Backend    | FastAPI (Python)                    |
| Database   | MongoDB Atlas                       |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

### 📊 Analytics & Visualizations

* Wins vs Losses per Team (Bar Chart)
* Matches Distribution by Stage (Pie Chart)
* Player of the Match Leaderboard

### 🎛️ Interactive Filters

* Filter by Team
* Filter by Venue
* Filter by Match Stage

### 📋 Smart Match Table

* Search across teams, venue & players
* Pagination (10 rows per page)
* Team logos integration 🏏
* Click row → Detailed match modal

### 🌙 Modern UI/UX

* Dark glassmorphism theme
* Neon glow action buttons
* Fully responsive layout
* Smooth hover animations

---

## 🖼️ Screenshots

### 🔥 Dashboard Overview
<img width="1883" height="445" alt="image" src="https://github.com/user-attachments/assets/b7c3f1ab-0362-4ff3-b9f8-c5cadc39c81f" />


### 📊 Charts & Analytics

<img width="736" height="515" alt="image" src="https://github.com/user-attachments/assets/7fc60421-4dcf-466e-ab7b-52ccfda7c1ef" />
<img width="769" height="531" alt="image" src="https://github.com/user-attachments/assets/ba8668e5-6679-497d-9764-fc8a9348c743" />

### 📋 Matches Table with Search & Pagination


<img width="1517" height="838" alt="image" src="https://github.com/user-attachments/assets/b03b1577-9215-4988-85d5-7adca3645c4b" />

### 🪟 Match Detail Modal

<img width="1471" height="626" alt="image" src="https://github.com/user-attachments/assets/0a9a7f03-b4be-488d-b6e9-b4cd33d0363e" />


> 📌 Add your screenshots inside `/screenshots` folder and update file names if needed.

---

## 📊 Dataset

ICC Men's T20 World Cup match dataset
(CSV processed → Stored in MongoDB Atlas → Served via FastAPI)

---

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/devarshi002/t20worldcup-2024-analysis.git
cd t20worldcup-2024-analysis
```

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3️⃣ Frontend Setup

```bash
cd worldcup_frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create `.env` inside backend:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

---

## 🚀 Deployment

| Service  | Platform      |
| -------- | ------------- |
| Frontend | Vercel        |
| Backend  | Render        |
| Database | MongoDB Atlas |

---

## 🎯 Future Improvements

* Head-to-head team comparison analytics
* Export dashboard reports (PDF/CSV)
* Player profile analytics modal
* Basic match outcome prediction model

---

## 👨‍💻 Author

**Devarshi Tambulkar**
Frontend Developer | React | FastAPI | Data Visualization

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share feedback!
