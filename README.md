# Chatify – Real-Time MERN Chat Application

Chatify is a full-stack real-time messaging application built using the MERN stack.  
It supports secure authentication, live messaging with Socket.io, online user tracking, image sharing, and production deployment.

🔗 **Live Demo (Frontend)**: https://chatify-seven-beta.vercel.app  
🔗 **Backend API**: https://chatifyyy.onrender.com  

---

## Features

-  JWT Authentication (Signup / Login / Logout)
-  HTTP-only Cookie Based Auth
-  Real-Time Messaging (Socket.io)
-  Live Online / Offline Status
-  Image Sharing (Cloudinary Integration)
-  Profile Picture Upload
-  Protected API Routes
-  Fully Responsive Modern UI
-  Production Deployment (Vercel + Render)

---

##  Tech Stack

### Frontend
- React (Vite)
- Zustand (State Management)
- Axios
- Socket.io Client
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Socket.io
- Cloudinary
- CORS

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

##  Project Structure

```
chatify/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```
---

##  Local Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/05-Jagritii/chatify.git
cd chatify
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:3000
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

##  Real-Time Architecture

- JWT token stored in HTTP-only cookie
- Socket authentication middleware verifies token
- Server maintains `userSocketMap`
- Broadcasts `getOnlineUsers` event
- Frontend listens and updates user status dynamically

---

##  Security Implementation

- Password hashing using bcrypt
- HTTP-only cookie JWT authentication
- CORS restricted to frontend domain
- Protected routes middleware
- Secure Cloudinary image uploads

---


## 📈 Future Improvements

- Typing indicator
- Message read receipts
- Group chats
- Emoji support
- Message deletion
- Push notifications


