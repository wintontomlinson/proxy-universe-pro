"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Building,
  Server,
  Smartphone,
  Check,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";

const products = [
  {
    icon: Wifi,
    name: "Residential Proxies",
    tagline: "35M+ rotating IPs worldwide",
    description:
      "Real residential IPs from actual ISP-connected devices. Highest anonymity and success rates for data collection, market research and ad verification.",
    features: [
      "35M+ IPs in 195 countries",
      "City and ASN level targeting",
      "Automatic IP rotation",
      "Sticky sessions up to 30min",
      "HTTP/HTTPS/SOCKS5",
      "99.9% uptime SLA",
    ],
    price: "From $2.50/GB",
    gradient: "from-electric-500 to-cyan-400",
    popular: true,
  },
  {
    icon: Building,
    name: "ISP Proxies",
    tagline: "Static residential IPs",
    description:
      "Static IPs from major internet service providers. Combine residential trust with datacenter speed. Perfect for account management and long-running sessions.",
    features: [
      "Static residential IPs",
      "Major ISP networks",
      "Unlimited bandwidth options",
      "Dedicated subnets",
      "99.99% uptime",
      "IP authentication",
    ],
    price: "From $5.00/IP",
    gradient: "from-violet-500 to-electric-500",
    popular: false,
  },
  {
    icon: Server,
    name: "Datacenter Proxies",
    tagline: "High-speed dedicated IPs",
    description:
      "Enterprise-grade datacenter IPs with unlimited bandwidth and blazing speed. Built for high-volume tasks that need raw throughput and reliability.",
    features: [
      "Unlimited bandwidth",
      "Sub-millisecond latency",
      "Dedicated and shared pools",
      "Sequential and random subnets",
      "Multiple locations",
      "Instant provisioning",
    ],
    price: "From $0.80/IP",
    gradient: "from-electric-400 to-violet-400",
    popular: false,
  },
  {
    icon: Smartphone,
    name: "Mobile Proxies",
    tagline: "4G/5G carrier IPs",
    description:
      "Real mobile IPs from 4G and 5G carriers. Highest trust level for social media management, app testing and mobile-specific use cases.",
    features: [
      "Real 4G/5G carrier IPs",
      "Automatic carrier rotation",
      "Geo-targeted by country",
      "Shared and dedicated options",
      "High trust score",
      "Mobile-grade anonymity",
    ],
    price: "From $8.00/GB",
    gradient: "from-violet-400 to-electric-400",
    popular: false,
  },
];

const highlights = [
  { icon: Globe, label: "195+ Countries", desc: "Coverage worldwide" },
  { icon: Zap, label: "Instant Setup", desc: "Live in seconds" },
  { icon: Shield, label: "SOC2 Compliant", desc: "Enterprise security" },
  { icon: BarChart3, label: "Real-time Stats", desc: "Full visibility" },
];

export default function ProductsContent() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-electric-500/8 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[140px] animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <span className="text-xs font-medium text-electric-400">4 PROXY TYPES</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 leading-tight">
                Every Proxy Type,{" "}
                <span className="gradient-text">One Platform</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed">
                From residential to mobile, we offer the full spectrum of proxy
                types optimized for every use case. Pick what fits your needs.
              </p>
            </div>
          </SectionReveal>

          {/* Highlights */}
          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass rounded-2xl p-5 text-center card-hover"
                >
                  <h.icon className="w-6 h-6 text-electric-400 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-white">{h.label}</p>
                  <p className="text-xs text-muted mt-1">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Product Cards */}
          <div className="space-y-8">
            {products.map((product, i) => (
              <SectionReveal key={product.name} delay={i * 0.1}>
                <div className="glass rounded-3xl p-8 lg:p-10 card-hover relative overflow-hidden group">
                  {product.popular && (
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-electric-500/15 text-electric-300 border border-electric-500/30">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} p-[1px] mb-5`}>
                        <div className="w-full h-full rounded-2xl bg-navy-900 flex items-center justify-center">
                          <product.icon className="w-6 h-6 text-electric-400" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
                        {product.name}
                      </h2>
                      <p className="text-electric-400 text-sm font-medium mb-4">
                        {product.tagline}
                      </p>
                      <p className="text-muted leading-relaxed mb-6">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                          {product.price}
                        </span>
                        <Link
                          href="/marketplace"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient group/btn"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="text-sm text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
