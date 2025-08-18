import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';



export default function Navbar() {
  return (
        <nav className="fixed w-full z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 flex items-center"
              >
                <h1 className="text-2xl font-extrabold leading-tight">
                  <span className="block ttext-gray-300 hover:text-cyan-400">Docoderst</span>
                </h1>
              </motion.div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  {['Sign-In', 'Contact Us'].map((item, index) => (
                    <motion.a
                      key={item}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
}
