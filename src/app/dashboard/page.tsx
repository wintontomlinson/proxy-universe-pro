"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  Wifi,
  ShoppingCart,
  Store,
  CreditCard,
  Key,
  Settings,
  Activity,
  DollarSign,
  CheckCircle,
  TrendingUp,
  ExternalLink,
  Hexagon,
  LogOut,
  Bell,
  ChevronDown,
} from "lucide-react";

const sidebarLinks = [
  { icon: LayoutDashboard, name: "Overview", active: true },
  { icon: Wifi, name: "My Proxies", active: false },
  { icon: ShoppingCart, name: "Orders", active: false },
  { icon: Store, name: "Marketplace", active: false },
  { icon: CreditCard, name: "Billing", active: false },
  { icon: Key, name: "API Keys", active: false },
  { icon: Settings, name: "Settings", active: false },
];

const widgets = [
  {
    icon: Wifi,
    label: "Active Proxies",
    value: "1,247",
    change: "+12%",
    trend: "up",
  },
  {
    icon: Activity,
    label: "Bandwidth Used",
    value: "342 GB",
    change: "68% of plan",
    trend: "neutral",
  },
  {
    icon: DollarSign,
    label: "Monthly Spend",
    value: "$1,892",
    change: "+5%",
    trend: "up",
  },
  {
    icon: CheckCircle,
    label: "Success Rate",
    value: "99.7%",
    change: "+0.2%",
    trend: "up",
  },
];

const recentOrders = [
  {
    id: "#ORD-4829",
    product: "ISP Premium",
    quantity: 50,
    status: "Active",
    date: "Aug 14, 2026",
    amount: "$250.00",
  },
  {
    id: "#ORD-4815",
    product: "Residential 7Ti",
    quantity: 100,
    status: "Active",
    date: "Aug 10, 2026",
    amount: "$180.00",
  },
  {
    id: "#ORD-4791",
    product: "Datacenter Max",
    quantity: 200,
    status: "Expired",
    date: "Jul 28, 2026",
    amount: "$96.00",
  },
  {
    id: "#ORD-4768",
    product: "Mobile Elite",
    quantity: 20,
    status: "Active",
    date: "Jul 22, 2026",
    amount: "$320.00",
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-card-border bg-navy-900/50 fixed inset-y-0 left-0 z-30">
        <div className="flex items-center gap-2 p-6 border-b border-card-border">
          <Hexagon className="w-7 h-7 text-electric-500" />
          <span className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-white">
            Nova<span className="gradient-text">Bridge</span>
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map((link) => (
            <button
              key={link.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                link.active
                  ? "bg-electric-500/10 text-electric-400 border border-electric-500/20"
                  : "text-muted hover:text-white hover:bg-white/5"
              }`}
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-card-border">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-muted hover:text-white hover:bg-white/5 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Website
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-muted hover:text-error hover:bg-error/5 transition-all">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 border-b border-card-border glass-strong">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                Dashboard
              </h1>
              <p className="text-xs text-muted">Welcome back, Alex</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-electric-500 rounded-full" />
              </button>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass cursor-pointer hover:bg-white/5 transition-all">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-electric-500 to-violet-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">A</span>
                </div>
                <span className="text-sm text-white hidden sm:block">Alex</span>
                <ChevronDown className="w-3.5 h-3.5 text-muted" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 lg:p-8 space-y-8">
          {/* Widgets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {widgets.map((widget, i) => (
              <motion.div
                key={widget.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <widget.icon className="w-5 h-5 text-electric-400" />
                  {widget.trend === "up" && (
                    <TrendingUp className="w-4 h-4 text-success" />
                  )}
                </div>
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  {widget.value}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted">{widget.label}</span>
                  <span className="text-xs text-success">{widget.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-white">
                  Bandwidth Usage
                </h3>
                <span className="px-3 py-1 text-xs rounded-lg bg-electric-500/10 text-electric-400 border border-electric-500/20">
                  This Month
                </span>
              </div>
              <div className="flex items-end gap-2 h-40">
                {[35, 52, 48, 61, 55, 74, 62, 78, 56, 82, 75, 91, 68, 79, 85, 72, 77, 89, 81, 94, 76, 88, 82, 96, 85, 90, 87, 93, 88, 95].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.02, duration: 0.4 }}
                      className="flex-1 rounded-t bg-gradient-to-t from-electric-600 to-electric-400 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                    />
                  )
                )}
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-xs text-muted">Aug 1</span>
                <span className="text-xs text-muted">Aug 15</span>
                <span className="text-xs text-muted">Aug 30</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-white mb-6">
                Spending Breakdown
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Residential", amount: "$780", pct: 41 },
                  { label: "ISP", amount: "$520", pct: 27 },
                  { label: "Datacenter", amount: "$340", pct: 18 },
                  { label: "Mobile", amount: "$252", pct: 13 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-muted">{item.label}</span>
                      <span className="text-white font-medium">
                        {item.amount}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-navy-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-electric-500 to-violet-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-card-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Total this month</span>
                  <span className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                    $1,892
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-semibold text-white">
                Recent Orders
              </h3>
              <button className="text-xs text-electric-400 hover:text-electric-300 transition-colors">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-card-border">
                    <th className="pb-3 text-xs font-medium text-muted">Order ID</th>
                    <th className="pb-3 text-xs font-medium text-muted">Product</th>
                    <th className="pb-3 text-xs font-medium text-muted hidden sm:table-cell">Qty</th>
                    <th className="pb-3 text-xs font-medium text-muted">Status</th>
                    <th className="pb-3 text-xs font-medium text-muted hidden md:table-cell">Date</th>
                    <th className="pb-3 text-xs font-medium text-muted text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-card-border/50 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 text-sm text-white font-medium">{order.id}</td>
                      <td className="py-4 text-sm text-muted">{order.product}</td>
                      <td className="py-4 text-sm text-muted hidden sm:table-cell">{order.quantity}</td>
                      <td className="py-4">
                        <span
                          className={`px-2.5 py-1 text-xs rounded-full ${
                            order.status === "Active"
                              ? "bg-success/10 text-success border border-success/20"
                              : "bg-muted/10 text-muted border border-muted/20"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-muted hidden md:table-cell">{order.date}</td>
                      <td className="py-4 text-sm text-white font-medium text-right">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
