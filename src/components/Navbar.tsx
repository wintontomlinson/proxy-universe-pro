"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Hexagon } from "lucide-react";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Pricing", href: "/pricing" },
  { name: "Marketplace", href: "/marketplace" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-2xl shadow-navy-950/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <Hexagon className="w-9 h-9 text-electric-500 group-hover:text-electric-400 transition-colors duration-300" />
                <div className="absolute inset-0 w-9 h-9 bg-electric-500/20 rounded-full blur-xl group-hover:bg-electric-400/40 transition-all duration-300" />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white tracking-tight">
                Nova<span className="gradient-text">Bridge</span>
              </span>
            </Link>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    pathname === link.href
                      ? "text-white"
                      : "text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-xl bg-white/5 border border-electric-500/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                className="hidden sm:flex p-2.5 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/dashboard"
                className="hidden sm:inline-flex px-4 py-2.5 text-sm font-medium text-muted hover:text-white transition-colors duration-300"
              >
                Login
              </Link>

              <Link
                href="/dashboard"
                className="hidden sm:inline-flex px-6 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient shadow-lg shadow-electric-500/20"
              >
                Get Started
              </Link>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="glass-strong mx-4 mt-2 rounded-2xl p-5 shadow-2xl border border-card-border">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3.5 text-sm font-medium rounded-xl transition-all ${
                      pathname === link.href
                        ? "text-electric-400 bg-electric-500/10"
                        : "text-muted hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-card-border my-3" />
                <Link
                  href="/dashboard"
                  className="px-4 py-3.5 text-sm text-muted hover:text-white rounded-xl hover:bg-white/5 transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/dashboard"
                  className="mt-2 px-5 py-3.5 text-sm font-semibold text-white text-center rounded-xl btn-gradient"
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
