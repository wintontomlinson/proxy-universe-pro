"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Hexagon,
} from "lucide-react";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Pricing", href: "#pricing" },
  { name: "Marketplace", href: "#marketplace" },
  { name: "API", href: "#api" },
  { name: "Docs", href: "#docs" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-lg shadow-navy-950/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Hexagon className="w-8 h-8 text-electric-500 group-hover:text-electric-400 transition-colors" />
                <div className="absolute inset-0 w-8 h-8 bg-electric-500/20 rounded-full blur-lg group-hover:bg-electric-400/30 transition-all" />
              </div>
              <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                Proxy<span className="gradient-text">Universe</span> Pro
              </span>
            </Link>

            {/* Center - Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm text-muted hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-2">
              <button
                className="hidden sm:flex p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-all"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="hidden sm:flex p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-all"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <Link
                href="/dashboard"
                className="hidden sm:inline-flex px-4 py-2 text-sm text-muted hover:text-white transition-colors"
              >
                Login
              </Link>

              <Link
                href="/dashboard"
                className="hidden sm:inline-flex px-5 py-2.5 text-sm font-medium text-white rounded-xl btn-gradient"
              >
                Get Started
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="glass-strong mx-4 mt-2 rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm text-muted hover:text-white rounded-xl hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-card-border my-2" />
                <Link
                  href="/dashboard"
                  className="px-4 py-3 text-sm text-muted hover:text-white rounded-xl hover:bg-white/5 transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/dashboard"
                  className="mx-4 mt-2 px-5 py-3 text-sm font-medium text-white text-center rounded-xl btn-gradient"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
