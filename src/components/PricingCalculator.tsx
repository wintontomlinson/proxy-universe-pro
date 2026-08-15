"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const proxyTypes = [
  { name: "Residential", pricePerGB: 2.5 },
  { name: "ISP", pricePerGB: 5.0 },
  { name: "Datacenter", pricePerGB: 0.8 },
  { name: "Mobile", pricePerGB: 8.0 },
];

const countries = [
  "United States",
  "United Kingdom",
  "Germany",
  "Canada",
  "Japan",
  "Australia",
  "France",
  "Global Mix",
];

const durations = [
  { label: "1 Day", multiplier: 1 },
  { label: "7 Days", multiplier: 0.9 },
  { label: "30 Days", multiplier: 0.75 },
  { label: "90 Days", multiplier: 0.6 },
];

export default function PricingCalculator() {
  const [bandwidth, setBandwidth] = useState(50);
  const [proxyTypeIndex, setProxyTypeIndex] = useState(0);
  const [countryIndex, setCountryIndex] = useState(0);
  const [durationIndex, setDurationIndex] = useState(2);

  const calculation = useMemo(() => {
    const type = proxyTypes[proxyTypeIndex];
    const duration = durations[durationIndex];
    const basePrice = type.pricePerGB * bandwidth;
    const totalPrice = basePrice * duration.multiplier;
    const pricePerGB = (totalPrice / bandwidth).toFixed(2);
    const estimatedIPs = Math.floor(
      bandwidth * (type.name === "Datacenter" ? 50 : type.name === "ISP" ? 10 : 20)
    );

    return {
      totalPrice: totalPrice.toFixed(2),
      pricePerGB,
      estimatedIPs,
    };
  }, [bandwidth, proxyTypeIndex, durationIndex]);

  return (
    <section id="pricing" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Pricing <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Get an instant estimate. Transparent pricing with volume
            discounts, no hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2">
            {/* Controls */}
            <div className="p-8 lg:p-10 space-y-8">
              {/* Bandwidth */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-white">
                    Bandwidth
                  </label>
                  <span className="text-sm font-bold text-electric-400">
                    {bandwidth} GB
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={bandwidth}
                  onChange={(e) => setBandwidth(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-navy-700 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-electric-500 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(10,132,255,0.5)] [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted">1 GB</span>
                  <span className="text-xs text-muted">500 GB</span>
                </div>
              </div>

              {/* Proxy Type */}
              <div>
                <label className="text-sm font-medium text-white block mb-3">
                  Proxy Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {proxyTypes.map((type, i) => (
                    <button
                      key={type.name}
                      onClick={() => setProxyTypeIndex(i)}
                      className={`px-4 py-3 text-sm rounded-xl transition-all ${
                        proxyTypeIndex === i
                          ? "btn-gradient text-white font-medium"
                          : "glass text-muted hover:text-white"
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="text-sm font-medium text-white block mb-3">
                  Country
                </label>
                <select
                  value={countryIndex}
                  onChange={(e) => setCountryIndex(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl glass bg-navy-800/50 text-white border-0 focus:outline-none focus:ring-2 focus:ring-electric-500/50 appearance-none cursor-pointer"
                >
                  {countries.map((country, i) => (
                    <option key={country} value={i} className="bg-navy-900">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="text-sm font-medium text-white block mb-3">
                  Duration
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {durations.map((d, i) => (
                    <button
                      key={d.label}
                      onClick={() => setDurationIndex(i)}
                      className={`px-3 py-2.5 text-xs sm:text-sm rounded-xl transition-all ${
                        durationIndex === i
                          ? "btn-gradient text-white font-medium"
                          : "glass text-muted hover:text-white"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 lg:p-10 bg-gradient-to-br from-electric-500/5 to-violet-500/5 border-t lg:border-t-0 lg:border-l border-card-border flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium text-white mb-6">
                  Estimated Cost
                </h3>

                <div className="mb-8">
                  <div className="text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
                    ${calculation.totalPrice}
                  </div>
                  <p className="text-muted">
                    for {bandwidth} GB, {durations[durationIndex].label}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-card-border">
                    <span className="text-muted text-sm">Price per GB</span>
                    <span className="text-white font-medium">
                      ${calculation.pricePerGB}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-card-border">
                    <span className="text-muted text-sm">Estimated IPs</span>
                    <span className="text-white font-medium">
                      ~{calculation.estimatedIPs.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-card-border">
                    <span className="text-muted text-sm">Activation</span>
                    <span className="text-success font-medium flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      Instant
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-muted text-sm">Support</span>
                    <span className="text-white font-medium">24/7</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 px-6 py-4 text-base font-medium text-white rounded-2xl btn-gradient flex items-center justify-center gap-2">
                Buy Now
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
