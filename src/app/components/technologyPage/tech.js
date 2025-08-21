"use client";

import React from "react";
import { motion } from "framer-motion";

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

  const iotPlans = [
    { name: "Sensor Kit", price: "$299", features: ["Sensor Setup", "Data Visualization", "Basic Dashboard"] },
    { name: "IoT Pro", price: "$599", features: ["Custom IoT Devices", "Mobile App Integration", "Analytics Dashboard"] },
    { name: "Industrial IoT", price: "Custom", features: ["Multi-device Network", "Real-time Monitoring", "Support"] },
  ];

  const bundlePlans = [
    { name: "Launch Pack", price: "$999", features: ["Store Setup", "Mobile App", "Basic Marketing"] },
    { name: "Growth Pack", price: "$1999", features: ["E-commerce + App", "SEO & Ads", "Email + Social Campaigns"] },
    { name: "Enterprise Pack", price: "Custom", features: ["Custom Web + App Dev", "Marketing Strategy", "Dedicated Team"] },
  ];

  const renderSection = (title, plans) => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400 drop-shadow-lg">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Flexible plans tailored for your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 0 20px rgba(34,211,238,0.5)" }}
              className="bg-[#111] p-6 rounded-xl border border-cyan-500/20 shadow-lg transition-all"
            >
              <div
                className={`text-3xl mb-3 ${index % 2 === 0 ? "text-cyan-400" : "text-pink-500"}`}
              >
                💡
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-2xl font-semibold text-cyan-300 mb-4">{plan.price}</p>
              <ul className="text-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature} className="mb-2">• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {renderSection("SaaS AI Products", saasPlans)}
      {renderSection("E-commerce Services", ecommercePlans)}
      {renderSection("Mobile Application Plans", mobilePlans)}
      {renderSection("IoT Development Solutions", iotPlans)}
      {renderSection("Full-Service Bundles", bundlePlans)}
    </div>
  );
}
