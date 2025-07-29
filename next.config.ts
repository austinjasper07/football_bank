import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "storage.googleapis.com",
      "flagcdn.com"
    ],
  },
  // This is required to ensure middleware behaves as expected
  experimental: {
    serverActions: {
      // Add properties as needed, e.g.
      bodySizeLimit: '10MB', // or some other valid SizeLimit value
      allowedOrigins: ['https://localhost:3000'], // or some other valid string[]
    },
  },
};

export default nextConfig;

