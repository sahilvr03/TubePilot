import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'



export default function CTA()  {
  return (
    <div>
 <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 text-center bg-white">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-orange-50 p-12 rounded-2xl shadow-xl border border-gray-200"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Ready to Collaborate?</h2>
      <p className="text-xl text-gray-600 mb-8">
        Whether youre interested in research partnerships, consulting, or just want to learn more about our work, wed love to hear from you.
      </p>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg shadow-lg text-white font-semibold text-lg transition-all"
      >
        Get in Touch
      </motion.button>
    </motion.div>
</section>

  {/* Footer */}
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
                    <Image src="/images/logo.png" alt="Logo" width={200} height={100} className="h-15 w-auto" />
                  </motion.div>
          <p className="text-gray-600 mt-2">Pioneering the Future of Artificial Intelligence</p>
        </div>
        <div className="flex space-x-6">
          {['Twitter', 'GitHub', 'LinkedIn', 'YouTube'].map((social) => (
            <motion.a
              key={social}
              whileHover={{ y: -3 }}
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Research Lab. All rights reserved.
      </div>
    </div>
    </footer>
</div>  
 


   
  )
}
