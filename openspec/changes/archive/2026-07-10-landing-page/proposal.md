# Proposal: Premium Landing Page

## Intent
Replace the placeholder home page with a high-conversion "Tech Luxury" landing page for "Ingeniería en Cancún" to drive WhatsApp leads.

## Scope

### In Scope
- Brand logo/name "Ingeniería en Cancún" in Navbar and Footer.
- Redirection to WhatsApp with pre-filled package messages (in MXN).
- 6 specific FAQ accordions (native `<details>`/`<summary>`):
  1. **¿Qué incluye la automatización con IA?** - Respuestas inteligentes (WhatsApp, IG, FB), citas, seguimiento.
  2. **¿La página web incluye hosting y dominio?** - Diseño y desarrollo incluidos. Hosting/dominio adicionales o externos.
  3. **¿Los anuncios están incluidos?** - Gestión de campañas según paquete. Presupuesto de pauta por separado.
  4. **¿Puedo contratar solo una landing page?** - Sí, cotizaciones individuales por WhatsApp.
  5. **¿Todo se conecta a WhatsApp?** - Sí, canal principal para automatizaciones y leads.
  6. **¿Se pueden personalizar los paquetes?** - Sí, soluciones a medida del negocio.
- Premium responsive grid sections: Navbar, Hero, FeatureGrid, DetailGrid, Pricing, HowItWorks, Testimonials, FAQ, CTABanner, Footer.
- Pure Vanilla CSS utilizing existing design tokens.

### Out of Scope
- Non-MXN currencies.
- JS-heavy animations or external frameworks.

## Capabilities

### New Capabilities
- `landing-page`: Structured landing page at `/`.

### Modified Capabilities
- `pas-conversion-flow`: Replaces 4-section layout with landing sections.
- `whatsapp-conversion`: Customizes package-specific pre-filled messages.

## Approach
Implement Astro components under `src/components/landing/` styled with scoped Vanilla CSS. Apply the "Cyber-Organic" theme (Outfit/Syne fonts, glowing gradients, glassmorphism).

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/index.astro` | Modified | Updated with landing layout. |
| `src/components/landing/` | New | Folder for sub-components (FAQ, Pricing, Hero, etc.). |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Mobile overflow | Med | Use CSS Flex/Grid with fluid sizing. |

## Rollback Plan
Restore `src/pages/index.astro` and delete `src/components/landing/`.

## Dependencies
- Outfit and Syne Google Fonts.

## Success Criteria
- [ ] Brand name "Ingeniería en Cancún" visible.
- [ ] WhatsApp CTAs use MXN pricing and pre-filled text.
- [ ] 6 FAQs function with native controls.
