# ga4-event-tracking Specification

## Purpose

Defines the global event delegation strategy for tracking WhatsApp CTA clicks using GA4/gtag.

## Requirements

### Requirement: Global Event Delegation

The system MUST use event delegation in `Layout.astro` to listen for clicks on elements with `data-ga-event="cta_click"`.

#### Scenario: User clicks a tracked CTA

- GIVEN the user is on any page using `Layout.astro`
- WHEN the user clicks an element with the attribute `data-ga-event="cta_click"`
- THEN a GA4 event MUST be fired with the appropriate event name

### Requirement: Asynchronous Loading

The system SHOULD load GA4 scripts asynchronously to prevent blocking the initial page render.

#### Scenario: Page initialization

- GIVEN the user requests the page
- WHEN the HTML is parsed
- THEN the GA4 script MUST NOT block the rendering of the primary content
