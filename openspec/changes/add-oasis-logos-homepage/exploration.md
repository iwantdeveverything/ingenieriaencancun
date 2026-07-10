## Exploration: Incorporar el componente de logos Oasis en la página principal

### Current State
La página principal `index.astro` contiene secciones como Hero, FeatureGrid, DetailGrid, Pricing, HowItWorks, Testimonials, FAQ, y CTABanner. Los estilos generales de la página están configurados usando variables de CSS en `global.css` (Tech Luxury Palette, fuente 'Syne' y 'Outfit'). Actualmente no existe ningún componente de logotipos ni carrusel de marcas en la página, ni bibliotecas de slider (como Slick o Swiper) integradas en el proyecto. Las dependencias en `package.json` muestran que el sitio corre en Astro 7.0.4 y no cuenta con librerías externas de UI o sliders instaladas.

### Affected Areas
- `src/pages/index.astro` — Se debe importar e incorporar el nuevo componente de logos (`OasisLogos.astro`) justo debajo de la sección `Hero` para construir credibilidad desde el inicio.
- `src/components/landing/OasisLogos.astro` — Archivo nuevo donde se implementará la estructura y diseño del componente de logotipos, integrando el logotipo principal de Oasis y el carrusel infinito de las marcas colaboradoras.
- `src/tests/index.test.ts` — Se debe actualizar la prueba de integración de la página principal para verificar la presencia del componente de logos en el orden correcto.

### Approaches
1. **Marquee CSS Puro (Animación Infinita con Flexbox)** — Crear un componente `OasisLogos.astro` que use animaciones CSS nativas (`@keyframes marquee`) para lograr un carrusel de logotipos de desplazamiento infinito y fluido.
   - Pros: Cero JavaScript, excelente rendimiento (acelerado por GPU), sin impacto en el CLS, totalmente responsivo y fácil de integrar en el sistema de diseño actual.
   - Cons: Requiere duplicar la lista de logos en el marcado HTML para lograr un bucle infinito continuo.
   - Effort: Low

2. **Slider Interactivo con Vanilla JS** — Escribir un pequeño script interactivo dentro de la etiqueta `<script>` del componente Astro para manejar el arrastre y scroll del slider.
   - Pros: Permite interacción táctil o con mouse para arrastrar.
   - Cons: Mayor complejidad de código, posibles problemas de accesibilidad si no está bien configurado, y más propensión a errores de inicialización en navegadores.
   - Effort: Medium

3. **Integración con Biblioteca Externa (Swiper / Slick)** — Instalar una biblioteca de sliders moderna a través de npm.
   - Pros: Funcionalidades avanzadas de navegación, paginación y animaciones listas para usar.
   - Cons: Aumenta innecesariamente el tamaño del bundle, puede causar saltos visuales (CLS) durante la carga y agrega dependencias adicionales a un sitio estático.
   - Effort: Medium

### Recommendation
Se recomienda el **Enfoque 1 (Marquee CSS Puro)**. Dado que el objetivo es puramente visual (mostrar logotipos de las marcas colaboradoras para generar confianza), un scroll infinito pasivo y suave implementado puramente en CSS ofrece el mejor rendimiento y la estética más limpia ("Tech Luxury"). Además, se propone aplicar filtros de opacidad y escala de grises (`filter: grayscale(100%) opacity(0.6)`) a los logotipos para que se mezclen armónicamente con la paleta de colores del sitio, iluminándose a todo color al pasar el cursor (hover).

### Risks
- **Rendimiento de Imágenes**: Las imágenes provienen de una URL externa (`viajescaribemaya.com`). Si el servidor externo tiene latencias altas, los logos podrían tardar en cargar. Se mitigará usando atributos de tamaño explícitos, `loading="lazy"` y `decoding="async"`.
- **Compatibilidad con Reduced Motion**: Las animaciones de movimiento continuo pueden molestar a personas con sensibilidad al movimiento. Se debe respetar la preferencia `@media (prefers-reduced-motion: reduce)` desactivando la animación en esos casi.

### Ready for Proposal
Yes — Estamos listos para proceder a la propuesta (`sdd-propose`) para detallar la especificación técnica del componente `OasisLogos.astro`, su diseño y la actualización de las pruebas.
