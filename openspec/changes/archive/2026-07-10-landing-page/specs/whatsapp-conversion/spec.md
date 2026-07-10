# Delta for whatsapp-conversion

## MODIFIED Requirements

### Requirement: Contextual WhatsApp Redirection

Clicking a WhatsApp CTA MUST redirect the user to the WhatsApp application or web client with a pre-filled message relevant to the context. For pricing plan CTAs, the pre-filled message MUST match the selected plan and price mapping defined in the table below.
(Previously: Clicking a WhatsApp CTA MUST redirect the user to the WhatsApp application or web client with a pre-filled message relevant to the context.)

| Plan Name | Price (MXN) | Pre-filled Message |
|---|---|---|
| Impulso Digital | $2490 MXN/mes | Hola, me interesa el plan Impulso Digital de $2490 MXN/mes |
| Crecimiento Automático | $3790 MXN/mes | Hola, me interesa el plan Crecimiento Automático de $3790 MXN/mes |
| Dominio 360 | $5790 MXN/mes | Hola, me interesa el plan Dominio 360 de $5790 MXN/mes |

#### Scenario: Interacting with service page WhatsApp CTA
- GIVEN the user is viewing a specific service page
- WHEN the user clicks the inline WhatsApp CTA for that service
- THEN the system SHALL open a WhatsApp chat with a pre-filled message mentioning the specific service

#### Scenario: Interacting with plan pricing WhatsApp CTA
- GIVEN the user is viewing the landing page pricing section
- WHEN the user clicks the CTA for "Crecimiento Automático"
- THEN the system MUST open a WhatsApp chat with the pre-filled message: "Hola, me interesa el plan Crecimiento Automático de $3790 MXN/mes"
