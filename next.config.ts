import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ox35safakaidjuzg.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
