"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Orbitron, Oxanium } from "next/font/google";
import { PricingCard, PlanModal } from "../reusable/featurecard";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "800", "900"], display: "swap" });
const oxanium  = Oxanium({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

// ─────────────────────────────────────────────────────────────────────────────
// PLAN DATA
// SEO Note: plan `name` and `features` are indexed as page text.
// Every feature bullet is a micro-keyword opportunity.
// `seoDesc` = hidden schema.org/Offer description read by Google.
// ─────────────────────────────────────────────────────────────────────────────

const ecommercePlans = [
  {
    name: "Starter Ecommerce Store",
    price: "$199",
    oldPrice: "$249",
    badge: "Best for Startups",
    seoDesc:
      "Affordable ecommerce website development using Shopify, WordPress, WooCommerce, or custom code with mobile-responsive design and SEO optimization.",

    keywords: [
      "ecommerce website development",
      "shopify store setup",
      "wordpress ecommerce website",
      "woocommerce development",
      "custom ecommerce website",
      "responsive online store",
      "small business ecommerce website",
      "affordable ecommerce development",
    ],

    features: [
      "Shopify / WordPress / Custom Store Setup",
      "20 Products Uploaded",
      "Mobile-Responsive Design",
      "Basic SEO Optimization",
      "Fast Loading Store",
    ],
  },

  {
    name: "Professional Ecommerce Solution",
    price: "$399",
    oldPrice: "$499",
    badge: "Most Popular",
    seoDesc:
      "Professional ecommerce website development with custom UI/UX, WooCommerce, Shopify, or custom-coded solutions optimized for conversions and business growth.",

    keywords: [
      "professional ecommerce website",
      "custom online store development",
      "woocommerce expert",
      "shopify development company",
      "custom coded ecommerce website",
      "conversion optimized ecommerce",
      "SEO friendly ecommerce store",
      "online business website",
    ],

    features: [
      "Custom Shopify / WordPress Development",
      "100 Products Uploaded",
      "Custom UI/UX Design",
      "Email Marketing Integration",
      "Conversion Rate Optimization",
      "Advanced SEO Setup",
    ],
  },

  {
    name: "Advanced Ecommerce Suite",
    price: "$699",
    oldPrice: "$879",
    badge: "Best for Scaling",
    seoDesc:
      "Advanced ecommerce development solution with headless commerce, AI automation, analytics dashboard, and scalable custom architecture for growing brands.",

    keywords: [
      "headless ecommerce development",
      "advanced ecommerce solutions",
      "AI ecommerce automation",
      "enterprise ecommerce website",
      "custom ecommerce platform",
      "scalable online store",
      "high performance ecommerce",
      "modern ecommerce architecture",
    ],

    features: [
      "Headless Commerce Architecture",
      "Unlimited Products",
      "AI Automation & Analytics",
      "Custom Admin Dashboard",
      "Advanced SEO & Speed Optimization",
      "AI Product Recommendations",
    ],
  },
];

const aiPlans = [
  {
    name: "AI Chatbot Package",
    price: "$299",
    oldPrice: "$379",
    badge: "Quick Start",
    seoDesc: "AI chatbot integration for websites and mobile apps with smart search and NLP.",
    features: [
      "AI Chatbot for Web & Mobile App",
      "Product Recommendation AI Engine",
      "Smart Search Integration",
      "Natural Language Processing (NLP)",
    ],
  },
  {
    name: "AI Software Integration",
    price: "$599",
    oldPrice: "$749",
    badge: "Most Popular",
    seoDesc: "AI analytics dashboard with predictive insights and automated business workflows.",
    features: [
      "AI Analytics Dashboard",
      "Predictive Insights & Forecasting",
      "Automated Workflows & Reports",
      "Third-Party API AI Integration",
    ],
  },
  {
    name: "Custom AI Model Training",
    price: "$999",
    oldPrice: "$1,249",
    badge: "Enterprise Ready",
    seoDesc: "Custom AI model development with data preprocessing, training, and deployment pipelines.",
    features: [
      "Custom AI Model Development",
      "Data Preprocessing & Cleaning",
      "Model Training & Optimization",
      "Deployment-Ready Pipelines",
    ],
  },
];

const mobilePlans = [
  {
    name: "Android App Development",
    price: "$499",
    oldPrice: "$629",
    badge: "Android First",
    seoDesc: "Native Android app development with Play Store upload and one revision included.",
    features: [
      "Native Android App Build",
      "1 Revision Included",
      "Google Play Store Upload",
      "Performance-Optimized Code",
    ],
  },
  {
    name: "iOS & Android App",
    price: "$1,199",
    oldPrice: "$1,499",
    badge: "Most Popular",
    seoDesc: "Cross-platform iOS and Android app development with 2 revisions and store deployment.",
    features: [
      "Cross-Platform App (React Native)",
      "2 Revisions Included",
      "App Store & Play Store Deployment",
      "Push Notifications & Analytics",
    ],
  },
  {
    name: "App + Admin Dashboard",
    price: "$1,499",
    oldPrice: "$1,879",
    badge: "Full Stack",
    seoDesc: "Mobile app with custom admin panel, REST API development, and user management system.",
    features: [
      "Mobile App + Web Admin Panel",
      "Custom Features & UI/UX Design",
      "REST API Development",
      "User Management System",
    ],
  },
];

const marketingPlans = [
  {
    name: "Starter SEO Package",
    price: "$150/mo",
    oldPrice: "$190/mo",
    badge: "Launch Ready",
    seoDesc: "Basic SEO setup and social media management for startups and new businesses.",
    features: [
      "Social Media Setup (2 Platforms)",
      "Basic SEO Audit & Setup",
      "Email Marketing Template",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Growth SEO & Marketing",
    price: "$499/mo",
    oldPrice: "$629/mo",
    badge: "Most Popular",
    seoDesc: "SEO optimization for 10 keywords, Google and Meta paid ads setup, and weekly social media posts.",
    features: [
      "SEO Optimization (10 Keywords)",
      "Google & Meta Paid Ads Setup",
      "Weekly Social Media Posts",
      "Competitor Analysis Report",
    ],
  },
  {
    name: "Enterprise Marketing Suite",
    price: "$999/mo",
    oldPrice: "$1,249/mo",
    badge: "Full Service",
    seoDesc: "Full SEO strategy for 30+ keywords, advanced PPC campaigns, and content management.",
    features: [
      "Full SEO Strategy (30+ Keywords)",
      "Advanced PPC Campaign Management",
      "Content & Social Media Management",
      "Monthly Analytics & ROI Report",
    ],
  },
];

const saasPlans = [
  {
    name: "SaaS Starter",
    price: "$599",
    oldPrice: "$799",
    badge: "For MVPs",
    seoDesc: "Affordable SaaS development with AI tools, single user account, and email support.",
    features: [
      "Basic AI-Powered SaaS Tools",
      "1 User Account",
      "Email Support",
      "Cloud Hosting Setup",
    ],
  },
  {
    name: "SaaS Pro",
    price: "$999",
    oldPrice: "$1,299",
    badge: "Most Popular",
    seoDesc: "Advanced AI SaaS dashboard with team access, custom integrations, and priority support.",
    features: [
      "Advanced AI Dashboard",
      "Team Access & Role Management",
      "Priority Support",
      "Custom Third-Party Integrations",
    ],
  },
  {
    name: "SaaS Enterprise",
    price: "$2,500+",
    oldPrice: "$3,500+",
    badge: "White-Label Ready",
    seoDesc: "Custom SaaS modules with white-label branding, unlimited users, and dedicated support.",
    features: [
      "Custom SaaS Module Development",
      "White-Label Branding",
      "Dedicated Support Team",
      "Unlimited Users & Scale",
    ],
  },
];

const bundlePlans = [
  {
    name: "E-commerce Web + App Bundle",
    price: "$799–$999",
    oldPrice: "$999–$1,249",
    badge: "Best Value",
    seoDesc: "Complete e-commerce website, Shopify store, and mobile app bundle with AI assistant.",
    features: [
      "Custom E-commerce Website",
      "Shopify Store Setup",
      "Mobile App (iOS + Android)",
      "Basic AI Assistant Included",
    ],
  },
  {
    name: "SaaS + Mobile App Package",
    price: "$1,199–$1,599",
    oldPrice: "$1,499–$1,999",
    badge: "Startup Favorite",
    seoDesc: "Custom SaaS platform with mobile app integration, API development, and team features.",
    features: [
      "Custom SaaS Platform",
      "Mobile App Integration",
      "REST API Development",
      "Team Collaboration Features",
    ],
  },
  {
    name: "SaaS + App + AI Suite",
    price: "$2,599",
    oldPrice: "$3,249",
    badge: "All-in-One",
    seoDesc: "Complete SaaS, mobile app, and full AI suite with white-label branding and dedicated support.",
    features: [
      "SaaS Platform + Mobile App",
      "Full AI Assistant & Analytics",
      "White-Label Branding",
      "Dedicated Support & Training",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION METADATA
// h2Title   = the H2 text — must be a keyword phrase, not a generic label
// sectionId = anchor id used for internal links and sitemap fragments
// keyword   = primary SEO keyword for this section
// desc      = paragraph shown below H2 — Google uses this for featured snippets
// ─────────────────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    h2Title: "E-Commerce Development Services",
    sectionId: "E-commerce-development",
    keyword: "e-commerce development service",
    plans: ecommercePlans,
    desc: "Launch or scale your online store with our affordable E-Commerce development services. From custom theme design to headless commerce and AI-powered product recommendations — we deliver conversion-optimized E-Commerce stores for businesses worldwide.",
  },
  {
    h2Title: "AI Chatbot & Software Integration Services",
    sectionId: "ai-chatbot-integration",
    keyword: "ai chatbot development service",
    plans: aiPlans,
    desc: "Integrate AI into your business with custom chatbots, predictive analytics, and automated workflows. Our AI development packages help startups and enterprises reduce costs, improve customer experience, and scale intelligently.",
  },
  {
    h2Title: "Mobile App Development Services",
    sectionId: "mobile-app-development",
    keyword: "mobile app development company",
    plans: mobilePlans,
    desc: "Build fast, scalable mobile applications for iOS and Android. Whether you need a native Android app or a cross-platform solution using React Native, we deliver polished apps ready for App Store and Play Store launch.",
  },
  {
    h2Title: "SEO & Digital Marketing Services",
    sectionId: "seo-digital-marketing",
    keyword: "affordable seo services for small business",
    plans: marketingPlans,
    desc: "Grow your online visibility with data-driven SEO strategies, Google and Meta paid advertising, and social media management. Our marketing packages are built to drive qualified traffic and deliver measurable ROI for businesses worldwide.",
  },
  {
    h2Title: "Custom SaaS Development Services",
    sectionId: "saas-development",
    keyword: "custom saas development company",
    plans: saasPlans,
    desc: "We build scalable SaaS platforms from the ground up — with AI-powered dashboards, team collaboration tools, white-label branding, and cloud deployment. Trusted by startups and enterprises across the US, UK, UAE, and beyond.",
  },
  {
    h2Title: "Full-Service Software Development Bundles",
    sectionId: "software-development-bundles",
    keyword: "full service software development agency",
    plans: bundlePlans,
    desc: "Get a complete digital product built end-to-end. Our full-service bundles combine web development, Shopify stores, mobile apps, SaaS platforms, and AI integration — all at bundled pricing with a single dedicated team.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// RENDER SECTION
// Each service category = its own <section> with schema.org/Service markup.
// Google treats each <section> as a topically distinct service offering.
// ─────────────────────────────────────────────────────────────────────────────
const RenderSection = ({ h2Title, sectionId, plans, desc, openModal }) => (
  <section
    id={sectionId}
    aria-labelledby={`h2-${sectionId}`}
    /*
     * schema.org/Service per section:
     * Enables Service rich results for queries like
     * "shopify development price" or "ai chatbot cost"
     */
    itemScope
    itemType="https://schema.org/Service"
    className="py-12 px-4 sm:px-6 lg:px-8 text-gray-900 border-t border-gray-100"
  >
    {/* Hidden schema fields — crawlers read, users don't see */}
    <meta itemProp="serviceType" content={h2Title} />
    <meta itemProp="provider" content="DoCoders" />
    <meta itemProp="areaServed" content="Worldwide" />
    <meta itemProp="description" content={desc} />

    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        {/*
         * H2 = primary keyword for this service section.
         * Example: "Shopify E-commerce Development Services"
         * This EXACTLY matches what international clients search.
         * id links to aria-labelledby on <section>.
         * itemProp="name" feeds schema.org/Service.
         */}
        <h2
          id={`h2-${sectionId}`}
          className={`${orbitron.className} text-3xl sm:text-4xl font-extrabold mb-4 text-cyan-600 drop-shadow-lg`}
          itemProp="name"
        >
          {h2Title}
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-6 rounded-full" aria-hidden="true" />

        {/*
         * Keyword-rich description paragraph.
         * Google uses this for Featured Snippets and AI Overviews.
         * Each paragraph naturally embeds LSI keywords for the section.
         */}
        <p className={`${oxanium.className} text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed`}>
          {desc}
        </p>
      </motion.div>

      {/*
       * <ol> (ordered list) signals tier hierarchy to Google:
       * Starter → Pro → Enterprise is semantically meaningful.
       * Each <li> carries its own schema.org/Offer markup.
       */}
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
        {plans.map((plan, index) => (
          <li
            key={plan.name}
            itemScope
            itemType="https://schema.org/Offer"
          >
            {/*
             * schema.org/Offer fields per pricing card:
             * price + priceCurrency + availability = minimum for Google
             * to show pricing in search results.
             */}
            <meta itemProp="name" content={plan.name} />
            <meta itemProp="description" content={plan.seoDesc} />
            <meta itemProp="price" content={plan.price.replace(/[^0-9.]/g, "") || "0"} />
            <meta itemProp="priceCurrency" content="USD" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <PricingCard plan={plan} index={index} openModal={openModal} />
          </li>
        ))}
      </ol>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function TechnologyPage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isModalOpen, setIsModalOpen]   = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", linkedin: "", plan: "" });

  useEffect(() => {
    const target = Date.now() + 24 * 60 * 60 * 1000;
    const id = setInterval(() => {
      const diff = target - Date.now();
      if (diff > 0) {
        setTimeLeft({
          hours:   Math.floor(diff / 36e5) % 24,
          minutes: Math.floor(diff / 6e4)  % 60,
          seconds: Math.floor(diff / 1e3)  % 60,
        });
      } else clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const openModal = (planName) => {
    setFormData(p => ({ ...p, plan: planName }));
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitMessage("Request received! We'll contact you within 24 hours. ✅");
        setFormData({ name: "", email: "", phone: "", linkedin: "", plan: "" });
        setTimeout(() => { setIsModalOpen(false); setSubmitMessage(""); }, 2500);
      } else {
        setSubmitMessage("Something went wrong. Email us: docoder@docoders.com");
      }
    } catch {
      setSubmitMessage("Something went wrong. Email us: docoder@docoders.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /*
     * <main> landmark = tells Google "this is the primary page content."
     * id="technologies" = anchor target from the hero CTA "Get Started" link.
     * Internal link from hero → main content passes PageRank to service sections.
     */
    <main
      id="technologies"
      aria-label="DoCoders software development services and pricing plans"
    >

      {/* ── Limited-Time Offer Banner ──────────────────────────────────── */}
      {/*
       * <aside> = supplementary content — doesn't dilute service keyword focus.
       * The H2 here targets "affordable software development" — a low-competition
       * global keyword. The micro-copy "US, UK & UAE" signals global trust.
       */}
      <aside
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cyan-50"
        aria-label="Limited time pricing offer from DoCoders"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${orbitron.className} text-2xl sm:text-3xl font-extrabold mb-3 text-pink-600`}>
              Limited-Time Offer — Save Up to 30% on All Services
            </h2>

            <p className={`${oxanium.className} text-gray-600 mb-8 max-w-xl mx-auto`}>
              Silicon Valley-grade software development at a fraction of the cost.
              Trusted by startups and businesses in the{" "}
              <strong className="text-gray-800">US, UK, UAE</strong> and worldwide.
              Offer expires in:
            </p>

            {/* Countdown — aria-live announces updates to screen readers */}
            <div
              className="flex justify-center gap-4 sm:gap-6 mb-8"
              aria-live="polite"
              aria-label="Countdown timer"
            >
              {["hours", "minutes", "seconds"].map((unit) => (
                <div
                  key={unit}
                  className="text-center bg-white border border-gray-200 shadow-md px-5 py-4 rounded-xl min-w-[72px]"
                >
                  <p className={`${orbitron.className} text-2xl sm:text-3xl font-bold text-cyan-600`}>
                    {String(timeLeft[unit]).padStart(2, "0")}
                  </p>
                  <span className={`${oxanium.className} uppercase text-xs text-gray-500 tracking-widest`}>
                    {unit}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust strip — E-E-A-T signals for Google */}
            <ul
              className={`${oxanium.className} flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 list-none p-0`}
              aria-label="DoCoders service guarantees"
            >
              {[
                "No Hidden Fees",
                "Fixed-Price Delivery",
                "24hr Response Time",
                "Free Consultation",
              ].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <span className="text-green-500 font-bold" aria-hidden="true">✓</span> {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </aside>

      {/* ── Service Sections ──────────────────────────────────────────────── */}
      {/*
       * Each section has:
       *  — Unique id (anchor linkable from nav, hero, and sitemap)
       *  — H2 = primary keyword for that service
       *  — Keyword-rich description paragraph (featured snippet target)
       *  — schema.org/Service + schema.org/Offer per card (rich results)
       */}
      {SECTIONS.map((s) => (
        <RenderSection key={s.sectionId} {...s} openModal={openModal} />
      ))}

      {/* ── Bottom CTA Section ────────────────────────────────────────────── */}
      {/*
       * SEO: A standalone CTA section with keyword-rich copy.
       * "affordable software development agency" = low-competition keyword
       * that international clients use when looking to outsource.
       * Both CTAs are <a> tags (crawlable) not <button> (not crawlable).
       */}
      <section
        className="py-20 px-4 text-center bg-gradient-to-b from-cyan-50 to-white"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="cta-heading"
            className={`${orbitron.className} text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4`}
          >
            Ready to Build Your Next Digital Product?
          </h2>
          <p className={`${oxanium.className} text-gray-600 mb-8 text-lg leading-relaxed`}>
            Partner with <strong className="text-gray-800">DoCoders</strong> — a trusted{" "}
            <strong className="text-gray-800">software development agency</strong> delivering
            AI-powered SaaS platforms, Shopify stores, and mobile apps for startups and
            businesses worldwide. Book a free consultation — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:docoder@docoders.com?subject=Project%20Inquiry"
              aria-label="Start your project with DoCoders software development agency"
              className={`${oxanium.className} inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold shadow-md hover:scale-105 transition-transform`}
            >
              Start Your Project
            </a>
            <a
              href="mailto:docoder@docoders.com?subject=Free%20Consultation"
              aria-label="Book a free consultation with DoCoders"
              className={`${oxanium.className} inline-block px-8 py-3 border border-orange-500 rounded-xl text-orange-600 font-medium hover:scale-105 transition-transform`}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <PlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitMessage={submitMessage}
      />
    </main>
  );
}