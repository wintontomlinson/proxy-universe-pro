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
import SectionReveal from "./SectionReveal";

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
    description: "Full REST API with SDKs for Python, Node.js, Go and more.",
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
    description: "Servers in 40+ data centers for low latency worldwide.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <SectionReveal direction="left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 tracking-tight">
                Why Choose{" "}
                <span className="gradient-text">NovaBridge</span>
              </h2>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                More than a proxy provider. We build the infrastructure that
                powers the most demanding applications on the internet.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {points.map((point, i) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                    whileHover={{ x: 4 }}
                    className="flex gap-3 group cursor-default"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-electric-500/8 border border-electric-500/15 flex items-center justify-center group-hover:bg-electric-500/15 group-hover:border-electric-500/30 transition-all duration-300">
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
            </div>
          </SectionReveal>

          {/* Right - Animated Illustration */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/8 to-violet-500/8 rounded-full blur-3xl" />

              {/* Orbiting rings */}
              <div className="absolute inset-8 border border-card-border/60 rounded-full animate-[spin_25s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-electric-500 rounded-full glow-blue" />
              </div>
              <div className="absolute inset-16 border border-card-border/40 rounded-full animate-[spin_18s_linear_infinite_reverse]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-violet-500 rounded-full glow-violet" />
              </div>
              <div className="absolute inset-24 border border-card-border/25 rounded-full animate-[spin_30s_linear_infinite]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
              </div>

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-2xl glass glow-border flex items-center justify-center"
                >
                  <Globe className="w-10 h-10 text-electric-400" />
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-4 glass rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="text-xs text-white font-medium">99.95% Uptime</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
                className="absolute bottom-12 left-0 glass rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-electric-400" />
                  <span className="text-xs text-white font-medium">SOC2 Certified</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
                className="absolute top-1/3 left-0 glass rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-3.5 h-3.5 text-violet-400" />
                  <span className="text-xs text-white font-medium">Live Stats</span>
                </div>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
