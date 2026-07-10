# Proposal: Add Oasis Logos to Homepage

## Intent

Showcase social proof and partnerships with prestigious local brands (like Oasis hotels) on the homepage. This increases user trust and improves conversion rate by establishing immediate credibility.

## Scope

### In Scope
- Create a new Astro component `OasisLogos.astro` inside `src/components/landing/`.
- Display Oasis brand hotel logos with a heading "Colaboramos con las mejores marcas".
- Style logos with a low-opacity grayscale default state, transitioning to full color/opacity on hover.
- Implement an infinite CSS-only marquee animation (horizontal scroll loop) for desktop viewport sizes.
- Implement a static responsive grid for mobile viewports (under 768px).
- Import and insert `<OasisLogos />` in `src/pages/index.astro` directly between `<Hero />` and `<FeatureGrid />`.
- Update `src/tests/index.test.ts` to assert that the OasisLogos section is correctly rendered.

### Out of Scope
- Adding non-Oasis hotel logos or external partners.
- Redirect links or interactive click events on the logos.
- Dynamic logo loading from an external API or database.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- landing-page: Add OasisLogos section between Hero and FeatureGrid, altering the page section sequence.

## Approach

1. **Component Design**: Build `<OasisLogos />` using semantic HTML. Render the heading and a container wrapper for both marquee and grid.
2. **Styling and Animations**:
   - Apply CSS keyframe animations for the sliding marquee container on desktop.
   - Use CSS media queries to hide the marquee and show a flex/grid layout on viewports smaller than 768px.
   - Apply CSS transition for standard grayscale filtering (`filter: grayscale(100%) opacity(0.5)`) to full color on hover.
3. **Integration**: Place the component below `<Hero />` inside `src/pages/index.astro`.
4. **Validation**: Update test suites to check if the section is present.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/index.astro` | Modified | Import and place <OasisLogos /> component below <Hero />. |
| `src/components/landing/OasisLogos.astro` | New | Create component for logos rendering and styling. |
| `src/tests/index.test.ts` | Modified | Update tests to assert OasisLogos presence. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Layout shift/jank during CSS marquee animation | Low | Keep markup lightweight, use hardware-accelerated CSS transforms (`translate3d`), and specify image dimensions. |
| Contrast/visibility issues in dark mode | Low | Select or adjust logo colors to ensure they are legible on the page background. |

## Rollback Plan

Revert the git changes on `src/pages/index.astro` and `src/tests/index.test.ts`, and delete `src/components/landing/OasisLogos.astro`.

## Dependencies

- None

## Success Criteria

- [ ] OasisLogos component displays the heading "Colaboramos con las mejores marcas".
- [ ] On desktop, logos display in a continuous horizontal marquee animation.
- [ ] On mobile, logos are static and do not cause horizontal overflow.
- [ ] Logos transition smoothly from grayscale/opacity to full color on hover.
- [ ] Testing suite passes assertion of OasisLogos presence.
