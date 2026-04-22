import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  openaiApiKey: process.env.OPENAI_API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
};

// Validate required env vars
if (!config.openaiApiKey || config.openaiApiKey === 'sk-your-openai-api-key-here') {
  console.warn(
    '⚠️  WARNING: OPENAI_API_KEY is not set. The chatbot will return fallback responses.'
  );
}

export default config;
