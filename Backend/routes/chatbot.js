import { Router } from 'express';
import { handleChat } from '../controllers/chatbotController.js';

const router = Router();

// POST /api/chatbot — Send a message and get AI response
router.post('/', handleChat);

export default router;
