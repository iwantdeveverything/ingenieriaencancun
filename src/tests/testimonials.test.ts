import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Testimonials from '../components/landing/Testimonials.astro';

test('Testimonials renders brand proof title and cards', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Testimonials);

  // Section title part
  expect(result).toContain('Porque nuestros clientes');

  // Testimonial cards / pillars
  expect(result).toContain('Soporte constante');
  expect(result).toContain('Ahorro de tiempo');
  expect(result).toContain('Incremento en ventas');
});
