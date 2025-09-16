@@ -0,0 +1,11 @@
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.postimg.cc'],
  },
}

module.exports = nextConfig
