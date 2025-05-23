# Teashop Login System (MERN Stack)

This project is a user authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes functionality for user signup, login, and signout, with a clean and responsive frontend design.

## Features

- User Signup and Login functionality
- Password hashing using bcrypt
- Frontend and backend integration via Axios
- MongoDB for persistent storage
- Styled user interface with image assets
- CORS and environment-based configuration

## Technologies Used

### Frontend:
- React.js (with Vite)
- React Router DOM
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs

### Development Tools:
- Vite (React App bundler)
- dotenv for environment configuration
- MongoDB Compass for database management
- Git for version control

## Project Structure

```
teashop-login-mern/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│
├── .gitignore
├── README.md
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB (local or remote)
- Git installed

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   node server.js
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

### Access the App

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## License

This project is for educational purposes. You may use or modify it as needed.🧋💖
(also make sure to add the .env file in the backend folder)
