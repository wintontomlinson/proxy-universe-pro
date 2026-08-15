"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  MapPin,
  Wifi,
  Server,
  Smartphone,
  Building,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";

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
    locations: ["US", "UK", "DE", "JP"],
    price: "$2.50/GB",
    icon: Wifi,
    color: "electric",
    badge: "Popular",
    description: "Premium rotating residential proxies with high success rates",
  },
  {
    id: "loliproxy",
    name: "LoliProxy",
    type: "residential",
    rating: 4.8,
    reviews: 1923,
    locations: ["US", "CA", "JP", "KR"],
    price: "$3.00/GB",
    icon: Wifi,
    color: "violet",
    badge: "New",
    description: "Fresh residential pool with excellent geo-targeting options",
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
    description: "Optimized for speed with 35M+ residential IPs worldwide",
  },
  {
    id: "isp-premium",
    name: "ISP Premium",
    type: "isp",
    rating: 4.9,
    reviews: 1567,
    locations: ["US", "UK", "DE"],
    price: "$5.00/IP",
    icon: Building,
    color: "violet",
    badge: "Top Rated",
    description: "Static residential IPs from tier-1 ISPs with unlimited bandwidth",
  },
  {
    id: "mobile-elite",
    name: "Mobile Elite",
    type: "mobile",
    rating: 4.6,
    reviews: 892,
    locations: ["US", "EU", "APAC"],
    price: "$8.00/GB",
    icon: Smartphone,
    color: "electric",
    badge: null,
    description: "Real 4G/5G mobile IPs with carrier-level trust scores",
  },
  {
    id: "datacenter-max",
    name: "Datacenter Max",
    type: "datacenter",
    rating: 4.8,
    reviews: 4102,
    locations: ["US", "EU", "APAC"],
    price: "$0.80/IP",
    icon: Server,
    color: "violet",
    badge: "Best Value",
    description: "High-speed datacenter proxies with unlimited bandwidth included",
  },
];

export default function MarketplaceContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProviders = providers.filter((p) => {
    const matchesFilter = activeFilter === "all" || p.type === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <PageTransition>
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-500/6 rounded-full blur-[150px] animate-float" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 leading-tight">
                Proxy <span className="gradient-text">Marketplace</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed">
                Verified providers, real reviews, instant activation.
                Find the perfect proxy for your use case.
              </p>
            </div>
          </SectionReveal>

          {/* Search and Filters */}
          <SectionReveal delay={0.1}>
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row gap-4 items-center max-w-2xl mx-auto mb-6">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    placeholder="Search providers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl glass bg-navy-800/50 text-white placeholder:text-muted border-0 focus:outline-none focus:ring-2 focus:ring-electric-500/50 transition-all"
                  />
                </div>
                <button className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass text-muted hover:text-white transition-all">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="text-sm">Filters</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                      activeFilter === filter.value
                        ? "btn-gradient text-white shadow-lg shadow-electric-500/20"
                        : "text-muted hover:text-white glass hover:bg-white/5"
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted">
              {filteredProviders.length} providers found
            </p>
            <p className="text-sm text-muted hidden sm:block">
              Sorted by rating
            </p>
          </div>

          {/* Provider Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider, i) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                layout
              >
                <Link href={`/marketplace/${provider.id}`} className="block h-full">
                  <div className="glass rounded-3xl p-6 card-hover h-full relative overflow-hidden group flex flex-col">
                    {provider.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-electric-500/15 text-electric-300 border border-electric-500/30">
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
                        } p-[1px] shrink-0`}
                      >
                        <div className="w-full h-full rounded-xl bg-navy-900 flex items-center justify-center">
                          <provider.icon className="w-5 h-5 text-electric-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{provider.name}</h3>
                        <span className="text-xs text-muted capitalize">{provider.type}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted mb-4 leading-relaxed flex-1">
                      {provider.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-warning fill-warning" />
                      <span className="text-sm font-semibold text-white">{provider.rating}</span>
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
                            className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-muted border border-white/5"
                          >
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-card-border">
                      <div>
                        <span className="text-xs text-muted">From</span>
                        <p className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                          {provider.price}
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-electric-400 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-electric-500/10 border border-electric-500/20">
                        View
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
