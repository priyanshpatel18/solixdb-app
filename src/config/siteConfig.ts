import { Metadata } from "next";

const { title, description, ogImage, baseURL } = {
  title: "SolixDB - Pre-Indexed Solana DeFi Data for Developers",
  description:
    "Query pre-indexed Solana DeFi data from major DEXs using REST, GraphQL, or SQL. Fast, reliable, and production-ready infrastructure for developers.",
  baseURL: "https://solixdb.xyz",
  ogImage: `https://solixdb.xyz/open-graph.png`,
};

export const siteConfig: Metadata = {
  title,
  description,
  metadataBase: new URL(baseURL),
  openGraph: {
    title,
    description,
    images: [ogImage],
    url: baseURL,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "SolixDB",
  alternates: {
    canonical: baseURL,
  },
  keywords: [
    "Solana Indexing",
    "Blockchain Data",
    "Real-time Transactions",
    "Solana API",
    "On-Chain Analytics",
  ],
};
