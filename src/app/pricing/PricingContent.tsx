"use client";

import { motion } from "framer-motion";
import { Check, Zap, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small projects",
    price: "$49",
    period: "/month",
    bandwidth: "20 GB",
    features: [
      "Residential proxies",
      "20 GB bandwidth",
      "5 countries",
      "API access",
      "Email support",
      "Basic analytics",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "from-electric-500/10 to-transparent",
  },
  {
    name: "Professional",
    description: "For growing teams and businesses",
    price: "$199",
    period: "/month",
    bandwidth: "100 GB",
    features: [
      "All proxy types",
      "100 GB bandwidth",
      "All 195 countries",
      "Priority API access",
      "24/7 live support",
      "Advanced analytics",
      "Custom rotation rules",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    popular: true,
    gradient: "from-electric-500/15 to-violet-500/10",
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    period: "",
    bandwidth: "Unlimited",
    features: [
      "All proxy types",
      "Unlimited bandwidth",
      "All 195 countries",
      "Dedicated infrastructure",
      "SLA guarantee",
      "Custom integrations",
      "Dedicated subnets",
      "Priority routing",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-violet-500/10 to-transparent",
  },
];

const comparisons = [
  { feature: "Proxy Types", starter: "Residential", pro: "All Types", enterprise: "All Types" },
  { feature: "Bandwidth", starter: "20 GB", pro: "100 GB", enterprise: "Unlimited" },
  { feature: "Countries", starter: "5", pro: "195+", enterprise: "195+" },
  { feature: "Concurrent Sessions", starter: "100", pro: "1,000", enterprise: "Unlimited" },
  { feature: "Rotation Options", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
  { feature: "Support", starter: "Email", pro: "24/7 Live", enterprise: "Dedicated" },
  { feature: "SLA", starter: "99.5%", pro: "99.9%", enterprise: "99.99%" },
  { feature: "API Rate Limit", starter: "100/min", pro: "1,000/min", enterprise: "Unlimited" },
];

export default function PricingContent() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-electric-500/8 rounded-full blur-[120px] animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 leading-tight">
                Simple, Transparent{" "}
                <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed">
                No hidden fees, no surprises. Pick a plan that matches your
                usage and scale as you grow.
              </p>
            </div>
          </SectionReveal>

          {/* Plans */}
          <div className="grid lg:grid-cols-3 gap-6 mb-24">
            {plans.map((plan, i) => (
              <SectionReveal key={plan.name} delay={i * 0.15}>
                <div
                  className={`relative glass rounded-3xl p-8 card-hover h-full flex flex-col ${
                    plan.popular ? "border-electric-500/30 glow-border" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-electric-500 text-white shadow-lg shadow-electric-500/30 flex items-center gap-1.5">
                        <Star className="w-3 h-3 fill-white" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-b ${plan.gradient} rounded-3xl pointer-events-none`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted">{plan.description}</p>
                    </div>

                    <div className="mb-8">
                      <span className="text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        {plan.price}
                      </span>
                      <span className="text-muted">{plan.period}</span>
                      <p className="text-xs text-muted mt-2">
                        {plan.bandwidth} included
                      </p>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-success shrink-0" />
                          <span className="text-sm text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/marketplace"
                      className={`w-full px-6 py-3.5 text-sm font-semibold text-center rounded-xl transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "btn-gradient text-white shadow-lg shadow-electric-500/20"
                          : "glass text-white hover:bg-white/5"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Comparison Table */}
          <SectionReveal>
            <div className="glass rounded-3xl overflow-hidden">
              <div className="p-8 border-b border-card-border">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                  Plan Comparison
                </h2>
                <p className="text-sm text-muted mt-2">
                  Detailed feature breakdown across all plans.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-card-border">
                      <th className="text-left py-4 px-6 text-xs font-semibold text-muted uppercase tracking-wider">Feature</th>
                      <th className="text-center py-4 px-6 text-xs font-semibold text-muted uppercase tracking-wider">Starter</th>
                      <th className="text-center py-4 px-6 text-xs font-semibold text-electric-400 uppercase tracking-wider">Professional</th>
                      <th className="text-center py-4 px-6 text-xs font-semibold text-muted uppercase tracking-wider">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((row) => (
                      <tr key={row.feature} className="border-b border-card-border/50 hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 text-sm text-white font-medium">{row.feature}</td>
                        <td className="py-4 px-6 text-sm text-muted text-center">{row.starter}</td>
                        <td className="py-4 px-6 text-sm text-white text-center font-medium">{row.pro}</td>
                        <td className="py-4 px-6 text-sm text-muted text-center">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal delay={0.2}>
            <div className="mt-20 text-center">
              <div className="glass rounded-3xl p-10 lg:p-14 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-500/5 to-violet-500/5 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
                    Need a custom solution?
                  </h3>
                  <p className="text-muted mb-8 max-w-lg mx-auto">
                    We work with enterprise teams to build proxy infrastructure
                    tailored to their exact requirements.
                  </p>
                  <Link
                    href="/marketplace"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-lg shadow-electric-500/20"
                  >
                    Talk to Sales
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
