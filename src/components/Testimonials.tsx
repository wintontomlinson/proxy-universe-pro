"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "CTO, DataScrape Inc.",
    avatar: "AC",
    rating: 5,
    text: "NovaBridge completely changed our data pipeline. Residential proxies hit a 99.7% success rate on the toughest targets. Best investment we made this year.",
  },
  {
    name: "Sarah Mitchell",
    role: "Lead Engineer, WebFlow",
    avatar: "SM",
    rating: 5,
    text: "The API is incredibly clean. We had proxy rotation integrated into our system in under 2 hours. Docs are solid and support responds in minutes, not hours.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, ScaleBot",
    avatar: "MR",
    rating: 5,
    text: "Switched from our previous provider and saw 40% better success rates overnight. The marketplace model lets us pick the right provider for each use case.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Loved by <span className="gradient-text">Developers</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Thousands of companies trust NovaBridge for their proxy
            infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-3xl p-7 card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-warning fill-warning"
                  />
                ))}
              </div>

              <p className="text-muted leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-500 to-violet-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
