'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'C/C++', level: 'Intermediate' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML/CSS', level: 'Advanced' },
      { name: 'R', level: 'Intermediate' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Flask', level: 'Intermediate' },
      { name: 'Material-UI', level: 'Intermediate' },
      { name: 'FastAPI', level: 'Intermediate' },
      { name: 'WordPress', level: 'Intermediate' },
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 'Advanced' },
      { name: 'PyTorch', level: 'Intermediate' },
      { name: 'XGBoost', level: 'Intermediate' },
      { name: 'TensorFlow', level: 'Intermediate' },
      { name: 'LightGBM', level: 'Intermediate' },
      { name: 'Optuna', level: 'Intermediate' },
      { name: 'Hugging Face Transformers', level: 'Intermediate' },
      { name: 'scrapy', level: 'Intermediate' },
      { name: 'BeautifulSoup', level: 'Intermediate' },
      { name: 'TA-Lib', level: 'Intermediate' },
    ],
  },
  {
    category: 'Data Analysis & Visualization',
    skills: [
      { name: 'Pandas', level: 'Advanced' },
      { name: 'NumPy', level: 'Advanced' },
      { name: 'Matplotlib', level: 'Intermediate' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'Microsoft SQL Server', level: 'Intermediate' },
    ],
  },
  {
    category: 'Cloud & Developer Tools',
    skills: [
      { name: 'AWS', level: 'Beginner' },
      { name: 'Google Cloud Platform', level: 'Beginner' },
      { name: 'Git', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Visual Studio', level: 'Intermediate' },
      { name: 'PyCharm', level: 'Intermediate' },
      { name: 'IntelliJ', level: 'Intermediate' },
      { name: 'Eclipse', level: 'Intermediate' },
    ],
  },
];

const SkillsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's an overview of my technical skills and expertise. I'm constantly learning and expanding my knowledge in these areas.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SkillsPage; 