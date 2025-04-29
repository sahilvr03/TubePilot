import React from 'react';
import { motion } from 'framer-motion';

export default function TechnologyPage() {
  const aiTechnologies = [
    
    
  ];

  const agentCapabilities = [
    {
      name: 'Video Analysis',
      description: 'Segment, transcribe, and understand video content using AI-powered tools.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m0-4v4m0-4L9 10m0 0v4m0-4l-4.553 2.276A1 1 0 013 13.382V6.618a1 1 0 011.447-.894L9 10z" />
        </svg>
      ),
    },
    {
      name: 'Content Summarization',
      description: 'Summarize long videos and transcripts into digestible highlights.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-6 4h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Sentiment Analysis',
      description: 'Understand emotional tone in comments, transcripts, or speech.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M8 10h.01M16 10h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      name: 'Voice Synthesis',
      description: 'Generate natural-sounding voice responses in different tones and styles.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5a7 7 0 017 7v5a3 3 0 11-6 0v-5a1 1 0 00-2 0v5a3 3 0 11-6 0v-5a7 7 0 017-7z" />
        </svg>
      ),
    },
    {
      name: 'User Personalization',
      description: 'Tailor responses and suggestions based on user behavior.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1120.485 4.343a9 9 0 01-15.364 13.46z" />
        </svg>
      ),
    },
    {
      name: 'Multi-language Support',
      description: 'Support for speech and text in multiple languages, accents, and dialects.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 4v14m0-14h12m-6 0v14" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <section id="technologies" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">AI Technologies for YouTube Agents</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powering real-time interaction, content analysis, and intelligent recommendations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className={`text-3xl mb-3 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-500'}`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentCapabilities.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className={`text-3xl mb-3 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-500'}`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
