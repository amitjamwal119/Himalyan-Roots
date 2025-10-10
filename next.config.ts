import type { NextConfig } from "next";
// @type {import('next').NextConfig}
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // allow Unsplash
  },
};

export default nextConfig;
