import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Express API is working on vercel');
});

app.listen(5000, () => {
    console.log('Server running on PORT 5000');
});

export default app;