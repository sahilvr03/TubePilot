"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function CTA() {
  return (
    <div>
      <section
        id="contact"
        className="relative py-32 px-4 sm:px-6 lg:px-8 text-center "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-12 rounded-2xl shadow-2xl border border-gray-200"
        >
          <h2
            className={`${orbitron.className} text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600`}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            className={`${oxanium.className} text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed`}
          >
            Partner with us to leverage AI-driven SaaS, e-commerce, mobile apps,
            and IoT solutions for your business growth.
          </p>
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(34,211,238,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:docoder@docoders.com"
            className={`${orbitron.className} px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl shadow-lg text-white font-semibold text-lg transition-all inline-block`}
          >
            🚀 Get Started Now
          </motion.a>
        </motion.div>
      </section>

      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 flex items-center"
              >
                <Image
                  src="/log.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  className="h-15 w-auto"
                />
              </motion.div>
              <p
                className={`${orbitron.className} text-gray-600 mt-2 text-xl`}
              >
                DoCoders
              </p>
            </div>

            <div className="flex space-x-6">
              <motion.a
                whileHover={{
                  y: -3,
                  color: "#22d3ee",
                  textShadow: "0 0 8px rgba(34,211,238,0.8)",
                }}
                href="https://www.linkedin.com/company/docoder/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${oxanium.className} text-gray-600 hover:text-cyan-600 transition-colors flex items-center gap-2`}
              >
                <Linkedin size={20} /> LinkedIn
              </motion.a>
              <motion.a
                whileHover={{
                  y: -3,
                  color: "#ec4899",
                  textShadow: "0 0 8px rgba(236,72,153,0.8)",
                }}
                href="https://www.instagram.com/docoders03"
                target="_blank"
                rel="noopener noreferrer"
                className={`${oxanium.className} text-gray-600 hover:text-pink-600 transition-colors flex items-center gap-2`}
              >
                <Instagram size={20} /> Instagram
              </motion.a>
              <motion.a
                whileHover={{
                  y: -3,
                  color: "#22d3ee",
                  textShadow: "0 0 8px rgba(34,211,238,0.8)",
                }}
                href="mailto:docoder@docoders.com"
                className={`${oxanium.className} text-gray-600 hover:text-cyan-600 transition-colors flex items-center gap-2`}
              >
                <Mail size={20} /> Email
              </motion.a>
            </div>
          </div>

          <div
            className={`${oxanium.className} mt-8 text-center text-gray-600 space-y-2 text-sm sm:text-base`}
          >
            <p>
              📩 General:{" "}
              <a
                href="mailto:docoder@docoders.com"
                className="hover:text-cyan-600"
              >
                docoder@docoders.com
              </a>
            </p>
            <p>
              🦾 Support:{" "}
              <a
                href="mailto:support@docoder.com"
                className="hover:text-cyan-600"
              >
                support@docoder.com
              </a>
            </p>
            <p>
              ℹ Info:{" "}
              <a
                href="mailto:info@docoder.com"
                className="hover:text-cyan-600"
              >
                info@docoder.com
              </a>
            </p>
          </div>

          <div
            className={`${oxanium.className} mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm`}
          >
            © {new Date().getFullYear()} TechTrend Innovations. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}