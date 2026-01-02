"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Database, Code2, TestTube, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: Database,
    title: "SolixDB",
    description: "API to query Solana DeFi data. Currently DEX data (Jupiter, Pump.fun, Raydium) with more protocols coming. Build trading bots, analytics dashboards, and ML models with historical on-chain data.",
    link: "https://api.solixdb.xyz",
    linkText: "Try API",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Code2,
    title: "Solana Indexer",
    description: "Rust crate and TypeScript package that lets developers spin up custom indexers easily. Pass in your config and it handles blockchain indexing—no need to build from scratch.",
    link: "https://github.com/solixdb",
    linkText: "View on GitHub",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: TestTube,
    title: "AnchorLabs",
    description: "Web platform where you upload your Anchor program's IDL and write/run tests directly in the browser. Index data and test instructions without local setup.",
    link: "https://anchorlabs.solixdb.xyz",
    linkText: "Try AnchorLabs",
    color: "bg-green-500/10 text-green-500",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight`}>
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete toolkit for Solana developers—from data access to custom indexing to program testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg flex flex-col">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${product.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{product.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={product.link} target="_blank" rel="noopener noreferrer">
                        {product.linkText}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

