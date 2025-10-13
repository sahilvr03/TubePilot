"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, ShoppingCart, Smartphone } from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function AboutPage() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8  text-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className={`${orbitron.className} text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600`}
          >
            About TechTrend Innovations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p
            className={`${oxanium.className} text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed`}
          >
            We specialize in delivering AI-powered SaaS products, e-commerce
            platforms, mobile applications, and IoT solutions to drive
            business success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: "0 0 25px rgba(34,211,238,0.4)" }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 shadow-lg transition-all"
          >
            <div className={`${orbitron.className} text-cyan-600 mb-4`}>
              <Brain size={40} strokeWidth={1.5} />
            </div>
            <h3
              className={`${orbitron.className} text-xl font-semibold mb-3 text-gray-900`}
            >
              AI-Driven SaaS
            </h3>
            <p className={`${oxanium.className} text-gray-600 leading-relaxed`}>
              Scalable SaaS solutions powered by AI to automate workflows and
              enhance productivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 0 25px rgba(236,72,153,0.4)" }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 shadow-lg transition-all"
          >
            <div className={`${orbitron.className} text-pink-600 mb-4`}>
              <ShoppingCart size={40} strokeWidth={1.5} />
            </div>
            <h3
              className={`${orbitron.className} text-xl font-semibold mb-3 text-gray-900`}
            >
              E-commerce Solutions
            </h3>
            <p className={`${oxanium.className} text-gray-600 leading-relaxed`}>
              Build robust online stores with AI-driven insights and seamless
              integrations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -8, boxShadow: "0 0 25px rgba(34,197,94,0.4)" }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 shadow-lg transition-all"
          >
            <div className={`${orbitron.className} text-green-600 mb-4`}>
              <Smartphone size={40} strokeWidth={1.5} />
            </div>
            <h3
              className={`${orbitron.className} text-xl font-semibold mb-3 text-gray-900`}
            >
              Mobile & IoT
            </h3>
            <p className={`${oxanium.className} text-gray-600 leading-relaxed`}>
              Cross-platform mobile apps and IoT solutions for connected,
              smart experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}