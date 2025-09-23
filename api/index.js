const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: true,
    credentials: true
}));

// MongoDB connection with caching for serverless
let cachedConnection = null;

async function connectToDatabase() {
    if (cachedConnection) {
        return cachedConnection;
    }
    
    const connection = await mongoose.connect(
        process.env.MONGODB_URI || "mongodb+srv://admin:admin123@cluster0.zlyew.mongodb.net/movie-app?retryWrites=true&w=majority&appName=Cluster0",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false,
            useCreateIndex: true
        }
    );
    
    cachedConnection = connection;
    console.log('Connected to MongoDB Atlas.');
    return connection;
}

//Routes Middleware
const movieRoutes = require("../routes/movie");
const userRoutes = require("../routes/user");

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

// Root endpoint
app.get("/", (req, res) => {
    res.json({ message: "Movie App API is running!" });
});

// Serverless function export for Vercel
module.exports = async (req, res) => {
    await connectToDatabase();
    return app(req, res);
};