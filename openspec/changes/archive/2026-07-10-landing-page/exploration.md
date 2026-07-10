# Exploration: Landing Page Implementation

## Current State
The project is built with Astro. The current homepage (`src/pages/index.astro`) is a very basic landing page displaying standard sections (`Hero`, `ProblemAgitation`, `Solution`, `CTA`) with simple/generic color styling (e.g. slate-blue backgrounds, off-white container boxes) that do not fully utilize the tech-luxury design tokens defined in `src/styles/global.css` (such as the deep black/purple gradients, neon accents, and Outfit/Syne typography). There is no navigation navbar or structured sub-components layout for landing-specific features, how-it-works, FAQs, testimonials, or pricing grids.

## Affected Areas
- `src/pages/index.astro` — Will be updated (or bypassed in favor of a new route) to serve the comprehensive, new tech-luxury landing page.
- `src/components/landing/Navbar.astro` — (New component) A sticky, glassmorphic desktop and mobile header with anchor-link navigation.
- `src/components/landing/Hero.astro` — (New component) Interactive hero section featuring a custom WhatsApp mockup animation and tech-luxury Call-to-Actions (CTAs).
- `src/components/landing/FeatureGrid.astro` — (New component) Grid highlighting chatbot integration, CRM, and landing pages with custom grid-layout cards.
- `src/components/landing/DetailGrid.astro` — (New component) Multi-column block highlighting CRM integrations, support SLAs, and loading speeds.
- `src/components/landing/Pricing.astro` — (New component) Starter, Pro (popular), and Business tier pricing tables.
- `src/components/landing/HowItWorks.astro` — (New component) Step-by-step 4-phase implementation section.
- `src/components/landing/Testimonials.astro` — (New component) Customer quotes with profile avatars and dynamic layouts.
- `src/components/landing/FAQ.astro` — (New component) Collapsible accordion lists powered by native `<details>`/`<summary>` elements for semantic layout and SEO benefits.
- `src/components/landing/CTABanner.astro` — (New component) High-impact bottom CTA banner with a glowing tech gradient.
- `src/components/landing/Footer.astro` — (New component) Comprehensive footer including site links, legal resources, and social links.

## Approaches

1. **Option A: Full Replacement of Homepage (`/`) with Component-Scoped Styling**
   - **Description**: Replace the contents of `src/pages/index.astro` with the new landing components. Implement all styling scoped within Astro's `<style>` tag in each component, utilizing the variables from `src/styles/global.css`.
   - **Pros**:
     - Keeps the main site clean and direct; no obsolete home page remaining.
     - Astro's scoped styles ensure zero pollution across sections and fast component-specific builds.
     - Fits perfectly with Astro's performance benefits and simplifies future maintenance.
   - **Cons**:
     - Overwrites the existing basic landing structure (though it is low-value anyway).
   - **Effort**: Medium

2. **Option B: Isolated Route (`/landing`) with Shared CSS File**
   - **Description**: Keep the existing homepage intact for safety, create a new route `src/pages/landing.astro`, and bundle all landing page styles into a monolithic `src/styles/landing.css` file.
   - **Pros**:
     - Zero risk of affecting the current homepage during initial development.
     - Single CSS file could be loaded separately for caching.
   - **Cons**:
     - Violates Astro's component-driven encapsulation best practices by utilizing a monolithic CSS file.
     - Keeps a suboptimal, basic page on the primary `/` route, which defeats the business goal of upgrading the main user experience.
   - **Effort**: Medium

## Recommendation
**Option A (Full Replacement on `/` with Component-Scoped Styling)** is recommended.
The current home page is a placeholder that does not reflect the premium brand identity. Replacing it directly delivers immediate SEO and conversion improvements. Scoping CSS inside each Astro component ensures visual modularity, clean DOM encapsulation, and optimal CSS delivery. 

We will create a dedicated subdirectory `src/components/landing/` to host all new section components to keep the directory structure organized.

## Risks
- **Asset Size & LCP**: The custom WhatsApp mockup in the Hero and the tech-luxury glowing details must be styled with lightweight CSS/SVG animations to avoid degrading Largest Contentful Paint (LCP).
- **Responsive Layout**: Sections such as Feature/Detail grids and Pricing tables contain high-density information that requires careful media query tuning to prevent overflow on mobile displays (<= 480px).
- **Interactivity**: FAQ collapsible accordions will be built using native semantic `<details>` to ensure perfect accessibility and zero dependence on heavy JavaScript execution.

## Ready for Proposal
Yes. The scope of files to create and modify is clear, and the visual structure is mapped. We can proceed to proposal definition.
