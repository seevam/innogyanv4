/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental appDir flag for Next.js 14
  images: {
    domains: ['i.postimg.cc'],
  },
  // Add these for better deployment
  output: 'export', // Only if deploying as static site
  trailingSlash: true, // Only if needed
  // Disable image optimization if deploying statically
  images: {
    unoptimized: true,
    domains: ['i.postimg.cc'],
  }
}

module.exports = nextConfig
