"use client";

import { useState } from "react";
import PricingCard from "../reusable/featurecard";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });
const oxanium = Oxanium({ subsets: ["latin"], weight: ["400", "700"] });

export default function PricingSection({ title, plans }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`${orbitron.className} text-3xl sm:text-4xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg`}
          >
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6 rounded-full" />
          <p
            className={`${oxanium.className} text-lg text-gray-400 max-w-3xl mx-auto`}
          >
            Flexible plans tailored for your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              openModal={openModal} // ✅ Now safe, because PricingSection is a client component
            />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl max-w-md w-full mx-4 relative border border-cyan-500/30">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✖
              </button>
              <h3 className="text-2xl font-extrabold text-cyan-400 mb-6">
                Avail {selectedPlan}
              </h3>
              {/* form or details go here */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
