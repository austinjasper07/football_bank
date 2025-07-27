import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "storage.googleapis.com",
      "flagcdn.com",
      "myProfile.com",
      "http://www.myprofile.com",
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

