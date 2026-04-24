import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Boy', 'Girl', 'Other'], required: true },
  growthRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GrowthRecord' }],
  quizAttempts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'QuizAttempt' }],
  createdAt: { type: Date, default: Date.now },
});

const Child = mongoose.model('Child', childSchema);
export default Child;
