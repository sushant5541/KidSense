import OpenAI from 'openai';
import config from '../config/index.js';
import systemPrompt from '../utils/systemPrompt.js';
import { generateResponse } from '../utils/knowledgeBase.js';

// Initialize OpenAI client (optional — enhances responses if API key is available)
let openai = null;
const hasOpenAI = config.openaiApiKey && config.openaiApiKey !== 'sk-your-openai-api-key-here';
if (hasOpenAI) {
  openai = new OpenAI({ apiKey: config.openaiApiKey });
  console.log('✅ OpenAI API connected — AI-enhanced mode active');
} else {
  console.log('🧠 Knowledge Base mode active — fully functional without API key');
}

/**
 * Handle chatbot message
 * POST /api/chatbot
 * Body: { message: string, history: Array<{role, content}> }
 */
export const handleChat = async (req, res, next) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Message is required and must be a non-empty string.',
      });
    }

    const trimmedMessage = message.trim();

    // Strategy 1: If OpenAI is available, use it for enhanced AI responses
    if (openai) {
      try {
        const messages = [
          { role: 'system', content: systemPrompt },
          ...history.slice(-10),
          { role: 'user', content: trimmedMessage },
        ];

        const completion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages,
          max_tokens: 500,
          temperature: 0.7,
        });

        const reply =
          completion.choices[0]?.message?.content ||
          'Sorry, I could not generate a response. Please try again.';

        return res.json({
          success: true,
          reply,
          model: 'gpt-3.5-turbo',
        });
      } catch (aiError) {
        // If OpenAI fails, fall through to knowledge base
        console.warn('⚠️ OpenAI failed, falling back to knowledge base:', aiError.message);
      }
    }

    // Strategy 2: Use the knowledge base (always works, no API key needed)
    const kbResponse = generateResponse(trimmedMessage, history);

    return res.json({
      success: true,
      reply: kbResponse.reply,
      topic: kbResponse.topic,
      confidence: kbResponse.confidence,
      model: 'knowledge-base',
    });
  } catch (error) {
    next(error);
  }
};
