/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com", //from  google avatar image
    ],
    formats: ["image/avif", "image/webp"], //minify images according to browser support
  },
};

module.exports = nextConfig
