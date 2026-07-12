import { test, expect } from '@playwright/test';

/**
 * Overflow Detection — All pages, all viewports.
 *
 * Detects any element whose right edge exceeds the document body width,
 * which causes horizontal scroll / layout breakage on mobile.
 *
 * NOTE: Elements that are visually clipped by an ancestor with
 * overflow:hidden or overflow:clip are skipped — they don't cause
 * horizontal scroll and are intentional (marquee, decorative glows, etc.)
 */

// Static pages to test
const STATIC_PAGES = [
  { url: '/', label: 'Home' },
  { url: '/blog', label: 'Blog index' },
  { url: '/services', label: 'Services index' },
  { url: '/services/local-seo', label: 'Service: Local SEO' },
  { url: '/services/seo-audits', label: 'Service: SEO Audits' },
  { url: '/services/content-strategy', label: 'Service: Content Strategy' },
  { url: '/services/link-building', label: 'Service: Link Building' },
];

/**
 * Runs in-browser JS to find elements that overflow the viewport width.
 * Skips elements whose ancestors clip them (overflow: hidden / clip) —
 * those are visually contained and don't cause horizontal scroll.
 */
async function detectOverflow(page: import('@playwright/test').Page): Promise<string[]> {
  return page.evaluate(() => {
    const bodyWidth = document.body.offsetWidth;
    const overflowing: string[] = [];

    /** Returns true if any ancestor clips overflow in the X axis. */
    function isClippedByAncestor(el: Element): boolean {
      let parent = el.parentElement;
      while (parent) {
        const style = window.getComputedStyle(parent);
        if (
          style.overflowX === 'hidden' ||
          style.overflowX === 'clip' ||
          style.overflow === 'hidden' ||
          style.overflow === 'clip'
        ) {
          return true;
        }
        parent = parent.parentElement;
      }
      return false;
    }

    document.querySelectorAll('*').forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Tolerance of 1px for sub-pixel rendering / borders
      if (rect.right <= bodyWidth + 1) return;
      // Skip elements that are visually clipped by an ancestor
      if (isClippedByAncestor(el)) return;

      const tag = el.tagName.toLowerCase();
      const id = el.id ? `#${el.id}` : '';
      // SVG elements return SVGAnimatedString, not a plain string
      const rawClass = el instanceof SVGElement
        ? el.className.baseVal
        : (el as HTMLElement).className;
      const classes = rawClass ? `.${rawClass.trim().replace(/\s+/g, '.')}` : '';
      overflowing.push(`<${tag}${id}${classes}> right=${Math.round(rect.right)}px > body=${bodyWidth}px`);
    });

    return overflowing;
  });
}

for (const { url, label } of STATIC_PAGES) {
  test(`No overflow — ${label} (${url})`, async ({ page, viewport }) => {
    await page.goto(url, { waitUntil: 'networkidle' });

    // Dismiss any overlays / wait for content to settle
    await page.waitForTimeout(500);

    const offenders = await detectOverflow(page);

    expect(
      offenders,
      `Overflow detected on ${label} at ${viewport?.width}x${viewport?.height}:\n${offenders.join('\n')}`
    ).toHaveLength(0);
  });
}

// Dynamic blog posts: discover slugs from the blog index links
test('No overflow — Blog posts (dynamic slugs)', async ({ page, viewport }) => {
  await page.goto('/blog', { waitUntil: 'networkidle' });

  const slugLinks = await page.$$eval(
    'a[href^="/blog/"]',
    (anchors) => [...new Set(anchors.map((a) => (a as HTMLAnchorElement).href))]
  );

  // Test up to 3 posts to keep CI fast
  const sample = slugLinks.slice(0, 3);

  for (const href of sample) {
    await page.goto(href, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);

    const offenders = await detectOverflow(page);

    expect(
      offenders,
      `Overflow detected on blog post ${href} at ${viewport?.width}x${viewport?.height}:\n${offenders.join('\n')}`
    ).toHaveLength(0);
  }
});
