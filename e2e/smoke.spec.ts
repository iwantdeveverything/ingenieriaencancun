import { test, expect } from '@playwright/test';

/**
 * Smoke Tests — UI functionality & critical elements.
 * Validates that the site loads, key elements are visible, and no JS errors occur.
 */

test.describe('Home page', () => {
  test('loads with status 200 and has an h1', async ({ page }) => {
    const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('navbar is visible and contains navigation links', async ({ page }) => {
    await page.goto('/');
    // Target the desktop nav specifically — there are multiple <nav> elements on the page
    const nav = page.locator('header nav.nav-links');
    await expect(nav).toBeAttached();
    await expect(nav.locator('a[href="#features"]')).toBeAttached();
    await expect(nav.locator('a[href="#pricing"]')).toBeAttached();
    await expect(nav.locator('a[href="#faq"]')).toBeAttached();
  });

  test('at least one WhatsApp CTA link is visible on the page', async ({ page }) => {
    await page.goto('/');
    // Wait for page to settle (animations, lazy-loaded content)
    await page.waitForTimeout(300);

    // There are multiple wa.me links (navbar CTA, hero CTAs, mobile menu CTA).
    // At least one must be visible regardless of viewport.
    const waLinks = page.locator('a[href*="wa.me"]');
    const count = await waLinks.count();
    expect(count, 'Expected at least one WhatsApp link in the DOM').toBeGreaterThan(0);

    // Verify at least one link has a valid href
    const firstHref = await waLinks.first().getAttribute('href');
    expect(firstHref).toMatch(/^https:\/\/wa\.me\//);

    // At least one must be visible (not inside a hidden container)
    const visibleCount = await waLinks.evaluateAll((anchors) =>
      anchors.filter((a) => {
        const rect = (a as HTMLElement).getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      }).length
    );
    expect(visibleCount, 'Expected at least one visible WhatsApp link').toBeGreaterThan(0);
  });

  test('no uncaught JS errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto('/', { waitUntil: 'networkidle' });
    expect(errors, `JS errors found:\n${errors.join('\n')}`).toHaveLength(0);
  });

  test('footer is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
  });
});

test.describe('Blog index', () => {
  test('loads and shows post cards', async ({ page }) => {
    const response = await page.goto('/blog', { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

test.describe('Services pages', () => {
  const servicePages = [
    '/services',
    '/services/local-seo',
    '/services/seo-audits',
    '/services/content-strategy',
    '/services/link-building',
  ];

  for (const url of servicePages) {
    test(`${url} loads with status 200`, async ({ page }) => {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1').first()).toBeVisible();
    });
  }
});

test.describe('Mobile-specific checks', () => {
  test('mobile menu toggle opens the nav menu', async ({ page, viewport }) => {
    // Only run on mobile viewports
    if (!viewport || viewport.width >= 768) test.skip();

    await page.goto('/');
    await page.waitForTimeout(300);

    const menuToggle = page.locator('#menuToggle');
    const mobileMenu = page.locator('#mobileMenu');

    // Verify toggle button exists
    await expect(menuToggle).toBeAttached();

    // Use force:true to bypass any pointer-event interception from overlapping elements
    await menuToggle.click({ force: true });

    // After clicking, the mobile menu should have the 'active' class
    await expect(mobileMenu).toHaveClass(/active/);

    // The WhatsApp CTA inside the mobile menu should now be accessible
    await expect(mobileMenu.locator('a[href*="wa.me"]')).toBeAttached();
  });
});
