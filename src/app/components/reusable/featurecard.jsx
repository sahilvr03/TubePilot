"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "800", "900"], display: "swap" });
const oxanium  = Oxanium({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

const CARD_ICONS = ["🚀", "🔥", "✨"];

function parsePrice(priceStr) {
  if (!priceStr || priceStr.toLowerCase().includes("custom")) return null;
  const nums = String(priceStr).match(/\d+/g);
  if (!nums) return null;
  return nums.length === 1 ? parseInt(nums[0]) : [parseInt(nums[0]), parseInt(nums[1])];
}

function formatTotal(base, extra) {
  if (!base) return null;
  if (Array.isArray(base)) return `$${base[0] + extra} – $${base[1] + extra}`;
  return `$${base + extra}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// PRICING CARD
//
// SEO considerations:
//  — Card renders as an <article> — semantic landmark for a self-contained item
//  — H3 contains the plan name (keyword: "Shopify Store Setup", "AI Chatbot")
//  — Feature list uses <ul>/<li> — Google treats as structured list content
//  — "View Details" expands a modal (role="dialog") not a new page — no SEO leak
//  — Add-on checkboxes visible only on non-AI/non-marketing plans
//  — "Avail Offer" CTA changed to descriptive text for accessibility
// ─────────────────────────────────────────────────────────────────────────────

export function PricingCard({ plan, index, openModal }) {
  const [addOn, setAddOn]           = React.useState(null);   // "assistant" | "full" | null
  const [showDetails, setShowDetails] = React.useState(false);

  const base  = parsePrice(plan.price);
  const extra = addOn === "assistant" ? 299 : addOn === "full" ? 499 : 0;
  const total = addOn && base ? formatTotal(base, extra) : null;

  const isAiOrMarketing =
    plan.name.toLowerCase().includes("ai") ||
    plan.name.toLowerCase().includes("marketing");

  return (
    <>
      {/*
       * <article> = a self-contained, independently meaningful unit.
       * Google uses <article> as a strong topical signal — it treats each
       * pricing card as a distinct "document" about that specific service.
       *
       * aria-labelledby points to the H3 inside — screen readers announce
       * the card's name when a user navigates to it.
       */}
      <motion.article
        id={`plan-${plan.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
        aria-labelledby={`plan-title-${index}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="relative backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200
                   shadow-lg hover:shadow-cyan-200/50 transition-all overflow-hidden group
                   flex flex-col h-full bg-white"
      >
        {/* Decorative gradient — aria-hidden so screen readers skip it */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-pink-500/5 -z-10"
          aria-hidden="true"
        />

        {/* Badge — e.g. "Most Popular", "Best Value" */}
        {plan.badge && (
          <span
            className={`${oxanium.className} inline-block self-start mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200`}
            aria-label={`Plan badge: ${plan.badge}`}
          >
            {plan.badge}
          </span>
        )}

        {/*
         * H3 — plan name.
         * Contains keywords like "Shopify Store Setup", "AI Chatbot Package",
         * "Mobile App Development" — all valid long-tail keyword phrases.
         * id links to aria-labelledby on the <article>.
         */}
        <h3
          id={`plan-title-${index}`}
          className={`${orbitron.className} text-xl sm:text-2xl font-extrabold mb-3 text-gray-900
                      flex items-center gap-2 justify-center sm:justify-start`}
        >
          <span aria-hidden="true">{CARD_ICONS[index] ?? "💡"}</span>
          {plan.name}
        </h3>

        {/* Pricing display */}
        <div className="mb-4 text-center sm:text-left">
          {plan.oldPrice && (
            <p
              className={`${oxanium.className} text-lg sm:text-xl text-gray-400 line-through`}
              aria-label={`Original price: ${plan.oldPrice}`}
            >
              {plan.oldPrice}
            </p>
          )}
          <p
            className={`${oxanium.className} text-3xl sm:text-4xl font-bold text-cyan-600`}
            aria-label={`Current price: ${plan.price}`}
          >
            {plan.price}
          </p>
          {total && (
            <p className={`${oxanium.className} text-sm text-pink-600 font-semibold mt-1`}>
              Total with add-on: {total}
            </p>
          )}
        </div>

        {/*
         * Features list — <ul>/<li> for semantic list structure.
         * Each feature is a micro-keyword Google indexes as page text.
         * Example: "AI-Powered Product Recommendations" = rankable phrase.
         *
         * aria-label on the <ul> gives screen readers context for the list.
         */}
        <ul
          className={`${oxanium.className} space-y-2 sm:space-y-3 mb-6 flex-1 text-center sm:text-left list-none p-0`}
          aria-label={`Features included in ${plan.name}`}
        >
          {plan.features.slice(0, 4).map((feature, fi) => (
            <motion.li
              key={feature}
              whileHover={{ scale: 1.04, x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-start justify-center sm:justify-start text-sm sm:text-base text-gray-700"
            >
              <CheckCircle2
                className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              {feature}
            </motion.li>
          ))}
          {plan.features.length > 4 && (
            <li className="text-gray-400 italic text-sm">
              + {plan.features.length - 4} more included
            </li>
          )}
        </ul>

        {/* AI Add-on options — only shown on non-AI / non-marketing plans */}
        {!isAiOrMarketing && (
          <fieldset className="mb-6 bg-gray-50 border border-gray-200 p-4 rounded-lg">
            <legend className={`${oxanium.className} text-xs font-semibold text-gray-600 mb-2`}>
              Optional AI Add-ons
            </legend>

            <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer mb-2">
              <input
                type="checkbox"
                checked={addOn === "assistant"}
                onChange={() => setAddOn(p => p === "assistant" ? null : "assistant")}
                className="accent-cyan-500 w-4 h-4"
                aria-label="Add AI Assistant chatbot for $299"
              />
              <span>AI Chatbot Assistant <strong>+$299</strong></span>
            </label>

            <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={addOn === "full"}
                onChange={() => setAddOn(p => p === "full" ? null : "full")}
                className="accent-cyan-500 w-4 h-4"
                aria-label="Add full AI Integration and Assistant for $499"
              />
              <span>Full AI Integration + Assistant <strong>+$499</strong></span>
            </label>
          </fieldset>
        )}

        {/* View Details button */}
        <button
          onClick={() => setShowDetails(true)}
          aria-expanded={showDetails}
          aria-controls={`details-${index}`}
          className={`${oxanium.className} w-full py-2 text-xs sm:text-sm text-cyan-600 border border-cyan-300/50 rounded-lg hover:bg-cyan-50 transition-all mb-3`}
        >
          View Full Details
        </button>

        {/* Primary CTA */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #06b6d4" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal(plan.name)}
          aria-label={`Get started with ${plan.name} — ${plan.price}`}
          className={`${oxanium.className} w-full py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-pink-500
                      text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40
                      transition-all flex items-center justify-center gap-2`}
        >
          Get Started <span aria-hidden="true">→</span>
        </motion.button>
      </motion.article>

      {/* ── Details Modal ──────────────────────────────────────────────────── */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`details-title-${index}`}
          id={`details-${index}`}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 sm:p-8 rounded-2xl w-full max-w-sm sm:max-w-lg relative border border-gray-200 shadow-2xl"
          >
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <h3
              id={`details-title-${index}`}
              className={`${orbitron.className} text-xl sm:text-2xl font-extrabold text-cyan-600 mb-1`}
            >
              {plan.name}
            </h3>

            {plan.seoDesc && (
              <p className={`${oxanium.className} text-sm text-gray-500 mb-4`}>{plan.seoDesc}</p>
            )}

            <p className={`${oxanium.className} text-2xl font-bold text-cyan-600 mb-4`}>
              {plan.price}
              {plan.oldPrice && (
                <span className="text-base text-gray-400 line-through ml-3">{plan.oldPrice}</span>
              )}
            </p>

            <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-6 list-none p-0" aria-label={`All features in ${plan.name}`}>
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => { setShowDetails(false); openModal(plan.name); }}
              aria-label={`Get started with ${plan.name}`}
              className={`${oxanium.className} w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md`}
            >
              Get Started — {plan.price}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PLAN MODAL (Lead Capture Form)
//
// SEO considerations:
//  — role="dialog" + aria-modal prevents Google indexing modal as page content
//  — All inputs have <label> with htmlFor — important for accessibility score
//  — autoComplete attributes help browsers autofill → better UX → lower bounce
//  — Submit success message uses role="alert" → announced to screen readers
// ─────────────────────────────────────────────────────────────────────────────

export function PlanModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  handleSubmit,
  isSubmitting,
  submitMessage,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-modal-title"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="bg-white p-6 sm:p-8 rounded-2xl w-full max-w-sm sm:max-w-md relative border border-gray-200 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
          aria-label="Close contact form"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <h3
          id="plan-modal-title"
          className={`${orbitron.className} text-xl sm:text-2xl font-extrabold text-cyan-600 mb-1`}
        >
          Get Started — {formData.plan}
        </h3>
        <p className={`${oxanium.className} text-sm text-gray-500 mb-6`}>
          We'll send you a tailored proposal within 24 hours. No commitment required.
        </p>

        <form onSubmit={handleSubmit} className={`${oxanium.className} space-y-4`} noValidate>

          {/* Name */}
          <div>
            <label htmlFor="modal-name" className="block text-gray-700 text-sm mb-1 font-medium">
              Full Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="modal-email" className="block text-gray-700 text-sm mb-1 font-medium">
              Work Email <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="modal-phone" className="block text-gray-700 text-sm mb-1 font-medium">
              Phone Number <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+1 555 000 0000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>

          {/* LinkedIn (optional) */}
          <div>
            <label htmlFor="modal-linkedin" className="block text-gray-700 text-sm mb-1 font-medium">
              LinkedIn Profile <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="modal-linkedin"
              name="linkedin"
              type="url"
              autoComplete="url"
              placeholder="https://linkedin.com/in/yourname"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>

          {/* Status message */}
          {submitMessage && (
            <p
              role="alert"
              aria-live="assertive"
              className={`text-sm text-center font-medium ${
                submitMessage.includes("✅") ? "text-green-600" : "text-red-500"
              }`}
            >
              {submitMessage}
            </p>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label={`Submit interest in ${formData.plan}`}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40 transition-all disabled:opacity-50 text-sm sm:text-base"
          >
            {isSubmitting ? "Sending…" : "Send Request →"}
          </motion.button>

          <p className="text-xs text-gray-400 text-center">
            By submitting you agree to be contacted by DoCoders. No spam, ever.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}