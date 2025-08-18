import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div>
      <section
        id="about"
        className="relative py-30 px-4 sm:px-6 lg:px-8  text-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400 drop-shadow-lg">
              About TechTrend Innovations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We specialize in delivering AI-powered SaaS products, e-commerce
              platforms, mobile applications, and IoT solutions to drive
              business success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* AI-Driven SaaS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -8,
                boxShadow: '0 0 20px rgba(34,211,238,0.5)',
              }}
              className="bg-[#111] p-8 rounded-xl border border-cyan-500/20 shadow-lg transition-all"
            >
              <div className="text-4xl mb-4 text-cyan-400">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                AI-Driven SaaS
              </h3>
              <p className="text-gray-400">
                Scalable SaaS solutions powered by AI to automate workflows and
                enhance productivity.
              </p>
            </motion.div>

            {/* E-commerce Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: '0 0 20px rgba(236,72,153,0.5)',
              }}
              className="bg-[#111] p-8 rounded-xl border border-pink-500/20 shadow-lg transition-all"
            >
              <div className="text-4xl mb-4 text-pink-500">🛒</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                E-commerce Solutions
              </h3>
              <p className="text-gray-400">
                Build robust online stores with AI-driven insights and seamless
                integrations.
              </p>
            </motion.div>

            {/* Mobile & IoT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                y: -8,
                boxShadow: '0 0 20px rgba(34,197,94,0.5)',
              }}
              className="bg-[#111] p-8 rounded-xl border border-green-500/20 shadow-lg transition-all"
            >
              <div className="text-4xl mb-4 text-green-400">📱</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Mobile & IoT
              </h3>
              <p className="text-gray-400">
                Cross-platform mobile apps and IoT solutions for connected,
                smart experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
