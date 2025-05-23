import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'; // adjust path if needed

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // or your frontend URL
  credentials: true,
}));

app.use(express.json());

app.use('/', authRoutes);

// Connect to MongoDB with your full URI from .env, babe!
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB, honey 💚');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${process.env.PORT}, babe 🔥`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection failed, baby 😭', err);
  });
