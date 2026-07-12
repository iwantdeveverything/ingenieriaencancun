import { defineConfig, devices } from '@playwright/test';

/**
 * Visual testing configuration.
 * Browsers: Chromium (Chrome) + WebKit (Safari)
 * Environments: desktop + mobile (iPhone 12)
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: '.playwright/report', open: 'never' }],
  ],
  outputDir: '.playwright/results',

  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    screenshot: process.env.CI ? 'on' : 'only-on-failure',
    video: 'off',
  },

  projects: [
    // --- Chrome ---
    {
      name: 'chromium-desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium-mobile',
      use: { ...devices['iPhone 12'], browserName: 'chromium' },
    },

    // --- Safari (WebKit) ---
    {
      name: 'webkit-desktop',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'webkit-mobile',
      use: { ...devices['iPhone 12'] },
    },
  ],

  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
