"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import TechnologyPage from "../../components/technologyPage/tech";
import AboutPage from "../../components/aboutPage/about";
import CTA from "../../components/ctaPage/cta";
import Testimonials from "../../components/testimonials/test";
import Navbar from "../../components/navbar/navbar";

export default function LandingPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 85, density: { enable: true, value_area: 800 } },
            color: { value: ["#3b82f6", "#22d3ee", "#f43f5e"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.4,
              random: true,
              anim: { enable: true, speed: 0.7, opacity_min: 0.3 },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: true, speed: 2, size_min: 0.5 },
            },
            line_linked: {
              enable: true,
              distance: 140,
              color: "#22d3ee",
              opacity: 0.35,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 150, line_linked: { opacity: 0.5 } },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      const canvas = document.getElementById("particles-js");
      if (canvas) canvas.remove();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />

      {/* Particle Background */}
      <div
        id="particles-js"
        className="absolute w-full h-full z-0 opacity-90"
      ></div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 8px rgba(34,211,238,0)",
                    "0 0 15px rgba(34,211,238,0.6)",
                    "0 0 8px rgba(34,211,238,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-xs sm:text-sm md:text-base mb-4 font-myfont font-semibold uppercase tracking-wide"
              >
                Next-Level AI Solutions
              </motion.div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-myfont font-extrabold leading-tight mb-6">
                <span className="block text-red-400 drop-shadow-lg">
                  TechTrend Innovations
                </span>
                <span className="block text-white/90">
                  AI-Powered SaaS & Digital Products
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                We craft high-performance AI-driven SaaS, immersive websites,
                mobile apps, and IoT innovations with futuristic design.
              </motion.p>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full min-h-[300px] flex flex-col mt-[-30] items-center justify-center"
            >
              {/* Lottie Animation */}
              <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] aspect-square">
                <DotLottieReact
                  src="/animations/new.json"
                  loop
                  autoplay
                  renderer="svg"
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid meet",
                  }}
                />
              </div>

              {/* Buttons + Tech Tags */}
              <div className="flex flex-col items-center w-full ">
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22d3ee" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-3 bg-red-500 hover:bg-red-400 rounded-xl text-white font-semibold transition-all shadow-lg text-sm sm:text-base"
                  >
                    🚀 Explore Solutions
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #f43f5e" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-3 border border-red-500 bg-transparent rounded-xl text-white font-medium transition-all shadow-md text-sm sm:text-base"
                  >
                    📁 Request a Demo
                  </motion.button>
                </div>

                {/* Tech Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex flex-wrap gap-3 justify-center font-myfont"
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
                      className="bg-cyan-500/20 border border-cyan-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-md text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Glow Effects */}
              <div className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-28 sm:w-40 h-28 sm:h-40 bg-pink-600/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Pages */}
      <TechnologyPage />
      <Testimonials />
      <AboutPage />
      <CTA />
    </div>
  );
}
