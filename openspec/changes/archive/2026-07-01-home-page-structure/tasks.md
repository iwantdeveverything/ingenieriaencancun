# Tasks: home-page-structure

## Review Workload Forecast

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

| Field | Value |
|-------|-------|
| Estimated changed lines | 400-600 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (Foundation) → PR 2 (Components) → PR 3 (Integration) |
| Delivery strategy | ask-on-risk |
| Chain strategy | stacked-to-main |

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation (GA4 & SEO) | PR 1 | Base `main`; update Layout.astro and SEO.astro |
| 2 | PAS Components | PR 2 | Base `main`; add Hero, ProblemAgitation, Solution, CTA |
| 3 | Homepage Assembly | PR 3 | Base `main`; refactor index.astro |

## Phase 1: Foundation (SEO and GA4)

- [x] 1.1 Update `src/layouts/Layout.astro` to load GA4 script (ID `G-XXXXXXXXXX`) asynchronously and add a global event listener for `data-ga-event="cta_click"`.
- [x] 1.2 Update `src/components/SEO.astro` to include `<script type="application/ld+json">` with `Organization` and `LocalBusiness` schema.

## Phase 2: Core Implementation (PAS Components)

- [x] 2.1 Create `src/components/home/Hero.astro` con bold typography and a premium value proposition for consulting.
- [x] 2.2 Create `src/components/home/ProblemAgitation.astro` addressing local pain points with scroll micro-animations.
- [x] 2.3 Create `src/components/home/Solution.astro` presenting technical software consulting solutions.
- [x] 2.4 Create `src/components/home/CTA.astro` with a WhatsApp link (pre-filled message: "Hola, me interesa una consultoría de software para mi negocio.") and attribute `data-ga-event="cta_click"`.

## Phase 3: Integration (Homepage Assembly)

- [x] 3.1 Update `src/pages/index.astro` to remove current monolithic code and compose the PAS components in order (Hero, ProblemAgitation, Solution, CTA).

## Phase 4: Verification

- [x] 4.1 Verify `index.astro` renders PAS components sequentially without CLS.
- [x] 4.2 Verify `LocalBusiness` and `Organization` schema is present in `<head>`.
- [x] 4.3 Verify clicking the CTA triggers the GA4 `cta_click` event without errors.
