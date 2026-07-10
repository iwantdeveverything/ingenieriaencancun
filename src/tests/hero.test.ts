import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Hero from '../components/landing/Hero.astro';

test('Hero renders key elements and CTAs', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Hero);

  // Main value proposition headline
  expect(result).toContain('Haz que tu negocio');
  expect(result).toContain('responda, venda y crezca');
  expect(result).toContain('en automático');

  // CTA Links to WhatsApp
  expect(result).toContain('href="https://wa.me/529983948293');
  expect(result).toContain('data-ga-event="cta_click"');

  // Mockup elements check
  expect(result).toContain('phone-mockup');
  expect(result).toContain('chat-bubble');
});
