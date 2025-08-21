"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const reviews = [
  {
    name: "John Doe",
    role: "Music Producer",
    review:
      "This platform completely changed how I collaborate with artists. The UI is smooth, and the experience is top-notch!",
  },
  {
    name: "Emily Carter",
    role: "DJ & Performer",
    review:
      "Amazing! The animations and smooth interactions make the platform feel alive. It’s the future of music platforms!",
  },
  {
    name: "Michael Smith",
    role: "Sound Engineer",
    review:
      "I love the professionalism and sleek design. It helps me connect with musicians in a seamless way.",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-16  text-white">
      <h2
        className={`${orbitron.className} text-4xl font-bold mb-10 tracking-wide text-center`}
      >
        What Our Clients Say
      </h2>

      <div className="relative w-[90%] md:w-[700px] h-[250px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 flex flex-col items-center text-center px-6"
            >
              <FaQuoteLeft className="text-4xl text-yellow-400 mb-4" />
              <p className={`${oxanium.className} text-lg italic max-w-xl`}>
                {r.review}
              </p>
              <div className="flex text-yellow-400 mt-4 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h3
                className={`${orbitron.className} text-xl font-semibold mt-2`}
              >
                {r.name}
              </h3>
              <p className={`${oxanium.className} text-sm text-gray-400`}>
                {r.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex mt-6 space-x-2">
        {reviews.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-yellow-400" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
