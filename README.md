# StriveLabs Website

A premium, modern website for StriveLabs - a next-generation AI holding company.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide Icons**
- **Recharts** (Charts)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

**Important:** If you encounter build errors related to the `src` directory (old Vite/React Router code), you have two options:

**Option 1: Clean build (recommended)**
```bash
# Delete .next cache
rm -rf .next
# Or on Windows PowerShell:
Remove-Item -Recurse -Force .next

# Then build
npm run build
```

**Option 2: Temporarily rename src directory**
```bash
# Rename src to src-old (or any other name)
mv src src-old
# Build
npm run build
# Rename back if needed
mv src-old src
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/              # Next.js app router pages
│   ├── about/       # About page
│   ├── products/    # Products page
│   ├── pricing/     # Pricing page
│   ├── contact/     # Contact page
│   └── legal/        # Legal pages (privacy, terms)
├── components/       # Reusable React components
├── lib/             # Utility functions and helpers
└── content/         # Content data (products, pricing)
```

## Design System

- **Colors**: Dark theme (#0A0A0A, #0C0C0C) with purple/blue/cyan gradients
- **Typography**: Inter font family
- **Spacing**: Premium vertical rhythm with consistent spacing
- **Effects**: Glassmorphism, subtle noise textures, smooth animations

## Features

- ✅ Fully responsive design
- ✅ Smooth animations and micro-interactions
- ✅ Premium dark theme
- ✅ Glassmorphism effects
- ✅ 3D tilt effects on hover
- ✅ Gradient blobs and backgrounds
- ✅ All pages implemented with real content

## License

© 2024 StriveLabs. All rights reserved.
