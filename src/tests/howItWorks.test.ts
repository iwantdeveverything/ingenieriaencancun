import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import HowItWorks from '../components/landing/HowItWorks.astro';

test('HowItWorks renders title and 4 execution steps', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(HowItWorks);

  // Section title
  expect(result).toContain('De cero a resultados');
  expect(result).toContain('en 4 pasos');

  // The 4 steps
  expect(result).toContain('Registro');
  expect(result).toContain('Personalización');
  expect(result).toContain('Integración');
  expect(result).toContain('Lanzamiento');
});
