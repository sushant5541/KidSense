import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardCheck, Activity, BrainCircuit } from 'lucide-react';

const ToolHighlights = () => {
  const tools = [
    {
      title: 'Interactive Quiz',
      desc: 'Assess your child’s development with our multi-step screening tool.',
      link: '/quiz',
      icon: <ClipboardCheck className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-50',
    },
    {
      title: 'Growth Tracker',
      desc: 'Log growth data and receive AI-powered feedback on developmental benchmarks.',
      link: '/growth-tracker',
      icon: <Activity className="w-8 h-8 text-green-500" />,
      color: 'bg-green-50',
    },
    {
      title: 'AI Chatbot',
      desc: 'Get instant answers to your questions about child development and our services.',
      link: '#', // Floating chatbot already exists
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      color: 'bg-purple-50',
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-ks-navy mb-4">Empowering Parents with Smart Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a proactive role in your child's journey with our interactive digital tools designed for tracking and assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all"
            >
              <div className={`${tool.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                {tool.icon}
              </div>
              <h3 className="text-2xl font-bold text-ks-navy mb-3">{tool.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{tool.desc}</p>
              <Link
                to={tool.link}
                className="inline-flex items-center gap-2 text-ks-gold font-bold hover:gap-3 transition-all"
              >
                Get Started <span className="text-xl">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolHighlights;
