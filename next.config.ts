import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/gtmtest',
        permanent: false,
      },
      {
        source: '/',
        destination: '/gtmtestsub',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
