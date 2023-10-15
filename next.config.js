/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/7.x/**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
