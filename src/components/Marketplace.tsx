"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, MapPin, Wifi, Server, Smartphone, Building } from "lucide-react";
import Link from "next/link";

const filters = [
  { name: "All", value: "all" },
  { name: "Residential", value: "residential" },
  { name: "ISP", value: "isp" },
  { name: "Datacenter", value: "datacenter" },
  { name: "Mobile", value: "mobile" },
];

const providers = [
  {
    id: "7tiproxy",
    name: "7TiProxy",
    type: "residential",
    rating: 4.9,
    reviews: 2847,
    locations: ["US", "UK", "DE"],
    price: "$2.50/GB",
    icon: Wifi,
    color: "electric",
    badge: "Popular",
  },
  {
    id: "loliproxy",
    name: "LoliProxy",
    type: "residential",
    rating: 4.8,
    reviews: 1923,
    locations: ["US", "CA", "JP"],
    price: "$3.00/GB",
    icon: Wifi,
    color: "violet",
    badge: "New",
  },
  {
    id: "fast-residential",
    name: "Fast Residential",
    type: "residential",
    rating: 4.7,
    reviews: 3421,
    locations: ["Global"],
    price: "$2.80/GB",
    icon: Wifi,
    color: "electric",
    badge: null,
  },
  {
    id: "isp-premium",
    name: "ISP Premium",
    type: "isp",
    rating: 4.9,
    reviews: 1567,
    locations: ["US", "UK"],
    price: "$5.00/GB",
    icon: Building,
    color: "violet",
    badge: "Top Rated",
  },
  {
    id: "mobile-elite",
    name: "Mobile Elite",
    type: "mobile",
    rating: 4.6,
    reviews: 892,
    locations: ["US", "EU"],
    price: "$8.00/GB",
    icon: Smartphone,
    color: "electric",
    badge: null,
  },
  {
    id: "datacenter-max",
    name: "Datacenter Max",
    type: "datacenter",
    rating: 4.8,
    reviews: 4102,
    locations: ["US", "EU", "APAC"],
    price: "$0.80/GB",
    icon: Server,
    color: "violet",
    badge: "Best Value",
  },
];

export default function Marketplace() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProviders = providers.filter((p) => {
    const matchesFilter = activeFilter === "all" || p.type === activeFilter;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="marketplace" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Proxy <span className="gradient-text">Marketplace</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Verified providers with real reviews and instant activation.
            Pick the right fit for your use case.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-navy-800/50 text-white placeholder:text-muted border-0 focus:outline-none focus:ring-2 focus:ring-electric-500/50 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 text-sm rounded-xl transition-all ${
                  activeFilter === filter.value
                    ? "btn-gradient text-white font-medium"
                    : "text-muted hover:text-white hover:bg-white/5 glass"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider, i) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              layout
            >
              <Link href={`/marketplace/${provider.id}`} className="block">
                <div className="glass rounded-3xl p-6 card-hover h-full relative overflow-hidden group">
                  {provider.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-electric-500/20 text-electric-300 border border-electric-500/30">
                        {provider.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        provider.color === "electric"
                          ? "from-electric-500 to-electric-700"
                          : "from-violet-500 to-violet-700"
                      } p-[1px]`}
                    >
                      <div className="w-full h-full rounded-xl bg-navy-900 flex items-center justify-center">
                        <provider.icon className="w-5 h-5 text-electric-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{provider.name}</h3>
                      <span className="text-xs text-muted capitalize">
                        {provider.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning fill-warning" />
                      <span className="text-sm font-medium text-white">
                        {provider.rating}
                      </span>
                    </div>
                    <span className="text-xs text-muted">
                      ({provider.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-5">
                    <MapPin className="w-3.5 h-3.5 text-muted" />
                    <div className="flex flex-wrap gap-1">
                      {provider.locations.map((loc) => (
                        <span
                          key={loc}
                          className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-muted"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-card-border">
                    <div>
                      <span className="text-sm text-muted">From</span>
                      <p className="text-lg font-bold text-white">
                        {provider.price}
                      </p>
                    </div>
                    <span className="px-4 py-2 text-sm font-medium text-white rounded-xl btn-gradient opacity-0 group-hover:opacity-100 transition-opacity">
                      Buy Now
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
