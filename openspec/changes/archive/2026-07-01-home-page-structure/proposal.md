# Proposal: home-page-structure

## Intent

The current homepage lacks a clear conversion flow, robust local SEO signals, and structured event tracking. This change implements a high-converting, component-driven PAS (Problem-Agitation-Solution) framework to position the brand as the premier custom software consulting provider in Cancún. The primary goal is to drive WhatsApp inquiries through a premium, localized, and emotionally resonant design.

## Scope

### In Scope
- Component-driven PAS framework (Hero, Problem/Agitation, Solution, CTA components).
- Global `LocalBusiness` and `Organization` JSON-LD schema injection in `SEO.astro` using provided NAP data.
- Global event delegation for GA4/gtag targeting WhatsApp CTA clicks (`data-ga-event="cta_click"`).
- Premium, bold UI/UX improvements on `index.astro` targeting the consulting service.

### Out of Scope
- Internal service pages (e.g., individual pages for web development, app development).
- Server-side tracking or complex backend analytics integrations.
- E-commerce or direct payment flows.

## Capabilities

### New Capabilities
- `pas-conversion-flow`: Defines the Problem-Agitation-Solution component structure and copy guidelines for the homepage.
- `local-seo-schema`: Defines the injection of LocalBusiness and Organization JSON-LD using accurate NAP data.
- `ga4-event-tracking`: Defines the global event delegation strategy for tracking WhatsApp CTA clicks.

### Modified Capabilities
- None

## Approach

We will adopt the **Component-Driven PAS Framework**. The monolithic `index.astro` will be refactored into semantic components (`Hero.astro`, `ProblemAgitation.astro`, `Solution.astro`, `CTA.astro`). `Layout.astro` will be updated to include GA4 initialization and global event delegation. `SEO.astro` will be enhanced to accept and inject structured JSON-LD schema. The design will focus on rich aesthetics, using bold typography, tailored colors, and micro-animations to create a premium feel that drives the WhatsApp CTA.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/index.astro` | Modified | Massive structural overhaul to use PAS components. |
| `src/layouts/Layout.astro` | Modified | Add GA4/gtag script and event delegation listener. |
| `src/components/SEO.astro` | Modified | Add JSON-LD schema injection logic. |
| `src/components/home/*` | New | New PAS components (Hero, ProblemAgitation, Solution, CTA). |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Initial load time impact from GA4/schema | Low | Load scripts asynchronously and defer non-critical JS. |
| Layout shifts (CLS) from scroll animations | Medium | Use CSS transforms and `content-visibility` properly; reserve space. |

## Rollback Plan

Revert the commit introducing the PAS components and changes to `Layout.astro` / `SEO.astro`. Restore the previous single-file `index.astro` structure from version control.

## Dependencies

- Existing Google Analytics 4 Measurement ID (if available, otherwise set up a placeholder).
- Astro framework (already in use).

## Success Criteria

- [ ] Homepage is fully refactored into PAS components.
- [ ] Valid `LocalBusiness` and `Organization` JSON-LD schema is present in the DOM.
- [ ] Clicking the primary WhatsApp CTA fires a GA4 event.
- [ ] Lighthouse Performance and SEO scores remain green (>90).
