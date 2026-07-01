# local-seo-schema Specification

## Purpose

Defines the injection of LocalBusiness and Organization JSON-LD using accurate NAP data to improve local search visibility.

## Requirements

### Requirement: JSON-LD Schema Injection

The system MUST inject valid `LocalBusiness` and `Organization` JSON-LD schema into the `SEO.astro` component.

#### Scenario: Page is rendered for search engines

- GIVEN a page containing the `SEO.astro` component
- WHEN the HTML is generated
- THEN a `<script type="application/ld+json">` tag MUST be present in the `<head>`
- AND the JSON content MUST contain valid `LocalBusiness` and `Organization` entities with accurate NAP data

#### Scenario: Schema validation

- GIVEN the page HTML
- WHEN evaluated by schema validation tools
- THEN the schema MUST pass without critical errors
