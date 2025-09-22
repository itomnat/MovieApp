const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const authRoutes = require('./routes/authRoutes');
const { connectDB } = require('./utils/db');
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use('/api/movies', movieRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});