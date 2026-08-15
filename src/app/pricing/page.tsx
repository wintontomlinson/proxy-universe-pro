import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | NovaBridge",
  description:
    "Simple, transparent proxy pricing. Plans starting at $49/month with residential, ISP, datacenter and mobile proxies. No hidden fees, volume discounts available.",
  openGraph: {
    title: "Pricing | NovaBridge",
    description:
      "Simple, transparent proxy pricing starting at $49/month. No hidden fees.",
    url: "https://novabridge.io/pricing",
  },
  alternates: {
    canonical: "https://novabridge.io/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
