import mongoose from 'mongoose';

const quizAttemptSchema = new mongoose.Schema({
  child: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  answers: [{
    questionId: mongoose.Schema.Types.ObjectId,
    score: Number,
  }],
  totalScore: { type: Number, required: true },
  maxScore: { type: Number, required: true },
  percentage: { type: Number, required: true },
  status: { type: String, enum: ['On Track', 'Needs Attention', 'Advanced'], required: true },
  explanation: String,
  suggestedActions: [String],
  createdAt: { type: Date, default: Date.now },
});

const QuizAttempt = mongoose.model('QuizAttempt', quizAttemptSchema);
export default QuizAttempt;
