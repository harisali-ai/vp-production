import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Avoid blocking production builds on lint errors/warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
