import Navbar from "./components/main/navbar";
import WhatsappButton from "./components/WhatsappButton";
import "./globals.css";
import { Bungee, Permanent_Marker } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://docoders.com/"), // replace with your real domain

  title: {
    default: "DoCoders | Web Development & AI Solutions Company",
    template: "%s | DoCoders",
  },

  description:
    "DoCoders is a modern software agency providing web development, AI solutions, Next.js applications, UI/UX design, automation systems, SEO optimization, and scalable digital products for startups and businesses.",

keywords: [
  // Brand
  "DoCoders",
  "DoCoders software agency",

  // High Conversion Service Keywords
  "hire next js developer",
  "hire react developer",
  "custom software development company",
  "website development services",
  "business website development",
  "AI automation services",
  "web app development company",
  "startup website development",
  "ecommerce website development",
  "landing page development services",

  // Low Competition Long Tail
  "modern next js website agency",
  "affordable web development company",
  "fast loading website development",
  "SEO optimized website development",
  "custom admin dashboard development",
  "responsive website design services",
  "animated website development",
  "portfolio website development company",
  "AI powered web applications",
  "full stack next js development",

  // Pakistan Local SEO
  "software house in Pakistan",
  "web development company in Karachi",
  "AI agency in Pakistan",
  "best software company in Karachi",
  "Pakistan web developers",
  "SEO agency Karachi",
  "website developers Pakistan",

  // Technical Keywords
  "Next.js development",
  "React development company",
  "Tailwind CSS development",
  "MERN stack developers",
  "frontend development services",
  "backend development company",
  "API integration services",

  // Business Intent Keywords
  "grow business online",
  "digital transformation company",
  "automation for businesses",
  "custom CRM development",
  "digital solutions agency",
  "software solutions for startups",

  // AI Trend Keywords
  "AI agent development",
  "OpenAI integration services",
  "Gemini AI development",
  "AI chatbot development",
  "AI SaaS development",
  "automation AI agency",

  // Ranking Support Keywords
  "professional website design",
  "modern UI UX agency",
  "high performance websites",
  "Google ranking optimized websites",
  "conversion focused web design",
],
  authors: [{ name: "DoCoders" }],
  creator: "DoCoders",
  publisher: "DoCoders",

  applicationName: "DoCoders",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://docoders.com/", // replace with real domain
  },

  openGraph: {
    title: "DoCoders | Web Development & AI Solutions",
    description:
      "We build scalable web applications, AI systems, automation tools, and modern digital experiences using Next.js, React, and advanced technologies.",
    url: "https://docoders.com/",
    siteName: "DoCoders",
    images: [
      {
        url: "/og-image.png", // create this image in public folder
        width: 1200,
        height: 630,
        alt: "DoCoders",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DoCoders | Web Development & AI Solutions",
    description:
      "Modern software agency building scalable apps, AI products, automation systems, and premium digital experiences.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bungee.className}>
        <Navbar />

        <main>{children}</main>

        <WhatsappButton />

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DoCoders",
              url: "https://docoders.com/",
              logo: "https://docoders.com/favicon.png",
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
                "https://www.facebook.com/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-316-2880579",
                contactType: "customer service",
                areaServed: "PK",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}