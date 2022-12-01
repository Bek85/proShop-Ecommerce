import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import connectDB from './config/db.mjs';
import productRoutes from './routes/productRoutes.mjs';
import userRoutes from './routes/userRoutes.mjs';
import orderRoutes from './routes/orderRoutes.mjs';
import { errorHandler, notFound } from './middleware/errorMiddleware.mjs';

const PORT = process.env.PORT || 8000;

// Middleware setup
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
