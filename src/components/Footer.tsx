"use client";

import Link from "next/link";
import { Hexagon } from "lucide-react";

const footerLinks = {
  Products: [
    { name: "Residential", href: "#" },
    { name: "ISP", href: "#" },
    { name: "Datacenter", href: "#" },
    { name: "Mobile", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Status", href: "#" },
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
    <footer className="border-t border-card-border bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Hexagon className="w-7 h-7 text-electric-500" />
              <span className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                Proxy<span className="gradient-text">Universe</span> Pro
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              The smartest way to buy proxies. Instant activation, global
              coverage, and transparent pricing.
            </p>
            <div className="flex gap-3">
              {["X", "GH", "DC"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-xs font-bold text-muted hover:text-white hover:border-electric-500/50 transition-all"
                >
                  {social}
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
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © 2026 ProxyUniverse Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
