const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://movieapp-api-lms1.onrender.com'] 
        : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));

//MongoDB database
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:admin123@cluster0.zlyew.mongodb.net/movie-app?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

//Routes Middleware
const movieRoutes = require("./routes/movie");
const userRoutes = require("./routes/user");

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

if(require.main === module){
    app.listen(process.env.PORT || port, "0.0.0.0", () => {
        console.log(`API is now online on port ${ process.env.PORT || port }`)
    });
}

module.exports = {app,mongoose};