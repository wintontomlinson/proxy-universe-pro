"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionReveal from "./SectionReveal";

const features = [
  {
    icon: Zap,
    title: "Instant Proxy Activation",
    description:
      "Your proxies go live within seconds of purchase. No waiting, no manual setup required. Pay and start using them right away.",
    gradient: "from-electric-500 to-cyan-400",
    stat: "< 3 sec",
    statLabel: "Avg activation",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Target specific cities, states or ASNs across 195+ countries. Precise geo-targeting with access to every major region worldwide.",
    gradient: "from-violet-500 to-electric-500",
    stat: "195+",
    statLabel: "Countries",
  },
  {
    icon: Code,
    title: "Developer Friendly API",
    description:
      "Full REST API with comprehensive documentation, SDKs for popular languages and webhook support. Build custom integrations in minutes.",
    gradient: "from-electric-400 to-violet-400",
    stat: "99.9%",
    statLabel: "API uptime",
  },
];

export default function Features() {
  return (
    <section id="products" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5 tracking-tight">
              Why <span className="gradient-text">Developers Choose</span> Us
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Built for speed, reliability and scale. Everything you need to
              power your proxy infrastructure.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <SectionReveal key={feature.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="group glass rounded-3xl p-8 lg:p-9 relative overflow-hidden h-full"
              >
                {/* Background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700`}
                />
                {/* Top shine */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-7`}
                  >
                    <div className="w-full h-full rounded-2xl bg-navy-900 flex items-center justify-center group-hover:bg-navy-800 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-electric-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-muted leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-center gap-3 pt-5 border-t border-card-border">
                    <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-electric-400">
                      {feature.stat}
                    </span>
                    <span className="text-xs text-muted">{feature.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal delay={0.4}>
          <div className="text-center mt-14">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-electric-400 hover:text-electric-300 transition-colors group"
            >
              Explore all products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
