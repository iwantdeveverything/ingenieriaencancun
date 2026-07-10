# Technical Design: Add Oasis Logos to Homepage

This document outlines the technical design for integrating the Oasis partner logos section (`OasisLogos.astro`) on the homepage, establishing social proof and credibility for visitors.

## 1. Technical Approach

The component renders a heading and a container of partner logos (representing Oasis hotels).

- **Desktop (>= 768px) - CSS Infinite Marquee**:
  - The logos slide horizontally from right to left continuously using a pure CSS keyframe animation (`translate3d`).
  - To achieve a seamless infinite loop, the list of logo nodes is duplicated twice within the marquee wrapper.
  - When the user hovers over the marquee, the sliding animation is paused via `animation-play-state: paused`.
  - Respects accessibility settings by disabling the animation under `@media (prefers-reduced-motion: reduce)`.
- **Mobile (< 768px) - Static Grid**:
  - CSS Media Queries switch the layout to a static flex or grid representation (multi-row, no animation) to avoid horizontal scrolling/overflow and ensure clean mobile readability.
- **Grayscale and Opacity Filter**:
  - By default, logos are set to `filter: grayscale(100%)` and `opacity: 0.5`.
  - On hover, they transition smoothly to `filter: grayscale(0%)` and `opacity: 1` over `0.3s` using CSS `transition`.

## 2. Architecture Decisions

### Decision 1: Pure CSS-Only Infinite Animation
- **Context**: A logo marquee requires smooth movement and looping. Standard solutions use jQuery or slick-slider/Swiper.js.
- **Decision**: Implement a CSS `@keyframes` animation utilizing `transform: translate3d()` to translate the inner marquee container exactly `50%` of its width (since the logo array is duplicated).
- **Rationale**: Avoids loading client-side JavaScript. This preserves a zero-JS bundle size, minimizes Cumulative Layout Shift (CLS), and ensures high rendering performance by relying on the GPU for composition.

### Decision 2: Scoped Astro Styles
- **Context**: Deciding where to declare layout-specific styles for the marquee and grid structure.
- **Decision**: Declare style rules inside the `<style>` tag of the `OasisLogos.astro` component.
- **Rationale**: Astro automatically scopes component styles, preventing style collisions. It keeps styling and markup together, aligning with the Atomic Design philosophy of the project.

## 3. File Changes

| File Path | Action | Description |
| :--- | :--- | :--- |
| [`src/components/landing/OasisLogos.astro`](file:///home/hstrejoluna/Projects/ingenieriaencancun/src/components/landing/OasisLogos.astro) | **Create** | Implements the partner logo section, styling, and marquee/grid templates. |
| [`src/pages/index.astro`](file:///home/hstrejoluna/Projects/ingenieriaencancun/src/pages/index.astro) | **Modify** | Imports and places `<OasisLogos />` between `<Hero />` and `<FeatureGrid />`. |
| [`src/tests/index.test.ts`](file:///home/hstrejoluna/Projects/ingenieriaencancun/src/tests/index.test.ts) | **Modify** | Updates integration tests to assert section order and presence. |

## 4. Interfaces and Contracts

### Logo Structure
The internal logo configuration array contains static objects detailing image metadata:
```typescript
interface PartnerLogo {
  id: string;
  name: string;
  imageUrl: string;
  width: number;
  height: number;
}
```

### Component Props
The `OasisLogos` component will not receive external props for this feature slice, relying on a hardcoded list of local/partner logos. If extended in the future, it will follow this contract:
```typescript
interface Props {
  heading?: string;
  logos?: PartnerLogo[];
}
```

## 5. Testing Strategy

### Integration Tests (`index.test.ts`)
- Render the full landing page using `AstroContainer`.
- Assert the container output HTML contains the Oasis Logos section identifier (`class="oasis-logos-section"` or `class="oasis-logos"`).
- Assert the index sequence order to verify `OasisLogos` renders exactly after the `Hero` section and before the `FeatureGrid` section.

```typescript
const heroIndex = result.indexOf('class="hero"');
const oasisLogosIndex = result.indexOf('class="oasis-logos-section"');
const featureGridIndex = result.indexOf('class="feature-grid-section"');

expect(heroIndex).toBeLessThan(oasisLogosIndex);
expect(oasisLogosIndex).toBeLessThan(featureGridIndex);
```

## 6. Rollback Plan & Success Criteria

### Rollback Plan
Revert changes using git commands:
```bash
git checkout src/pages/index.astro src/tests/index.test.ts
rm src/components/landing/OasisLogos.astro
```

### Success Criteria
1. The heading `"Colaboramos con las mejores marcas"` is visible on the page.
2. The logos animate in a horizontal sliding marquee on desktop viewports.
3. Hovering over a logo applies full color/opacity and pauses the sliding marquee.
4. Mobile viewports display a clean, static grid layout with no horizontal overflow.
5. All automated unit tests in the suite pass successfully.
