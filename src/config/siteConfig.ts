import { Metadata } from "next";

const { title, description, ogImage, baseURL } = {
  title: "SolixDB - 390M+ Solana Transactions at Your Fingertips",
  description:
    "Query Solana's largest transaction database via REST, GraphQL, or SQL. 390M+ indexed transactions with sub-500ms query times. Built for developers who need fast, reliable access to on-chain data.",
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
