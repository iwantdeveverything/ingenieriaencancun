import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import IndexPage from '../pages/index.astro';

test('Index page renders components in spec-compliant order', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(IndexPage);

  // Check section existence
  expect(result).toContain('hero');
  expect(result).toContain('feature-grid-section');
  expect(result).toContain('detail-grid-section');
  expect(result).toContain('pricing-section');
  expect(result).toContain('how-it-works-section');
  expect(result).toContain('testimonials-section');
  expect(result).toContain('faq-section');
  expect(result).toContain('cta-banner-section');

  // Verify order
  const heroIndex = result.indexOf('class="hero"');
  const featureGridIndex = result.indexOf('class="feature-grid-section"');
  const detailGridIndex = result.indexOf('class="detail-grid-section"');
  const pricingIndex = result.indexOf('class="pricing-section"');
  const howItWorksIndex = result.indexOf('class="how-it-works-section"');
  const testimonialsIndex = result.indexOf('class="testimonials-section"');
  const faqIndex = result.indexOf('class="faq-section"');

  expect(heroIndex).toBeLessThan(featureGridIndex);
  expect(featureGridIndex).toBeLessThan(detailGridIndex);
  expect(detailGridIndex).toBeLessThan(pricingIndex);
  expect(pricingIndex).toBeLessThan(howItWorksIndex);
  expect(howItWorksIndex).toBeLessThan(testimonialsIndex);
  expect(testimonialsIndex).toBeLessThan(faqIndex);
});
