"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
            number: { value: 75, density: { enable: true, value_area: 800 } },
            color: { value: ["#3b82f6", "#e11d48", "#0ea5e9"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 0.7, opacity_min: 0.3 },
            },
            size: {
              value: 3.5,
              random: true,
              anim: { enable: true, speed: 3, size_min: 0.5 },
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#f43f5e",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
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
    <div className="relative min-h-screen text-white overflow-x-hidden">
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 8px rgba(59,130,246,0)",
                    "0 0 12px rgba(245,158,11,0.3)",
                    "0 0 8px rgba(59,130,246,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-sm sm:text-base mb-4 font-semibold text-gray-500 uppercase tracking-wide"
              >
                Empowering Businesses with AI Solutions
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-gray-50">
                <span className="block text-blue-500">TechTrend Innovations</span>
                <span className="block text-gray-700">
                  AI-Powered SaaS & Digital Solutions
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg text-gray-400 mb-8 max-w-xl"
              >
                Transform your business with AI-driven SaaS, e-commerce platforms, mobile apps, and IoT innovations.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-xl text-white font-semibold transition-all shadow-lg"
                >
                  🚀 Explore Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white/20 bg-yellow-500 backdrop-blur-lg rounded-xl text-white font-medium transition-all shadow-md"
                >
                  📁 Request a Demo
                </motion.button>
              </div>

              {/* Tech Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12 flex flex-wrap gap-3"
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
                    className="bg-blue-600/90 px-4 py-2 rounded-lg text-sm font-semibold shadow-md text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full min-h-[400px] hidden lg:block"
            >
              <div className="absolute inset-0 overflow-hidden pl-8">
                <Image
                  src="/robo.png"
                  alt="TechTrend AI Robot"
                  width={550}
                  height={450}
                  className="drop-shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-rose-600/10 rounded-full blur-2xl"></div>
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
