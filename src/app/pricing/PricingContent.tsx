"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Zap, Star, ArrowRight, Shield, Globe, Headphones } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";

const billingOptions = ["Monthly", "Annual"];

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small scrapers who need reliable proxies.",
    monthlyPrice: 49,
    annualPrice: 39,
    bandwidth: "20 GB",
    highlight: false,
    features: [
      { text: "Residential proxies only", included: true },
      { text: "20 GB bandwidth/month", included: true },
      { text: "5 country locations", included: true },
      { text: "API access", included: true },
      { text: "Email support", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "IP rotation (per request)", included: true },
      { text: "Custom rotation rules", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "Priority routing", included: false },
    ],
  },
  {
    name: "Professional",
    description: "For growing teams that need more power, more locations and premium support.",
    monthlyPrice: 199,
    annualPrice: 159,
    bandwidth: "100 GB",
    highlight: true,
    features: [
      { text: "All proxy types (Resi, ISP, DC, Mobile)", included: true },
      { text: "100 GB bandwidth/month", included: true },
      { text: "All 195+ countries", included: true },
      { text: "Priority API access", included: true },
      { text: "24/7 live chat support", included: true },
      { text: "Advanced analytics + exports", included: true },
      { text: "Custom rotation rules", included: true },
      { text: "Sticky sessions up to 30 min", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority routing", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "Unlimited scale with dedicated infrastructure, custom SLAs and white-glove onboarding.",
    monthlyPrice: 799,
    annualPrice: 649,
    bandwidth: "Unlimited",
    highlight: false,
    features: [
      { text: "All proxy types + dedicated pools", included: true },
      { text: "Unlimited bandwidth", included: true },
      { text: "All 195+ countries + city targeting", included: true },
      { text: "Unlimited API rate limits", included: true },
      { text: "Dedicated Slack channel support", included: true },
      { text: "Custom analytics + webhooks", included: true },
      { text: "Custom rotation + session rules", included: true },
      { text: "Unlimited sticky sessions", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority routing + dedicated subnets", included: true },
    ],
  },
];

const guarantees = [
  { icon: Shield, title: "Money-back Guarantee", desc: "Full refund within 3 days, no questions" },
  { icon: Globe, title: "No Long-term Contracts", desc: "Cancel anytime, billing stops immediately" },
  { icon: Headphones, title: "Free Migration Support", desc: "We help you switch from your current provider" },
];

export default function PricingContent() {
  const [billing, setBilling] = useState<"Monthly" | "Annual">("Monthly");

  return (
    <PageTransition>
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-violet-500/6 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-electric-500/6 rounded-full blur-[120px] animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <Zap className="w-3.5 h-3.5 text-electric-400" />
                <span className="text-xs font-medium text-electric-400">SAVE 20% WITH ANNUAL</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 leading-tight tracking-tight">
                Plans that Scale{" "}
                <span className="gradient-text">With You</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed">
                Start small, grow big. Every plan includes instant activation,
                full API access and our global proxy network.
              </p>
            </div>
          </SectionReveal>

          {/* Billing Toggle */}
          <SectionReveal delay={0.1}>
            <div className="flex items-center justify-center mb-14">
              <div className="glass rounded-xl p-1.5 inline-flex">
                {billingOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setBilling(option as "Monthly" | "Annual")}
                    className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      billing === option
                        ? "text-white"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    {billing === option && (
                      <motion.div
                        layoutId="billing-toggle"
                        className="absolute inset-0 btn-gradient rounded-lg"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{option}</span>
                    {option === "Annual" && (
                      <span className="relative z-10 ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full bg-success/20 text-success border border-success/30">
                        -20%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {plans.map((plan, i) => (
              <SectionReveal key={plan.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className={`relative glass rounded-3xl p-8 lg:p-9 h-full flex flex-col ${
                    plan.highlight
                      ? "border-electric-500/30 glow-border"
                      : ""
                  }`}
                >
                  {/* Popular badge */}
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-5 py-1.5 text-xs font-bold rounded-full bg-electric-500 text-white shadow-lg shadow-electric-500/40 flex items-center gap-1.5 uppercase tracking-wide">
                        <Star className="w-3 h-3 fill-white" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Background gradient */}
                  {plan.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-b from-electric-500/8 to-transparent rounded-3xl pointer-events-none" />
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Plan name */}
                    <div className="mb-7">
                      <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] tracking-tight">
                          ${billing === "Monthly" ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-muted text-sm">/month</span>
                      </div>
                      {billing === "Annual" && (
                        <p className="text-xs text-success mt-2 font-medium">
                          Billed annually (${(billing === "Annual" ? plan.annualPrice : plan.monthlyPrice) * 12}/year)
                        </p>
                      )}
                      <p className="text-xs text-muted mt-1">
                        {plan.bandwidth} bandwidth included
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/marketplace"
                      className={`w-full px-6 py-4 text-sm font-semibold text-center rounded-xl transition-all flex items-center justify-center gap-2 mb-8 ${
                        plan.highlight
                          ? "btn-gradient text-white shadow-lg shadow-electric-500/20"
                          : "glass text-white hover:bg-white/5 hover:border-electric-500/20"
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>

                    {/* Features */}
                    <div className="space-y-3 flex-1">
                      <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                        What&apos;s included
                      </p>
                      {plan.features.map((feature) => (
                        <div key={feature.text} className="flex items-start gap-2.5">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-muted/40 shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-sm ${
                              feature.included ? "text-muted" : "text-muted/40"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>

          {/* Guarantees */}
          <SectionReveal>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {guarantees.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/15 flex items-center justify-center mx-auto mb-4">
                    <g.icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{g.title}</h4>
                  <p className="text-xs text-muted">{g.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Enterprise CTA */}
          <SectionReveal delay={0.1}>
            <div className="glass rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-electric-500/5 to-violet-500/5 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4 tracking-tight">
                  Need something custom?
                </h3>
                <p className="text-muted mb-8 max-w-lg mx-auto">
                  We work with enterprise teams to build proxy infrastructure
                  tailored to exact requirements. Dedicated IPs, custom SLAs,
                  volume pricing.
                </p>
                <Link
                  href="/marketplace"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-xl shadow-electric-500/20 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Talk to Sales
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
