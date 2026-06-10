import ConsultationCTA from "@/components/landing/ConsultationCTA";
import FAQ from "@/components/landing/FAQ";
import FeaturedServices from "@/components/landing/FeaturedServices";
import Hero from "@/components/landing/Hero";
import ServicePathways from "@/components/landing/ServicePathways";
import Services from "@/components/landing/Services";
import TrustSection from "@/components/landing/TrustSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServicePathways />
      <FeaturedServices />
      <TrustSection />
      <ConsultationCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
