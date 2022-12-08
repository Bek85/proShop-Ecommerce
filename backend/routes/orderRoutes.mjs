import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.mjs';
import {
  addOrderItems,
  getOrderbyId,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.mjs';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderbyId);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/myorders').get(protect, getMyOrders);

export default router;
