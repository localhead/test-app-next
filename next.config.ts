import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
  trailingSlash: true,

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "styles"),
    };

    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/,
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
      resourceQuery: { not: [/url/] },
    });

    return config;
  },
};

export default nextConfig;
