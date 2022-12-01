import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.mjs';

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

export default router;
