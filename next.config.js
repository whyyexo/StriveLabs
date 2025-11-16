const webpack = require('webpack')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Explicitly tell Next.js to only look in app directory for pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config, { isServer }) => {
    const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')
    
    // Ignore ALL modules that are being imported from files in the src directory
    config.plugins.push(
      new webpack.IgnorePlugin({
        checkResource(resource, context) {
          if (!context) return false
          
          try {
            // Normalize paths for cross-platform compatibility
            const contextPath = path.resolve(context).replace(/\\/g, '/')
            const isInSrc = contextPath.startsWith(srcPath)
            
            // If the importing file is in src, ignore ALL its imports
            if (isInSrc) {
              return true
            }
            
            // Also check if the resource itself is in src
            try {
              const resourcePath = path.resolve(context, resource).replace(/\\/g, '/')
              if (resourcePath.startsWith(srcPath)) {
                return true
              }
            } catch (e) {
              // If we can't resolve the resource path, check if it contains 'src'
              if (resource.includes('src/') || resource.includes('src\\')) {
                return true
              }
            }
          } catch (e) {
            // If path resolution fails, check if context or resource mentions src
            if (context && (context.includes('src') || resource.includes('src'))) {
              return true
            }
          }
          
          return false
        },
      })
    )
    
    return config
  },
}

module.exports = nextConfig

