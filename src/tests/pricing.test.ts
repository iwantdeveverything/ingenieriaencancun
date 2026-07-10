import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Pricing from '../components/landing/Pricing.astro';

test('Pricing renders main title, three packages and correct pricing', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Pricing);

  // Section title
  expect(result).toContain('Elige el paquete ideal');

  // Plan names
  expect(result).toContain('Impulso Digital');
  expect(result).toContain('Crecimiento Automatizado');
  expect(result).toContain('Dominio 360');

  // Pricing values in MXN
  expect(result).toContain('3,490');
  expect(result).toContain('4,790');
  expect(result).toContain('5,290');

  // Pre-filled WhatsApp link builder connection check
  expect(result).toContain('https://wa.me/529983948293');
  expect(result).toContain('text=Hola%2C%20me%20interesa%20el%20plan%20Impulso%20Digital%20de%20%243%2C490%20MXN%20(instalaci%C3%B3n%20%C3%BAnica)');
});
