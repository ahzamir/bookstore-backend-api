const express = require('express');
const serverless = require('serverless-http'); // Install using npm install serverless-http

const connectDB = require('../config/db');
const userRoutes = require('../routes/userRoutes');
const bookRoutes = require('../routes/bookRouters');

const app = express();
app.use(express.json());

// Connect to database with error handling
connectDB().catch((error) => {
    console.error("Database connection error:", error);
});

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// Default error handler for unexpected issues
app.use((err, req, res, next) => {
    console.error("An error occurred:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
});

// Export the app wrapped for serverless
module.exports = serverless(app);