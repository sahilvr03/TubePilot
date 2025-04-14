import React from 'react'
import { motion } from 'framer-motion'
export default function page() {
  return (
    <div> {/* About Section */}
    <section id="about" className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gray-50">
     <div className="max-w-7xl mx-auto">
       <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="text-center"
       >
         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">About Our Research Lab</h2>
         <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           Founded in 2018, our lab brings together world-class researchers and engineers to advance the frontiers of artificial intelligence.
         </p>
       </motion.div>

       <div className="grid md:grid-cols-3 gap-8">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
         >
           <div className="text-4xl mb-4 text-blue-600">🔬</div>
           <h3 className="text-xl font-bold mb-3 text-gray-900">Fundamental Research</h3>
           <p className="text-gray-600">
             We publish groundbreaking papers in top-tier conferences and journals, advancing the theoretical foundations of AI.
           </p>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
         >
           <div className="text-4xl mb-4 text-orange-500">🛠️</div>
           <h3 className="text-xl font-bold mb-3 text-gray-900">Applied Solutions</h3>
           <p className="text-gray-600">
             Our technologies power real-world applications across healthcare, finance, robotics, and more.
           </p>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
         >
           <div className="text-4xl mb-4 text-blue-600">🌍</div>
           <h3 className="text-xl font-bold mb-3 text-gray-900">Ethical AI</h3>
           <p className="text-gray-600">
             Were committed to developing AI that is fair, transparent, and beneficial to all of humanity.
           </p>
         </motion.div>
       </div>
     </div>
   </section></div>
  )
}
