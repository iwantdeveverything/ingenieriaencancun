/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  // @ts-expect-error vitest `test` field is not in Vite's UserConfig but is injected by the reference above at runtime
  test: {
    globals: true,
    // Exclude Playwright E2E specs — those run via `pnpm test:e2e`, not Vitest
    exclude: ['e2e/**', 'node_modules/**'],
  },
});

