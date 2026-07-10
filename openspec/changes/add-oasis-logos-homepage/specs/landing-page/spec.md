# Delta Specification: add-oasis-logos-homepage

## Purpose
This delta specification defines the changes and new requirements for integrating a partner logo showcase (OasisLogos) into the homepage.

## MODIFIED Requirements

### Requirement: Landing Page Sections
The system MUST render the landing page at `/` containing exactly eleven sequential sections: Navbar, Hero, OasisLogos, FeatureGrid, DetailGrid, Pricing, HowItWorks, Testimonials, FAQ, CTABanner, and Footer.
*(Previously: The landing page displays ten sections Navbar, Hero, FeatureGrid, DetailGrid, Pricing, HowItWorks, Testimonials, FAQ, CTABanner, and Footer.)*

#### Scenario: Displaying all landing sections
- GIVEN the user loads the root URL (`/`)
- WHEN the page rendering completes
- THEN the system MUST display the Navbar, Hero, OasisLogos, FeatureGrid, DetailGrid, Pricing, HowItWorks, Testimonials, FAQ, CTABanner, and Footer in sequential order
- AND the brand name "Ingeniería en Cancún" MUST be visible in both Navbar and Footer

## ADDED Requirements

### Requirement: Oasis Partner Logos Display
The system MUST display a showcase of Oasis partner logos under the heading "Colaboramos con las mejores marcas". 
On desktop viewports (768px and wider), the logos MUST be rendered in a continuous, infinite sliding marquee.
On mobile viewports (less than 768px), the logos MUST be rendered in a static grid layout.
All logos MUST display with a default grayscale filter and low opacity (50%), and transition smoothly to full color (0% grayscale) and full opacity (100%) on hover.

#### Scenario: Displaying Oasis partner logos on desktop
- GIVEN the user views the landing page on a device with viewport width 768px or wider
- WHEN the page rendering completes
- THEN the OasisLogos section MUST display the heading "Colaboramos con las mejores marcas"
- AND the partner logos MUST animate in a continuous, infinite sliding horizontal marquee
- AND the animation MUST pause when the user hovers over the marquee

#### Scenario: Displaying Oasis partner logos on mobile
- GIVEN the user views the landing page on a device with viewport width less than 768px
- WHEN the page rendering completes
- THEN the OasisLogos section MUST display the heading "Colaboramos con las mejores marcas"
- AND the partner logos MUST render in a static, multi-row grid layout without sliding animation

#### Scenario: Hovering over a partner logo
- GIVEN the user is viewing the partner logos section
- WHEN the user hovers their pointer over any partner logo
- THEN the hovered logo MUST transition its grayscale filter from 100% to 0%
- AND its opacity MUST transition from 50% to 100% with a smooth transition animation
