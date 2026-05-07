// FILE: app/blog/page.jsx
// DoCoders — Blog Listing Page
// Imports posts from shared lib/blog-data.js

import Link from "next/link";
import { Orbitron, Oxanium } from "next/font/google";
import { BLOG_POSTS } from "../lib/blogData";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"], display: "swap" });
const oxanium  = Oxanium({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata = {
  title: "Blog — AI Development, Shopify & Software Guides | DoCoders",
  description:
    "Free expert guides on AI chatbot development, Shopify store setup, SaaS development, mobile app development, React Native vs Flutter, and SEO for startups. Learn from DoCoders.",
  keywords: [
    "software development blog", "AI chatbot development guide", "shopify development tips",
    "saas development tutorial", "mobile app development guide", "react native vs flutter 2025",
    "seo for startups", "docoders blog",
  ],
  alternates: { canonical: "https://docoders.com/blog" },
  openGraph: {
    type: "website",
    url: "https://docoders.com/blog",
    title: "DoCoders Blog — AI, Shopify, SaaS & Software Development Guides",
    description: "Free expert guides on AI, Shopify, SaaS, and mobile app development from DoCoders.",
    images: [{ url: "https://docoders.com/og-blog.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoCoders Blog — AI, Shopify & Software Development Tips",
    description: "Free expert guides on AI chatbots, Shopify stores, SaaS, and mobile apps.",
    images: ["https://docoders.com/og-blog.png"],
  },
};

// ─── THUMBNAIL CONFIG ────────────────────────────────────────────────────────
const THUMB_CONFIG = {
  "AI Development":     { bg: ["#0ea5e9","#6366f1"], icon: "🤖" },
  "E-commerce":         { bg: ["#10b981","#0284c7"], icon: "🛒" },
  "Mobile Development": { bg: ["#8b5cf6","#ec4899"], icon: "📱" },
  "SaaS Development":   { bg: ["#f59e0b","#ef4444"], icon: "☁️" },
  "Agency Tips":        { bg: ["#06b6d4","#0f172a"], icon: "💼" },
  "Web Development":    { bg: ["#14b8a6","#7c3aed"], icon: "💻" },
  "SEO & Growth":       { bg: ["#f97316","#be123c"], icon: "📈" },
  "Security":           { bg: ["#1e3a5f","#0ea5e9"], icon: "🔐" },
};

function BlogThumb({ category, title, featured }) {
  const cfg = THUMB_CONFIG[category] || THUMB_CONFIG["AI Development"];
  const h = featured ? 260 : 200;
  const gradId = `g-${category.replace(/\s/g,"")}`;
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: h, display: "block" }}
      aria-label={`Illustration for: ${title}`}
      role="img"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.bg[0]} />
          <stop offset="100%" stopColor={cfg.bg[1]} />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${gradId})`} />
      <circle cx="360" cy="30"  r="70" fill="white" fillOpacity="0.06" />
      <circle cx="40"  cy="230" r="80" fill="white" fillOpacity="0.05" />
      {Array.from({length: 8}, (_,col) =>
        Array.from({length: 4}, (_,row) => (
          <circle key={`${col}-${row}`} cx={30+col*50} cy={30+row*65} r="1.5" fill="white" fillOpacity="0.12" />
        ))
      )}
      {/* Large faded icon */}
      <text x="200" y="160" textAnchor="middle" fontSize="100" opacity="0.12">{cfg.icon}</text>
      {/* Foreground icon */}
      <text x="200" y="155" textAnchor="middle" fontSize="64">{cfg.icon}</text>
      {/* Category label */}
      <rect x="120" y="190" width="160" height="28" rx="14" fill="white" fillOpacity="0.18" />
      <text x="200" y="209" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="sans-serif" letterSpacing="1">
        {category.toUpperCase()}
      </text>
    </svg>
  );
}

// JSON-LD
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "DoCoders Blog",
  "url": "https://docoders.com/blog",
  "description": "Expert guides on AI development, Shopify, SaaS, web, and mobile app development.",
  "inLanguage": "en-US",
  "publisher": {
    "@type": "Organization",
    "name": "DoCoders",
    "url": "https://docoders.com",
    "logo": { "@type": "ImageObject", "url": "https://docoders.com/log.png" },
  },
  "blogPost": BLOG_POSTS.map(p => ({
    "@type": "BlogPosting",
    "headline": p.title,
    "description": p.excerpt,
    "url": `https://docoders.com/blog/${p.slug}`,
    "datePublished": p.date,
    "dateModified": p.date,
    "author": { "@type": "Organization", "name": "DoCoders", "url": "https://docoders.com" },
    "keywords": p.keywords.join(", "),
    "articleSection": p.category,
    "timeRequired": `PT${parseInt(p.readTime)}M`,
  })),
};

const CATEGORIES = [
  { label: "All Posts",          slug: "all" },
  { label: "AI Development",     slug: "ai-development" },
  { label: "Mobile Development", slug: "mobile-development" },
  { label: "E-commerce",         slug: "ecommerce" },
  { label: "SaaS Development",   slug: "saas-development" },
  { label: "Web Development",    slug: "web-development" },
  { label: "SEO & Growth",       slug: "seo-growth" },
  { label: "Agency Tips",        slug: "agency-tips" },
];

