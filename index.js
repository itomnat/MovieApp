require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// CORS configuration
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL || 'https://movie-gkllcstb3-itomnat-5742s-projects.vercel.app'
        : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));

// MongoDB database connection
mongoose.connect(process.env.MONGODB_STRING);

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));

// Routes Middleware
const movieRoutes = require("./routes/movieRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/movies", movieRoutes);
app.use("/users", authRoutes);

// Error handling middleware
const { errorHandler } = require('./errorHandler');
app.use(errorHandler);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Export for Vercel serverless function
module.exports = app;
module.exports.default = app;
