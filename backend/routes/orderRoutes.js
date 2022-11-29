import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import { addOrderItems, getOrderbyId } from '../controllers/OrderController.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderbyId);

export default router;
