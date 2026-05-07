"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  ShoppingCart,
  Smartphone,
  ChevronDown,
  CheckCircle2,
  Users,
  Globe,
  Zap,
  Award,
} from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Brain,
    color: "cyan",
    glow: "rgba(34,211,238,0.4)",
    title: "AI-Driven SaaS Development",
    shortDesc:
      "Scalable SaaS solutions powered by AI to automate workflows and enhance productivity.",
    longDesc:
      "We build end-to-end SaaS platforms with AI at the core — from intelligent dashboards and predictive analytics to NLP-powered automation. Our SaaS products are multi-tenant, subscription-ready with Stripe, and built on modern stacks (Next.js + Supabase + OpenAI). Whether you need an MVP in 8 weeks or a full-scale enterprise platform, we deliver production-grade software that scales.",
    highlights: [
      "OpenAI & Claude API integration",
      "Multi-tenant architecture",
      "Stripe billing & subscriptions",
      "Custom AI workflows & automation",
    ],
    keywords:
      "AI SaaS development, custom SaaS platform, AI-powered software, SaaS MVP development",
  },
  {
    icon: ShoppingCart,
    color: "pink",
    glow: "rgba(236,72,153,0.4)",
    title: "E-commerce Platform Development",
    shortDesc:
      "Build robust online stores with AI-driven insights and seamless integrations.",
    longDesc:
      "From Shopify custom development to fully bespoke e-commerce platforms, we build stores that convert. Our e-commerce solutions include AI chatbot integration, personalized recommendation engines, headless commerce architecture, and ERP/inventory integrations. We've helped merchants across Pakistan, UAE, and the UK scale from zero to millions in online revenue.",
    highlights: [
      "Shopify & WooCommerce development",
      "AI chatbot & product recommendations",
      "Payment gateway integrations",
      "Headless commerce (Next.js + Shopify)",
    ],
    keywords:
      "e-commerce development Pakistan, Shopify development, online store development, headless commerce",
  },
  {
    icon: Smartphone,
    color: "green",
    glow: "rgba(34,197,94,0.4)",
    title: "Mobile App & IoT Development",
    shortDesc:
      "Cross-platform mobile apps and IoT solutions for connected, smart experiences.",
    longDesc:
      "We design and build high-performance mobile applications for iOS and Android using React Native and Flutter — a single codebase, two platforms, significant cost savings. For IoT, we architect device-to-cloud pipelines, real-time dashboards, and embedded firmware integrations. Our mobile apps average 4.7+ stars on app stores across our client portfolio.",
    highlights: [
      "React Native & Flutter apps",
      "IoT device integration & dashboards",
      "Real-time features & push notifications",
      "App Store & Play Store deployment",
    ],
    keywords:
      "mobile app development Pakistan, React Native development, Flutter app development, IoT solutions",
  },
];

const STATS = [
  { icon: Users, value: "120+", label: "Clients Worldwide" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Zap, value: "200+", label: "Projects Delivered" },
  { icon: Award, value: "4.9★", label: "Average Client Rating" },
];

const FAQS = [
  {
    q: "What services does TechTrend Innovations offer?",
    a: "TechTrend Innovations specializes in AI-powered SaaS development, custom e-commerce platforms (Shopify, WooCommerce, headless commerce), cross-platform mobile app development (React Native & Flutter), and IoT solutions. We work with startups, SMEs, and enterprise clients across Pakistan, UAE, UK, and the US.",
  },
  {
    q: "How long does it take to build a custom SaaS product?",
    a: "A focused SaaS MVP typically takes 8–12 weeks with our dedicated team. A full-scale SaaS platform with advanced AI features, multi-tenancy, and billing integration generally takes 16–24 weeks depending on scope. We provide a detailed project timeline and milestone plan before work begins.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes — over 60% of our clients are based internationally, including the UAE, UK, Canada, and the United States. We work fully remotely with structured communication protocols: weekly video calls, shared project boards, and daily async updates via Slack or WhatsApp.",
  },
  {
    q: "What is the cost of building a mobile app with TechTrend Innovations?",
    a: "Mobile app development costs typically range from $5,000–$8,000 for a simple MVP to $25,000–$60,000 for a complex app with real-time features, payment integration, and AI capabilities. We provide transparent, itemized quotes — no hidden fees, no surprise invoices.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. Every project includes a 30-day post-launch warranty period for bug fixes at no additional cost. We also offer flexible monthly maintenance retainers covering updates, performance monitoring, security patches, and new feature development.",
  },
  {
    q: "Can you integrate AI features into an existing app or website?",
    a: "Absolutely. AI integration into existing products is one of our most common engagements. We can add AI chatbots, semantic search, recommendation engines, image recognition, or predictive analytics to your existing platform without a full rebuild — typically within 3–6 weeks.",
  },
];

