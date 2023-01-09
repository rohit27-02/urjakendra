/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { 
    nftTracing: true 
  }
}

module.exports = nextConfig
module.exports = {
  webpack5: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
