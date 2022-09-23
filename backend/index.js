import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoute from './routes/product.js';

const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();
const app = express();

app.use('/api/products', productRoute);

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
