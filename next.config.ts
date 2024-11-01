import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
