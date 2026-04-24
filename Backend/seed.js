import mongoose from 'mongoose';
import Quiz from './models/Quiz.js';
import dotenv from 'dotenv';
import config from './config/index.js';

dotenv.config();

const quizzes = [
  {
    title: 'Developmental Milestones (Age 0-1)',
    ageGroup: '0-1',
    questions: [
      {
        text: 'Does your child smile at people?',
        category: 'Social Behavior',
        options: [
          { text: 'Yes', score: 2 },
          { text: 'Sometimes', score: 1 },
          { text: 'No', score: 0 }
        ]
      },
      {
        text: 'Does your child make cooing sounds?',
        category: 'Speech',
        options: [
          { text: 'Yes', score: 2 },
          { text: 'Sometimes', score: 1 },
          { text: 'No', score: 0 }
        ]
      },
      {
        text: 'Can your child hold their head up without support?',
        category: 'Motor Skills',
        options: [
          { text: 'Yes', score: 2 },
          { text: 'Sometimes', score: 1 },
          { text: 'No', score: 0 }
        ]
      }
    ]
  },
  {
    title: 'Toddler Growth (Age 1-2)',
    ageGroup: '1-2',
    questions: [
      {
        text: 'Can your child walk alone?',
        category: 'Motor Skills',
        options: [
          { text: 'Yes', score: 2 },
          { text: 'Sometimes', score: 1 },
          { text: 'No', score: 0 }
        ]
      },
      {
        text: 'Does your child say several single words?',
        category: 'Speech',
        options: [
          { text: 'Yes', score: 2 },
          { text: 'Sometimes', score: 1 },
          { text: 'No', score: 0 }
        ]
      }
    ]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('Connected to MongoDB for seeding...');
    
    await Quiz.deleteMany({});
    await Quiz.insertMany(quizzes);
    
    console.log('Database Seeded! 🌱');
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDB();
