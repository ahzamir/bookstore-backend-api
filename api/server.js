import express from 'express';
import serverless from 'serverless-http'; // Install using npm install serverless-http

import connectDB from '../config/db.js';
import userRoutes from '../routes/userRoutes';
import bookRoutes from '../routes/bookRouters';

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
export default serverless(app);