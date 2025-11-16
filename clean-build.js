// Script to clean .next cache and rebuild
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('Cleaning .next cache...')
const nextDir = path.join(__dirname, '.next')
if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true })
  console.log('✓ .next directory removed')
}

console.log('Building...')
try {
  execSync('npm run build', { stdio: 'inherit' })
  console.log('✓ Build successful!')
} catch (error) {
  console.error('✗ Build failed')
  process.exit(1)
}

