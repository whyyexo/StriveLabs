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

The build script automatically handles the `src` directory (old Vite/React Router code) by temporarily renaming it during the build process.

```bash
npm run build
```

The script will:
1. Temporarily rename `src` to `src-old`
2. Build the Next.js app
3. Restore `src` directory automatically

**Note:** If you need to build without the script, you can use:
```bash
npm run build:next
```

But you'll need to manually rename `src` first to avoid build errors.

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
