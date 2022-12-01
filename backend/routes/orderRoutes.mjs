import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.mjs';
import {
  addOrderItems,
  getOrderbyId,
  updateOrderToPaid,
} from '../controllers/orderController.mjs';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderbyId);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
