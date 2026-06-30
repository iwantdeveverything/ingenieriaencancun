# Proposal: seo-services-site

## Intent
Build a local SEO-optimized tech agency website to dominate the Cancun market, focusing on tourism, hotels, and SMEs.

## Scope

### In Scope
- Custom landing pages for services (ERP/CRM, Mobile, Cloud)
- SEO blog with mixed taxonomy (Business ROI & Tech authority)
- Direct WhatsApp CTA conversion flow
- "Tech Luxury" aesthetic (dark mode, neon, Clash Display/Satoshi)

### Out of Scope
- Long-form lead generation forms
- E-commerce or payment gateways
- User authentication/portals

## Capabilities

### New Capabilities
- `services-catalog`: Display and manage tech service offerings
- `seo-blog`: Content collections for ROI and technical articles
- `whatsapp-conversion`: Global WhatsApp CTA integration
- `core-aesthetic`: Premium "Tech Luxury" UI/UX system

### Modified Capabilities
- None

## Approach
Implement using Astro + Vanilla CSS. Astro Content Collections will power the SEO blog and services catalog. The aesthetic will be driven by a robust CSS token system for dark mode and neon accents. A persistent WhatsApp FAB/button will handle conversions.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/` | New | Service and blog routes |
| `src/content/` | New | Blog posts and services schemas |
| `src/components/` | New | UI components, WhatsApp CTA |
| `src/styles/` | New | Global CSS, tokens, typography |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| CSS complexity from "Tech Luxury" | Med | Strict CSS token system and scoped styles |
| Poor Core Web Vitals | Low | Astro's zero-JS by default and static generation |
| Unstructured blog content | Low | Enforce strict Zod schemas for Astro Collections |

## Rollback Plan
Since this is a greenfield project/feature set, rollback consists of reverting the initial PRs or feature branch containing the site scaffolding and components.

## Dependencies
- Astro Content Collections setup
- Fonts (Clash Display, Satoshi)

## Success Criteria
- [ ] 90+ Lighthouse scores for SEO and Performance
- [ ] Working WhatsApp CTA on all pages
- [ ] Blog content properly generating static pages
