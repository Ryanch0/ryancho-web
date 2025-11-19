import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
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
const withNextIntl = createNextIntlPlugin()

export default removeImports({})(withNextIntl(nextConfig))
