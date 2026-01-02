"use client";

import { motion } from "framer-motion";
import { Database, Code, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Indexed Data",
    description: "All Solana transactions indexed and optimized for fast queries.",
  },
  {
    icon: Code,
    title: "Query APIs",
    description: "Use REST, GraphQL, or SQL—pick the interface that fits your workflow.",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Get responses in milliseconds with our optimized infrastructure.",
  },
  {
    icon: CheckCircle2,
    title: "Build Your App",
    description: "Integrate and start building with real-time Solana data.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight`}>
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, fast, and reliable. Get started in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
