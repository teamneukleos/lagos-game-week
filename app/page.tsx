import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import Partners2025 from "@/components/2025Partners";
import About from "@/components/about";
import TimelineSection from "@/components/TimelineSection";
import SecureSpotSection from "@/components/SecureSpot";
import ExperienceGallery from "@/components/Experiencegallery";
import PartnersSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <main className="">
        <Partners2025 />
        <div id="about-marker" />
        <About />
        <TimelineSection />
        <SecureSpotSection />
        <ExperienceGallery />
        <PartnersSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}