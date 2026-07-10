import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Footer from '../components/landing/Footer.astro';

test('Footer renders brand info and copyright', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Footer);

  // Brand Name in Footer
  expect(result).toContain('Ingeniería');
  expect(result).toContain('enCancún');

  // Contact info
  expect(result).toContain('info@ingenieriaencancun.com');
  expect(result).toContain('529983948293');

  // Copyright Year or Text
  expect(result).toContain('Derechos Reservados');
});
