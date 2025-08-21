import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      title: "AI in Media",
      source: "Industry Analyst Report",
      quote: "AI-driven platforms are expected to redefine how businesses engage with audiences globally.",
    },
    {
      title: "Content Personalization",
      source: "Tech Innovation Journal",
      quote: "Smart recommendation engines can boost user engagement by over 30% when integrated effectively.",
    },
    {
      title: "Future of Intelligent Platforms",
      source: "Global Research Insight",
      quote: "The next wave of content platforms will combine academic research with real-world solutions.",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Expert Insights on the Future
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Industry leaders and analysts share their vision of where AI and intelligent content are headed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700"
            >
              <div className="text-gray-300 mb-4 text-lg italic">
                “{testimonial.quote}”
              </div>
              <div className="font-bold text-white">{testimonial.title}</div>
              <div className={`text-sm ${index % 2 === 0 ? 'text-cyan-400' : 'text-amber-400'}`}>
                {testimonial.source}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
