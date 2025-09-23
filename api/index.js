const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: ["*"],
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

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

// Serverless function export for Vercel
module.exports = app;