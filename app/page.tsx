import ConsultationCTA from "@/components/landing/ConsultationCTA";
import FAQ from "@/components/landing/FAQ";
import FeaturedServices from "@/components/landing/FeaturedServices";
import Hero from "@/components/landing/Hero";
import MeetTheFounder from "@/components/landing/MeetTheFounder";
import Services from "@/components/landing/Services";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      {/* <ServicePathways /> */}
      <FeaturedServices />
      <MeetTheFounder />
      <ConsultationCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
