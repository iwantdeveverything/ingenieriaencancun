# Tasks: Landing Page

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 600-800 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (Base/Layout) → PR 2 (Main) → PR 3 (Details) → PR 4 (Conversion/Assembly) |
| Delivery strategy | ask-on-risk |
| Chain strategy | stacked-to-main |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Base utilities & Layout | PR 1 | Base branch; tests included |
| 2 | Main Sections | PR 2 | Depends on PR 1; Navbar, Hero |
| 3 | Detail & Info sections | PR 3 | Depends on PR 2; Features, HowItWorks |
| 4 | Final Conversion & Assembly | PR 4 | Depends on PR 3; Pricing, FAQ, footer, index.astro |

## Phase 1: Base utilities & Layout (PR 1)

- [x] 1.1 Create `src/utils/whatsapp.ts` with phone formatting and link generation helper.
- [x] 1.2 Create `src/tests/whatsapp.test.ts` for unit testing the helper.
- [x] 1.3 Update `src/layouts/Layout.astro` structure and SEO metadata tags.

## Phase 2: Main Sections (PR 2)

- [x] 2.1 Create `src/components/landing/Navbar.astro` with responsive menu drawer.
- [x] 2.2 Create `src/components/landing/Hero.astro` with CTA buttons and value prop.

## Phase 3: Detail & Info Sections (PR 3)

- [x] 3.1 Create `src/components/landing/FeatureGrid.astro` for core offerings.
- [x] 3.2 Create `src/components/landing/DetailGrid.astro` for specific services.
- [x] 3.3 Create `src/components/landing/HowItWorks.astro` step-by-step process.
- [x] 3.4 Create `src/components/landing/Testimonials.astro` social proof cards.

## Phase 4: Final Conversion & Assembly (PR 4)

- [x] 4.1 Create `src/components/landing/Pricing.astro` tier list.
- [x] 4.2 Create `src/components/landing/FAQ.astro` accordion questions.
- [x] 4.3 Create `src/components/landing/CTABanner.astro` final conversion section.
- [x] 4.4 Create `src/components/landing/Footer.astro` dynamic links and info.
- [x] 4.5 Update `src/pages/index.astro` to assemble all the created components.
