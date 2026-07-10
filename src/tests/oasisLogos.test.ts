import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import OasisLogos from '../components/landing/OasisLogos.astro';

const BASE = 'https://viajescaribemaya.com/img/logos-oasis-webp';

test('OasisLogos renders partner section with heading and logos', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(OasisLogos);

  // Assert heading is visible
  expect(result).toContain('Colaboramos con las mejores marcas');

  // Assert main Oasis brand logo is rendered
  expect(result).toContain(`${BASE}/oasis.webp`);

  // Assert individual hotel logos are rendered
  expect(result).toContain(`${BASE}/Oasis-Palm-All-Inclusive.webp`);
  expect(result).toContain(`${BASE}/Grand-Oasis-Palm.webp`);
  expect(result).toContain(`${BASE}/Grand-Oasis-Cancun.webp`);
  expect(result).toContain(`${BASE}/The-Pyramid-Cancun.webp`);
  expect(result).toContain(`${BASE}/The-Sens-Cancun-CHIL.webp`);
  expect(result).toContain(`${BASE}/The-Sens-Tulum-Riviera.webp`);
  expect(result).toContain(`${BASE}/The-Sian-Ka-an-At-The-Pyramid.webp`);
  expect(result).toContain(`${BASE}/The-Sian-Ka-an-At-The-Sens.webp`);
  expect(result).toContain(`${BASE}/Oh-Cancun.webp`);

  // Assert structure element exists
  expect(result).toContain('logos-oasis-home');
});
