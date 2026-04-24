import React from 'react';
import { motion } from 'framer-motion';

const QuizCard = ({ question, onAnswer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full mx-auto"
    >
      <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-800 uppercase bg-blue-100 rounded-full">
        {question.category}
      </span>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.text}</h2>
      
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option._id}
            onClick={() => onAnswer(question._id, option._id)}
            className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700 group-hover:text-blue-700">
                {option.text}
              </span>
              <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-blue-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-200" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizCard;
