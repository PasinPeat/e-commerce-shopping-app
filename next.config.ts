import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hmrwqjhhyatyjlnukuay.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  experimental: {
    ppr: true,
  },
}

export default nextConfig

