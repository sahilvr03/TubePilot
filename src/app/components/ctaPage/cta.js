import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTA() {
  return (
    <div>
      {/* Call to Action */}
      <section
        id="contact"
        className="relative py-32 px-4 sm:px-6 lg:px-8 text-center "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-950 to-pink-950 p-12 rounded-2xl shadow-xl border border-cyan-500/20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-cyan-400 drop-shadow-lg">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Partner with us to leverage AI-driven SaaS, e-commerce, mobile apps,
            and IoT solutions for your business growth.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(34,211,238,0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg shadow-lg text-white font-semibold text-lg transition-all"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo + name */}
            <div className="mb-6 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  className="h-15 w-auto"
                />
              </motion.div>
              <p className="text-gray-400 mt-2">TechTrend Innovations</p>
            </div>

            {/* Social links */}
            <div className="flex space-x-6">
              {['Twitter', 'GitHub', 'LinkedIn', 'YouTube'].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{
                    y: -3,
                    color: '#22d3ee',
                    textShadow: '0 0 8px rgba(34,211,238,0.8)',
                  }}
                  href="#"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} TechTrend Innovations. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
