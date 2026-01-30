# InstantTalk 💬

InstantTalk is a full-stack real-time chat application built using the **MERN stack**.  
It allows users to authenticate, connect with others, and exchange messages instantly using **Socket.IO**.

---

## 🚀 Live Demo

🌐 **InstantTalk (Live App)**  
👉 https://instanttalk-9vrv.onrender.com/

> ⚠️ Note: Since this app is deployed on Render (free tier), the first load may take a few seconds.

---

## 🛠️ Tech Stack

### Frontend
- React
- Zustand (State Management)
- Axios
- Tailwind CSS
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- CORS

---

## 📁 Project Structure

InstantTalk/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── lib/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ └── index.js
│ ├── package.json
│ └── package-lock.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── constants/
│ │ ├── lib/
│ │ ├── pages/
│ │ ├── store/
│ │ ├── App.jsx
│ │ └── index.css
│ └── package.json
│
├── .gitignore
├── package.json
└── README.md


---

## ✨ Features

- 🔐 Secure user authentication using JWT
- 💬 Real-time one-to-one messaging
- 👥 User list & chat selection
- ⚡ Real-time updates with Socket.IO
- 📦 Global state management (Zustand)
- 🌐 CORS-enabled backend
- 🎨 Clean and responsive UI

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
🧪 Local Setup
1️⃣ Clone the repository
git clone https://github.com/Komal8064/InstantTalk.git
cd InstantTalk
2️⃣ Install backend dependencies
cd backend
npm install
3️⃣ Install frontend dependencies
cd ../frontend
npm install
▶️ Run Locally
Start Backend
cd backend
npm run dev
Start Frontend
cd frontend
npm run dev
Frontend: http://localhost:5173

Backend: http://localhost:5000

🔮 Future Enhancements
Typing indicators
Message read receipts
Group chats


🤝 Contributing
Contributions are welcome!
Feel free to fork the repository and submit a pull request.

📜 License
This project is licensed under the MIT License.

👤 Author
Komal Panwar
GitHub: https://github.com/Komal8064

⭐ If you like this project, please give it a star!