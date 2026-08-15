"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Hexagon, ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const footerLinks = {
  Products: [
    { name: "Residential", href: "/products" },
    { name: "ISP", href: "/products" },
    { name: "Datacenter", href: "/products" },
    { name: "Mobile", href: "/products" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-navy-900/30 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Banner */}
        <SectionReveal>
          <div className="py-16 lg:py-20">
            <div className="glass rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-500/5 via-violet-500/5 to-electric-500/5 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4 tracking-tight">
                  Ready to get started?
                </h3>
                <p className="text-muted mb-8 max-w-lg mx-auto">
                  Join 10,000+ businesses using NovaBridge for reliable
                  proxy infrastructure.
                </p>
                <Link
                  href="/marketplace"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-xl shadow-electric-500/20 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Hexagon className="w-7 h-7 text-electric-500 group-hover:text-electric-400 transition-colors" />
              <span className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                Nova<span className="gradient-text">Bridge</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Premium proxy infrastructure with instant activation,
              global coverage and transparent pricing.
            </p>
            <div className="flex gap-3">
              {[
                { label: "X", href: "#" },
                { label: "GH", href: "#" },
                { label: "DC", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-xs font-bold text-muted hover:text-white hover:border-electric-500/30 transition-all duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; 2026 NovaBridge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted hover:text-white transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted hover:text-white transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-sm text-muted hover:text-white transition-colors duration-200">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
