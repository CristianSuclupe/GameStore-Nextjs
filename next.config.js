/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["ecommerce-strapi-games1.s3.us-east-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
