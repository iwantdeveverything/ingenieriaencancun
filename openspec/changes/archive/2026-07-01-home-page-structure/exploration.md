## Exploration: home-page-structure

### Current State
The homepage (`src/pages/index.astro`) is currently a single file containing a hero section and a services grid. It lacks a clear conversion flow, robust local SEO signals (NAP, schema), and structured event tracking. The `SEO.astro` component sets standard meta tags but does not inject JSON-LD schema (Organization or LocalBusiness). `Layout.astro` does not contain GA4 tracking scripts. The design is clean but needs a bolder, more memorable aesthetic to stand out in the Cancún market.

### Affected Areas
- `src/pages/index.astro` — Requires a massive structural overhaul to implement a conversion framework (PAS/AIDA).
- `src/layouts/Layout.astro` — Needs GA4/gtag initialization for analytics tracking.
- `src/components/SEO.astro` — Needs to support `Organization` and `LocalBusiness` JSON-LD schema injection.
- `src/components/home/*` (New) — Requires new semantic components to map to the PAS flow.

### Approaches
1. **Monolithic `index.astro`**
   - Keep all sections (Hero, Problem, Agitation, Solution, CTA, Services) within `index.astro`.
   - Pros: Quick to implement initially.
   - Cons: Creates a 500+ line file that is hard to maintain, poor separation of concerns, mixes structural logic with content.

2. **Component-Driven PAS Framework (Recommended)**
   - Break the page down into dedicated semantic components mapped to PAS (e.g., `Hero.astro` for Attention, `ProblemAgitation.astro` for Problem/Agitation, `Solution.astro` for Solution).
   - Inject global `LocalBusiness` and `Organization` schema via `SEO.astro`.
   - Implement event tracking in `Layout.astro` using global event delegation mapped to `data-ga-event="cta_click"`.
   - Pros: Highly scalable, clear separation of marketing intent and UI, easy to apply bold aesthetics and scroll animations per section without cluttering a single file.
   - Cons: Requires creating multiple files and managing data flow between them.

### Recommendation
Proceed with **Approach 2 (Component-Driven PAS Framework)**. It aligns perfectly with the provided skills:
- **Copywriting**: We map components directly to the PAS framework, enabling strong, targeted copy.
- **Entity & Local SEO**: We centralize `Organization` and `LocalBusiness` schema in `SEO.astro` while ensuring NAP consistency across sections.
- **Analytics Tracking**: We use a `data-ga-event` pattern for scalable CTA tracking without polluting components with inline scripts.
- **Frontend Design**: A component architecture supports bold, localized styling and motion design (e.g., staggered reveals) per section, avoiding generic aesthetics.

### Risks
- Adding GA4 and extensive schema could slightly impact initial load time if not handled efficiently.
- Complex scroll animations might cause layout shifts (CLS) if not properly contained.

### Ready for Proposal
Yes. The orchestrator can proceed to the `sdd-propose` phase with a clear structural plan based on the Component-Driven PAS Framework.
