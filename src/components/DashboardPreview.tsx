"use client";

import { motion } from "framer-motion";
import { Activity, Wifi, DollarSign, Code, ShoppingCart, Zap } from "lucide-react";
import SectionReveal from "./SectionReveal";

const dashWidgets = [
  { icon: Wifi, label: "Active Proxies", value: "1,247", change: "+12%" },
  { icon: Activity, label: "Remaining Bandwidth", value: "342 GB", change: "68%" },
  { icon: DollarSign, label: "Current Spend", value: "$1,892", change: "+5%" },
  { icon: Code, label: "API Requests", value: "2.4M", change: "+23%" },
];

export default function DashboardPreview() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5 tracking-tight">
              Powerful <span className="gradient-text">Dashboard</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Monitor proxies, track bandwidth and manage everything from
              a single interface.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute -inset-4 bg-electric-500/4 rounded-[2rem] blur-3xl" />

            <div className="relative glass rounded-3xl p-6 lg:p-8 glow-border">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-7">
                <div className="w-3 h-3 rounded-full bg-error/50" />
                <div className="w-3 h-3 rounded-full bg-warning/50" />
                <div className="w-3 h-3 rounded-full bg-success/50" />
                <div className="ml-4 px-4 py-1.5 rounded-lg bg-navy-800/60 border border-card-border">
                  <span className="text-xs text-muted font-mono">
                    dashboard.novabridge.io
                  </span>
                </div>
              </div>

              {/* Widgets */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {dashWidgets.map((widget, i) => (
                  <motion.div
                    key={widget.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="bg-navy-800/40 rounded-2xl p-4 border border-card-border hover:border-electric-500/20 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <widget.icon className="w-4 h-4 text-electric-400" />
                      <span className="text-xs text-muted">{widget.label}</span>
                    </div>
                    <div className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                      {widget.value}
                    </div>
                    <span className="text-xs text-success font-medium">{widget.change}</span>
                  </motion.div>
                ))}
              </div>

              {/* Chart + Actions */}
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-navy-800/40 rounded-2xl p-5 border border-card-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white">
                      Bandwidth Usage
                    </span>
                    <span className="text-xs text-muted px-2.5 py-1 rounded-md bg-white/5">Last 30 days</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-32">
                    {[40, 65, 45, 70, 55, 80, 60, 75, 50, 85, 70, 90, 65, 78, 82, 68, 72, 88, 76, 92, 70, 85, 78, 95, 80, 88, 82, 90, 85, 92].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.025, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                          className="flex-1 rounded-t bg-gradient-to-t from-electric-600/80 to-electric-400/90 hover:from-electric-500 hover:to-electric-300 transition-colors duration-200 cursor-pointer"
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="bg-navy-800/40 rounded-2xl p-5 border border-card-border">
                  <span className="text-sm font-medium text-white block mb-4">
                    Quick Actions
                  </span>
                  <div className="space-y-2">
                    {[
                      { icon: ShoppingCart, label: "New Order" },
                      { icon: Zap, label: "Generate API Key" },
                      { icon: Activity, label: "View Analytics" },
                    ].map((action) => (
                      <div
                        key={action.label}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer group"
                      >
                        <action.icon className="w-4 h-4 text-electric-400 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm text-muted group-hover:text-white transition-colors duration-200">
                          {action.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
