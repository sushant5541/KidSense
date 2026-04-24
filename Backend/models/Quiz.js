import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{
    text: { type: String, required: true },
    score: { type: Number, required: true }
  }],
  category: { type: String, enum: ['Speech', 'Motor Skills', 'Social Behavior', 'Cognitive'], required: true },
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ageGroup: { type: String, required: true }, // e.g., "0-1", "1-2", "2-5"
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;