function BlogCard({ post, featured = false }) {
  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className={`group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${featured ? "lg:col-span-2" : ""}`}
    >
      <meta itemProp="datePublished"   content={post.date} />
      <meta itemProp="dateModified"    content={post.date} />
      <meta itemProp="author"          content="DoCoders" />
      <meta itemProp="description"     content={post.excerpt} />
      <meta itemProp="url"             content={`https://docoders.com/blog/${post.slug}`} />
      <meta itemProp="keywords"        content={post.keywords.join(", ")} />
      <meta itemProp="articleSection"  content={post.category} />

      <Link href={`/blog/${post.slug}`} aria-label={`Read: ${post.title}`} tabIndex={-1} className="block overflow-hidden">
        <div className="group-hover:scale-[1.02] transition-transform duration-500">
          <BlogThumb category={post.category} title={post.title} featured={featured} />
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className={`${oxanium.className} flex items-center justify-between mb-3`}>
          <Link
            href={`/blog?category=${post.categorySlug}`}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100 transition-colors"
          >
            {post.category}
          </Link>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <time dateTime={post.date}>{post.dateDisplay}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <h2
          className={`${orbitron.className} text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-cyan-600 transition-colors`}
          itemProp="headline"
        >
          <Link href={`/blog/${post.slug}`} className="hover:underline decoration-cyan-400">
            {post.title}
          </Link>
        </h2>

        <p className={`${oxanium.className} text-sm text-gray-500 leading-relaxed flex-1 mb-4`} itemProp="abstract">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className={`${oxanium.className} flex items-center gap-2`}>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">D</div>
            <div>
              <p className="text-xs font-semibold text-gray-700 leading-none">{post.author}</p>
              <p className="text-xs text-gray-400 leading-none mt-0.5">{post.authorTitle}</p>
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            aria-label={`Read full article: ${post.title}`}
            className={`${oxanium.className} inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-800 transition-colors`}
          >
            Read Guide →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const featuredPosts = BLOG_POSTS.filter(p => p.featured);
  const regularPosts  = BLOG_POSTS.filter(p => !p.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://docoders.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://docoders.com/blog" },
        ],
      })}} />

      <div className="min-h-screen bg-gray-50">
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <ol className={`${oxanium.className} flex items-center gap-2 text-sm text-gray-500 list-none p-0 m-0`}>
            <li><Link href="/" className="hover:text-cyan-600 transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">Blog</li>
          </ol>
        </nav>

        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <p className={`${oxanium.className} text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-3`}>
            Free Resources & Guides
          </p>
          <h1 className={`${orbitron.className} text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight`}>
            Software Development{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
              Blog & Guides
            </span>
          </h1>
          <p className={`${oxanium.className} text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6`}>
            Expert articles on <strong className="text-gray-800">AI chatbot development</strong>,{" "}
            <strong className="text-gray-800">Shopify store setup</strong>,{" "}
            <strong className="text-gray-800">SaaS development</strong>,{" "}
            <strong className="text-gray-800">mobile app development</strong>, and{" "}
            <strong className="text-gray-800">startup SEO</strong> — free resources from the DoCoders team.
          </p>
          <div className={`${oxanium.className} inline-flex flex-wrap justify-center gap-6 bg-white rounded-2xl px-8 py-4 shadow-sm border border-gray-100 text-sm`}>
            {[["12+","In-depth Guides"],["7","Topic Categories"],["Free","Always Free"]].map(([val,label]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-bold text-cyan-600 text-lg leading-none">{val}</span>
                <span className="text-gray-500 text-xs mt-1">{label}</span>
              </div>
            ))}
          </div>
        </header>

        <nav aria-label="Blog categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <ul className={`${oxanium.className} flex flex-wrap justify-center gap-2 list-none p-0 m-0`}>
            {CATEGORIES.map(cat => (
              <li key={cat.slug}>
                <Link
                  href={cat.slug === "all" ? "/blog" : `/blog?category=${cat.slug}`}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-600 hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all shadow-sm"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {featuredPosts.length > 0 && (
            <section aria-labelledby="featured-heading" className="mb-12">
              <h2 id="featured-heading" className={`${orbitron.className} text-xl font-bold text-gray-900 mb-6 flex items-center gap-2`}>
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-full inline-block" aria-hidden="true"/>
                Featured Guides
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredPosts.map(post => <BlogCard key={post.slug} post={post} featured />)}
              </div>
            </section>
          )}

          <section aria-labelledby="all-posts-heading">
            <h2 id="all-posts-heading" className={`${orbitron.className} text-xl font-bold text-gray-900 mb-6 flex items-center gap-2`}>
              <span className="w-2 h-6 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-full inline-block" aria-hidden="true"/>
              All Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map(post => <BlogCard key={post.slug} post={post} />)}
            </div>
          </section>

          <aside className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 text-center">
            <p className={`${oxanium.className} text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-2`}>Ready to Build?</p>
            <h2 className={`${orbitron.className} text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3`}>
              Need a Software Development Partner?
            </h2>
            <p className={`${oxanium.className} text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed`}>
              DoCoders is a global <strong className="text-gray-800">software development agency</strong> building
              AI-powered SaaS products, Shopify stores, and mobile apps for startups worldwide.
              Book a free consultation — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#technologies" className={`${oxanium.className} inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform text-sm`}>
                View Our Services
              </Link>
              <Link href="mailto:docoder@docoders.com?subject=Blog%20Consultation" className={`${oxanium.className} inline-block px-6 py-3 border border-cyan-400 text-cyan-700 font-medium rounded-xl hover:bg-cyan-50 transition-all text-sm`}>
                Book Free Consultation
              </Link>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}