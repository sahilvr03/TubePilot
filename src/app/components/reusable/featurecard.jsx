"use client";

import React from "react";
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

// Reusable Pricing Card Component
export function PricingCard({ plan, index, openModal }) {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [showDetails, setShowDetails] = React.useState(false);

  // Extract numeric price
  const getPriceValue = (priceStr) => {
    if (priceStr.toLowerCase().includes("custom")) return null;
    const nums = priceStr.match(/\d+/g);
    if (!nums) return null;
    if (nums.length === 1) return parseInt(nums[0]);
    return [parseInt(nums[0]), parseInt(nums[1])];
  };

  const basePrice = getPriceValue(plan.price);

  let totalPrice = basePrice;
  if (selectedOption && basePrice) {
    const extra = selectedOption === "assistant" ? 299 : 499;
    if (Array.isArray(basePrice)) {
      totalPrice = [basePrice[0] + extra, basePrice[1] + extra];
    } else {
      totalPrice = basePrice + extra;
    }
  }

  // toggle radio like checkbox
  const handleRadioChange = (e, option) => {
    e.stopPropagation();
    setSelectedOption((prev) => (prev === option ? null : option));
  };

  return (
    <>
      {/* Pricing Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="relative bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/90 backdrop-blur-sm 
                   p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-lg 
                   hover:shadow-cyan-400/40 transition-all overflow-hidden group 
                   flex flex-col h-full "
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500 to-pink-500 opacity-20 blur-md group-hover:opacity-40 transition-all -z-10" />

{/* Title */}
<h3
  className={`${orbitron.className} text-xl sm:text-2xl font-extrabold mb-3 text-white flex items-center gap-2 justify-center sm:justify-start`}
>
  <span className="text-xl sm:text-2xl">
    {index === 0 ? "🚀" : index === 1 ? "🔥" : "✨"}
  </span>
  {plan.name}
</h3>

{/* Price Section */}
<div className="mb-4 text-center sm:text-left">
  {basePrice && (
    <p className={`${oxanium.className} text-lg sm:text-xl text-gray-400 line-through`}>
      {Array.isArray(basePrice)
        ? `$${Math.round(basePrice[0] * 1.2)} - $${Math.round(basePrice[1] * 1.2)}`
        : `$${Math.round(basePrice * 1.2)}`}
    </p>
  )}
  <p className={`${oxanium.className} text-3xl sm:text-4xl font-bold text-cyan-300`}>
    {plan.price}
  </p>
</div>

{/* Features */}
<ul
  className={`${oxanium.className} space-y-2 sm:space-y-3 mb-6 flex-1 text-center sm:text-left`}
>
  {plan.features.slice(0, 3).map((feature, fIndex) => (
    <motion.li
      key={feature}
      whileHover={{ scale: 1.05, x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center sm:items-start justify-center sm:justify-start text-sm sm:text-base text-gray-300"
    >
      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mr-2 group-hover:animate-pulse" />
      {feature}
      {fIndex === 0 ? " 🎯" : fIndex === 1 ? " ⚡" : " 💡"}
    </motion.li>
  ))}
  {plan.features.length > 3 && (
    <li className="text-gray-400 italic text-sm sm:text-base">+ more...</li>
  )}
</ul>


{/* AI Options (hide if AI package) */}
{plan.name.toLowerCase().includes("ai") ? null : (
  <div className="space-y-2 mb-6">
    <label
      className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        checked={selectedOption === "assistant"}
        onChange={() =>
          setSelectedOption((prev) => (prev === "assistant" ? null : "assistant"))
        }
        className="accent-cyan-500 w-4 h-4 sm:w-5 sm:h-5"
      />
      AI Assistant ($299)
    </label>
    <label
      className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        checked={selectedOption === "full"}
        onChange={() =>
          setSelectedOption((prev) => (prev === "full" ? null : "full"))
        }
        className="accent-cyan-500 w-4 h-4 sm:w-5 sm:h-5"
      />
       AI INTEGRATION + AI ASSISTANT  ($499)
    </label>
  </div>
)}


        {/* Details Button */}
        <button
          onClick={() => setShowDetails(true)}
          className="w-full py-2 text-xs sm:text-sm text-cyan-400 border cursor-pointer border-cyan-400/40 rounded-lg hover:bg-cyan-500/10 transition-all"
        >
          View Details
        </button>

        {/* CTA Button (open form) */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px #06b6d4",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal(plan.name)}
          className={`${oxanium.className} w-full py-3 mt-3 text-sm sm:text-lg bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md cursor-pointer hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2`}
        >
          Avail Offer <span className="animate-bounce">🪄</span>
        </motion.button>
      </motion.div>

      {/* Detail Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#1a1a1a] p-6 sm:p-8 rounded-2xl w-full max-w-sm sm:max-w-lg mx-4 relative border border-cyan-500/30"
          >
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <h3 className={`${orbitron.className} text-xl sm:text-2xl font-extrabold text-cyan-400 mb-4`}>
              {plan.name} - Details
            </h3>

            <p className="text-gray-300 mb-4">{plan.price}</p>

            <ul className="space-y-2 text-sm sm:text-base text-gray-300 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  {f}
                </li>
              ))}
            </ul>

            {selectedOption && totalPrice && (
              <p className="text-pink-400 font-bold mb-6 text-sm sm:text-base">
                Total Price:{" "}
                {Array.isArray(totalPrice)
                  ? `$${totalPrice[0]} - $${totalPrice[1]}`
                  : `$${totalPrice}`}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

// Modal (Form)
export function PlanModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  handleSubmit,
  isSubmitting,
  submitMessage,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    isOpen && (
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
          className="bg-[#1a1a1a] p-6 sm:p-8 rounded-2xl w-full max-w-sm sm:max-w-md mx-4 relative border border-cyan-500/30"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h3
            className={`${orbitron.className} text-xl sm:text-2xl font-extrabold text-cyan-400 mb-6`}
          >
            Avail {formData.plan}
          </h3>
          <form onSubmit={handleSubmit} className={`${oxanium.className} space-y-4`}>
            <div>
              <label className="block text-gray-300 mb-1 text-sm sm:text-base">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1 text-sm sm:text-base">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1 text-sm sm:text-base">LinkedIn (Optional)</label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                placeholder="Your LinkedIn Profile"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${oxanium.className} w-full py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40 transition-all disabled:opacity-50 text-sm sm:text-base`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
          {submitMessage && (
            <p className={`${oxanium.className} mt-4 text-center text-gray-300 text-sm sm:text-base`}>
              {submitMessage}
            </p>
          )}
        </motion.div>
      </motion.div>
    )
  );
}
