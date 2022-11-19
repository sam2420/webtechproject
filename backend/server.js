import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
// import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => console.log(error.reason));
app.use('/api/products', productRouter);
// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });
app.use('/api/seed', seedRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
    // console.log(dotenv.config().parsed);
});
