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
  webpack: (config, { isServer }) => {
    const srcPath = path.resolve(__dirname, 'src')
    
    // Ignore ALL files in src directory completely
    config.plugins.push(
      new webpack.IgnorePlugin({
        checkResource(resource, context) {
          if (!context) return false
          
          const contextStr = String(context)
          // If context is in src directory, ignore everything
          if (contextStr.includes(path.sep + 'src' + path.sep) || 
              contextStr.includes('/src/') ||
              contextStr.endsWith(path.sep + 'src') ||
              contextStr.endsWith('/src')) {
            return true
          }
          
          // Also check resolved path
          try {
            const resolvedPath = path.resolve(context)
            if (resolvedPath.startsWith(srcPath)) {
              return true
            }
          } catch (e) {
            // Ignore errors
          }
          
          return false
        },
      })
    )
    
    return config
  },
}

module.exports = nextConfig

