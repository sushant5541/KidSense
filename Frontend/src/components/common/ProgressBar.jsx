import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
      <motion.div
        className="bg-blue-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span>Step {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
