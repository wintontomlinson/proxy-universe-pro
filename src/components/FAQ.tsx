"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What proxy types do you offer?",
    answer:
      "We offer four main proxy types: Residential proxies (35M+ rotating IPs), ISP proxies (static residential IPs), Datacenter proxies (high-speed dedicated IPs), and Mobile proxies (4G/5G carrier IPs). Each type is available from multiple verified providers on our marketplace.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Delivery is instant. Once your payment is confirmed, your proxy credentials and access details are generated automatically and available in your dashboard within seconds. No manual review or waiting period required.",
  },
  {
    question: "Do you provide API access?",
    answer:
      "Yes! We provide a comprehensive REST API that lets you manage proxies, rotate IPs, check bandwidth usage, generate credentials, and automate purchases. We also offer SDKs for Python, Node.js, Go, Java, and PHP.",
  },
  {
    question: "Can I rotate IPs?",
    answer:
      "Absolutely. Our residential and mobile proxies support automatic IP rotation with configurable intervals (every request, every 1/5/10/30 minutes, or sticky sessions). You can also trigger manual rotation via API or dashboard.",
  },
  {
    question: "Is bandwidth unlimited?",
    answer:
      "We offer both metered and unlimited bandwidth plans depending on the proxy type and provider. Datacenter proxies typically include unlimited bandwidth, while residential and mobile proxies are billed per GB with generous volume discounts.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, cryptocurrency (Bitcoin, Ethereum, USDT), bank transfers, and popular local payment methods. Enterprise customers can also pay via invoice with NET-30 terms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about our proxy services.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-sm font-medium text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
