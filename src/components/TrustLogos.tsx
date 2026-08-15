"use client";

import { motion } from "framer-motion";

const logos = [
  "TechCorp",
  "DataFlow",
  "NetGuard",
  "CloudSync",
  "CyberShield",
  "InfoScale",
  "SecureNet",
  "ProxyWave",
];

export default function TrustLogos() {
  return (
    <section className="relative py-16 border-y border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted mb-8"
        >
          Trusted by 10,000+ businesses worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-xs font-bold text-white/60">
                  {logo.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-white/40 hidden sm:block">
                {logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
