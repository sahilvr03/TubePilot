"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute w-full h-full z-0 opacity-90"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: {
            value:
              typeof window !== "undefined" && window.innerWidth < 640
                ? 25
                : 80,
            density: { enable: true, area: 800 },
          },
          color: { value: ["#06b6d4", "#3b82f6", "#f43f5e"] },
          shape: { type: "circle" },
          opacity: { value: 0.4, random: true },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 120,
            color: "#3b82f6",
            opacity: 0.25,
            width: 1,
          },
          move: { enable: true, speed: 0.6, outModes: "out" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
        },
        retina_detect: true,
      }}
    />
  );
}
