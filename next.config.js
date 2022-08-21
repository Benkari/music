/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["cdns-images.dzcdn.net", "coverartarchive.org"],
  },
  nextConfig,
};
