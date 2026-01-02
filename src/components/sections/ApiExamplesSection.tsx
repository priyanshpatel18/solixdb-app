"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="api" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight`}>
            Choose Your API
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three ways to access the same powerful data. Pick what works for you.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="rest" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="rest">REST</TabsTrigger>
              <TabsTrigger value="graphql">GraphQL</TabsTrigger>
              <TabsTrigger value="sql">SQL</TabsTrigger>
            </TabsList>

            {Object.entries(examples).map(([key, code]) => (
              <TabsContent key={key} value={key}>
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl capitalize">{key} Example</CardTitle>
                      <button
                        onClick={() => copyToClipboard(code, key)}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted"
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
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto border border-border/50">
                      <code className="text-sm font-mono leading-relaxed">{code}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
