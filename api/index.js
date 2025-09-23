const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://828db8ca-11ab-4f5f-941e-3883a981e3e8-00-28pstqjgo74bb.sisko.replit.dev",
        /^https:\/\/.*\.vercel\.app$/,
        /^https:\/\/.*\.vercel\.dev$/
    ],
    credentials: true
}));

//MongoDB database
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:admin123@cluster0.zlyew.mongodb.net/movie-app?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

//Routes Middleware
const movieRoutes = require("../routes/movie");
const userRoutes = require("../routes/user");

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

// Serverless function export for Vercel
module.exports = app;