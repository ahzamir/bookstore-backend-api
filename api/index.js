import dotenv from 'dotenv';
import express from 'express';
import connectDB from '../config/db.js';
import userRoutes from '../routes/userRoutes.js';
import bookRoutes from '../routes/bookRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

app.listen(3000, () => console.log('Server running on PORT 3000'));

export default app;