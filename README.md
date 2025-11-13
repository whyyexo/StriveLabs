# Strive Labs - Premium Landing Site

A premium, dark-first landing site built with React, TypeScript, TailwindCSS, and Framer Motion. Designed with a modern, minimal aesthetic similar to AtomAI, Linear, and Vercel.

## Features

- **Premium Design**: Dark-first design with premium aesthetics and micro-animations
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Animations**: Smooth page transitions and micro-interactions powered by Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Accessible**: Keyboard navigation, ARIA labels, and proper semantic HTML
- **Performance**: Optimized for fast load times and smooth animations
- **Loading Screen**: Animated loading screen with brand mark and smooth transitions

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Supabase** - Authentication and backend

## Project Structure

```
src/
├── components/
│   ├── premium/          # Premium reusable components
│   │   ├── Navbar.tsx    # Sticky navbar with blur effect
│   │   ├── Hero.tsx      # Hero section with mask reveal
│   │   ├── FeatureBlock.tsx  # Feature blocks with left/right variants
│   │   ├── PricingCard.tsx   # Pricing card component
│   │   └── Footer.tsx    # Footer component
│   ├── LoadingScreen.tsx # Loading screen component
│   └── SEO.tsx           # SEO meta tags component
├── pages/                # Page components
│   ├── Home.tsx          # Landing page
│   ├── Product.tsx       # Product page
│   ├── Pricing.tsx       # Pricing page
│   ├── Docs.tsx          # Documentation page
│   ├── About.tsx         # About page
│   ├── Team.tsx          # Team page
│   └── Contact.tsx       # Contact page
├── App.tsx               # Main app component with routing
└── main.tsx              # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (for authentication)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd NeuroFlow
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp env.example .env
   ```
   
   Add your Supabase credentials to `.env`:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3001`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Design System

### Colors

- **Background**: `#0B0C10` - Main background color
- **Surface**: `#0F1115` - Card and surface backgrounds
- **Primary**: `#8B5CF6` - Primary brand color (purple)
- **Secondary**: `#00D4FF` - Secondary accent color (cyan)
- **Muted**: `#9CA3AF` - Muted text color
- **White**: `#FFFFFF` - Primary text color

### Typography

- **Font Family**: Inter (with system fallbacks)
- **Heading Weights**: 600-800 (Bold)
- **Body Weight**: 400 (Regular)

### Spacing

- Uses Tailwind's default spacing scale
- Custom spacing tokens defined in `tailwind.config.js`

### Animations

- **Page Transitions**: Fade + subtle slide (300ms)
- **Hero Reveal**: Mask reveal with 80ms stagger
- **CTA Hover**: Scale to 0.985 (120ms)
- **Feature Cards**: Scale + fade on viewport entry
- **Loading Screen**: Brand mark rotation + glow effect

## Pages

### Public Pages

- **/** - Landing page with hero, features, pricing preview, and CTA
- **/product** - Product details page
- **/pricing** - Full pricing page with toggle (monthly/annual)
- **/docs** - Documentation landing page
- **/about** - About page
- **/team** - Team page
- **/contact** - Contact page with form
- **/career** - Careers page
- **/community** - Community page

### Protected Pages

- **/dashboard** - User dashboard (requires authentication)
- **/admin** - Admin dashboard (requires admin role)

## Components

### Navbar

Sticky navbar with:
- Blur effect on scroll
- Mobile hamburger menu
- Dropdown menus for navigation items
- Active route highlighting
- Keyboard accessible

### Hero

Hero section with:
- Mask reveal animation for headline
- Staggered word animations
- Primary and secondary CTAs
- Optional visual/mockup area
- Scroll indicator

### FeatureBlock

Feature block component with:
- Left/right variants
- Icon support
- Image/visual support
- Viewport-based reveal animations
- Smooth scale + fade transitions

### PricingCard

Pricing card component with:
- Popular badge support
- Feature list
- Animated price changes
- CTA button
- Hover effects

### Footer

Footer component with:
- Multiple link sections
- Social media links
- Brand information
- Legal links
- Responsive grid layout

### LoadingScreen

Loading screen component with:
- Animated brand mark
- Three-dot pulse animation
- Smooth fade-out transition
- Full-screen overlay

## SEO

Each page includes:
- Meta title and description
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Canonical URLs

The SEO component (`src/components/SEO.tsx`) handles all meta tags and can be used on any page.

## Deployment

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Set Environment Variables**:
   - Add your Supabase credentials in the Vercel dashboard
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

4. **Configure Domain**:
   - Add your custom domain in the Vercel dashboard
   - Update `vercel.json` if needed

### Other Platforms

The app can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

## Performance

- **Lighthouse Score Target**: 90+ (mobile/desktop)
- **Accessibility**: 90+
- **Performance**: 80+

### Optimization Tips

1. **Images**: Use WebP format and lazy loading
2. **Code Splitting**: Already configured in Vite
3. **Animations**: Respects `prefers-reduced-motion`
4. **Fonts**: Inter is loaded from Google Fonts with `display=swap`

## Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Focus indicators
- Semantic HTML
- Color contrast compliance
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Linting

```bash
npm run lint
```

### Type Checking

TypeScript type checking is enabled in the IDE. Run:

```bash
npx tsc --noEmit
```

## Customization

### Colors

Update colors in `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#8B5CF6',
    // ... other shades
  },
  // ... other colors
}
```

### Typography

Update fonts in `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Inter', 'ui-sans-serif', ...],
}
```

### Animations

Adjust animation timings in component files or add new animations to `tailwind.config.js`.

## Troubleshooting

### Build Issues

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Animation Issues

- Check browser compatibility
- Verify Framer Motion is installed: `npm list framer-motion`
- Check console for errors

### Styling Issues

- Verify Tailwind is configured correctly
- Check `tailwind.config.js` content paths
- Restart dev server after config changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License

## Support

For questions or issues, please contact:
- Email: support@strivelabs.com
- Discord: https://discord.gg/strivelabs
- GitHub Issues: [Create an issue](https://github.com/strivelabs/issues)

---

Built with ❤️ by Strive Labs
