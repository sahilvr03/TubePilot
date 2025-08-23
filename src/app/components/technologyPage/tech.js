"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function TechnologyPage() {
  const saasPlans = [
    { name: "SaaS Starter", price: "$29/month", features: ["Basic AI Tools", "1 User Account", "Email Support"] },
    { name: "SaaS Pro", price: "$99/month", features: ["Advanced AI Dashboard", "Team Access", "Priority Support"] },
    { name: "SaaS Enterprise", price: "Custom", features: ["Custom Modules", "White-Label", "Dedicated Support"] },
  ];

  const ecommercePlans = [
    { name: "Starter Store", price: "$199", features: ["Shopify Store Setup", "20 Products", "Basic Theme Customization"] },
    { name: "Pro Store", price: "$399", features: ["Custom Shopify Theme", "100 Products", "Email Marketing Integration"] },
    { name: "Advanced Suite", price: "$799", features: ["Headless Commerce", "Unlimited Products", "Automation & Analytics"] },
  ];

  const mobilePlans = [
    { name: "Android App", price: "$499", features: ["Native Android Build", "1 Revision", "Play Store Upload"] },
    { name: "iOS & Android", price: "$899", features: ["Cross-platform App", "2 Revisions", "Store Deployment"] },
    { name: "App + Dashboard", price: "$1499", features: ["App + Admin Panel", "Custom Features", "API Integration"] },
  ];

  const bundlePlans = [
    { name: "Launch Pack", price: "$999", features: ["Store Setup", "Mobile App", "Basic Marketing"] },
    { name: "Growth Pack", price: "$1999", features: ["E-commerce + App", "SEO & Ads", "Email + Social Campaigns"] },
    { name: "Enterprise Pack", price: "Custom", features: ["Custom Web + App Dev", "Marketing Strategy", "Dedicated Team"] },
  ];

  // Sales Section Timer (countdown to 24 hrs from now)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    plan: "", // To store the selected plan name
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / (1000) % 60));
        setTimeLeft({ hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitMessage("Lead saved successfully ✅");
        setFormData({ name: "", email: "", phone: "", linkedin: "", plan: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitMessage("");
        }, 2000);
      } else {
        setSubmitMessage("Error saving lead. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error saving lead. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open modal and set plan name
  const openModal = (planName) => {
    setFormData((prev) => ({ ...prev, plan: planName }));
    setIsModalOpen(true);
  };

  const renderSection = (title, plans) => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${orbitron.className} text-3xl sm:text-4xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg`}>
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className={`${oxanium.className} text-lg text-gray-400 max-w-3xl mx-auto`}>
            Flexible plans tailored for your business.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/90 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 shadow-lg hover:shadow-cyan-400/40 transition-all overflow-hidden group"
            >
              {/* Animated Glow Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500 to-pink-500 opacity-20 blur-md group-hover:opacity-40 transition-all -z-10" />

              {/* Plan Title with Emoji */}
              <h3 className={`${orbitron.className} text-2xl font-extrabold mb-3 text-white flex items-center gap-2`}>
                <span className="text-2xl">
                  {index === 0 ? "🚀" : index === 1 ? "🔥" : "✨"}
                </span>
                {plan.name}
              </h3>

              {/* Price */}
              <p className={`${oxanium.className} text-4xl font-bold text-cyan-300 mb-6`}>
                {plan.price}
              </p>

              {/* Features */}
              <ul className={`${oxanium.className} space-y-3 mb-6`}>
                {plan.features.map((feature, fIndex) => (
                  <motion.li
                    key={feature}
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 group-hover:animate-pulse" />
                    {feature}
                    {fIndex === 0 ? " 🎯" : fIndex === 1 ? " ⚡" : " 💡"}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.08, rotate: [-1, 1, -1, 0], boxShadow: "0 0 20px #06b6d4" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(plan.name)}
                className={`${oxanium.className} w-full py-3 text-lg bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2`}
              >
                Avail Offer <span className="animate-bounce">🪄</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Sales / Limited-Time Offer Section
  const renderSalesSection = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0a0a0a] to-[#111] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${orbitron.className} text-4xl font-extrabold mb-6 text-pink-400 drop-shadow-lg`}
        >
          🚀 Limited-Time Offer!
        </motion.h2>
        <p className={`${oxanium.className} text-lg text-gray-300 mb-6`}>
          Grab exclusive discounts before the timer runs out.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 mb-10">
          {["hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="text-center">
              <p className="text-4xl font-bold text-cyan-400">{timeLeft[unit]}</p>
              <span className="uppercase text-sm text-gray-400">{unit}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal("Limited-Time Offer")}
          className={`${oxanium.className} px-10 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/40 transition-all`}
        >
          Claim Your Discount
        </motion.button>
      </div>
    </section>
  );

  return (
    <div id="technologies">
      {renderSalesSection()}
      {renderSection("E-commerce Services", ecommercePlans)}
      {renderSection("Mobile Application Plans", mobilePlans)}
      {renderSection("Full-Service Bundles", bundlePlans)}
      {renderSection("SaaS AI Products", saasPlans)}

      {/* Modal for collecting user info */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-[#1a1a1a] p-8 rounded-2xl max-w-md w-full mx-4 relative border border-cyan-500/30"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className={`${orbitron.className} text-2xl font-extrabold text-cyan-400 mb-6`}>
              Avail {formData.plan}
            </h3>
            <form onSubmit={handleSubmit} className={`${oxanium.className} space-y-4`}>
              <div>
                <label className="block text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">LinkedIn (Optional)</label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your LinkedIn Profile"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${oxanium.className} w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40 transition-all disabled:opacity-50`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
            {submitMessage && (
              <p className={`${oxanium.className} mt-4 text-center text-gray-300`}>{submitMessage}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}