const colorMap = {
  cyan: {
    icon: "text-cyan-600",
    border: "border-cyan-200",
    badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
    check: "text-cyan-500",
  },
  pink: {
    icon: "text-pink-600",
    border: "border-pink-200",
    badge: "bg-pink-50 text-pink-700 border-pink-200",
    check: "text-pink-500",
  },
  green: {
    icon: "text-green-600",
    border: "border-green-200",
    badge: "bg-green-50 text-green-700 border-green-200",
    check: "text-green-500",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;
  const c = colorMap[service.color];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      aria-label={service.title}
    >
      <motion.div
        whileHover={{ y: -6, boxShadow: `0 0 28px ${service.glow}` }}
        className={`bg-white/85 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 shadow-lg transition-all h-full flex flex-col`}
      >
        {/* Icon */}
        <div className={`${c.icon} mb-5`}>
          <Icon size={42} strokeWidth={1.5} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3
          className={`${orbitron.className} text-xl font-semibold mb-3 text-gray-900`}
        >
          {service.title}
        </h3>

        {/* Short desc */}
        <p className={`${oxanium.className} text-gray-600 leading-relaxed mb-5`}>
          {service.shortDesc}
        </p>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className={`${oxanium.className} flex items-center gap-1 text-sm font-semibold ${c.icon} mb-4 hover:underline focus:outline-none`}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Learn more"}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown size={16} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p
                className={`${oxanium.className} text-gray-600 leading-relaxed text-sm mb-5`}
              >
                {service.longDesc}
              </p>

              <ul className="space-y-2 mb-5">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className={`${oxanium.className} flex items-center gap-2 text-sm text-gray-700`}
                  >
                    <CheckCircle2
                      size={15}
                      className={c.check}
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Keyword badge (visually subtle, helps on-page SEO context) */}
        <div className="mt-auto">
          <span
            className={`inline-block text-xs px-3 py-1 rounded-full border ${c.badge} ${oxanium.className}`}
          >
            {service.color === "cyan"
              ? "AI · SaaS"
              : service.color === "pink"
              ? "E-commerce · Shopify"
              : "Mobile · IoT"}
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}

