import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  openaiApiKey: process.env.OPENAI_API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/kidsense',
  jwtSecret: process.env.JWT_SECRET || 'your_super_secret_jwt_key_here',
};

// Validate required env vars
if (!config.openaiApiKey || config.openaiApiKey === 'sk-your-openai-api-key-here') {
  console.warn(
    '⚠️  WARNING: OPENAI_API_KEY is not set. The chatbot will return fallback responses.'
  );
}

if (!config.mongoUri) {
  console.error('❌ ERROR: MONGO_URI is not set.');
}

if (!config.jwtSecret || config.jwtSecret === 'your_super_secret_jwt_key_here') {
  console.warn('⚠️  WARNING: JWT_SECRET is not set or using default. Security may be compromised.');
}

export default config;
