"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function PricingCard({ plan, index, openModal }) {
  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/90 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 shadow-lg hover:shadow-cyan-400/40 transition-all overflow-hidden group"
    >
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500 to-pink-500 opacity-20 blur-md group-hover:opacity-40 transition-all -z-10" />

      {/* Title */}
      <h3 className={`${orbitron.className} text-2xl font-extrabold mb-3 text-white flex items-center gap-2`}>
        <span className="text-2xl">
          {index === 0 ? "🚀" : index === 1 ? "🔥" : "✨"}
        </span>
        {plan.name}
      </h3>

      {/* Price */}
      <p className={`${oxanium.className} text-4xl font-bold text-cyan-300 mb-6`}>
        {plan.price}
      </p>

      {/* Features */}
      <ul className={`${oxanium.className} space-y-3 mb-6`}>
        {plan.features.map((feature, fIndex) => (
          <motion.li
            key={feature}
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center text-gray-300"
          >
            <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 group-hover:animate-pulse" />
            {feature}
            {fIndex === 0 ? " 🎯" : fIndex === 1 ? " ⚡" : " 💡"}
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.08, rotate: [-1, 1, -1, 0], boxShadow: "0 0 20px #06b6d4" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => openModal(plan.name)}
        className={`${oxanium.className} w-full py-3 text-lg bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2`}
      >
        Avail Offer <span className="animate-bounce">🪄</span>
      </motion.button>
    </motion.div>
  );
}
