import Quiz from '../models/Quiz.js';
import QuizAttempt from '../models/QuizAttempt.js';
import Child from '../models/Child.js';

export const getQuizzes = async (req, res, next) => {
  try {
    const { ageGroup } = req.query;
    const query = ageGroup ? { ageGroup } : {};
    const quizzes = await Quiz.find(query);
    res.json({ success: true, quizzes });
  } catch (error) {
    next(error);
  }
};

export const submitQuiz = async (req, res, next) => {
  try {
    const { childId, quizId, answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ success: false, error: 'Quiz not found' });

    let totalScore = 0;
    let maxScore = 0;

    const processedAnswers = answers.map(ans => {
      const question = quiz.questions.id(ans.questionId);
      const option = question.options.find(o => o._id.toString() === ans.optionId);
      totalScore += option.score;
      maxScore += Math.max(...question.options.map(o => o.score));
      return { questionId: ans.questionId, score: option.score };
    });

    const percentage = (totalScore / maxScore) * 100;
    let status = 'On Track';
    let explanation = 'Your child is developing normally according to these benchmarks.';
    let suggestedActions = ['Continue regular checkups', 'Keep playing and interacting'];

    if (percentage < 50) {
      status = 'Needs Attention';
      explanation = 'Some areas may require more focus or professional consultation.';
      suggestedActions = ['Consult a pediatrician', 'Focus on speech and motor skill activities'];
    } else if (percentage > 90) {
      status = 'Advanced';
      explanation = 'Your child is showing advanced skills for their age.';
      suggestedActions = ['Provide more challenging tasks', 'Encourage diverse hobbies'];
    }

    const attempt = await QuizAttempt.create({
      child: childId,
      quiz: quizId,
      answers: processedAnswers,
      totalScore,
      maxScore,
      percentage,
      status,
      explanation,
      suggestedActions,
    });

    await Child.findByIdAndUpdate(childId, {
      $push: { quizAttempts: attempt._id },
    });

    res.status(201).json({ success: true, attempt });
  } catch (error) {
    next(error);
  }
};
