"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });
const oxanium = Oxanium({ subsets: ["latin"], weight: ["400", "600", "700"] });

// ─── Data ─────────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    name: "James Thornton",
    role: "Founder, LaunchPad SaaS",
    location: "London, UK",
    rating: 5,
    review:
      "TechTrend Innovations delivered our AI-powered SaaS MVP in just 10 weeks — on time, on budget, and beyond what we expected. The team&amp;s communication was exceptional throughout. We went from idea to paying customers in under 3 months.",
    service: "AI SaaS Development",
  },
  {
    name: "Fatima Al-Rashid",
    role: "E-commerce Director",
    location: "Dubai, UAE",
    rating: 5,
    review:
      "Our Shopify store revenue doubled within 60 days of launching the custom theme and AI chatbot TechTrend built for us. They understood our market perfectly and delivered a platform that converts. Highly recommend for any e-commerce project.",
    service: "Shopify Development",
  },
  {
    name: "David Okonkwo",
    role: "CEO, HealthTrack App",
    location: "Toronto, Canada",
    rating: 5,
    review:
      "We hired TechTrend to build our React Native health tracking app and the result was outstanding — 4.8 stars on both app stores within the first month. Their attention to UX detail and performance optimization sets them apart from every agency we&amp;ve worked with.",
    service: "Mobile App Development",
  },
  {
    name: "Sofia Mendes",
    role: "CTO, RetailOS",
    location: "Lisbon, Portugal",
    rating: 5,
    review:
      "The IoT dashboard TechTrend built for our retail analytics platform handles 50,000+ data points in real time without a hiccup. Their engineers genuinely understand cloud infrastructure. We&amp;ve extended our contract for a second phase already.",
    service: "IoT & Cloud Development",
  },
  {
    name: "Ahmed Siddiqui",
    role: "Startup Founder",
    location: "Karachi, Pakistan",
    rating: 5,
    review:
      "Best software development agency in Pakistan — no question. They built our entire SaaS platform with Stripe billing, multi-tenancy, and OpenAI integration. The code quality is production-grade and the team is always available. Worth every rupee.",
    service: "SaaS Development",
  },
];

const STATS = [
  { value: "120+", label: "Happy Clients" },
  { value: "4.9★", label: "Average Rating" },
  { value: "15+", label: "Countries" },
  { value: "98%", label: "Repeat Rate" },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" aria-hidden="true" />
      ))}
    </div>
  );
}

function ReviewCard({ review, direction }) {
  return (
    <motion.div
      key={review.name}
      initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 py-10"
      itemScope
      itemProp="review"
      itemType="https://schema.org/Review"
    >
      {/* Service badge */}
      <span
        className={`${oxanium.className} text-xs px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 mb-5 font-semibold`}
      >
        {review.service}
      </span>

      {/* Quote icon */}
      <FaQuoteLeft className="text-3xl text-yellow-400 mb-4 opacity-80" aria-hidden="true" />

      {/* Review text */}
      <p
        className={`${oxanium.className} text-base sm:text-lg italic text-gray-700 leading-relaxed max-w-2xl mb-6`}
        itemProp="reviewBody"
      >
        {review.review}
      </p>

      {/* Stars */}
      <div
        itemProp="reviewRating"
        itemScope
        itemType="https://schema.org/Rating"
      >
        <meta itemProp="ratingValue" content={review.rating} />
        <meta itemProp="bestRating" content="5" />
        <StarRating count={review.rating} />
      </div>

      {/* Author */}
      <div className="mt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
        <p
          className={`${orbitron.className} text-base font-semibold text-gray-900`}
          itemProp="name"
        >
          {review.name}
        </p>
        <p className={`${oxanium.className} text-sm text-gray-500 mt-0.5`}>
          {review.role} · {review.location}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next) => {
      setDirection(next > current ? 1 : -1);
      setCurrent((next + REVIEWS.length) % REVIEWS.length);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % REVIEWS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="testimonials"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 text-gray-900"
      aria-label="Client Testimonials"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className={`${orbitron.className} text-3xl sm:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600`}
          >
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-5 rounded-full" />
          <p className={`${oxanium.className} text-gray-500 text-base max-w-xl mx-auto leading-relaxed`}>
            Trusted by founders, CTOs, and e-commerce directors across 15+ countries.
            Here&amp;s what they say about working with TechTrend Innovations.
          </p>
        </motion.div>

        {/* ── Stats row ──
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center bg-white/70 backdrop-blur rounded-xl border border-gray-100 py-5 shadow-sm"
            >
              <p className={`${orbitron.className} text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600`}>
                {s.value}
              </p>
              <p className={`${oxanium.className} text-xs text-gray-500 mt-1`}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* ── Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative w-full h-[320px] sm:h-[280px] bg-white/85 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <ReviewCard
                key={current}
                review={REVIEWS[current]}
                direction={direction}
              />
            </AnimatePresence>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 sm:-translate-x-6 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-cyan-600 hover:border-cyan-300 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 sm:translate-x-6 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-cyan-600 hover:border-cyan-300 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* ── Dots ── */}
        <div className="flex justify-center mt-6 gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                current === idx
                  ? "w-6 h-3 bg-gradient-to-r from-cyan-500 to-pink-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* ── Review counter ── */}
        <p className={`${oxanium.className} text-center text-xs text-gray-400 mt-3`}>
          {current + 1} of {REVIEWS.length} reviews
        </p>

        {/* ── Trust note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`${oxanium.className} text-center text-sm text-gray-400 mt-10`}
        >
          All reviews are from real clients. Verified projects across AI SaaS, e-commerce,
          mobile app, and IoT development engagements.
        </motion.p>
      </div>
    </section>
  );
}