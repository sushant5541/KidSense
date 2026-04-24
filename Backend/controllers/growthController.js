import GrowthRecord from '../models/GrowthRecord.js';
import Child from '../models/Child.js';
import OpenAI from 'openai';
import config from '../config/index.js';

const openai = new OpenAI({ apiKey: config.openaiApiKey });

export const addGrowthRecord = async (req, res, next) => {
  try {
    const { childId, ageInMonths, height, weight, milestones } = req.body;

    // AI Insight generation (Placeholder logic)
    let aiInsights = {
      status: 'Normal',
      feedback: 'Growth is within expected parameters for this age.',
      recommendations: ['Maintain balanced diet', 'Regular physical activity']
    };

    if (config.openaiApiKey && config.openaiApiKey !== 'sk-your-openai-api-key-here') {
      try {
        const prompt = `Child Growth Analysis:
        Age: ${ageInMonths} months
        Height: ${height} cm
        Weight: ${weight} kg
        Milestones: ${milestones.join(', ')}
        
        Provide a short, safe, non-medical summary of development and 2 simple recommendations.`;

        const response = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        });

        const aiText = response.choices[0].message.content;
        aiInsights.feedback = aiText;
      } catch (aiErr) {
        console.error('AI Analysis failed:', aiErr.message);
      }
    }

    const record = await GrowthRecord.create({
      child: childId,
      ageInMonths,
      height,
      weight,
      milestones,
      aiInsights,
    });

    await Child.findByIdAndUpdate(childId, {
      $push: { growthRecords: record._id },
    });

    res.status(201).json({ success: true, record });
  } catch (error) {
    next(error);
  }
};

export const getGrowthHistory = async (req, res, next) => {
  try {
    const records = await GrowthRecord.find({ child: req.params.childId }).sort({ ageInMonths: 1 });
    res.json({ success: true, records });
  } catch (error) {
    next(error);
  }
};
