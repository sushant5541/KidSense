import express from 'express';
import { createChild, getChildren, getChild } from '../controllers/childController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getChildren)
  .post(createChild);

router.get('/:id', getChild);

export default router;
