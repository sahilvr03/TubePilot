import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";


export default function TechnologyPage() {


    const technologies = [
        { name: "Deep Learning", icon: "🧠", description: "Advanced neural networks for complex problem solving" },
        { name: "Computer Vision", icon: "👁️", description: "Image and video analysis with state-of-the-art models" },
        { name: "NLP", icon: "💬", description: "Natural language processing and generation" },
        { name: "Reinforcement Learning", icon: "🎮", description: "AI systems that learn through interaction" },
        { name: "Generative AI", icon: "🎨", description: "Creating new content from learned patterns" },
        { name: "Edge AI", icon: "📱", description: "On-device AI processing for real-time applications" },
      ];


  return (
    <div>{/* Technologies Section */}
    <section id="technologies" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Featured Technologies</h2>
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Innovations driving our research and development
    </p>
  </motion.div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "Artificial Intelligence",
        description: "Advanced machine learning algorithms and neural networks for smart city applications.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
      },
      {
        name: "Cloud Computing",
        description: "Scalable processing power for big data analytics and real-time applications.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
      },
      {
        name: "Internet of Things",
        description: "Connected sensor networks creating data-driven urban environments.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
      },
      {
        name: "Embedded Systems",
        description: "Custom hardware solutions for specialized smart city applications.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
      },
      {
        name: "Smart Infrastructure",
        description: "Intelligent systems for buildings, transportation, and urban planning.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
      },
      {
        name: "Sustainable Technologies",
        description: "Eco-friendly innovations promoting resource efficiency and reduced environmental impact.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
      }
    ].map((tech, index) => (
      <motion.div
        key={tech.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
      >
        <div className={`text-3xl mb-3 ${index % 2 === 0 ? 'text-blue-600' : 'text-orange-500'}`}>
          {tech.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{tech.name}</h3>
        <p className="text-gray-600">{tech.description}</p>
      </motion.div>
    ))}
  </div>
</div>
</section></div>
  )
}
