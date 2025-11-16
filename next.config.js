const webpack = require('webpack')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Prevent Next.js from scanning src/pages directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config, { isServer }) => {
    const srcPath = path.resolve(__dirname, 'src')
    const srcPagesPath = path.resolve(__dirname, 'src', 'pages')
    
    // Completely exclude src/pages from being processed
    config.plugins.push(
      new webpack.IgnorePlugin({
        checkResource(resource, context) {
          if (!context) return false
          
          const contextStr = String(context)
          
          // Ignore if context is in src directory
          if (contextStr.includes(path.sep + 'src' + path.sep) || 
              contextStr.includes('/src/') ||
              contextStr.includes('\\src\\') ||
              contextStr.endsWith(path.sep + 'src') ||
              contextStr.endsWith('/src')) {
            return true
          }
          
          // Check resolved path
          try {
            const resolvedPath = path.resolve(context)
            if (resolvedPath.startsWith(srcPath) || resolvedPath.startsWith(srcPagesPath)) {
              return true
            }
          } catch (e) {
            // Ignore errors
          }
          
          return false
        },
      })
    )
    
    // Also exclude src/pages from module rules
    config.module = config.module || {}
    config.module.rules = config.module.rules || []
    
    // Add rule to exclude src/pages completely
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: [srcPagesPath],
      use: 'null-loader',
    })
    
    return config
  },
}

module.exports = nextConfig

