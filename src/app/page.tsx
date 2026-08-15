import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NovaBridge",
  applicationCategory: "NetworkApplication",
  description:
    "Premium proxy infrastructure platform offering residential, ISP, datacenter and mobile proxies with instant activation and global coverage.",
  url: "https://novabridge.io",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0.80",
    highPrice: "8.00",
    offerCount: "6",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "14752",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What proxy types do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Residential proxies (35M+ rotating IPs), ISP proxies (static residential IPs), Datacenter proxies (high-speed dedicated IPs) and Mobile proxies (4G/5G carrier IPs).",
      },
    },
    {
      "@type": "Question",
      name: "How fast is delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instant. Once payment confirms, your proxy credentials generate automatically and appear in your dashboard within seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide API access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full REST API for managing proxies, rotating IPs, checking bandwidth and automating purchases. SDKs available for Python, Node.js, Go, Java and PHP.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <Features />
        <DashboardPreview />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
