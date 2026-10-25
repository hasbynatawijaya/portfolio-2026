# Hasby Natawidjaya - Portfolio 2026

A professional brutalist portfolio built with **vanilla TypeScript** and **Tailwind CSS**. No frameworks, just pure code showcasing advanced frontend engineering skills.

## 🎯 Features

- **Brutalist Design** - Bold, raw aesthetic with high contrast and sharp edges
- **Vanilla TypeScript** - Custom component architecture, no React/Vue/Angular
- **Performance Monitoring** - Real-time Web Vitals dashboard (Easter egg: Konami code!)
- **Dark/Light Theme** - System preference detection with manual override
- **Micro-interactions** - Text scramble, magnetic buttons, scroll reveals, parallax
- **SEO Optimized** - Structured data, meta tags, semantic HTML
- **Fully Responsive** - Mobile-first design

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio_2026/
├── public/
│   └── assets/
│       ├── docs/
│       │   └── Hasby_CV_2026.pdf
│       ├── images/
│       └── fonts/
├── src/
│   ├── core/               # Core architecture
│   │   ├── Component.ts    # Base component class
│   │   ├── Router.ts       # Client-side routing
│   │   ├── EventBus.ts     # Event system
│   │   ├── ServiceContainer.ts
│   │   └── App.ts          # Main app controller
│   ├── components/
│   │   ├── animations/     # Animation utilities
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Homepage sections
│   │   └── ui/             # UI components
│   ├── services/           # Business logic
│   │   ├── ThemeService.ts
│   │   ├── PerformanceMonitor.ts
│   │   └── StorageService.ts
│   ├── data/              # Content from CV
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── projects.ts
│   ├── pages/             # Route pages
│   │   ├── home.ts
│   │   ├── case-study.ts
│   │   └── 404.ts
│   ├── styles/            # CSS & styling
│   │   ├── main.css
│   │   ├── brutalist.css
│   │   ├── themes.css
│   │   └── animations.css
│   ├── types/             # TypeScript types
│   └── main.ts            # Entry point
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🏗️ Architecture

### Component System

Custom class-based component architecture with lifecycle hooks:

```typescript
class MyComponent extends Component {
  render() {
    return `<div>HTML string</div>`;
  }

  onMount() {
    // Component mounted
  }

  onUpdate(prevState) {
    // State changed
  }

  onDestroy() {
    // Cleanup
  }
}
```

### State Management

Proxy-based reactive stores without external dependencies:

```typescript
const store = new Store({ count: 0 });

store.subscribe((state) => {
  console.log('State changed:', state);
});

// Triggers subscribers automatically
store.getState().count = 1;
```

### Routing

Custom client-side router with dynamic imports:

```typescript
router.register('/', () => import('./pages/home'));
router.register('/case-study/:id', () => import('./pages/case-study'));
```

## 🎨 Brutalist Design System

### Colors

- Black (`#000000`) / White (`#FFFFFF`)
- Accent Red (`#FF0000`)
- High Contrast Yellow (`#FFFF00`)

### Typography

- **Display**: Space Grotesk - Bold, oversized headings
- **Body**: Inter - Clean, readable text
- **Mono**: JetBrains Mono - Code and metrics

### Visual Elements

- Thick borders (3px+)
- Offset box shadows (no blur)
- Sharp corners (0px border-radius)
- Grid-based layouts
- Exposed structure

## ✨ Key Features

### Text Scramble Animation

Character-by-character reveal effect on hero name.

### Magnetic Buttons

Cursor-following buttons with smooth interpolation.

### Performance Dashboard

Real-time Web Vitals monitoring:
- FCP (First Contentful Paint)
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- TTFB (Time to First Byte)

**Easter Egg**: Use Konami code (↑ ↑ ↓ ↓ ← → ← → B A) to reveal!

### Theme System

- Auto-detects system preference (`prefers-color-scheme`)
- Manual toggle available
- Persists to localStorage
- Instant theme switching (brutalist - no smooth fade)

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with UI
npm run test:ui

# Run E2E tests
npm run test:e2e
```

## 📊 Performance

### Targets

- FCP: < 1.5s
- LCP: < 2.5s
- TTI: < 3.5s
- CLS: < 0.1
- Lighthouse Score: 95+

### Optimizations

- Code splitting by route
- Aggressive caching
- Critical CSS inlining
- Image optimization (WebP, lazy loading)
- Brotli compression

## 🛠️ Scripts

```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Production build
npm run preview      # Preview production build
npm run type-check   # TypeScript type checking
npm run lint         # ESLint
npm run format       # Prettier
npm run lighthouse   # Run Lighthouse audit
```

## 📝 Content Management

All content is in TypeScript files for type safety:

- `src/data/experience.ts` - Work history
- `src/data/skills.ts` - Technical skills
- `src/data/projects.ts` - Project showcase

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 🤝 Contact

- **Email**: mhasbyn@gmail.com
- **LinkedIn**: [linkedin.com/in/hasbynatawijaya](https://linkedin.com/in/hasbynatawijaya)
- **GitHub**: [github.com/hasbynatawijaya](https://github.com/hasbynatawijaya)

---

**Built with vanilla TypeScript**. No frameworks. Just pure code. 🚀
