# Feature Specification: whatsapp-conversion

## Status
status: approved

## Capability Description
The system MUST provide prominent WhatsApp Call-to-Action (CTA) elements to drive direct user conversions and inquiries.

## Requirements (WHAT)
1. The system MUST display a floating WhatsApp contact button accessible on all critical pages (Home, Services, Blog).
2. The system MUST support inline WhatsApp CTA buttons within high-intent sections (e.g., pricing, service details).
3. Clicking a WhatsApp CTA MUST redirect the user to the WhatsApp application or web client with a pre-filled message relevant to the context. For pricing plan CTAs, the pre-filled message MUST match the selected plan and price mapping defined in the table below:

| Plan Name | Price (MXN) | Pre-filled Message |
|---|---|---|
| Impulso Digital | $2490 MXN/mes | Hola, me interesa el plan Impulso Digital de $2490 MXN/mes |
| Crecimiento Automático | $3790 MXN/mes | Hola, me interesa el plan Crecimiento Automático de $3790 MXN/mes |
| Dominio 360 | $5790 MXN/mes | Hola, me interesa el plan Dominio 360 de $5790 MXN/mes |

4. The floating button MUST NOT obstruct essential content or navigation elements on mobile devices.

## Behavior Scenarios

### Scenario 1: Interacting with the floating CTA
- GIVEN the user is browsing any page on the site
- WHEN the user clicks the floating WhatsApp button
- THEN the system SHALL open a WhatsApp chat directed to the designated business number.

### Scenario 2: Interacting with service page WhatsApp CTA
- GIVEN the user is viewing a specific service page
- WHEN the user clicks the inline WhatsApp CTA for that service
- THEN the system SHALL open a WhatsApp chat with a pre-filled message mentioning the specific service

### Scenario 3: Interacting with plan pricing WhatsApp CTA
- GIVEN the user is viewing the landing page pricing section
- WHEN the user clicks the CTA for "Crecimiento Automático"
- THEN the system MUST open a WhatsApp chat with the pre-filled message: "Hola, me interesa el plan Crecimiento Automático de $3790 MXN/mes"

## Security & Performance
- The CTA components MUST NOT execute third-party tracking scripts that block the main thread.
- The floating button MUST be implemented using CSS fixed positioning without relying on heavy JavaScript calculations.
