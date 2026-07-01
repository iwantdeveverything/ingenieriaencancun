# Design: home-page-structure

## Technical Approach

We will refactor `src/pages/index.astro` from a monolithic file into a modular, component-driven PAS (Problem, Agitation, Solution) structure using Astro components. We will inject JSON-LD schema (Organization and LocalBusiness) directly into `src/components/SEO.astro` to improve local search and entity recognition. Additionally, we will implement global event delegation in `src/layouts/Layout.astro` to capture GA4 events like CTA clicks. The frontend design will focus on rich aesthetics, employing bold typography and micro-animations to drive WhatsApp conversions.

## Architecture Decisions

### Decision: Component-Driven PAS Structure

**Choice**: Split the homepage into `Hero.astro`, `ProblemAgitation.astro`, `Solution.astro`, and `CTA.astro` under `src/components/home/`.
**Alternatives considered**: Keeping a single monolithic `index.astro` and just updating the HTML.
**Rationale**: Component modularity enables independent styling, testing, and potential reuse (e.g., CTA on other pages). It inherently enforces the PAS copy structure.

### Decision: Global Event Delegation for GA4

**Choice**: Add a single `click` event listener on `document` in `Layout.astro` that looks for `[data-ga-event]`.
**Alternatives considered**: Adding individual `addEventListener` to each button, or using inline `onclick`.
**Rationale**: Global delegation is more performant, scalable, and avoids the need for client-side scripts inside every component.

### Decision: Centralized JSON-LD in SEO.astro

**Choice**: Inject a single `<script type="application/ld+json">` tag within `SEO.astro` that includes both `Organization` and `LocalBusiness` schemas.
**Alternatives considered**: Creating a separate `Schema.astro` component or injecting via a CMS.
**Rationale**: Since `SEO.astro` already manages head metadata, collocating JSON-LD there keeps all search engine signals unified.

## Data Flow

    [User Click CTA] ──→ [Global Listener in Layout] ──→ [GA4 dataLayer]
            │
            └──────────→ [WhatsApp Redirect]

    [Search Engine Crawler] ──→ [SEO.astro] ──→ [JSON-LD Entity Graph]

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/pages/index.astro` | Modify | Remove monolithic content, import and compose PAS components. |
| `src/layouts/Layout.astro` | Modify | Add GA4 script and global `data-ga-event` listener. |
| `src/components/SEO.astro` | Modify | Add JSON-LD logic for `Organization` and `LocalBusiness`. |
| `src/components/home/Hero.astro` | Create | PAS: Hero component with bold headline and value prop. |
| `src/components/home/ProblemAgitation.astro` | Create | PAS: Address local market pain points. |
| `src/components/home/Solution.astro` | Create | PAS: Present technical consulting solutions. |
| `src/components/home/CTA.astro` | Create | PAS: Primary WhatsApp conversion action. |

## Interfaces / Contracts

**GA4 Event Contract**
Elements tracking clicks must use `data-ga-event` attribute:
```html
<a href="https://wa.me/..." data-ga-event="cta_click" class="btn-primary">
  Hablemos por WhatsApp
</a>
```

**JSON-LD Schema Properties**
```typescript
interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  // New optional props could be added, but static schema can be used initially.
}
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit/Render | SEO schema presence | Verify `<script type="application/ld+json">` renders with correct NAP in `SEO.astro`. |
| Integration | Component composition | Ensure `index.astro` renders all 4 PAS components sequentially. |
| E2E | GA4 event firing | Simulate click on `[data-ga-event="cta_click"]` and assert `dataLayer.push` is called. |

## Migration / Rollout

No data migration required. The updated Astro files will replace the existing homepage structure in a single deployment.

## Open Questions

- [ ] What is the exact GA4 Measurement ID (`G-XXXXXXXXXX`) to be used in `Layout.astro`?
- [ ] What is the exact WhatsApp number and pre-filled message for the CTA?
