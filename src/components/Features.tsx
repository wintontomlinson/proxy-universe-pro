"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Code } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Proxy Activation",
    description:
      "Your proxies go live within seconds of purchase. No waiting, no manual setup required. Pay and start using them right away.",
    gradient: "from-electric-500 to-cyan-400",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Target specific cities, states or ASNs across 195+ countries. Precise geo-targeting with access to every major region worldwide.",
    gradient: "from-violet-500 to-electric-500",
  },
  {
    icon: Code,
    title: "Developer Friendly API",
    description:
      "Full REST API with comprehensive documentation, SDKs for popular languages and webhook support. Build custom integrations in minutes.",
    gradient: "from-electric-400 to-violet-400",
  },
];

export default function Features() {
  return (
    <section id="products" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Why <span className="gradient-text">Developers Choose</span> Us
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Built for speed, reliability and scale. Everything you need to
            power your proxy infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group glass rounded-3xl p-8 card-hover relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6`}
                >
                  <div className="w-full h-full rounded-2xl bg-navy-900 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-electric-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
