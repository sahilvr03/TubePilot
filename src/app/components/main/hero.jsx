"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Orbitron, Oxanium } from "next/font/google";
import { useEffect, useState } from "react";

// ─── Fonts ───────────────────────────────────────────────────────────────────
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap", // SEO: prevents FOIT, good for CLS
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// ─── Media Query Hook ─────────────────────────────────────────────────────────
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

// ─── Tech Logos ───────────────────────────────────────────────────────────────
const techLogos = [
  { name: "React", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/react/react-original.svg" },
  { name: "Next.js", url: "/next.webp" },
  { name: "Vue.js", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/angularjs/angularjs-original.svg" },
  { name: "TailwindCSS", url: "/tailwind.png" },
  { name: "Node.js", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/nodejs/nodejs-original.svg" },
  { name: "Django", url: "/django.png" },
  { name: "MongoDB", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/docker/docker-original.svg" },
  { name: "AWS", url: "/aws.png" },
  { name: "Google Cloud", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/googlecloud/googlecloud-original.svg" },
  { name: "GitHub", url: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/github/github-original.svg" },
];

// ─── Lazy load Lottie ─────────────────────────────────────────────────────────
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
// This goes inside <head> via next/head or app/layout.tsx — paste it there.
// Included here as a reference constant.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DoCoders",
  "url": "https://docoders.com",
  "description":
    "DoCoders is an AI-powered software development agency specializing in SaaS development, Shopify e-commerce stores, mobile app development (iOS & Android), and AI chatbot integration.",
  "applicationCategory": "SoftwareApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": [
    {
      "@type": "Offer",
      "name": "Shopify Store Setup",
      "price": "199",
      "priceCurrency": "USD",
    },
    {
      "@type": "Offer",
      "name": "AI Chatbot Development",
      "price": "299",
      "priceCurrency": "USD",
    },
    {
      "@type": "Offer",
      "name": "Mobile App Development",
      "price": "499",
      "priceCurrency": "USD",
    },
  ],
  "provider": {
    "@type": "Organization",
    "name": "DoCoders",
    "url": "https://docoders.com",
    "email": "docoder@docoders.com",
    "sameAs": [
      "https://www.linkedin.com/company/docoder/",
      "https://www.instagram.com/docoders03",
    ],
    "areaServed": ["PK", "US", "GB", "AE"],
    "serviceType": [
      "AI Software Development",
      "SaaS Development",
      "Shopify Development",
      "Mobile App Development",
      "AI Chatbot Integration",
    ],
  },
};

// ─── Service Tags with SEO keywords ──────────────────────────────────────────
const serviceTags = [
  { label: "AI Assistants", keyword: "AI chatbot development" },
  { label: "E-commerce APIs", keyword: "Shopify e-commerce development" },
  { label: "Mobile SDKs", keyword: "mobile app development" },
  { label: "IoT Platforms", keyword: "IoT solutions" },
  { label: "Cloud Services", keyword: "cloud software development" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const duration = isMobile ? 15 : 70;

  return (
    <>
      {/*
       * ── JSON-LD Structured Data ──────────────────────────────────────────
       * Inject this in your root layout.tsx or _document.tsx:
       *   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
       * ────────────────────────────────────────────────────────────────────
       */}

      {/*
       * ── Semantic SEO Notes ───────────────────────────────────────────────
       * • <section> has aria-labelledby pointing to the H1 for accessibility
       * • H1 contains primary keyword: "AI-Powered Software Development Agency"
       * • <p> below H1 is the semantic "description" — contains LSI keywords
       * • Tech logos use descriptive alt text (not just tech name)
       * • Service tags use aria-label with full keyword context
       * • Lottie animation wrapped in <figure> with <figcaption> for crawlers
       * ────────────────────────────────────────────────────────────────────
       */}

      <section
        id="home"
        aria-labelledby="hero-heading"
        itemScope
        itemType="https://schema.org/Organization"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-20 overflow-hidden bg-white text-gray-900"
      >
        {/* Hidden machine-readable org meta for schema.org */}
        <meta itemProp="name" content="DoCoders" />
        <meta itemProp="url" content="https://docoders.com" />
        <meta
          itemProp="description"
          content="DoCoders is a software development agency offering AI-powered SaaS, Shopify e-commerce, mobile app development, and AI chatbot integration services."
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* ── Left Content ─────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/*
               * SEO: <p> above H1 acts as a keyword-rich "eyebrow" label.
               * "Software Development Agency in Pakistan" = geo-targeted keyword.
               * aria-label provides screen readers full context.
               */}
              <p
                className={`${oxanium.className} text-lg font-semibold text-orange-500 mt-10 tracking-wide`}
                aria-label="Software Development Agency empowering businesses with AI"
              >
                Software Development Agency
              </p>

              {/*
               * SEO: H1 — The most important on-page SEO element.
               * Primary keyword: "AI-Powered Software Development Agency"
               * Secondary keyword in span: "SaaS Development, Shopify & Mobile Apps"
               * id="hero-heading" links this to aria-labelledby on <section>
               */}
              <h1
                id="hero-heading"
                className={`${orbitron.className} text-4xl sm:text-5xl md:text-6xl xl:text-5xl font-extrabold leading-tight mb-4`}
              >
                <span className="block bg-gradient-to-r from-orange-500 via-blue-600 to-black text-transparent bg-clip-text drop-shadow-sm">
                  AI-Powered Software
                </span>
                <span className="block bg-gradient-to-r from-orange-500 via-blue-600 to-black text-transparent bg-clip-text drop-shadow-sm">
                  Development Agency
                </span>
                {/*
                 * SEO: H2-level sub-heading inside H1 span.
                 * Contains secondary keywords: SaaS, Shopify, Mobile Apps
                 */}
                <span className="block text-gray-800 mt-2 text-xl sm:text-2xl md:text-3xl">
                  SaaS Development, Shopify &amp; Mobile Apps
                </span>
              </h1>

              {/*
               * SEO: This <p> is the "meta description equivalent" on-page.
               * Contains LSI (Latent Semantic Indexing) keywords:
               * — "AI chatbot integration"
               * — "custom SaaS solutions"
               * — "mobile app development"
               * — "IoT solutions"
               * — "e-commerce development"
               * — "Pakistan"
               * Google uses this paragraph for featured snippets.
               */}
              <p
                className={`${oxanium.className} text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed`}
                itemProp="description"
              >
                DoCoders is a software development agency building
                high-performance{" "}
                <strong className="text-gray-800 font-semibold">custom SaaS solutions</strong>,{" "}
                <strong className="text-gray-800 font-semibold">AI chatbot integration</strong>,{" "}
                <strong className="text-gray-800 font-semibold">Shopify e-commerce stores</strong>,{" "}
                <strong className="text-gray-800 font-semibold">mobile app development</strong>{" "}
                (iOS &amp; Android), and IoT platforms — with cutting-edge AI and stunning user experiences.
              </p>

              {/*
               * SEO: Breadcrumb-style trust signals — also good for E-E-A-T
               * (Experience, Expertise, Authoritativeness, Trustworthiness)
               */}
              <ul
                className={`${oxanium.className} flex flex-wrap gap-x-4 gap-y-1 justify-center lg:justify-start text-sm text-gray-500 mb-8 list-none`}
                aria-label="Agency highlights"
              >
                <li className="flex items-center gap-1">
                  <span className="text-green-500" aria-hidden="true">✓</span>
                  <span>Affordable Pricing</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-green-500" aria-hidden="true">✓</span>
                  <span>AI-First Development</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-green-500" aria-hidden="true">✓</span>
                  <span>End-to-End Delivery</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-green-500" aria-hidden="true">✓</span>
                  <span>  Global Clients</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("technologies")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  /*
                   * SEO: Changed <button> to <a href="#services"> — anchor tags
                   * are crawlable by Google, buttons are not. This also passes
                   * PageRank internally to the services section.
                   */
                  aria-label="Get started with DoCoders AI software development"
                  className={`${oxanium.className} inline-block px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold shadow-md text-sm sm:text-base`}
                >
                  Get Started
                </motion.a>

                <motion.a
                  href="mailto:docoder@docoders.com?subject=Demo Request"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #f97316" }}
                  whileTap={{ scale: 0.95 }}
                  /*
                   * SEO: "Book a Demo" changed to <a href="mailto:..."> so
                   * Google can index contact intent. Also good for CTR signals.
                   */
                  aria-label="Book a demo with DoCoders software development agency"
                  className={`${oxanium.className} inline-block px-6 py-3 sm:px-8 sm:py-3 border border-orange-500 bg-transparent rounded-xl text-orange-600 font-medium shadow-sm text-sm sm:text-base`}
                >
                  Book a Demo
                </motion.a>
              </div>
            </motion.div>

            {/* ── Right Content ─────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col items-center justify-center"
            >
              {/*
               * SEO: Lottie animation wrapped in <figure> + <figcaption>.
               * Crawlers can't see animations, but <figcaption> gives context.
               * aria-label on figure tells screen readers what is shown.
               */}
              <figure
                className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] aspect-square"
                aria-label="DoCoders AI-powered software development illustration"
              >
                <DotLottieReact src="/animations/new.json" loop autoplay />
                <figcaption className="sr-only">
                  Animated illustration showing AI-powered software development, mobile apps, and cloud services by DoCoders — a software agency specializing in AI-powered solutions.
                </figcaption>
              </figure>

              {/*
               * SEO: Service tags use <ul>/<li> for semantic list structure.
               * aria-label on each tag provides keyword context for screen readers.
               * These also reinforce topical relevance for the page's core keywords.
               */}
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                aria-label="Services offered by DoCoders"
              >
                <ul
                  className={`flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 sm:mt-6 list-none ${oxanium.className}`}
                >
                  {serviceTags.map((tag) => (
                    <li key={tag.label}>
                      <a
                        href="#services"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("technologies")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        /*
                         * SEO: aria-label contains full keyword phrase.
                         * "AI chatbot development services" > just "AI Assistants"
                         * for semantic search understanding.
                         */
                        aria-label={`${tag.keyword} services by DoCoders`}
                        className="block bg-gradient-to-r from-orange-50 to-blue-50 border border-blue-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-blue-700 hover:scale-105 transition-transform shadow-sm"
                      >
                        {tag.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </motion.div>
          </div>
        </div>

        {/* ── Moving Tech Logos ──────────────────────────────────────────── */}
        {/*
         * SEO: Wrapped in <aside> with aria-label — tells crawlers this is
         * supplementary/supporting content (tech stack), not primary content.
         * Each logo img has a descriptive alt that includes context:
         * "React.js — used by DoCoders for frontend development"
         */}
        <aside
          className="relative w-full overflow-hidden mt-10 sm:mt-16 px-2"
          aria-label="Technologies used by DoCoders software development agency"
        >
          <div className="relative bg-white rounded-xl border border-gray-200 shadow-lg py-4 sm:py-6 overflow-hidden">
            <motion.div
              className="flex items-center will-change-transform"
              animate={{ x: ["0%", "-350%"] }}
              transition={{ repeat: Infinity, duration, ease: "linear" }}
              aria-hidden="true" // Decorative — screen readers skip the duplicate loop
            >
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6 sm:gap-8 md:gap-10 flex-shrink-0 px-2">
                  {techLogos.map((tech, i) => (
                    <div
                      key={`${idx}-${i}`}
                      className="flex flex-col items-center flex-shrink-0 transition-all duration-300 hover:scale-110 group"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl flex items-center justify-center border border-gray-200 shadow-md">
                          <img
                            src={tech.url}
                            alt={`${tech.name} — technology used by DoCoders for software development`}
                            /*
                             * SEO: Descriptive alt text with keyword context.
                             * "React.js — technology used by DoCoders for software development"
                             * This helps image search and contextual understanding.
                             * width/height set to prevent layout shift (CLS score).
                             */
                            width={48}
                            height={48}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                          />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded shadow-md border border-gray-200 z-20">
                          {tech.name}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 mt-2 hidden sm:block font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Gradient fades */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white via-white/80 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white via-white/80 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/*
           * SEO: Visually hidden but crawler-readable static list of technologies.
           * This gives Google clear text to index since the animated ticker
           * is marked aria-hidden="true" above.
           */}
          <ul className="sr-only" aria-label="Full technology stack at DoCoders">
            {techLogos.map((tech) => (
              <li key={tech.name}>{tech.name} development services</li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}