"use client";

import { motion } from "framer-motion";
import { syne } from "@/fonts/fonts";

const logos = [
  { name: "Jupiter", logo: "J" },
  { name: "Pump.fun", logo: "P" },
  { name: "Raydium", logo: "R" },
  { name: "Orca", logo: "O" },
];

export function SocialProofSection() {
  return (
    <section className="py-16 sm:py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by developers building on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {logos.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {item.logo}
                </div>
                <span className={`text-xl font-semibold ${syne} text-muted-foreground group-hover:text-foreground transition-colors`}>
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

