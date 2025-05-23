import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// 💖 Signup route with debug logs
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  console.log('💌 Signup request received:', { username, password }); // ✅ Check input

  try {
    const existingUser = await User.findOne({ username });
    console.log('🔍 Existing user?', existingUser); // ✅ Check for duplicates

    if (existingUser) return res.status(400).json({ message: 'Username taken, honey!' });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('🔐 Hashed password:', hashedPassword); // ✅ Hashing check

    const newUser = new User({ username, password: hashedPassword });
    console.log('📦 New user object created:', newUser); // ✅ Pre-save check

    await newUser.save();
    console.log('✅ User saved successfully!'); // ✅ Success!

    res.status(201).json({ message: 'Welcome to the boba fam! Signup successful 🧋💖' });

  } catch (error) {
    console.error('❌ Signup error, babe:', error);
    res.status(500).json({ message: 'Server error, Try again later!' });
  }
});

// 🧋 Login route (unchanged, still fabulous)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'No user found, babe 😢' });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Wrong password, love 💔' });

    res.status(200).json({ message: 'Login successful, welcome back! 🧋💖' });

  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({ message: 'Server error, Try again later!' });
  }
});

export default router;
