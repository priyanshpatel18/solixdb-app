"use client";

import { motion } from "framer-motion";
import { Database, Zap, Globe, Shield, Clock, Code, ChevronRight, Terminal } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Complete DEX Coverage",
    description: "Comprehensive Solana DEX data from Jupiter, Pump.fun, Raydium, Orca, and more. Expanding to additional protocols.",
  },
  {
    icon: Zap,
    title: "Blazingly Fast",
    description: "Sub-500ms query response times. Built for real-time applications and analytics that demand speed.",
  },
  {
    icon: Globe,
    title: "Multiple APIs",
    description: "Choose REST, GraphQL, or SQL. Use the interface that fits your workflow and team preferences.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Reliable infrastructure with real-time data updates, high availability, and enterprise-grade uptime.",
  },
  {
    icon: Clock,
    title: "Historical Data",
    description: "Access complete transaction history for backtesting, analytics, and machine learning model training.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Built by developers, for developers. Clean APIs, comprehensive documentation, and active support.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="">
      <div className="px-30 mx-auto">
        {/* <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-[#1A1C1E]">Built for the <span className="text-blue-600">Future.</span></h2>
          <p className="text-[#1A1C1E]/60 max-w-xl mx-auto font-medium text-lg">Infrastructure designed to scale with the Solana ecosystem's velocity.</p>
        </div> */}

        <div className="bento-grid">
          {/* Main Large Feature */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-white rounded-[2.5rem] p-12 flex flex-col justify-between group overflow-hidden border border-[#E5E1D8] hover:border-blue-500/30 transition-all shadow-xl shadow-[#1A1C1E]/5">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-48 h-48 text-blue-600" />
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F9F7F2] flex items-center justify-center mb-8 border border-[#E5E1D8]">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-3xl font-black mb-5 tracking-tight text-[#1A1C1E]">Unmatched Query Speed</h3>
              <p className="text-[#1A1C1E]/60 max-w-sm leading-relaxed text-lg font-medium">
                Our optimized indexing engine provides sub-500ms responses, enabling truly interactive DeFi dashboards and trading tools.
              </p>
            </div>
            <button className="mt-10 flex items-center gap-2 text-[#1A1C1E] font-bold group/btn hover:text-blue-600 transition-colors">
              Explore Our Infrastructure
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Secondary Features */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-[2.5rem] p-10 flex flex-col justify-center border border-[#E5E1D8] shadow-lg shadow-[#1A1C1E]/5">
            <div className="flex items-center gap-5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                <Terminal className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#1A1C1E]">Multi-API Engine</h3>
            </div>
            <p className="text-[#1A1C1E]/60 text-base font-medium leading-relaxed">Choose your interface: REST for speed, GraphQL for complexity, or SQL for deep data analysis. All on one platform.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-center border border-[#E5E1D8] hover:shadow-xl transition-shadow shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-5 border border-cyan-100">
              <Database className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight text-[#1A1C1E]">Zero-Loss History</h3>
            <p className="text-[#1A1C1E]/60 text-sm font-medium">We preserve every byte of transaction data across 10+ major Solana protocols since inception.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-center border border-[#E5E1D8] hover:shadow-xl transition-shadow shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 border border-blue-100">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight text-[#1A1C1E]">Bank-Grade SLA</h3>
            <p className="text-[#1A1C1E]/60 text-sm font-medium">99.9% uptime guaranteed for production applications with dedicated support channels.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
