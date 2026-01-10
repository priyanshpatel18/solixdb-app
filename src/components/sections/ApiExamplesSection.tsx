"use client";

import { Copy, Check, Zap, GitBranch, Database, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

const apiTypes = [
  {
    key: "rest",
    title: "REST API",
    subtitle: "Built for Speed",
    description: "Simple HTTP endpoints with JSON responses. Perfect for quick integrations and high-performance applications.",
    gradient: "from-blue-500 to-blue-600",
    bgGlow: "bg-blue-500/10",
    borderHover: "hover:border-blue-500/50",
    icon: Zap,
    language: "javascript" as const,
    code: `// Fetch Jupiter transactions
const response = await fetch(
  'https://api.solixdb.xyz/v1/transactions?' +
  'protocol=jupiter&limit=10'
);

const data = await response.json();
console.log(data.transactions);`,
  },
  {
    key: "graphql",
    title: "GraphQL",
    subtitle: "GraphQL for complexity",
    description: "Flexible queries to fetch exactly the data you need. Reduce over-fetching and build efficient applications.",
    gradient: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/10",
    borderHover: "hover:border-purple-500/50",
    icon: GitBranch,
    language: "graphql" as const,
    code: `query GetTransactions {
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
  },
  {
    key: "sql",
    title: "SQL Interface",
    subtitle: "SQL for deep data analysis",
    description: "Full SQL access for complex analytics and custom aggregations. Unleash the power of structured queries.",
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/10",
    borderHover: "hover:border-emerald-500/50",
    icon: Database,
    language: "sql" as const,
    code: `SELECT 
  signature,
  timestamp,
  protocol,
  amount
FROM transactions
WHERE protocol = 'jupiter'
  AND timestamp > NOW() - INTERVAL '1 hour'
ORDER BY timestamp DESC
LIMIT 10;`,
  },
];

export function ApiExamplesSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="api" className="relative  overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <p className="text-lg text-left sm:text-xl text-[#1A1C1E]/60 font-medium">
            Choose the interface that fits your workflow. All backed by the same blazing-fast infrastructure.
          </p>
        </div>

        {/* code up */}
        {/* text below with button like status.network card and layout animation for testing on landing page directly */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {apiTypes.map((api, index) => (
            <div
              key={api.key}
              className={`group relative bg-white rounded-sm border border-[#E5E1D8] transition-all duration-300 overflow-hidden`}
            >

              <div className="p-8 flex flex-col h-full justify-between">
                <div className="">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-[#1A1C1E]">{api.title}</h3>
                          <p className="text-sm font-medium text-[#1A1C1E]/50">{api.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#1A1C1E]/60 text-sm font-medium leading-relaxed mb-6">
                    {api.description}
                  </p>

                  <div className="relative">
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={() => copyToClipboard(api.code, api.key)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${copied === api.key
                          ? 'bg-green-100 text-green-700'
                          : 'bg-white/80 backdrop-blur-sm text-[#1A1C1E]/70 hover:bg-white hover:text-[#1A1C1E] shadow-sm'
                          }`}
                      >
                        {copied === api.key ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            {/* Copied! */}
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            {/* Copy */}
                          </>
                        )}
                      </button>
                    </div>

                    <Highlight
                      theme={themes.vsLight}
                      code={api.code}
                      language={api.language}
                    >
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                          className={`${api.bgGlow} rounded-md p-5 overflow-x-auto border w-full border-[#E5E1D8]/50 text-[13px] font-mono leading-relaxed`}
                          style={{ ...style, background: 'transparent' }}
                        >
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>

                <button className="mt-6 flex items-center gap-2 text-sm font-bold text-[#1A1C1E]/70 hover:text-blue-600 transition-colors group/btn">
                  View Documentation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
