/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

});