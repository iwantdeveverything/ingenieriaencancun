import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import FAQ from '../components/landing/FAQ.astro';

test('FAQ renders title, native accordion structures and specific questions', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(FAQ);

  // Title
  expect(result).toContain('¿Tienes dudas?');
  expect(result).toContain('Aquí están las respuestas');

  // Semantic tags check
  expect(result).toContain('<details');
  expect(result).toContain('<summary');

  // Key questions
  expect(result).toContain('¿Qué incluye la automatización con IA?');
  expect(result).toContain('¿La página web incluye hosting y dominio?');
  expect(result).toContain('¿Los anuncios están incluidos?');
  expect(result).toContain('¿Todo se conecta a WhatsApp?');
});
