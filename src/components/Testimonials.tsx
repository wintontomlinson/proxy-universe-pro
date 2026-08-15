"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionReveal from "./SectionReveal";

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
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5 tracking-tight">
              Loved by <span className="gradient-text">Developers</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Thousands of companies trust NovaBridge for their proxy
              infrastructure.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <SectionReveal key={testimonial.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="glass rounded-3xl p-7 lg:p-8 h-full relative overflow-hidden group"
              >
                {/* Decorative quote */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-electric-500/10 group-hover:text-electric-500/20 transition-colors duration-300" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-warning fill-warning"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted leading-relaxed mb-7 text-sm relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-electric-500 to-violet-500 flex items-center justify-center shadow-lg shadow-electric-500/20">
                    <span className="text-xs font-bold text-white">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
