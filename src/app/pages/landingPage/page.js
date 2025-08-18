"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import TechnologyPage from "../../components/technologyPage/tech";
import AboutPage from "../../components/aboutPage/about";
import CTA from "../../components/ctaPage/cta";
import Testimonials from "../../components/testimonials/test";
import Navbar from "../../components/navbar/navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
                className="text-sm sm:text-base mb-4 font-myfont font-semibold uppercase tracking-wide"
              >
                Next-Level AI Solutions
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-myfont font-extrabold leading-tight mb-8">
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
                className="text-lg text-gray-200 mb-8 max-w-xl"
              >
                We craft high-performance AI-driven SaaS, immersive websites, mobile apps, and IoT innovations with futuristic design.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22d3ee" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-red-500 hover:bg-red-400 rounded-xl text-white font-semibold transition-all shadow-lg"
                >
                  🚀 Explore Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px #f43f5e" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-red-500 bg-white-600 rounded-xl text-white font-medium transition-all shadow-md"
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
                className="mt-12 flex flex-wrap gap-3 font-myfont"
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
                    className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-lg text-sm font-semibold shadow-md text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full min-h-[400px] hidden lg:block"
            >
               <div className="  w-150">
      <DotLottieReact
        src="/animations/animation.json" // Path to your .lottie file
        loop
        autoplay
      />
    </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-pink-600/10 rounded-full blur-2xl"></div>
            </motion.div> */}
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
