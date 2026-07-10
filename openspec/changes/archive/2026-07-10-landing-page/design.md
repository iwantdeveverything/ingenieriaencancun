# Design: Premium Landing Page

## Technical Approach

Implement 10 high-conversion semantic components under `src/components/landing/` using pure Astro + scoped Vanilla CSS. Update `src/pages/index.astro` to render these components in order. Update `src/layouts/Layout.astro` to support a `fullWidth` prop, allowing the landing page edge-to-edge layout while keeping other pages unaffected. Create a central utility in `src/utils/whatsapp.ts` for URL formatting.

## Architecture Decisions

| Option | Tradeoff | Decision |
|---|---|---|
| Page Styling: Scoped CSS vs Global CSS | Scoped CSS requires repeat style declarations; global CSS risks pollution. | Scoped CSS within Astro components to maintain modularity and fit the project conventions. |
| Component Layout: Container constraints | Wrapping everything in `Layout.astro` restricts full-width header/footer sections. | Introduce `fullWidth` prop in `Layout.astro` to conditionally toggle the `.container` wrapper, letting landing components define inner containers. |
| WhatsApp URL Builder: Inline vs Central Utility | Inline is quick; utility avoids magic numbers and string duplication across components. | Centralized helper function in `src/utils/whatsapp.ts` for clean mapping of pricing plan packages. |
| FAQ Interactivity: JS Accordion vs `<details>` | JS offers complex animations but slows loading; `<details>` is accessible, lightweight, and fast. | Native HTML `<details>` and `<summary>` elements styled with scoped CSS. |

## Data Flow

No server state. Static prop configuration and utility function mappings for WhatsApp pre-filled messages:

```
  [Pricing / CTAs]
         │ (Plan ID / Custom Text)
         ▼
  [src/utils/whatsapp.ts]
         │ (Build URL)
         ▼
  [HTML <a> href] ──→ (WhatsApp External Redirect)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/utils/whatsapp.ts` | Create | WhatsApp URL builder utility and MXN package text map. |
| `src/layouts/Layout.astro` | Modify | Add optional `fullWidth` prop for edge-to-edge layouts. |
| `src/pages/index.astro` | Modify | Replace old PAS landing page layout with the new landing sections. |
| `src/components/landing/Navbar.astro` | Create | Sticky navigation component with glassmorphic blur and subtle border. |
| `src/components/landing/Hero.astro` | Create | Hero section with high-impact headline and primary CTA. |
| `src/components/landing/FeatureGrid.astro` | Create | Feature highlights (AI, automation, custom design). |
| `src/components/landing/DetailGrid.astro` | Create | In-depth technical details (CRM, SLAs, loading speeds). |
| `src/components/landing/Pricing.astro` | Create | 3-tier MXN pricing packages (Impulso, Crecimiento, Dominio). |
| `src/components/landing/HowItWorks.astro` | Create | 4-phase step-by-step roadmap. |
| `src/components/landing/Testimonials.astro` | Create | Customer proof grid with text testimonials. |
| `src/components/landing/FAQ.astro` | Create | 6 specific native collapsible FAQ items. |
| `src/components/landing/CTABanner.astro` | Create | Visual bottom CTA banner with glowing tech gradient. |
| `src/components/landing/Footer.astro` | Create | Structured footer with logo, links, and contact. |

## Interfaces / Contracts

```typescript
// src/utils/whatsapp.ts
export const WHATSAPP_PHONE = "529983948293";
export const PLAN_MESSAGES = {
  impulso: "Hola, me interesa el plan Impulso Digital de $2490 MXN/mes",
  crecimiento: "Hola, me interesa el plan Crecimiento Automático de $3790 MXN/mes",
  dominio: "Hola, me interesa el plan Dominio 360 de $5790 MXN/mes"
} as const;
export type PlanKey = keyof typeof PLAN_MESSAGES;
export function getWhatsAppUrl(message: string): string;
export function getPlanWhatsAppUrl(plan: PlanKey): string;
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | WhatsApp link generator outputs correct URLs with encoded MXN texts | Vitest suite in `src/tests/whatsapp.test.ts` |
| Integration | Toggle states of FAQs, active sticky classes on scroll | Browser/Playwright tests or manual checks |
| E2E | Layout integrity on mobile (<480px) and desktop | Visual regression check / manual inspection |

## Migration / Rollout

No database migrations. Rollout involves replacing the `/` page in index.astro and introducing the new landing components directory.

## Open Questions

- None.
