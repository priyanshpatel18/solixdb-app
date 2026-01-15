"use client";

import { useState } from "react";
import { ArrowRight, Github, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const ca = "yxqrfoGCrwt3Tv71ZVEMUUTECDUJcEAbbmGYnHRcyai";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ca);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section className="w-full min-h-[50vh] sm:min-h-[55vh] md:h-[65vh] flex relative flex-col gap-4 items-center px-4 sm:px-6 mt-16 sm:mt-24 md:mt-42">
      <button
        type="button"
        onClick={handleCopy}
        className="group relative inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs sm:text-sm font-medium text-neutral-800 shadow-sm backdrop-blur hover:border-neutral-300 hover:bg-white transition-colors"
      >
        <span className="font-semibold text-base uppercase tracking-[0.16em] text-neutral-500">
          CA
        </span>
        <span className="font-mono text-base text-neutral-700 max-w-[240px] sm:max-w-xs truncate">
          {ca}
        </span>
        <Copy
          size={14}
          className="text-neutral-500 group-hover:text-neutral-800 transition-transform duration-150 group-active:scale-90"
        />

        {/* Hover hint */}
        <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black text-[10px] px-2 py-1 text-white/90 opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
          Tap to copy
        </span>

        {/* Copied micro animation */}
        {copied && (
          <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-emerald-400/60 animate-ping-slow" />
        )}
        {copied && (
          <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-500 text-[10px] px-2 py-1 text-white shadow-sm">
            Copied
          </span>
        )}
      </button>
      <div className="mb-4">
        <Image src={"/logo.png"} alt="SolixDB" width={90} height={90} className="w-full h-full" />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-gradient text-center">
        Index <span className="font-semibold">Less.</span> Build <span className="font-semibold">More.</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-xl text-center text-neutral-700 font-medium px-4">
        SolixDB provides pre-indexed Solana DeFi data with JSON RPC, GraphQL, and SQL access built for production-scale applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0">
        <a href="https://docs.solixdb.xyz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-2.5 sm:py-2 rounded-md bg-neutral-100 text-neutral-700 flex items-center justify-center gap-2 text-sm sm:text-base">
            Docs <ArrowRight size={18} />
          </button>
        </a>
        <a href="https://dashboard.solixdb.xyz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-2.5 sm:py-2 rounded-md bg-black text-white flex items-center justify-center gap-2 text-sm sm:text-base">
            Get Your API Key <ArrowRight size={18} />
          </button>
        </a>
      </div>

      {/* Powered by - Hidden on mobile, shown on md+ */}
      <div className="hidden md:flex absolute bottom-0 left-8 lg:left-32 flex-col gap-2">
        <span className="text-neutral-700 text-sm lg:text-base font-semibold">Powered by</span>
        <div className="flex gap-1">
          <span>
            <Link href={"https://x.com/anza_xyz"} target="_blank" rel="noopener noreferrer">
              <Image src="/anza.jpg" alt="anza" width={35} height={35} className="rounded-md w-8 h-8 lg:w-[35px] lg:h-[35px]" />
            </Link>
          </span>
          <span>
            <Link href={"https://x.com/triton_one"} target="_blank" rel="noopener noreferrer">
              <Image src="/Triton.png" alt="Triton" width={35} height={35} className="rounded-md w-8 h-8 lg:w-[35px] lg:h-[35px]" />
            </Link>
          </span>
        </div>
      </div>

      {/* Open Source - Hidden on mobile, shown on md+ */}
      <div className="hidden md:flex absolute bottom-0 right-8 lg:right-32 shrink-0 flex-col gap-2">
        <span className="text-neutral-700 text-sm lg:text-base font-semibold">Open Source</span>
        <div className="flex gap-1 w-full justify-end shrink-0">
          <Link href={"https://github.com/solixdb"} className="py-0.5 px-1 shrink-0 rounded-md bg-black" target="_blank" rel="noopener noreferrer">
            <Github size={28} className="p-1 text-white lg:w-8 lg:h-8" />
          </Link>
        </div>
      </div>

      {/* Mobile badges - shown only on small screens */}
      <div className="flex md:hidden items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500 text-xs font-medium">Powered by</span>
          <div className="flex gap-1">
            <Image src="/anza.jpg" alt="anza" width={24} height={24} className="rounded-md" />
            <Image src="/Triton.png" alt="Triton" width={24} height={24} className="rounded-md" />
          </div>
        </div>
        <div className="flex items-center  shrink-0 gap-4">
          <span className="text-neutral-500 text-xs font-medium">Open Source</span>
          <Link href={"https://github.com/solixdb"} className="py-1 px-1 rounded-md bg-black shrink-0" target="_blank" rel="noopener noreferrer">
            <Github size={20} className="p-0.5 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
