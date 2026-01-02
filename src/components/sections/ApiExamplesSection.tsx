"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const examples = {
  rest: `// GET /api/v1/transactions?protocol=jupiter&limit=10
fetch('https://api.solixdb.xyz/api/v1/transactions?protocol=jupiter&limit=10')
  .then(res => res.json())
  .then(data => console.log(data));`,

  graphql: `query GetTransactions {
  transactions(
    filter: { protocol: "jupiter" }
    limit: 10
  ) {
    signature
    timestamp
    protocol
    amount
  }
}`,

  sql: `SELECT 
  signature,
  timestamp,
  protocol,
  amount
FROM transactions
WHERE protocol = 'jupiter'
LIMIT 10;`,
};

export function ApiExamplesSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="api" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Choose Your API
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three ways to access the same powerful data. Pick what works for you.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="rest" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-14 bg-muted/50">
              <TabsTrigger value="rest" className="text-base font-semibold">REST</TabsTrigger>
              <TabsTrigger value="graphql" className="text-base font-semibold">GraphQL</TabsTrigger>
              <TabsTrigger value="sql" className="text-base font-semibold">SQL</TabsTrigger>
            </TabsList>

            {Object.entries(examples).map(([key, code]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold capitalize">{key} Example</h3>
                      <button
                        onClick={() => copyToClipboard(code, key)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:bg-muted"
                      >
                        {copied === key ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-muted/30 p-6 rounded-2xl overflow-x-auto border border-border/30">
                      <code className="text-sm font-mono leading-relaxed text-foreground">{code}</code>
                    </pre>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
