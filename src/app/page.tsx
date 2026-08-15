import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Features from "@/components/Features";
import Marketplace from "@/components/Marketplace";
import PricingCalculator from "@/components/PricingCalculator";
import DashboardPreview from "@/components/DashboardPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <Features />
        <Marketplace />
        <PricingCalculator />
        <DashboardPreview />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
