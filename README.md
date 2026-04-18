# GiftBuilder — Full-Stack Gift Customization App

> A MERN stack e-commerce web app for browsing, customizing, and ordering gifts.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://giftbuilder.netlify.app/login)
[![GitHub](https://img.shields.io/badge/Source-GitHub-black)](https://github.com/vinothinivijayakumar-dev/Mern-GiftBuilder-Project)

---

## Demo

![GiftBuilder Demo](./demo.gif.mp4)

---

## Features

-  **User Authentication** — Signup, Login, Logout
-  **Add to Cart** — Dynamic cart with quantity management
-  **Wishlist** — Save items for later
-  **Place Order** — Order flow with item summary
-  **Responsive Design** — Works on mobile, tablet, and desktop
-  **React State Management** — Smooth, dynamic interactions without page reload

---

## Tech Stack

| Layer     | Technology                        |
|-----------|----------------------------------|
| Frontend  | React.js, CSS3                   |
| Backend   | Node.js, Express.js              |
| Database  | MongoDB (Mongoose ODM)           |
| Auth      | Session-based Authentication     |
| Hosting   | Netlify (Frontend), Node (Backend)|

---

## Getting Started

### Prerequisites

Make sure you have installed:
- Node.js (v16 or above)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vinothinivijayakumar-dev/Mern-GiftBuilder-Project.git

# 2. Go into the project folder
cd Mern-GiftBuilder-Project
```
**Backend setup:**
```bash
cd server
npm install

# Create a .env file with:
# MONGODB_URI=your_mongodb_connection_string
# PORT=5000

npm start
```
**Frontend setup:**
```bash
cd client
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---
## Project Structure

```
GiftBuilder/
├── Backend               # Node.js + Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/           # Mongoose data models     
│   ├── routes/           # API route handlers
│   └── server.js
├── Frontend              # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route-level pages
│   │   └── App.jsx
│   └── package.json
└── README.md
```

---

## API Endpoints
| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | /api/auth/signup | Register new user  |
| POST   | /api/auth/login  | Login user         |
| GET    | /api/products    | Fetch all products |
| POST   | /api/cart        | Add item to cart   |
| GET    | /api/cart        | Get user cart      |
| POST   | /api/orders      | Place an order     |
---

## What I Learned
- Building and consuming REST APIs with Express.js and React
- Managing React component state for cart and wishlist interactions
- Implementing user authentication using session handling
- Structuring a full MERN project for maintainability
- Deploying a frontend to Netlify and configuring redirect rules
---

## 🔗 Live Demo

👉 [https://giftbuilder.netlify.app/login](https://giftbuilder.netlify.app/login)

---

## Author

**Vinothini V** — MERN Stack Developer

- Portfolio: [vinothini-portfolio-web.netlify.app](https://vinothini-portfolio-web.netlify.app/)
- LinkedIn: [linkedin.com/in/VinothiniVijayakumar](https://www.linkedin.com/in/VinothiniVijayakumar)
- GitHub: [@vinothinivijayakumar-dev](https://github.com/vinothinivijayakumar-dev)

---

## License

This project is open source and available under the [MIT License](LICENSE).
