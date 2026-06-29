# StsDev Portfolio

Personal portfolio website of Stanislav Graur. Brutalist Elegance design system with canvas animations, bento grid layout, and bilingual ru/eng support.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Bun](https://img.shields.io/badge/Runtime-Bun-F9A825?style=flat-square)

## Features

- Animated canvas background with abstract wave lines in cyan
- Scroll-reveal animations via IntersectionObserver
- Bento grid project showcase with hover effects
- Bilingual support - ru/eng language toggle
- Line-by-line text reveal in hero section
- Animated code block in About section
- Dark theme with blue-black surfaces and cyan accents
- Mobile responsive with hamburger navigation

## Tech Stack

- **Framework** - Next.js 16 with App Router and Turbopack
- **Language** - TypeScript 5
- **Styling** - Tailwind CSS 4 with tw-animate-css
- **Fonts** - Manrope (headlines), Cormorant Garamond (italic accent), JetBrains Mono (labels)
- **Runtime** - Bun

## Getting Started

### Prerequisites

- Bun 1.0+ or Node.js 18+

### Installation

```bash
## Clone repository
git clone https://github.com/stanislav-graur/portfolio.git

## Install dependencies
bun install

## Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` - App Router layout, page, and global styles
- `src/components/portfolio/` - Portfolio UI components (Hero, Nav, Projects, About, Experience, Process, Contact, Footer, CanvasBackground, Atmosphere)
- `src/lib/` - i18n context and utility functions
- `public/` - Static assets (logo, wireframe HTML pages)

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Development server on port 3000 |
| `bun run build` | Production build |
| `bun run start` | Start production server |
| `bun run lint` | ESLint check |

## Development Rules

### Required Technologies

- Next.js 16 App Router - no Pages Router
- Tailwind CSS 4 - CSS-first configuration, no tailwind.config.ts
- TypeScript - strict mode

### Code Style

- Components are functional with hooks only
- No third-party UI libraries (shadcn, MUI, etc.)
- All text goes through i18n context, no hardcoded strings
- CSS classes follow BEM-like naming in globals.css
- No em dash in headings or code blocks

Built with: Next.js 16 + TypeScript + Tailwind CSS 4

## License

[MIT](LICENSE)