function StatCard({ stat, index }) {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="flex justify-center mb-2">
        <Icon size={22} className="text-cyan-500" aria-hidden="true" />
      </div>
      <p
        className={`${orbitron.className} text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600`}
      >
        {stat.value}
      </p>
      <p className={`${oxanium.className} text-sm text-gray-500 mt-1`}>
        {stat.label}
      </p>
    </motion.div>
  );
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white/70 backdrop-blur"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={`${oxanium.className} w-full flex items-center justify-between px-6 py-5 text-left text-gray-900 font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors focus:outline-none`}
        aria-expanded={open}
        itemProp="name"
      >
        {faq.q}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="ml-4 flex-shrink-0 text-cyan-500"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              className={`${oxanium.className} px-6 pb-5 text-gray-600 leading-relaxed text-sm`}
              itemProp="text"
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 text-gray-900"
      aria-label="About TechTrend Innovations"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Hero heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1
            className={`${orbitron.className} text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600`}
          >
            About TechTrend Innovations
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-6 rounded-full" />
          <p
            className={`${oxanium.className} text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed`}
          >
            We are a software development company specializing in{" "}
            <strong className="text-gray-800">AI-powered SaaS products</strong>,{" "}
            <strong className="text-gray-800">custom e-commerce platforms</strong>,{" "}
            <strong className="text-gray-800">mobile app development</strong>, and{" "}
            <strong className="text-gray-800">IoT solutions</strong> — helping
            startups and established businesses build technology that drives real
            growth. Based in Pakistan, serving clients globally.
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 mb-4 py-10 px-8 bg-white/60 backdrop-blur rounded-2xl border border-gray-100 shadow-sm"
        >
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </motion.div>

        {/* ── Services cards ── */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* ── Who we are — body content for SEO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2
              className={`${orbitron.className} text-2xl sm:text-3xl font-bold mb-5 text-gray-900`}
            >
              Why Businesses Choose TechTrend Innovations
            </h2>
            <div
              className={`${oxanium.className} space-y-4 text-gray-600 leading-relaxed text-[15px]`}
            >
              <p>
                Founded by engineers and product thinkers, TechTrend Innovations
                has grown into a trusted software development partner for over{" "}
                <strong className="text-gray-800">120 clients across 15+ countries</strong>.
                We combine deep technical expertise with a genuine understanding
                of business goals — we don't just build features, we build
                outcomes.
              </p>
              <p>
                Our team brings together senior engineers experienced in{" "}
                <strong className="text-gray-800">
                  Next.js, React Native, Flutter, Python, and cloud infrastructure
                </strong>{" "}
                alongside AI specialists who have shipped real products using
                OpenAI, Anthropic Claude, and Google Gemini APIs.
              </p>
              <p>
                Whether you're a first-time founder validating an MVP or an
                established business modernizing legacy systems, we have the
                process, team, and experience to deliver on time and on budget —
                with full IP ownership transferred to you at project completion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Transparent Communication",
                desc: "Weekly video calls, shared project boards, and daily async updates. You always know exactly where your project stands.",
              },
              {
                title: "Full IP Ownership",
                desc: "You own 100% of the code, repositories, and intellectual property upon final payment. No lock-in, no exceptions.",
              },
              {
                title: "Post-Launch Support",
                desc: "Every project includes a 30-day warranty period. Long-term maintenance retainers available for ongoing partnerships.",
              },
              {
                title: "Milestone-Based Billing",
                desc: "We never ask for 100% upfront. Our 30/40/30 milestone structure protects your investment throughout the project.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur rounded-xl border border-gray-200 p-5 flex gap-4 items-start"
              >
                <CheckCircle2
                  size={20}
                  className="text-cyan-500 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p
                    className={`${orbitron.className} text-sm font-semibold text-gray-900 mb-1`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`${oxanium.className} text-sm text-gray-600 leading-relaxed`}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── FAQ Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="text-center mb-10">
            <h2
              className={`${orbitron.className} text-2xl sm:text-3xl font-bold mb-3 text-gray-900`}
            >
              Frequently Asked Questions
            </h2>
            <p
              className={`${oxanium.className} text-gray-500 text-sm max-w-xl mx-auto`}
            >
              Everything you need to know about working with TechTrend
              Innovations — from pricing to timelines to post-launch support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center py-14 px-8 rounded-2xl bg-gradient-to-r from-cyan-600 to-pink-600 shadow-xl"
        >
          <h2
            className={`${orbitron.className} text-2xl sm:text-3xl font-bold text-white mb-4`}
          >
            Ready to Build Something Extraordinary?
          </h2>
          <p
            className={`${oxanium.className} text-white/85 text-base max-w-xl mx-auto mb-8 leading-relaxed`}
          >
            From AI-powered SaaS to mobile apps and e-commerce platforms — let's
            turn your idea into a product people love. First consultation is
            completely free.
          </p>
          <a
            href="#contact"
            className={`${orbitron.className} inline-block bg-white text-cyan-700 font-bold px-8 py-3 rounded-full text-sm hover:bg-gray-50 transition-colors shadow-md`}
          >
            Get a Free Quote →
          </a>
        </motion.div>

      </div>
    </section>
  );
}