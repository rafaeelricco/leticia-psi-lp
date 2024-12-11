import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   experimental: {
      serverMinification: true,
      optimizeCss: true,
      optimizePackageImports: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
      optimizeServerReact: true
   },
   compress: true,
   headers: async () => [
      {
         source: '/fonts/:path*',
         headers: [
            {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable'
            }
         ]
      },
      {
         source: '/assets/:path*',
         headers: [
            {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable'
            }
         ]
      }
   ]
}

export default nextConfig
