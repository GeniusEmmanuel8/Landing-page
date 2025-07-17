'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'AI Human Detection',
    description: `Developed a comprehensive machine learning pipeline for human detection using traditional ML approaches. Started with data exploration and cleaning in Google Colab, then experimented with different vectorization techniques including Bag of Words and TF-IDF, ultimately selecting TF-IDF for superior performance. Implemented and compared multiple classification algorithms including SVM, AdaBoost, and Decision Trees, selecting the best performing model based on evaluation metrics. Created a complete ML pipeline, deployed the model to GitHub, and built an interactive web application using Streamlit for real-time human detection capabilities.`,
    technologies: ['Python', 'Machine Learning', 'Google Colab', 'TF-IDF', 'SVM', 'AdaBoost', 'Decision Trees', 'Streamlit', 'Scikit-learn'],
    image: '/AI_human_detector.png',
    github: '',
    live: '',
  },
  {
    title: 'Deep Learning AI Human Detection',
    description: `Built an advanced deep learning system for human detection using state-of-the-art neural network architectures. Implemented sophisticated data preprocessing with BERT tokenizer for enhanced text representation and feature extraction. Designed and trained multiple deep learning models including RNN, CNN, and LSTM architectures, conducting comprehensive performance analysis to select the optimal model. Developed a robust ML pipeline with proper model versioning and deployed the solution to GitHub. Created an intuitive Streamlit web interface that allows users to interact with the deep learning model for real-time human detection with improved accuracy over traditional ML approaches.`,
    technologies: ['Python', 'Deep Learning', 'BERT', 'RNN', 'CNN', 'LSTM', 'TensorFlow', 'Streamlit', 'Google Colab'],
    image: '/DeepLearning_AI_human_detector.png',
    github: '',
    live: '',
  },
  {
    title: 'Scalier',
    description: `Scalier provides founders with an intelligent co-pilot for scaling, leveraging patterns from past startup successes and failures to boost decision quality. It democratizes strategic consulting for early-stage ventures. Built key features like strategy simulation, capital planning, and business model testing using Python and FastAPI. Combined business data with social trends to help the AI give smarter recommendations over time. Organized the platform into 2 parts: Advisor (AI), and Sync (real-time data tracking) making it modular and easy to scale.`,
    technologies: ['Python', 'FastAPI', 'Next.js', 'Machine Learning', 'LLM APIs'],
    image: '/Scalier.png',
    github: '',
    live: '',
  },
  {
    title: 'Braze',
    description: `Braze bridges siloed AI workflows, empowering users to collaborate across multiple LLMs for research, writing, and creativity while maintaining context. It offers a unique advantage for professionals working with token limits, contrasting opinions, or iterative AI processes. Developed a modern frontend using React and Next.js, featuring a collapsible sidebar, dark/light mode, and a tab system for switching between AI agents. Connected to all three AI APIs with secure backend routes, and used state management to keep track of each project's memory and progress. Designed a chat UI that adapts to light or dark mode, supports smooth transitions, and keeps conversations consistent across sessions.`,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'GPT-4', 'Claude', 'Gemini APIs'],
    image: '/Braze.png',
    github: '',
    live: '',
  },
  {
    title: 'FinanceBuilder',
    description: `FinanceBuilder highlighted gaps in budget tools for young users and introduced an intuitive solution that simplifies money tracking and financial goal setting. Developed a website using SQL for the data management, JavaScript for interactivity, HTML and CSS for the UI, Python for the Backend Logic, all hosted on AWS. Presented the finance app prototype to a panel of judges, highlighting its features, functionality, and potential impact on personal finance management.`,
    technologies: ['JavaScript', 'Python', 'SQL', 'HTML', 'CSS', 'AWS'],
    image: '/finance.jpeg',
    github: '',
    live: '',
  },
  {
    title: 'Gold Price Prediction Analysis',
    description: `Analyzed gold price data and identified factors influencing its movement. Developed a Random Forest Regression Model to predict future gold prices based on the insights provided. Leveraged libraries such as Scikit-learn, NumPy, Pandas, Matplotlib. Visualized the data distribution using a histogram to understand the patterns.`,
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    image: '/Gold.jpeg',
    github: '',
    live: '',
  },
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience in my journey as a developer.
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/akinsanmiojo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              See my GitHub for more
            </a>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                ) : (
                  <span>No image</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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

export default ProjectsPage; 