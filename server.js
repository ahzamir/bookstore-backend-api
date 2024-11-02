require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRouters');

const app = express();
app.use(express.json());
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.listen(5000, () => console.log('Server running on PORT 5000'));