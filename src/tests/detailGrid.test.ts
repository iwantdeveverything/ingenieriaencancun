import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import DetailGrid from '../components/landing/DetailGrid.astro';

test('DetailGrid renders main section title and detail features', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(DetailGrid);

  // Section title
  expect(result).toContain('No solo diseñamos');
  expect(result).toContain('automatizamos y escalamos');

  // Specific detail features
  expect(result).toContain('Integración con CRM');
  expect(result).toContain('Soporte dedicado');
  expect(result).toContain('Automatización de leads');
  expect(result).toContain('Diseño responsivo');
});
