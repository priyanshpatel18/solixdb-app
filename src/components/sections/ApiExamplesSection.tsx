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

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {apiTypes.map((api, index) => (
            <div
              key={api.key}
              className={`group relative bg-white rounded-sm border border-[#E5E1D8] transition-all duration-300 overflow-hidden`}
            >

              <div className="py-4 flex flex-col h-full justify-between">
                <div className="">
                  <div className="flex items-start  px-4 justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-[#1A1C1E]">{api.title}</h3>
                          <p className="text-sm font-medium text-[#1A1C1E]/50">{api.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>

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
                          className={`${api.bgGlow} h-[34vh] p-5 overflow-x-auto border w-full border-[#E5E1D8]/50 text-[13px] font-mono leading-relaxed`}
                          style={{ ...style, background: '' }}
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

                <div className="flex flex-col gap-4 px-4 mt-8">
                  <p className="text-[#1A1C1E]/60 text-sm font-medium leading-relaxed">
                    {api.description}
                  </p>


                  <button className="flex items-center gap-2 text-sm font-bold text-[#1A1C1E]/70 hover:text-blue-600 transition-colors group/btn">
                    View Documentation
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* JSON-RPC Functions Card */}
          <div className="group relative bg-white rounded-sm border border-[#E5E1D8] transition-all duration-300 overflow-hidden">
            <div className="py-4 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-start px-4 justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1C1E]">JSON-RPC 2.0</h3>
                        <p className="text-sm font-medium text-[#1A1C1E]/50">POST /v1/rpc</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scrollable Methods List */}
                <div className="relative h-[34vh] overflow-y-auto overflow-x-hidden bg-violet-500/10 border border-[#E5E1D8]/50 custom-scrollbar">
                  <div className="p-3 space-y-2">
                    {[
                      {
                        num: "01",
                        name: "getTransaction",
                        desc: "Get a single transaction by signature",
                        params: "[signature: string]",
                        tag: "Read"
                      },
                      {
                        num: "02",
                        name: "getTransactions",
                        desc: "Get transactions with filters",
                        params: "filters?, sortOrder?, limit?",
                        tag: "Query"
                      },
                      {
                        num: "03",
                        name: "getProtocolStats",
                        desc: "Get statistics for a protocol",
                        params: "protocolName, blockTime?",
                        tag: "Analytics"
                      },
                      {
                        num: "04",
                        name: "getProtocolComparison",
                        desc: "Compare multiple protocols side by side",
                        params: "protocols[], blockTime?",
                        tag: "Compare"
                      },
                      {
                        num: "05",
                        name: "getInstructionTypes",
                        desc: "Get instruction types with statistics",
                        params: "protocolName?, blockTime?, limit?",
                        tag: "Query"
                      },
                      {
                        num: "06",
                        name: "getProtocolActivity",
                        desc: "Time-series activity data (hourly/daily)",
                        params: "protocolName?, blockTime, interval?",
                        tag: "Analytics"
                      },
                      {
                        num: "07",
                        name: "getTopProtocols",
                        desc: "Get top protocols by various metrics",
                        params: "blockTime?, limit?, sortBy?",
                        tag: "Ranking"
                      },
                      {
                        num: "08",
                        name: "getFailedTransactions",
                        desc: "Get failed transactions with error details",
                        params: "protocolName?, programId?, blockTime?, limit?",
                        tag: "Debug"
                      },
                      {
                        num: "09",
                        name: "getProtocolPerformance",
                        desc: "Performance metrics (p50, p95, p99)",
                        params: "protocolName, blockTime?",
                        tag: "Analytics"
                      },
                      {
                        num: "10",
                        name: "getProtocols",
                        desc: "Get list of all available protocols",
                        params: "[] (no params)",
                        tag: "Read"
                      },
                    ].map((method, idx) => (
                      <div
                        key={method.name}
                        className="group/method relative bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-[#E5E1D8]/60 hover:border-violet-300 hover:bg-white transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2.5 min-w-0 flex-1">
                            {/* <span className="text-[10px] font-bold text-violet-400 mt-0.5 font-mono">{method.num}</span> */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <code className="text-xs font-bold text-[#1A1C1E] font-mono truncate">{method.name}</code>
                              </div>
                              <p className="text-[11px] text-[#1A1C1E]/60 mt-0.5 leading-snug">{method.desc}</p>
                              <div className="mt-1.5 flex items-center gap-1.5">
                                <span className="text-[9px] font-medium text-[#1A1C1E]/40 uppercase tracking-wide">Params:</span>
                                <code className="text-[10px] font-mono text-violet-600/80 bg-violet-50 px-1.5 py-0.5 rounded">{method.params}</code>
                              </div>
                            </div>
                          </div>
                          <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md ${method.tag === 'Analytics' ? 'bg-emerald-100 text-emerald-700' :
                            method.tag === 'Query' ? 'bg-blue-100 text-blue-700' :
                              method.tag === 'Read' ? 'bg-gray-100 text-gray-600' :
                                method.tag === 'Compare' ? 'bg-amber-100 text-amber-700' :
                                  method.tag === 'Ranking' ? 'bg-rose-100 text-rose-700' :
                                    method.tag === 'Debug' ? 'bg-red-100 text-red-700' :
                                      'bg-violet-100 text-violet-700'
                            }`}>
                            {method.tag}
                          </span>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-4 mt-8">
                <p className="text-[#1A1C1E]/60 text-sm font-medium leading-relaxed">
                  Full JSON-RPC 2.0 support with powerful filtering, aggregations, and real-time protocol analytics.
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-[#1A1C1E]/70 hover:text-blue-600 transition-colors group/btn">
                  View RPC Documentation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </section>
  );
}
