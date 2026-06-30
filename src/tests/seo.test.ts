import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import SEO from '../components/SEO.astro';

test('SEO component renders default meta tags', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(SEO);
  
  expect(result).toMatch(/<title>Ingeniería en Cancún \| Software (?:&|&amp;) SEO Services<\/title>/);
  expect(result).toContain('name="description"');
  expect(result).toContain('Premium software development and SEO strategies');
  expect(result).toContain('property="og:title"');
});

test('SEO component renders custom props', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(SEO, {
    props: {
      title: 'Custom Title',
      description: 'Custom Description',
      canonicalUrl: 'https://example.com/',
      ogImage: 'https://example.com/image.jpg',
    },
  });
  
  expect(result).toContain('<title>Custom Title</title>');
  expect(result).toContain('content="Custom Description"');
  expect(result).toMatch(/<link\s+rel="canonical"\s+href="https:\/\/example\.com\/"\s*\/?>/);
  expect(result).toContain('content="https://example.com/image.jpg"');
});
