"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Orbitron, Oxanium } from "next/font/google";
import { useEffect, useState } from "react";

// Fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Media query hook
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

// Tech Logos
const techLogos = [
  { name: "React", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/react/react-original.svg" },
  { name: "Next.js", url: "/next.webp" },
  { name: "Vue.js", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/angularjs/angularjs-original.svg" },
  { name: "TailwindCSS", url: "/tailwind.png" },
  { name: "Node.js", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/nodejs/nodejs-original.svg" },
  { name: "Django", url: "/django.png" },
  { name: "MongoDB", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/docker/docker-original.svg" },
  { name: "AWS", url: "/aws.png" },
  { name: "Google Cloud", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/googlecloud/googlecloud-original.svg" },
  { name: "GitHub", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/github/github-original.svg" },
];

// Lazy load Lottie
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const duration = isMobile ? 15 : 70;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-20 overflow-hidden bg-white text-gray-900"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className={`${oxanium.className} text-lg font-semibold text-orange-500 mb-2 tracking-wide`}>
              Empowering Businesses with AI
            </p>

            <h1
              className={`${orbitron.className} text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-6`}
            >
              <span className="block bg-gradient-to-r from-orange-500 via -blue-600 to-black text-transparent bg-clip-text drop-shadow-sm">
                TechTrend Innovations
              </span>
              <span className="block text-gray-800 mt-2 text-xl sm:text-2xl md:text-3xl">
                AI-Powered SaaS & Digital Products
              </span>
            </h1>

            <p
              className={`${oxanium.className} text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed`}
            >
              We design high-performance SaaS, intelligent assistants, mobile apps, and IoT solutions—built with
              cutting-edge AI and stunning user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #3b82f6" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("technologies")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${oxanium.className} px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold shadow-md text-sm sm:text-base`}
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #f97316" }}
                whileTap={{ scale: 0.95 }}
                className={`${oxanium.className} px-6 py-3 sm:px-8 sm:py-3 border border-orange-500 bg-transparent rounded-xl text-orange-600 font-medium shadow-sm text-sm sm:text-base`}
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
            <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] aspect-square">
              <DotLottieReact src="/animations/new.json" loop autoplay />
            </div>

            {/* Tech Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 sm:mt-6 ${oxanium.className}`}
            >
              {["AI Assistants", "E-commerce APIs", "Mobile SDKs", "IoT Platforms", "Cloud Services"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-orange-50 to-blue-50 border border-blue-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-blue-700 hover:scale-105 transition-transform shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Moving Tech Logos Section */}
      <div className="relative w-full overflow-hidden mt-10 sm:mt-16 px-2">
        <div className="relative bg-white rounded-xl border border-gray-200 shadow-lg py-4 sm:py-6 overflow-hidden">
          <motion.div
            className="flex items-center will-change-transform"
            animate={{ x: ["0%", "-350%"] }}
            transition={{ repeat: Infinity, duration, ease: "linear" }}
          >
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-6 sm:gap-8 md:gap-10 flex-shrink-0 px-2">
                {techLogos.map((tech, i) => (
                  <div
                    key={`${idx}-${i}`}
                    className="flex flex-col items-center flex-shrink-0 transition-all duration-300 hover:scale-110 group"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl flex items-center justify-center border border-gray-200 shadow-md">
                        <img
                          src={tech.url}
                          alt={tech.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded shadow-md border border-gray-200 z-20">
                        {tech.name}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2 hidden sm:block font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Gradient fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white via-white/80 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
