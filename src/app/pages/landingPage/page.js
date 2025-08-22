import Navbar from "../../components/main/navbar";
import TechnologyPage from "../../components/technologyPage/tech";
import AboutPage from "../../components/aboutPage/about";
import CTA from "../../components/main/cta";
import Testimonials from "../../components/testimonials/test";
import HeroSection from "../../components/main/hero-bg"; // <-- client component

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechnologyPage />
      <Testimonials />
      <AboutPage />
      <CTA />
    </div>
  );
}
