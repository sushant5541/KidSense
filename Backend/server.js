import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import config from './config/index.js';
import chatbotRoutes from './routes/chatbot.js';
import authRoutes from './routes/auth.js';
import childRoutes from './routes/children.js';
import quizRoutes from './routes/quizzes.js';
import growthRoutes from './routes/growth.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// ─── Database Connection ─────────────────────────────────
mongoose
  .connect(config.mongoUri)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ─── Security ────────────────────────────────────────────
app.use(helmet());

// ─── CORS ────────────────────────────────────────────────
app.use(
  cors({
    origin: config.corsOrigin,
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

// ─── Body Parsing ────────────────────────────────────────
app.use(express.json({ limit: '1mb' }));

// ─── Rate Limiting ───────────────────────────────────────
const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20, // 20 requests per minute per IP
  message: {
    success: false,
    error: 'Too many requests. Please wait a moment before trying again.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── Routes ──────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/chatbot', chatLimiter, chatbotRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/children', childRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/growth', growthRoutes);

// ─── Error Handler ───────────────────────────────────────
app.use(errorHandler);

// ─── Start Server ────────────────────────────────────────
app.listen(config.port, () => {
  console.log(`
  🚀 KidSense Backend Server
  ──────────────────────────
  Port:     ${config.port}
  Env:      ${config.nodeEnv}
  CORS:     ${config.corsOrigin}
  Health:   http://localhost:${config.port}/api/health
  Chatbot:  http://localhost:${config.port}/api/chatbot
  ──────────────────────────
  `);
});

export default app;
