import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "storage.googleapis.com",
      "flagcdn.com",
    ],
  },
};

export default nextConfig;
