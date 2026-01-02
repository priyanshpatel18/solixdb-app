"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "<500ms", label: "Average Query Time" },
  { value: "5+", label: "Protocols Supported" },
  { value: "24/7", label: "Real-Time Updates" },
  { value: "3 APIs", label: "REST, GraphQL, SQL" },
];

function AnimatedNumber({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-muted-foreground text-sm sm:text-base font-medium">{label}</div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-background via-muted/20 to-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <AnimatedNumber key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
