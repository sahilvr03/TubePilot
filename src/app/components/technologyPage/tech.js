"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Orbitron, Oxanium } from "next/font/google";
import { PricingCard, PlanModal } from "../reusable/featurecard";

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
  { 
    name: "SaaS Starter", 
    price: "$599", 
    oldPrice: "$799",
    features: ["Basic AI Tools", "1 User Account", "Email Support"] 
  },
  { 
    name: "SaaS Pro", 
    price: "$999", 
    oldPrice: "$1299",
    features: ["Advanced AI Dashboard", "Team Access", "Priority Support"] 
  },
  { 
    name: "SaaS Enterprise", 
    price: "$2500 & upto", 
    oldPrice: "$3500 & upto",
    features: ["Custom Modules", "White-Label", "Dedicated Support"] 
  },
];


  const ecommercePlans = [
    { name: "Starter Store", price: "$199", features: ["Shopify Store Setup", "20 Products", "Basic Theme Customization"] },
    { name: "Pro Store", price: "$399", features: ["Custom Shopify Theme", "100 Products", "Email Marketing Integration"] },
    { name: "Advanced Suite", price: "$699", features: ["Headless Commerce", "Unlimited Products", "Automation & Analytics"] },
  ];

  const mobilePlans = [
    { name: "Android App", price: "$499", features: ["Native Android Build", "1 Revision", "Play Store Upload"] },
    { name: "iOS & Android", price: "$1199", features: ["Cross-platform App", "2 Revisions", "Store Deployment"] },
    { name: "App + Dashboard", price: "$1499", features: ["App + Admin Panel", "Custom Features", "API Integration"] },
  ];

// Add new plans

const aiPlans = [
  { 
    name: "AI Assistant Package", 
    price: "$299", 
    features: [
      "AI Chatbot for Web/App", 
      "Product Recommendation AI", 
      "Smart Search Integration"
    ] 
  },
  { 
    name: "AI Software Integration", 
    price: "$599", 
    features: [
      "AI Analytics Dashboard", 
      "Predictive Insights", 
      "Automated Workflows & Reports"
    ] 
  },
  { 
    name: "AI Model Training Package", 
    price: "$999", 
    features: [
      "Custom AI Model Development", 
      "Data Preprocessing & Cleaning", 
      "Model Training & Optimization", 
      "Deployment Ready Pipelines"
    ] 
  }
];


const marketingPlans = [
  { 
    name: "Starter Marketing", 
    price: "$150/month", 
    features: ["Social Media Setup (2 Platforms)", "Basic SEO Setup", "Email Marketing Template"] 
  },
  { 
    name: "Growth Marketing", 
    price: "$499/month", 
    features: ["SEO Optimization (10 Keywords)", "Paid Ads Setup", "Weekly Social Media Posts"] 
  },
  { 
    name: "Enterprise Marketing", 
    price: "$999/month", 
    features: ["Full SEO Strategy (30+ Keywords)", "Advanced PPC Campaigns", "Content + Social Media Management", "Monthly Analytics Report"] 
  },
];

const bundlePlans = [
  { 
    name: "E-commerce Web + App", 
    price: "$799 - $999", 
    features: ["Custom Website", "E-commerce Store Setup", "Mobile App (iOS + Android)", "Basic AI Assistant"] 
  },
  { 
    name: "SaaS + App Package", 
    price: "$1199 - $1599", 
    features: ["Custom SaaS Platform", "Mobile App Integration", "API Development", "Team Collaboration Features"] 
  },
  { 
    name: "SaaS + App + AI Suite", 
    price: "$2599", 
    features: ["SaaS Platform + Mobile App", "Full AI Assistant & Analytics", "White-label Branding", "Dedicated Support & Training"] 
  },
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
    plan: "",
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
    <section className="py-8 px-4 sm:px-6 lg:px-8 text-white">
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
            <PricingCard key={plan.name} plan={plan} index={index} openModal={openModal} />
          ))}
        </div>
      </div>
    </section>
  );

  // Sales / Limited-Time Offer Section
  const renderSalesSection = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
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
      {renderSection("AI Packages", aiPlans)}
      {renderSection("Mobile Application Plans", mobilePlans)}
      {renderSection("Marketing Packages", marketingPlans)}
      {renderSection("SaaS AI Products", saasPlans)}
      {renderSection("Full-Service Bundles", bundlePlans)}

      {/* Modal for collecting user info */}
      <PlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitMessage={submitMessage}
      />
    </div>
  );
}