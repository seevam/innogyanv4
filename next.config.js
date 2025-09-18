/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['i.postimg.cc'],
  },
  // Remove output: 'export' as it's incompatible with Clerk
  // Remove trailingSlash unless specifically needed
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
