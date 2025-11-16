// Build script that temporarily renames src directory to avoid Next.js detecting src/pages
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const srcPath = path.join(__dirname, 'src')
const srcOldPath = path.join(__dirname, 'src-old')

console.log('🚀 Starting build process...')

// Check if src exists
if (fs.existsSync(srcPath)) {
  console.log('📦 Temporarily renaming src to src-old...')
  
  // Remove src-old if it exists
  if (fs.existsSync(srcOldPath)) {
    fs.rmSync(srcOldPath, { recursive: true, force: true })
  }
  
  // Rename src to src-old
  fs.renameSync(srcPath, srcOldPath)
  console.log('✓ src renamed to src-old')
}

try {
  console.log('🔨 Building Next.js app...')
  execSync('next build', { stdio: 'inherit' })
  console.log('✅ Build successful!')
} catch (error) {
  console.error('❌ Build failed:', error.message)
  process.exit(1)
} finally {
  // Always restore src directory
  if (fs.existsSync(srcOldPath)) {
    console.log('🔄 Restoring src directory...')
    if (fs.existsSync(srcPath)) {
      fs.rmSync(srcPath, { recursive: true, force: true })
    }
    fs.renameSync(srcOldPath, srcPath)
    console.log('✓ src directory restored')
  }
}

