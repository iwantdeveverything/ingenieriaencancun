import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import CTABanner from '../components/landing/CTABanner.astro';

test('CTABanner renders headline and WhatsApp links', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(CTABanner);

  // Conversion copies
  expect(result).toContain('¿Listo para automatizar');
  expect(result).toContain('hacer crecer tu negocio');

  // WhatsApp connection
  expect(result).toContain('href="https://wa.me/529983948293');
  expect(result).toContain('data-ga-event="cta_click"');
});
