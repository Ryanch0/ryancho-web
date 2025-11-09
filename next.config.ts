import type { NextConfig } from 'next'
import removeImports from 'next-remove-imports'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_HOST!,
        pathname: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PATHNAME
      }
    ]
  },
  experimental: {
    reactCompiler: true
  }
}

export default removeImports({})(nextConfig)
