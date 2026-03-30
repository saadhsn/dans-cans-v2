import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export for shared hosting. */
  output: 'export',
  
  /* No on-the-fly image optimization in static hosting. */
  images: {
    unoptimized: true,
  },

  /* Allow LAN-origin dev access to Next assets. */
  allowedDevOrigins: ["http://192.168.7.14:3000"],

  /* Keep URLs compatible with static hosting paths. */
  trailingSlash: true,
};

export default nextConfig;
