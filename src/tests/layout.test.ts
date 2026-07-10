import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Layout from '../layouts/Layout.astro';

test('Layout renders main container by default', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Layout);
  
  expect(result).toContain('class="container"');
});

test('Layout bypasses container when fullWidth is true', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Layout, {
    props: {
      fullWidth: true
    }
  });
  
  expect(result).not.toContain('class="container"');
});
