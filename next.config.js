const webpack = require('webpack')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  webpack: (config, { isServer }) => {
    const srcPath = path.resolve(__dirname, 'src')
    
    // Ignore all modules from src directory
    config.plugins.push(
      new webpack.IgnorePlugin({
        checkResource(resource, context) {
          if (!context) return false
          
          const contextPath = path.resolve(context)
          const isInSrc = contextPath.startsWith(srcPath)
          
          // Ignore react-router-dom imports from src
          if (isInSrc && (resource === 'react-router-dom' || resource.includes('react-router-dom'))) {
            return true
          }
          
          return false
        },
      })
    )
    
    // Also prevent webpack from resolving modules in src
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    
    return config
  },
}

module.exports = nextConfig

