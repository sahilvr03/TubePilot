// FILE: app/blog/[slug]/page.jsx
// DoCoders — Dynamic Blog Post Page
// Full article layout with AI illustrations, SEO metadata, related posts

import Link from "next/link";
import { notFound } from "next/navigation";
import { Orbitron, Oxanium } from "next/font/google";
import { getPostBySlug, getRelatedPosts, getAllSlugs } from "../../lib/blogData";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"], display: "swap" });
const oxanium  = Oxanium({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS — pre-render all blog posts at build time
// ─────────────────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getAllSlugs();
}

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC METADATA — each post gets its own SEO meta tags
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;  // ← yeh fix hai
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | DoCoders" };

  return {
    title: post.metaTitle || `${post.title} | DoCoders Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://docoders.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `https://docoders.com/blog/${post.slug}`,
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      publishedTime: post.date,
      authors: ["DoCoders"],
      section: post.category,
      images: [{ url: `https://docoders.com/blog/og-${post.slug}.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [`https://docoders.com/blog/og-${post.slug}.png`],
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY → GRADIENT CONFIG (same as listing page)
// ─────────────────────────────────────────────────────────────────────────────
const CATEGORY_GRADIENTS = {
  "AI Development":     ["#0ea5e9", "#6366f1"],
  "E-commerce":         ["#10b981", "#0284c7"],
  "Mobile Development": ["#8b5cf6", "#ec4899"],
  "SaaS Development":   ["#f59e0b", "#ef4444"],
  "Agency Tips":        ["#06b6d4", "#0f172a"],
  "Web Development":    ["#14b8a6", "#7c3aed"],
  "SEO & Growth":       ["#f97316", "#be123c"],
  "Security":           ["#1e3a5f", "#0ea5e9"],
};

const CATEGORY_ICONS = {
  "AI Development":     "🤖",
  "E-commerce":         "🛒",
  "Mobile Development": "📱",
  "SaaS Development":   "☁️",
  "Agency Tips":        "💼",
  "Web Development":    "💻",
  "SEO & Growth":       "📈",
  "Security":           "🔐",
};

// Hero SVG banner for article page
function HeroBanner({ category, title }) {
  const [c1, c2] = CATEGORY_GRADIENTS[category] || ["#0ea5e9", "#6366f1"];
  const icon = CATEGORY_ICONS[category] || "📄";
  const gradId = `hero-${category.replace(/\s/g, "")}`;

  return (
    <svg
      viewBox="0 0 1200 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block", maxHeight: 360 }}
      role="img"
      aria-label={`Hero illustration for: ${title}`}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="1200" height="400" fill={`url(#${gradId})`} />
      {/* Decorative circles */}
      <circle cx="1100" cy="60"  r="160" fill="white" fillOpacity="0.05" />
      <circle cx="100"  cy="350" r="200" fill="white" fillOpacity="0.04" />
      <circle cx="600"  cy="420" r="140" fill="white" fillOpacity="0.03" />
      {/* Grid dots */}
      {Array.from({length: 12}, (_,col) =>
        Array.from({length: 5}, (_,row) => (
          <circle
            key={`${col}-${row}`}
            cx={50 + col * 100}
            cy={40 + row * 80}
            r="1.8"
            fill="white"
            fillOpacity="0.15"
          />
        ))
      )}
      {/* Diagonal lines */}
      {[-200,-100,0,100,200,300,400,500].map((offset, i) => (
        <line
          key={i}
          x1={offset} y1="0"
          x2={offset + 400} y2="400"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.06"
        />
      ))}
      {/* Large icon */}
      <text x="600" y="240" textAnchor="middle" fontSize="120" opacity="0.18">{icon}</text>
      {/* Glowing center circle */}
      <circle cx="600" cy="200" r="100" fill="white" fillOpacity="0.06" />
      <circle cx="600" cy="200" r="60"  fill="white" fillOpacity="0.06" />
      {/* Icon foreground */}
      <text x="600" y="240" textAnchor="middle" fontSize="80">{icon}</text>
      {/* Category pill */}
      <rect x="480" y="295" width="240" height="36" rx="18" fill="white" fillOpacity="0.2" />
      <text
        x="600" y="318"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="2"
      >
        {category.toUpperCase()}
      </text>
    </svg>
  );
}

// Small card for related posts
function RelatedCard({ post }) {
  const [c1, c2] = CATEGORY_GRADIENTS[post.category] || ["#0ea5e9", "#6366f1"];
  const icon = CATEGORY_ICONS[post.category] || "📄";
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      aria-label={`Read: ${post.title}`}
    >
      {/* Mini thumb */}
      <div
        className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl"
        style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className={`${oxanium.className} text-xs font-semibold text-cyan-600 mb-1`}>{post.category}</p>
        <h3 className={`${orbitron.className} text-sm font-bold text-gray-900 leading-snug group-hover:text-cyan-600 transition-colors line-clamp-2`}>
          {post.title}
        </h3>
        <p className={`${oxanium.className} text-xs text-gray-400 mt-1`}>{post.readTime}</p>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOG POST PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(params.slug);

  // JSON-LD for this article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://docoders.com/blog/${post.slug}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "DoCoders",
      "url": "https://docoders.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "DoCoders",
      "logo": { "@type": "ImageObject", "url": "https://docoders.com/log.png" },
    },
    "keywords": post.keywords.join(", "),
    "articleSection": post.category,
    "timeRequired": `PT${parseInt(post.readTime)}M`,
    "inLanguage": "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://docoders.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog",  "item": "https://docoders.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://docoders.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-gray-50">

        {/* ── Breadcrumb ────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <ol className={`${oxanium.className} flex items-center flex-wrap gap-2 text-sm text-gray-500 list-none p-0 m-0`}>
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <meta itemProp="position" content="1" />
              <Link href="/" itemProp="item" className="hover:text-cyan-600 transition-colors">
                <span itemProp="name">Home</span>
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <meta itemProp="position" content="2" />
              <Link href="/blog" itemProp="item" className="hover:text-cyan-600 transition-colors">
                <span itemProp="name">Blog</span>
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <meta itemProp="position" content="3" />
              <span itemProp="name" className="text-gray-900 font-medium truncate max-w-xs">{post.category}</span>
            </li>
          </ol>
        </nav>

        {/* ── Hero Banner ───────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <HeroBanner category={post.category} title={post.title} />
          </div>
        </div>

        {/* ── Article + Sidebar ─────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── MAIN ARTICLE ─────────────────────────────────────────── */}
            <article
              className="flex-1 min-w-0"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <meta itemProp="datePublished" content={post.date} />
              <meta itemProp="dateModified"  content={post.date} />
              <meta itemProp="author"        content="DoCoders" />
              <meta itemProp="url"           content={`https://docoders.com/blog/${post.slug}`} />
              <meta itemProp="keywords"      content={post.keywords.join(", ")} />

              {/* Category tag + meta */}
              <div className={`${oxanium.className} flex flex-wrap items-center gap-3 mb-4`}>
                <Link
                  href={`/blog?category=${post.categorySlug}`}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100 transition-colors"
                >
                  {post.category}
                </Link>
                <time dateTime={post.date} className="text-sm text-gray-400">{post.dateDisplay}</time>
                <span aria-hidden="true" className="text-gray-200">·</span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>

              {/* Title */}
              <h1
                className={`${orbitron.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-5`}
                itemProp="headline"
              >
                {post.title}
              </h1>

              {/* Author row */}
              <div className={`${oxanium.className} flex items-center gap-3 mb-8 pb-8 border-b border-gray-100`}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  D
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                  <p className="text-xs text-gray-400">{post.authorTitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="prose-custom" itemProp="articleBody">

                {/* Intro */}
                <p className={`${oxanium.className} text-lg text-gray-700 leading-relaxed mb-8 font-medium`}>
                  {post.content.intro}
                </p>

                {/* Sections */}
                {post.content.sections.map((section, i) => (
                  <section key={i} className="mb-8">
                    <h2 className={`${orbitron.className} text-xl font-bold text-gray-900 mb-3 flex items-start gap-3`}>
                      <span
                        className="mt-1 flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xs font-bold flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      {section.heading}
                    </h2>
                    <p className={`${oxanium.className} text-gray-600 leading-relaxed pl-10`}>
                      {section.body}
                    </p>
                  </section>
                ))}

                {/* Divider */}
                <div className="my-10 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
                  <span className="text-cyan-400 text-lg" aria-hidden="true">◆</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-6 mb-8">
                  <h2 className={`${orbitron.className} text-lg font-bold text-gray-900 mb-2 flex items-center gap-2`}>
                    <span aria-hidden="true">💡</span> Key Takeaway
                  </h2>
                  <p className={`${oxanium.className} text-gray-700 leading-relaxed`}>
                    {post.content.conclusion}
                  </p>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 text-center">
                  <p className={`${oxanium.className} text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2`}>
                    Work With DoCoders
                  </p>
                  <p className={`${oxanium.className} text-white text-base leading-relaxed mb-5`}>
                    {post.content.cta}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/#technologies"
                      className={`${oxanium.className} inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform text-sm shadow-lg`}
                    >
                      View Our Services
                    </Link>
                    <Link
                      href="mailto:docoder@docoders.com"
                      className={`${oxanium.className} inline-block px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-xl hover:bg-cyan-900/30 transition-all text-sm`}
                    >
                      Book Free Consultation
                    </Link>
                  </div>
                </div>

              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className={`${oxanium.className} text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3`}>
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map(kw => (
                    <span
                      key={kw}
                      className={`${oxanium.className} px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200`}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share row */}
              <div className={`${oxanium.className} mt-8 flex items-center gap-3 flex-wrap`}>
                <span className="text-sm text-gray-500 font-medium">Share this guide:</span>
                {[
                  {
                    label: "Twitter / X",
                    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://docoders.com/blog/${post.slug}`)}`,
                    color: "bg-black hover:bg-gray-800",
                  },
                  {
                    label: "LinkedIn",
                    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://docoders.com/blog/${post.slug}`)}`,
                    color: "bg-blue-700 hover:bg-blue-800",
                  },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${s.label}`}
                    className={`${s.color} text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>

            </article>

            {/* ── SIDEBAR ──────────────────────────────────────────────── */}
            <aside className="lg:w-80 flex-shrink-0 space-y-6">

              {/* Quick info card */}
              <div className={`${oxanium.className} bg-white border border-gray-100 rounded-2xl p-5 shadow-sm`}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Article Info</p>
                <dl className="space-y-3 text-sm">
                  {[
                    ["Category",   post.category],
                    ["Published",  post.dateDisplay],
                    ["Read Time",  post.readTime],
                    ["Author",     post.author],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-2">
                      <dt className="text-gray-400 flex-shrink-0">{label}</dt>
                      <dd className="text-gray-800 font-semibold text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Table of contents */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <p className={`${oxanium.className} text-xs font-bold text-gray-400 uppercase tracking-widest mb-4`}>
                  In This Guide
                </p>
                <ol className={`${oxanium.className} space-y-2 list-none p-0 m-0`}>
                  {post.content.sections.map((section, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors cursor-default">
                      <span className="flex-shrink-0 w-5 h-5 rounded-md bg-cyan-50 text-cyan-600 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-snug">{section.heading}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <p className={`${oxanium.className} text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-1`}>
                    Related Guides
                  </p>
                  <div className="space-y-3">
                    {related.map(p => <RelatedCard key={p.slug} post={p} />)}
                  </div>
                </div>
              )}

              {/* Sticky CTA */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-5 text-white text-center shadow-lg">
                <p className={`${oxanium.className} text-xs font-semibold uppercase tracking-widest opacity-80 mb-2`}>
                  Need Help?
                </p>
                <p className={`${orbitron.className} text-base font-bold mb-1`}>Build with DoCoders</p>
                <p className={`${oxanium.className} text-sm opacity-80 mb-4`}>
                  Free consultation. No commitment.
                </p>
                <Link
                  href="mailto:docoder@docoders.com"
                  className={`${oxanium.className} block w-full py-2.5 bg-white text-cyan-700 font-bold rounded-xl text-sm hover:bg-cyan-50 transition-colors`}
                >
                  Get In Touch →
                </Link>
              </div>

            </aside>
          </div>
        </div>

        {/* ── Back to blog ──────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link
            href="/blog"
            className={`${oxanium.className} inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-800 transition-colors`}
          >
            ← Back to All Articles
          </Link>
        </div>

      </div>
    </>
  );
}