"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Database, FileText } from "lucide-react";

const schemaExamples = {
  transactions: `{
  signature: string      // Transaction signature
  slot: number          // Solana slot
  blockTime: number     // Unix timestamp
  programId: string     // Solana program address
  protocolName: string  // jupiter_v4, jupiter_v6, 
                        // raydium_amm_v3, raydium_cp_swap,
                        // pump_fun, pump_amm, whirlpool
  instructionType: string
  fee: number           // Fee in lamports
  computeUnits: number  // Compute units consumed
  accountsCount: number
  date: string          // YYYY-MM-DD
  hour: number          // 0-23
}`,

  failed: `{
  // All transaction fields plus:
  rawData: string
  errorMessage: string
  logMessages: string[]
}`,
};

export function SchemaSection() {
  return (
    <section id="schema" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Database className="h-8 w-8 text-primary" />
          </div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight`}>
            Data Schema
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understand the structure of our data. All fields are indexed and optimized for fast queries.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="transactions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="failed">Failed Transactions</TabsTrigger>
            </TabsList>

            {Object.entries(schemaExamples).map(([key, schema]) => (
              <TabsContent key={key} value={key}>
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl capitalize">
                        {key === "transactions" ? "Transaction Schema" : "Failed Transaction Schema"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto border border-border/50">
                      <code className="text-sm font-mono leading-relaxed">{schema}</code>
                    </pre>
                    {key === "transactions" && (
                      <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/50">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Note:</strong> The <code className="bg-muted px-1.5 py-0.5 rounded text-xs">signature</code> field is not unique—each row represents an instruction within a transaction. 
                          Transactions can have multiple instructions, so the same signature may appear multiple times.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Optimized Indexes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bloom filter indexes on <code className="bg-muted px-1 py-0.5 rounded text-xs">protocol_name</code>, <code className="bg-muted px-1 py-0.5 rounded text-xs">program_id</code>, and <code className="bg-muted px-1 py-0.5 rounded text-xs">signature</code> for fast lookups.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Partitioned by Date</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Data is partitioned monthly by <code className="bg-muted px-1 py-0.5 rounded text-xs">date</code> for efficient time-range queries and partition pruning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ordered for Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Data is ordered by <code className="bg-muted px-1 py-0.5 rounded text-xs">(date, slot, signature)</code> for optimal query performance.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

