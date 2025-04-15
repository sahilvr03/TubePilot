"use client"

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
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 75,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#3b82f6", "#6366f1", "#0ea5e9"] // Futuristic blue/violet
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000"
              },
              polygon: {
                nb_sides: 6
              }
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 0.7,
                opacity_min: 0.3,
                sync: false
              }
            },
            size: {
              value: 3.5,
              random: true,
              anim: {
                enable: true,
                speed: 3,
                size_min: 0.5,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#60a5fa", // Slight neon blue
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      }
    };
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
      const canvas = document.getElementById('particles-js');
      if (canvas) canvas.remove();
    };
  }, []);
  
  

  return (
    <div className="bg-white min-h-screen text-gray-900 overflow-x-hidden">
      {/* Navbar */}
  <Navbar/>
      {/* Particle Background */}
      <div id="particles-js" className="absolute w-full h-full z-0 bg-gradient-to-tr from-white-100 via-white to-blue-200 opacity-80"></div>
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 "
>
  <div className="absolute inset-0 z-0 " />

  <div className="relative z-10 max-w-7xl mx-auto w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{
            textShadow: [
              "0 0 8px rgba(59, 130, 246, 0)",
              "0 0 12px rgba(59, 130, 246, 0.3)",
              "0 0 8px rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-sm sm:text-base mb-4 font-semibold text-gray-600 uppercase tracking-wide"
        >
          Empowering the Future with AI
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-gray-900">
          <span className="block text-blue-500">Smart City Lab </span>
          <span className="block text-gray-700">National</span>
          <span className="block text-gray-700"> Centre Of Artificial Intelligence.
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-700 mb-8 max-w-xl"
        >
          Our AI research lab develops scalable, responsible machine learning
          systems that push the boundaries of what’s possible — transforming
          industries and accelerating innovation.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 rounded-xl text-white font-semibold transition-all shadow-lg"
          >
            🚀 Explore Research
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition-all shadow-md"
          >
            📁 Browse Projects
          </motion.button>
        </div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          {["TensorFlow", "PyTorch", "OpenAI", "NVIDIA"].map((tech) => (
            <div
              key={tech}
              className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm font-semibold text-gray-700"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-full min-h-[400px] hidden lg:block"
      >
        <div className="absolute inset-0  overflow-hidden pl-8">
        <Image src="/robo.png" 
        alt="My Image" 
        width={550} 
        height={450} />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/40"></div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl"></div>
      </motion.div>
    </div>
  </div>
</section>

<TechnologyPage/>


{/* second section*/}
<section
  id="home"
  className="relative min-h-[100vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-green-100 overflow-hidden"
>
  {/* Decorative Background Blur */}
  <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-green-400/20 opacity-30 blur-3xl rounded-full z-0" />

  <div className="relative z-10 max-w-7xl mx-auto w-full py-24">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-16 lg:gap-x-20"
    >


        {/* RIGHT: IMAGE BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[500px] pr-6"
      >
        <div className="relative overflow-hidden ">
          <Image
            src="/bb.png"
            alt="Smart AI Solutions"
            width={650}
            height={450}
            className="rounded-xl object-cover brightness-95"
          />
          <div className="absolute inset-0 " />
        </div>

        {/* Floating Gradient Lights */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400/20 rounded-full blur-2xl" />
        <div className="absolute -top-6 -right-6 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl" />
      </motion.div>
      {/* LEFT: TEXT BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center lg:text-left px-4"
      >
        <motion.p
          animate={{
            textShadow: [
              "0 0 6px rgba(34, 197, 94, 0)",
              "0 0 14px rgba(34, 197, 94, 0.5)",
              "0 0 6px rgba(34, 197, 94, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-sm sm:text-base mb-4 font-semibold text-green-600 uppercase tracking-widest"
        >
          AI-Powered Innovation
        </motion.p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
            Smart Solutions
          </span>
          <span className="block text-gray-800">
            for Urban Transformation
          </span>
        </h1>

        <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
          From <span className="font-semibold text-green-700">urban intelligence</span> to <span className="font-semibold text-emerald-600">sustainable AI systems</span>, we build technology that empowers cities to thrive. Explore the future with us.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 rounded-xl text-white font-semibold transition-all shadow-lg"
          >
            🚀 Explore Research
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition-all shadow-md"
          >
            📁 Browse Projects
          </motion.button>
        </div>
      </motion.div>

    
    </motion.div>
  </div>

  
</section>
<Testimonials/>
<AboutPage/>

<CTA/>








     
    

     
    </div>
  );
}