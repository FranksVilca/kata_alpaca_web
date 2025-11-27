import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "us-west-2.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "*.graphassets.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
