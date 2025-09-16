/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  images: {
    domains: [
      'i.postimg.cc', // For the existing image URLs in your CSS
      'images.unsplash.com', // In case you want to add Unsplash images
      'cdn.jsdelivr.net', // For any CDN resources
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable static optimization for better performance
  trailingSlash: false,
  // Optimize for production builds
  swcMinify: true,
  // Enable strict mode for better React development
  reactStrictMode: true,
}

module.exports = nextConfig
