"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
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

// Tech Logos
const techLogos = [
  // 🌐 Frontend
  { name: "React", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "Vue.js", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/angularjs/angularjs-original.svg" },
{ name: "TailwindCSS", url: "https://cdn.jsdelivr.net/npm/simple-icons@15.11.0/icons/tailwindcss.svg" },
  { name: "Bootstrap", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/bootstrap/bootstrap-original.svg" },
  { name: "Sass", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/sass/sass-original.svg" },

  // ⚙️ Backend
  { name: "Node.js", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/nodejs/nodejs-original.svg" },
  { name: "Express", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/express/express-original-wordmark.svg" }, 
  { name: "Django", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/django/django-plain.svg" },
  { name: "Flask", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/flask/flask-original-wordmark.svg" },
  { name: "Spring Boot", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/spring/spring-original.svg" },
  { name: "PHP", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/php/php-original.svg" },
  { name: "Laravel", url: "https://cdn.jsdelivr.net/npm/simple-icons@15.11.0/icons/laravel.svg" },


  // 🤖 AI / ML
  { name: "TensorFlow", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/pytorch/pytorch-original.svg" },
  { name: "Scikit-learn", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "Pandas", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/pandas/pandas-original.svg" },
  { name: "NumPy", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/numpy/numpy-original.svg" },

  // 🛢 Databases
  { name: "PostgreSQL", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/mysql/mysql-original.svg" },
  { name: "SQLite", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/sqlite/sqlite-original.svg" },
  { name: "Redis", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/redis/redis-original.svg" },

  // ☁️ Cloud & DevOps
  { name: "Docker", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/docker/docker-original.svg" },
  { name: "Kubernetes", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Azure", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/azure/azure-original.svg" },
  { name: "Google Cloud", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/googlecloud/googlecloud-original.svg" },
  { name: "GitHub Actions", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/github/github-original.svg" },
  { name: "Jenkins", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/jenkins/jenkins-original.svg" },

  // 🛠 Tools & Others
  { name: "Git", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/git/git-original.svg" },
  { name: "GitHub", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/github/github-original.svg" },
  { name: "Figma", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/figma/figma-original.svg" },
  { name: "VS Code", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/vscode/vscode-original.svg" },
  { name: "Postman", url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
];



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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 pt-20 overflow-hidden"
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
                renderer="canvas"
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

{/* 🚂 Moving Tech Logos Infinite Row */}
<div className="relative w-full overflow-hidden mt-12">
  <div className="bg-gradient-to-r from-gray-800/60 via-gray-900/80 to-gray-800/60 
                  rounded-xl border border-gray-700/50 shadow-lg backdrop-blur-md py-6">
    <motion.div
      className="flex gap-12 items-center"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        duration: 30, // smooth and continuous
        ease: "linear",
      }}
    >
      {/* Duplicate rows back-to-back for seamless loop */}
      {[...Array(2)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-12">
          {techLogos.map((tech, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center">
              <img
                src={tech.url}
                alt={tech.name}
                className="w-14 h-14 object-contain drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
              />
              <span className="text-sm text-gray-300 mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
</div>


    </section>
  );
}
