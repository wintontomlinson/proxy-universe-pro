"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Shield, Clock } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Globe, value: "35M+", label: "IPs Available" },
  { icon: Shield, value: "195", label: "Countries" },
  { icon: Zap, value: "99.95%", label: "Uptime" },
  { icon: Clock, value: "Instant", label: "Delivery" },
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-electric-500/8 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-500/8 rounded-full blur-[150px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-electric-600/4 rounded-full blur-[180px] animate-pulse-glow" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-electric-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Status Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass mb-8">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm text-muted font-medium">
            All systems operational. 35M+ proxies online.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.1] mb-7 tracking-tight"
        >
          Premium Proxy
          <br />
          <span className="gradient-text">Infrastructure</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Residential, ISP, datacenter and mobile proxies with instant
          activation, transparent pricing and coverage in 195+ countries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/marketplace"
            className="group px-8 py-4 text-base font-semibold text-white rounded-2xl btn-gradient flex items-center gap-2 shadow-xl shadow-electric-500/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              Buy Proxies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          <Link
            href="/products"
            className="px-8 py-4 text-base font-semibold text-white rounded-2xl glass hover:bg-white/5 transition-all duration-300 hover:border-electric-500/20"
          >
            View Products
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + i * 0.12,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-2xl p-5 lg:p-6 group cursor-default"
            >
              <stat.icon className="w-5 h-5 text-electric-400 mx-auto mb-2.5 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
