import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 60
   },
   experimental: {
      turbo: {
         minify: true,
         useSwcCss: true
      },
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
