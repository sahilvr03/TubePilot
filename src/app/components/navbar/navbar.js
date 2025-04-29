import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';



export default function Navbar() {
  return (
    <div>    <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/90 border-b border-gray-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 flex items-center"
        >
          {/* <Image src="/logo.png" alt="Logo" width={200} height={100} className="h-15 w-auto" /> */}
          <h1 className="text-4xl sm:text-2xl md:text-2xl font-extrabold leading-tight">
                <span className="block text-red-400">TubePilot</span>
                
              </h1>
        </motion.div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-2">
            {['Home', 'About', 'Research Areas', 'Projects','Services', 'Publications','Team','News and Events', 'gallery', 'Contact Us'].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-all"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  </nav></div>
  )
}
