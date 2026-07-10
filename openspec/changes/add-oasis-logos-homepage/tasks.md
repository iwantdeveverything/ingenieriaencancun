# Tasks: Add Oasis Logos to Homepage

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~140 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Not needed |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Full implementation | PR 1 | Base branch; includes component creation, page integration, and test updates |

## Phase 1: Foundation (Component Creation)
- [x] 1.1 Create `src/components/landing/OasisLogos.astro` with the required HTML structure, partner logo metadata array, and scoped CSS styles (marquee keyframe animation, responsive mobile static grid, hover grayscale/opacity transitions).

## Phase 2: Wiring & Integration
- [x] 2.1 Import and render `<OasisLogos />` in `src/pages/index.astro` directly between `<Hero />` and `<FeatureGrid />`.

## Phase 3: Integration Testing
- [x] 3.1 Update `src/tests/index.test.ts` to assert that the `<OasisLogos />` section exists and is rendered exactly after the Hero section and before the FeatureGrid.
- [x] 3.2 Run tests using `pnpm test` to verify the page renders correctly.
