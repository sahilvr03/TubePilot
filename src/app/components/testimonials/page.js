import React from 'react'
import { motion } from 'framer-motion'
export default function page() {


    
    const testimonials = [
      { name: "Dr. Sarah Chen", role: "Chief Scientist", quote: "The most innovative research environment I've worked in." },
      { name: "Mark Williams", role: "Tech Director", quote: "Their AI solutions transformed our business operations." },
      { name: "Lisa Rodriguez", role: "Research Partner", quote: "Cutting-edge research with practical applications." },
    ];
  return (
    <div><section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">What People Say</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
          >
            <div className="text-gray-600 mb-4 text-lg italic">{testimonial.quote}</div>
            <div className="font-bold text-gray-900">{testimonial.name}</div>
            <div className={`text-sm ${index % 2 === 0 ? 'text-blue-600' : 'text-orange-500'}`}>
              {testimonial.role}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section></div>
  )
}
