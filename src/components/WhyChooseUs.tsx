"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  DollarSign,
  Code,
  Shield,
  Headphones,
  Globe,
} from "lucide-react";

const points = [
  {
    icon: BarChart3,
    title: "Real-time Inventory",
    description: "Live stock updates across all proxy types and locations.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. Pay only for what you use with volume discounts.",
  },
  {
    icon: Code,
    title: "API Access",
    description: "Full REST API with SDKs for Python, Node.js, Go, and more.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC2 compliant with encrypted connections and IP whitelisting.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 expert support with average response time under 5 minutes.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Servers in 40+ data centers ensuring low latency worldwide.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
              Why Choose{" "}
              <span className="gradient-text">ProxyUniverse Pro</span>
            </h2>
            <p className="text-lg text-muted mb-10">
              We&apos;re not just another proxy provider. We&apos;re building the
              infrastructure that powers the internet&apos;s most demanding applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center">
                    <point.icon className="w-4 h-4 text-electric-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {point.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-violet-500/10 rounded-full blur-3xl" />

              {/* Orbiting elements */}
              <div className="absolute inset-8 border border-card-border rounded-full animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-electric-500 rounded-full glow-blue" />
              </div>
              <div className="absolute inset-16 border border-card-border/50 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-violet-500 rounded-full glow-violet" />
              </div>
              <div className="absolute inset-24 border border-card-border/30 rounded-full animate-[spin_25s_linear_infinite]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
              </div>

              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl glass glow-border flex items-center justify-center">
                  <Globe className="w-10 h-10 text-electric-400" />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-4 glass rounded-xl p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="text-xs text-white">99.95% Uptime</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-12 left-0 glass rounded-xl p-3"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-electric-400" />
                  <span className="text-xs text-white">SOC2 Certified</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
