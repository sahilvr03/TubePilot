"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Orbitron, Oxanium } from "next/font/google";

// Fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Lazy load Lottie
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

export default function HeroSection() {
  // Init particles (no types needed)
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 pt-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p
              className={`${oxanium.className} text-lg font-semibold text-cyan-400 mb-2 tracking-wide`}
            >
              Empowering Businesses with AI
            </p>

            <h1
              className={`${orbitron.className} text-4xl sm:text-6xl xl:text-7xl font-extrabold leading-tight mb-6`}
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-transparent bg-clip-text drop-shadow-xl">
                TechTrend Innovations
              </span>
              <span className="block text-gray-200 mt-2">
                AI-Powered SaaS & Digital Products
              </span>
            </h1>

            <p
              className={`${oxanium.className} text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed`}
            >
              We design high-performance SaaS, intelligent assistants, mobile
              apps, and IoT solutions—built with cutting-edge AI and stunning
              user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #06b6d4" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("technologies")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`${oxanium.className} px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold shadow-lg text-sm sm:text-base`}
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #f43f5e" }}
                whileTap={{ scale: 0.95 }}
                className={`${oxanium.className} px-8 py-3 border border-pink-500/60 bg-transparent rounded-xl text-white font-medium shadow-md text-sm sm:text-base`}
              >
                Book a Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Lottie Animation */}
            <div className="w-full max-w-[380px] sm:max-w-[450px] aspect-square">
              <DotLottieReact
                src="/animations/new.json"
                loop
                autoplay
                renderer="canvas" // smoother on mobile
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            </div>

            {/* Tech Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`flex flex-wrap gap-3 justify-center mt-6 ${oxanium.className}`}
            >
              {[
                "AI Assistants",
                "E-commerce APIs",
                "Mobile SDKs",
                "IoT Platforms",
                "Cloud Services",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 px-4 py-2 rounded-lg text-sm font-medium shadow-md text-cyan-300 hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Glow Effects */}
            <div className="absolute -bottom-6 -left-6 w-24 sm:w-28 h-24 sm:h-28 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-28 sm:w-32 h-28 sm:h-32 bg-pink-600/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>


   
    </section>
  );
}
