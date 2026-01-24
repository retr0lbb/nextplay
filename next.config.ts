import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://media.rawg.io/media/games/**"),
      new URL("https://media.rawg.io/media/screenshots/**"),
      new URL("https://media.rawg.io/**"),
    ],
  },
};

export default nextConfig;
