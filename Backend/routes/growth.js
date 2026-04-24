import express from 'express';
import { addGrowthRecord, getGrowthHistory } from '../controllers/growthController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.post('/', addGrowthRecord);
router.get('/:childId', getGrowthHistory);

export default router;
