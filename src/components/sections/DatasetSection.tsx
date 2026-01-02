"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Brain, Database, FileJson, ArrowRight } from "lucide-react";
import Link from "next/link";

const useCases = [
  {
    icon: Brain,
    title: "ML Model Training",
    description: "Train models for rug pull detection, price prediction, or trading strategy optimization using clean, structured data.",
  },
  {
    icon: Database,
    title: "Research Datasets",
    description: "Export datasets for academic research on DeFi, MEV, market microstructure, and blockchain economics.",
  },
  {
    icon: FileJson,
    title: "Data Analysis",
    description: "Download transaction data in JSON or CSV format for custom analysis, backtesting, or reporting.",
  },
];

export function DatasetSection() {
  return (
    <section id="datasets" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Download className="h-8 w-8 text-primary" />
          </div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight`}>
            Get Datasets for Model Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Export Solana DEX transaction data for machine learning, research, or custom analysis. Clean, structured data ready for your models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {useCase.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 bg-card/50">
            <CardHeader>
              <CardTitle className="text-2xl">How to Export Data</CardTitle>
              <CardDescription className="text-base">
                Use our APIs to query and export data in the format you need
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Query via API</p>
                    <p className="text-sm text-muted-foreground">
                      Use REST, GraphQL, or SQL endpoints to filter and select the data you need. Filter by protocol, date range, transaction type, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Export in Your Format</p>
                    <p className="text-sm text-muted-foreground">
                      Data is returned as JSON by default. Use SQL queries for CSV exports or transform the JSON response to your preferred format.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Train Your Models</p>
                    <p className="text-sm text-muted-foreground">
                      Import the clean, structured data directly into your ML pipeline, research tools, or analysis platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="http://docs.solixdb.xyz" target="_blank" rel="noopener noreferrer">
                    View API Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

