"use client";

import { useState } from "react";
import { PricingCard } from "../reusable/featurecard";
import { Orbitron, Oxanium } from "next/font/google";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"], display: "swap" });
const oxanium  = Oxanium({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

// ─────────────────────────────────────────────────────────────────────────────
// PROPS
// title       {string}  H2 text — MUST be a keyword phrase, never generic.
//                        ✅ "Shopify E-commerce Development Services"
//                        ❌ "Our Packages"
// plans       {array}   Array of plan objects (name, price, features, seoDesc)
// description {string}  Keyword-rich paragraph shown below H2.
//                        Google pulls this for Featured Snippets / AI Overviews.
// sectionId   {string}  Unique anchor id, e.g. "shopify-ecommerce-development"
//                        Used in internal links, sitemap, and schema.
// schemaType  {string}  schema.org service type string, e.g. "ShopifyDevelopment"
// ─────────────────────────────────────────────────────────────────────────────

export default function PricingSection({
  title,
  plans,
  description,
  sectionId    = "services",
  schemaType   = "SoftwareDevelopment",
}) {
  const [isModalOpen, setIsModalOpen]     = useState(false);
  const [selectedPlan, setSelectedPlan]   = useState(null);
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, plan: selectedPlan }),
      });
      if (res.ok) {
        setSubmitMessage("Request received! We'll contact you within 24 hours. ✅");
        setTimeout(() => { setIsModalOpen(false); setSubmitMessage(""); }, 2500);
      } else {
        setSubmitMessage("Something went wrong. Email: docoder@docoders.com");
      }
    } catch {
      setSubmitMessage("Something went wrong. Email: docoder@docoders.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackDesc =
    "Transparent, fixed-price plans for startups and businesses worldwide. No hidden fees — Silicon Valley quality at competitive rates.";

  return (
    <>
      {/*
       * SEO: <section> with:
       *  — id        = unique anchor (internal link target + sitemap fragment)
       *  — aria-labelledby = links to H2 inside for accessibility landmark
       *  — schema.org/Service = tells Google this is a service offering entity
       *
       * Why schema.org/Service matters:
       * It enables Google to show this as a Service rich result for queries like
       * "shopify development service price" or "ai chatbot integration cost".
       */}
      <section
        id={sectionId}
        aria-labelledby={`h2-${sectionId}`}
        itemScope
        itemType="https://schema.org/Service"
        className="py-20 px-4 sm:px-6 lg:px-8 text-gray-900 border-t border-gray-100"
      >
        {/* Hidden schema.org service fields — crawlers read, users don't see */}
        <meta itemProp="serviceType"  content={schemaType} />
        <meta itemProp="provider"     content="DoCoders — Global Software Development Agency" />
        <meta itemProp="areaServed"   content="Worldwide" />
        <meta itemProp="description"  content={description || fallbackDesc} />

        <div className="max-w-7xl mx-auto">

          {/* ── Section Header ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/*
             * H2 — the most important element in this component.
             *
             * The `title` prop should ALWAYS be a keyword phrase:
             *  ✅ "Shopify E-commerce Development Services"
             *  ✅ "AI Chatbot & Integration Services"
             *  ✅ "Mobile App Development Services"
             *  ❌ "Our Plans"
             *  ❌ "Flexible Packages"
             *
             * id="h2-{sectionId}" connects to aria-labelledby on <section>.
             * itemProp="name" feeds schema.org/Service structured data.
             */}
            <h2
              id={`h2-${sectionId}`}
              className={`${orbitron.className} text-3xl sm:text-4xl font-extrabold mb-4 text-cyan-600 drop-shadow-lg`}
              itemProp="name"
            >
              {title}
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-6 rounded-full" aria-hidden="true" />

            {/*
             * Description paragraph — the single most SEO-critical text block.
             *
             * Google uses this paragraph for:
             *  — Featured Snippets (position 0 in search results)
             *  — AI Overviews (Google's AI summary box)
             *  — Topical relevance scoring for the section's keyword
             *
             * Always pass a keyword-rich `description` prop. Never leave it as
             * "Flexible plans tailored for your business." — that's generic and
             * Google ignores it for ranking purposes.
             */}
            <p className={`${oxanium.className} text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed`}>
              {description || fallbackDesc}
            </p>
          </motion.div>

          {/*
           * Pricing card grid in <ol> (ordered list).
           *
           * Why <ol> not <div>?
           *  — Signals to Google that these items are tiered/ranked
           *  — Starter → Pro → Enterprise is a semantically ordered sequence
           *  — Screen readers announce item count: "list of 3 items"
           *
           * Each <li> wraps a schema.org/Offer entity.
           * schema.org/Offer = what makes pricing appear in Google Search for
           * queries like "shopify store development price" or
           * "how much does ai chatbot development cost".
           */}
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0" aria-label={`${title} pricing plans`}>
            {plans.map((plan, index) => (
              <li
                key={plan.name}
                itemScope
                itemType="https://schema.org/Offer"
              >
                {/*
                 * Minimum required schema.org/Offer fields for Google:
                 *  name + price + priceCurrency + availability
                 * Optional but recommended: description (from plan.seoDesc)
                 */}
                <meta itemProp="name"         content={plan.name} />
                <meta itemProp="description"  content={plan.seoDesc || plan.name} />
                <meta itemProp="price"        content={String(plan.price).replace(/[^0-9.]/g, "") || "0"} />
                <meta itemProp="priceCurrency" content="USD" />
                <meta itemProp="availability" content="https://schema.org/InStock" />

                <PricingCard plan={plan} index={index} openModal={openModal} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Lead Capture Modal ────────────────────────────────────────────── */}
      {/*
       * Accessibility: role="dialog" + aria-modal + aria-labelledby
       * Prevents Google from indexing modal content as main page content.
       * The modal backdrop is a visual overlay — aria-hidden keeps focus right.
       */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-plan-title"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative border border-gray-200 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3
              id="modal-plan-title"
              className={`${orbitron.className} text-xl font-extrabold text-cyan-600 mb-1`}
            >
              Get Started — {selectedPlan}
            </h3>

            <p className={`${oxanium.className} text-sm text-gray-500 mb-6`}>
              Fill in your details and we'll send you a tailored proposal within 24 hours.
              No commitment required.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

              {/* Name */}
              <div>
                <label htmlFor="ps-name" className={`${oxanium.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Full Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="ps-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  className={`${oxanium.className} w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="ps-email" className={`${oxanium.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Work Email <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="ps-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  className={`${oxanium.className} w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="ps-phone" className={`${oxanium.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Phone Number
                </label>
                <input
                  id="ps-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 555 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                  className={`${oxanium.className} w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="ps-message" className={`${oxanium.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Tell us about your project
                </label>
                <textarea
                  id="ps-message"
                  rows={3}
                  placeholder="Brief description of what you need..."
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  className={`${oxanium.className} w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none`}
                />
              </div>

              {/* Error / success message */}
              {submitMessage && (
                <p
                  role="alert"
                  aria-live="assertive"
                  className={`${oxanium.className} text-sm text-center ${submitMessage.includes("✅") ? "text-green-600" : "text-red-500"}`}
                >
                  {submitMessage}
                </p>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label={`Submit request for ${selectedPlan}`}
                className={`${oxanium.className} w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40 transition-all disabled:opacity-60`}
              >
                {isSubmitting ? "Sending…" : "Send Request →"}
              </motion.button>

              <p className={`${oxanium.className} text-xs text-gray-400 text-center`}>
                By submitting you agree to be contacted by DoCoders. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}