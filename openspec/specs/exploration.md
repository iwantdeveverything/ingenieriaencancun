# SDD Exploration: Architecture & Frontend Aesthetics

## Current State
The project is a freshly initialized, barebones Astro `v7` template using Node `>=22.12.0`. The file structure is standard (`src/pages/`, `src/components/`, `src/layouts/`), but there is no styling architecture, no routing logic for services/blog, and no configured SEO management. The `package.json` contains basic scripts (dev, build, test via vitest) and commitlint/husky hooks. No frontend framework (React/Vue) or CSS framework (Tailwind) is installed.

## Affected Areas
- **`src/layouts/`**: Needs a base layout enforcing global styles, SEO metadata, and structural layout (header, main, footer).
- **`src/pages/`**: Needs routing structure for Home (`/`), Services (`/services`), Custom Software (`/software/custom`), Third-Party Software (`/software/third-party`), and Blog (`/blog`).
- **`src/content/`**: Needs to be created for Astro Content Collections to manage markdown/MDX blog posts with strict schemas for frontmatter (title, description, date, author, canonical URL).
- **`src/styles/`**: Global styling system needs to be established using Vanilla CSS (CSS variables, tokens, utilities).
- **`src/components/`**: UI components (Cards, Nav, Hero, SEO `<head>`).

## Approaches

### Approach 1: High-End "Cyber-Organic" Tech Luxury (Vanilla CSS)
- **Aesthetic**: Deep, rich dark mode (e.g., Midnight Blue/Black backgrounds) with sharp, vibrant neon accents (Cyan/Magenta or Acid Green). Elements use subtle glassmorphism, 1px luminous borders, and mesh gradient backgrounds. 
- **Typography**: "Clash Display" for bold, wide, striking headers, paired with "Satoshi" or "Outfit" for clean, highly legible body text.
- **Architecture**: Astro + Vanilla CSS (CSS Variables for tokens). Native View Transitions for SPA-like navigation. Scroll-driven animations via CSS. Content Collections for the blog.
- **Pros**: Screams "premium software engineering." Very modern, high conversion potential. Vanilla CSS ensures maximum control over micro-interactions without framework bloat.
- **Cons**: Requires meticulous CSS organization to maintain the complex visual hierarchy.

### Approach 2: Technical / Blueprint "Neo-Retro" (Vanilla CSS)
- **Aesthetic**: Mimics technical manuals, blueprints, and terminal interfaces. Off-white or stark dark backgrounds, visible grid lines, monospaced accents. 
- **Typography**: "JetBrains Mono" for accents and metadata, "IBM Plex Sans" for readability. 
- **Architecture**: Astro + Vanilla CSS. Heavy use of CSS Grid to create a "dashboard" or "canvas" feel. Content Collections for the blog.
- **Pros**: Strongly aligns with "software engineering and systems." Unique, brutalist edge that stands out from typical corporate templates.
- **Cons**: Can feel cold or overly technical for non-technical clients seeking custom software.

### Approach 3: Bold Maximalism & Kinetic Typography (Vanilla CSS)
- **Aesthetic**: High contrast, overlapping elements, giant typography, and aggressive spatial composition. Asymmetry and diagonal flows.
- **Typography**: "Syne" or "Unbounded" for massive, screen-filling headlines.
- **Architecture**: Astro + Vanilla CSS. Intersection Observers for aggressive scroll reveals. Content Collections for the blog.
- **Pros**: Unforgettable and distinct. Completely shatters the "AI slop" or generic template mold.
- **Cons**: High risk of overwhelming the user; readability (critical for the SEO blog) might be compromised if not balanced properly.

## Recommendation
**Approach 1: High-End "Cyber-Organic" Tech Luxury (Vanilla CSS)** is recommended.
It perfectly balances the user's need for a *bold, distinctive, production-grade* aesthetic while maintaining the professional trust required to sell custom software and services. Using Vanilla CSS adheres to the strict technical directives and the `frontend-design` skill by enforcing custom, meticulously crafted styles rather than relying on generic utility classes. 

We will structure the architecture using:
- **Astro Content Collections** for strict, type-safe, and SEO-optimized blog posts.
- **A reusable `<SEO />` component** in the base layout to handle Open Graph, Twitter Cards, canonical URLs, and meta descriptions dynamically per page.
- **Native CSS variables** for design tokens and CSS-only scroll-driven animations for high-impact page loads.

## Risks
- **SEO vs Aesthetic Balance**: Heavy visual effects (like mesh gradients or complex layouts) must not negatively impact Largest Contentful Paint (LCP) or Cumulative Layout Shift (CLS). CSS-only effects will mitigate JavaScript execution delays.
- **Responsive Complexity**: Custom, asymmetrical, or overlapping layouts (as mandated by the distinctive aesthetic) require rigorous mobile and tablet testing to avoid broken grids.
- **Content Scaling**: The blog needs to remain highly readable. The typography and color contrast for long-form content must pivot slightly from the "bold/striking" hero sections to prioritize legibility (WCAG AAA contrast).

## Ready for Proposal
Yes. The architecture (Astro + Vanilla CSS + Content Collections) and aesthetic direction (Tech Luxury / Cyber-Organic) are clearly defined. We can proceed to the `sdd-propose` phase to formalize the PRD, business rules, and strict scope.
