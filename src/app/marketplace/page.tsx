import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketplaceContent from "./MarketplaceContent";

export const metadata: Metadata = {
  title: "Proxy Marketplace | NovaBridge",
  description:
    "Browse verified proxy providers with real reviews. Residential, ISP, datacenter and mobile proxies from top-rated providers with instant activation.",
  openGraph: {
    title: "Proxy Marketplace | NovaBridge",
    description:
      "Browse verified proxy providers with real reviews and instant activation.",
    url: "https://novabridge.io/marketplace",
  },
  alternates: {
    canonical: "https://novabridge.io/marketplace",
  },
};

export default function MarketplacePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <MarketplaceContent />
      </main>
      <Footer />
    </>
  );
}
