import dotenv from 'dotenv';
import express from 'express';
import connectDB from '../config/db.js';
import userRoutes from '../routes/userRoutes.js';
import bookRoutes from '../routes/bookRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', (req, res) => {
    res.send('Welcome to Bookstore API');
});
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

app.listen(5000, () => console.log('Server running on PORT 5000'));