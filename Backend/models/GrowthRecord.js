import mongoose from 'mongoose';

const growthRecordSchema = new mongoose.Schema({
  child: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true },
  ageInMonths: { type: Number, required: true },
  height: { type: Number }, // in cm
  weight: { type: Number }, // in kg
  milestones: [{ type: String }], // e.g., "Walking", "First Word"
  aiInsights: {
    status: String,
    feedback: String,
    recommendations: [String]
  },
  createdAt: { type: Date, default: Date.now },
});

const GrowthRecord = mongoose.model('GrowthRecord', growthRecordSchema);
export default GrowthRecord;
