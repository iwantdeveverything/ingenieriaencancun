import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Navbar from '../components/landing/Navbar.astro';

test('Navbar renders brand logo and navigation links', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Navbar);

  // Brand Name
  expect(result).toContain('Ingeniería');
  expect(result).toContain('enCancún');

  // Navigation anchor links
  expect(result).toContain('href="#features"');
  expect(result).toContain('href="#pricing"');
  expect(result).toContain('href="#faq"');

  // WhatsApp contact button
  expect(result).toContain('href="https://wa.me/529983948293');
  expect(result).toContain('data-ga-event="cta_click"');
});
