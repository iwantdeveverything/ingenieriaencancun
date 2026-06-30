# Implementation Tasks: SEO Services Site

## Review Workload Forecast
- **400-line budget risk:** High
- **Chained PRs recommended:** Yes
- **Decision needed before apply:** Yes

## Execution Phases

### Phase 1: Foundation
- [x] 1.1. Create global CSS architecture in `src/styles/global.css` with Tech Luxury aesthetic CSS variables (colors, typography, spacing).
- [x] 1.2. Implement the base layout component `src/layouts/Layout.astro` integrating the global CSS.
- [x] 1.3. Build a reusable `<SEO />` Astro component in `src/components/SEO.astro` for dynamic meta tags management.

### Phase 2: Content Architecture
2.1. Define Astro Content Collections configuration in `src/content/config.ts`.
2.2. Implement the Zod schema for the SEO Blog collection (title, description, date, author, image).
2.3. Create sample blog markdown files in `src/content/blog/` to validate the defined schema.

### Phase 3: Core Implementation
3.1. Build the 4 Service pages (e.g., SEO Audits, Link Building, Content Strategy, Local SEO) under `src/pages/services/` using the base layout and Tech Luxury aesthetic.
3.2. Implement the Blog list page at `src/pages/blog/index.astro` to display the content collection.
3.3. Create dynamic Blog post routing and rendering at `src/pages/blog/[slug].astro`.
3.4. Build a reusable WhatsApp CTA component `src/components/WhatsAppCTA.astro` and integrate it into the Service and Blog pages.

### Phase 4: Testing
4.1. Set up Vitest and related dependencies for the Astro testing environment.
4.2. Write Vitest tests for the `<SEO />` component to verify accurate meta tag generation.
4.3. Add tests to validate Astro dynamic routing logic for the blog collection and ensure routes render without errors.
