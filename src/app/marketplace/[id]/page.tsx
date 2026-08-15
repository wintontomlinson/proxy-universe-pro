"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  MapPin,
  Shield,
  Zap,
  Globe,
  Clock,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const providerData = {
  name: "ISP Premium",
  type: "ISP Proxy",
  rating: 4.9,
  reviews: 1567,
  description:
    "Enterprise-grade ISP proxies with static residential IPs from major internet service providers. Perfect for accounts management, sneaker botting, and high-value targets that require consistent IP addresses.",
  features: [
    "Static residential IPs",
    "Major ISP networks (Comcast, AT&T, Verizon)",
    "Unlimited bandwidth on select plans",
    "99.99% uptime guarantee",
    "Dedicated account manager",
    "Custom subnet selection",
    "HTTP/HTTPS/SOCKS5 protocols",
    "IP authentication + User:Pass",
  ],
  locations: [
    { country: "United States", cities: 45, ips: "50K+" },
    { country: "United Kingdom", cities: 12, ips: "15K+" },
    { country: "Germany", cities: 8, ips: "10K+" },
    { country: "Canada", cities: 6, ips: "8K+" },
  ],
  reviews_list: [
    {
      name: "David K.",
      rating: 5,
      date: "2 days ago",
      text: "Best ISP proxies I've used. Zero bans in 3 months of heavy use.",
    },
    {
      name: "Emma W.",
      rating: 5,
      date: "1 week ago",
      text: "The static IPs are perfect for managing multiple accounts. Great stability.",
    },
    {
      name: "James L.",
      rating: 4,
      date: "2 weeks ago",
      text: "Solid quality. Wish there were more EU locations but US coverage is amazing.",
    },
  ],
};

export default function ProductPage() {
  const [quantity, setQuantity] = useState(10);
  const [bandwidth, setBandwidth] = useState("50gb");
  const [rotation, setRotation] = useState("static");
  const [duration, setDuration] = useState("30");

  const pricePerProxy = 5.0;
  const totalPrice = (quantity * pricePerProxy * (parseInt(duration) / 30)).toFixed(2);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Marketplace
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Product Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-electric-500 p-[1px]">
                    <div className="w-full h-full rounded-2xl bg-navy-900 flex items-center justify-center">
                      <Globe className="w-7 h-7 text-electric-400" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                      {providerData.name}
                    </h1>
                    <p className="text-muted">{providerData.type}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-warning" />
                        <span className="text-sm font-medium text-white">
                          {providerData.rating}
                        </span>
                      </div>
                      <span className="text-xs text-muted">
                        ({providerData.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted leading-relaxed">
                  {providerData.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-3xl p-8"
              >
                <h2 className="text-lg font-bold text-white mb-5">Features</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {providerData.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success shrink-0" />
                      <span className="text-sm text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Locations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-3xl p-8"
              >
                <h2 className="text-lg font-bold text-white mb-5">
                  Available Locations
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {providerData.locations.map((loc) => (
                    <div
                      key={loc.country}
                      className="flex items-center gap-3 p-3 rounded-xl bg-navy-800/50 border border-card-border"
                    >
                      <MapPin className="w-4 h-4 text-electric-400 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {loc.country}
                        </p>
                        <p className="text-xs text-muted">
                          {loc.cities} cities • {loc.ips} IPs
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-3xl p-8"
              >
                <h2 className="text-lg font-bold text-white mb-5">
                  Customer Reviews
                </h2>
                <div className="space-y-4">
                  {providerData.reviews_list.map((review, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-navy-800/50 border border-card-border"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-500 to-violet-500 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-white">
                            {review.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-3 h-3 text-warning fill-warning"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted">{review.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Purchase Card (Sticky) */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24"
              >
                <div className="glass rounded-3xl p-6 glow-border">
                  <h3 className="text-lg font-bold text-white mb-6">
                    Configure & Buy
                  </h3>

                  {/* Quantity */}
                  <div className="mb-5">
                    <label className="text-sm text-muted block mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          setQuantity(Math.max(1, quantity - 1))
                        }
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-xl font-bold text-white w-16 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Bandwidth */}
                  <div className="mb-5">
                    <label className="text-sm text-muted block mb-2">
                      Bandwidth
                    </label>
                    <select
                      value={bandwidth}
                      onChange={(e) => setBandwidth(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl glass bg-navy-800/50 text-white text-sm border-0 focus:outline-none focus:ring-2 focus:ring-electric-500/50"
                    >
                      <option value="10gb" className="bg-navy-900">10 GB</option>
                      <option value="50gb" className="bg-navy-900">50 GB</option>
                      <option value="100gb" className="bg-navy-900">100 GB</option>
                      <option value="unlimited" className="bg-navy-900">Unlimited</option>
                    </select>
                  </div>

                  {/* Rotation */}
                  <div className="mb-5">
                    <label className="text-sm text-muted block mb-2">
                      Rotation Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["static", "rotating"].map((r) => (
                        <button
                          key={r}
                          onClick={() => setRotation(r)}
                          className={`px-3 py-2.5 text-sm rounded-xl transition-all capitalize ${
                            rotation === r
                              ? "btn-gradient text-white font-medium"
                              : "glass text-muted hover:text-white"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="mb-6">
                    <label className="text-sm text-muted block mb-2">
                      Duration
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["7", "30", "90"].map((d) => (
                        <button
                          key={d}
                          onClick={() => setDuration(d)}
                          className={`px-3 py-2.5 text-sm rounded-xl transition-all ${
                            duration === d
                              ? "btn-gradient text-white font-medium"
                              : "glass text-muted hover:text-white"
                          }`}
                        >
                          {d} days
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-card-border pt-5 mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted">Subtotal</span>
                      <span className="text-sm text-white">${totalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted">Per proxy</span>
                      <span className="text-sm text-white">
                        ${pricePerProxy.toFixed(2)}/mo
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-white">
                        Total
                      </span>
                      <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                        ${totalPrice}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full px-6 py-4 text-base font-medium text-white rounded-2xl btn-gradient flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Buy Now
                  </button>

                  {/* Trust signals */}
                  <div className="mt-4 space-y-2">
                    {[
                      { icon: Zap, text: "Instant activation" },
                      { icon: Shield, text: "Money-back guarantee" },
                      { icon: Clock, text: "24/7 support" },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-center gap-2 text-xs text-muted"
                      >
                        <item.icon className="w-3 h-3 text-success" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
