import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import FeatureGrid from '../components/landing/FeatureGrid.astro';

test('FeatureGrid renders main title and three pillars', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(FeatureGrid);

  // Section title
  expect(result).toContain('Todo lo que tu negocio necesita');

  // Three pillars
  expect(result).toContain('Chatbot Automatizado');
  expect(result).toContain('CRM y Embudos');
  expect(result).toContain('Landing Pages');
});
