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
    <section className="relative py-20 border-y border-card-border overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted font-medium mb-10 tracking-wide uppercase"
        >
          Trusted by 10,000+ businesses worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-14"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              whileHover={{ opacity: 0.9, scale: 1.05 }}
              className="flex items-center gap-2.5 opacity-35 transition-all duration-300 cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.06] flex items-center justify-center">
                <span className="text-sm font-bold text-white/50">
                  {logo.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-white/35 hidden sm:block tracking-wide">
                {logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
