import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div>
      <section id="about" className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">About TechTrend Innovations</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering AI-powered SaaS products, e-commerce platforms, mobile applications, and IoT solutions to drive business success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="text-4xl mb-4 text-red-500">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Driven SaaS</h3>
              <p className="text-gray-600">
                Scalable SaaS solutions powered by AI to automate workflows and enhance productivity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="text-4xl mb-4 text-yellow-500">🛒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">E-commerce Solutions</h3>
              <p className="text-gray-600">
                Build robust online stores with AI-driven insights and seamless integrations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="text-4xl mb-4 text-red-500">📱</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile & IoT</h3>
              <p className="text-gray-600">
                Cross-platform mobile apps and IoT solutions for connected, smart experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}