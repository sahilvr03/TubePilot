import Navbar from "../../components/main/navbar";
import TechnologyPage from "../../components/technologyPage/tech";
import AboutPage from "../../components/aboutPage/about";
import CTA from "../../components/main/cta";
import Testimonials from "../../components/testimonials/test";
import HeroSection from "../../components/main/hero"; 
import ParticlesBackground from "../../components/main/bg";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Particles behind everything */}
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TechnologyPage />
        <Testimonials />
        <AboutPage />
        <CTA />
      </div>
    </div>
  );
}
