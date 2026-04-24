import React, { useState, useEffect } from 'react';
import { quizAPI, childAPI } from '../services/api';
import QuizCard from '../components/quiz/QuizCard';
import ProgressBar from '../components/common/ProgressBar';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [quizRes, childRes] = await Promise.all([
          quizAPI.getQuizzes(),
          childAPI.getChildren()
        ]);
        setQuizzes(quizRes.data.quizzes);
        setChildren(childRes.data.children);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAnswer = (questionId, optionId) => {
    const newAnswers = [...answers, { questionId, optionId }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleSubmit(newAnswers);
    }
  };

  const handleSubmit = async (finalAnswers) => {
    try {
      const response = await quizAPI.submitQuiz({
        childId: selectedChild,
        quizId: selectedQuiz._id,
        answers: finalAnswers
      });
      setResult(response.data.attempt);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  if (!selectedQuiz) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Child Development Assessment</h1>
        
        {children.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 text-center border-2 border-dashed border-blue-200">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Welcome! Let's get started.</h2>
            <p className="text-gray-600 mb-6">First, tell us about your child to personalize the assessment.</p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const dob = e.target.dob.value;
              const gender = e.target.gender.value;
              try {
                const res = await childAPI.createChild({ name, dateOfBirth: dob, gender });
                setChildren([res.data.child]);
                setSelectedChild(res.data.child._id);
              } catch (err) { console.error(err); }
            }} className="max-w-xs mx-auto space-y-4">
              <input name="name" placeholder="Child's Name" required className="w-full p-2 border rounded-lg" />
              <input name="dob" type="date" required className="w-full p-2 border rounded-lg" />
              <select name="gender" required className="w-full p-2 border rounded-lg">
                <option value="Boy">Boy</option>
                <option value="Girl">Girl</option>
                <option value="Other">Other</option>
              </select>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold">Add Child</button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Child</label>
            <select 
              className="w-full p-2 border rounded-lg mb-6"
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
            >
              <option value="">Choose a child...</option>
              {children.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
            </select>

            <h2 className="text-xl font-semibold mb-4">Available Quizzes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizzes.map(q => (
                <button
                  key={q._id}
                  disabled={!selectedChild}
                  onClick={() => setSelectedQuiz(q)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedChild ? 'border-gray-100 hover:border-blue-500 hover:bg-blue-50' : 'bg-gray-50 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <h3 className="font-bold text-lg">{q.title}</h3>
                  <p className="text-sm text-gray-500">Age: {q.ageGroup} years</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (result) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-6 text-center"
      >
        <div className="bg-white p-8 rounded-3xl shadow-2xl">
          <div className="flex justify-center mb-6">
            {result.status === 'On Track' && <CheckCircle className="w-20 h-20 text-green-500" />}
            {result.status === 'Needs Attention' && <AlertCircle className="w-20 h-20 text-yellow-500" />}
            {result.status === 'Advanced' && <TrendingUp className="w-20 h-20 text-blue-500" />}
          </div>
          
          <h2 className="text-4xl font-black text-gray-800 mb-2">{result.status}</h2>
          <p className="text-2xl font-bold text-blue-600 mb-6">{Math.round(result.percentage)}% Score</p>
          
          <div className="bg-blue-50 p-6 rounded-2xl mb-8">
            <h3 className="font-bold text-gray-700 mb-2">Summary</h3>
            <p className="text-gray-600">{result.explanation}</p>
          </div>
          
          <div className="text-left">
            <h3 className="font-bold text-gray-800 mb-4">Recommended Actions</h3>
            <ul className="space-y-3">
              {result.suggestedActions.map((action, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {i + 1}
                  </div>
                  {action}
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={() => { setSelectedQuiz(null); setResult(null); setCurrentQuestionIndex(0); setAnswers([]); }}
            className="mt-10 bg-gray-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-900 transition-colors"
          >
            Back to Assessments
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{selectedQuiz.title}</h1>
        <ProgressBar current={currentQuestionIndex + 1} total={selectedQuiz.questions.length} />
      </div>

      <AnimatePresence mode="wait">
        <QuizCard 
          key={currentQuestionIndex}
          question={selectedQuiz.questions[currentQuestionIndex]} 
          onAnswer={handleAnswer} 
        />
      </AnimatePresence>
    </div>
  );
};

export default QuizPage;
