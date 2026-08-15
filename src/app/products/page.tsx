import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Proxy Products | NovaBridge",
  description:
    "Explore our full range of proxy products. Residential, ISP, datacenter and mobile proxies with instant activation and global coverage across 195+ countries.",
  openGraph: {
    title: "Proxy Products | NovaBridge",
    description:
      "Residential, ISP, datacenter and mobile proxies with instant activation and coverage in 195+ countries.",
    url: "https://novabridge.io/products",
  },
  alternates: {
    canonical: "https://novabridge.io/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ProductsContent />
      </main>
      <Footer />
    </>
  );
}
