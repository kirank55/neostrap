/**
 * @fileoverview Constants and code snippets for the Getting Started documentation page.
 */

/**
 * Global CSS content for Neostrap styling.
 */
export const INDEX_CSS_CONTENT = `@import "tailwindcss";
@import "tw-animate-css";

:root {
  --color-pink: #FE5BD6;
  --color-amber: #FEC437;
  --color-baby-blue: #C9D9F0;
  --color-lavender: #9A90CB;

  --color-bg: var(--color-pink);
  --color-text: #000;

  --primary-bg: linear-gradient(90deg, #fff 0%, var(--color-pink) 100%);

  --secondary: var(--color-amber);
  --accent: var(--color-pink);
  --neutral: var(--color-baby-blue);

  /* Sugar High syntax highlighting theme */
  --sh-class: #4d9375;
  --sh-identifier: #e0def4;
  --sh-sign: #8b949e;
  --sh-string: #9ece6a;
  --sh-keyword: #bb9af7;
  --sh-comment: #6e7681;
  --sh-jsxliterals: #f9826c;
  --sh-property: #7dcfff;
  --sh-entity: #7aa2f7;
}

body {
  background-color: var(--color-bg);
  background: var(--primary-bg);
}

header {
  background-color: var(--color-amber);
}

aside {
  background: rgb(166 250 255 / 1);
}

/* Accordion animations */
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}

/* Marquee animations */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0); }
}

/* Floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(-20px) rotate(45deg); }
}

/* Cursor blink animation */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Fade in animation */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@theme {
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
  --animate-marquee: marquee 30s linear infinite;
  --animate-marquee-reverse: marquee-reverse 30s linear infinite;
  --animate-float: float 6s ease-in-out infinite;
  --animate-blink: blink 1s step-end infinite;
  --animate-fade-in: fade-in 0.6s ease-out forwards;
}`

/**
 * Font installation HTML code.
 */
export const FONT_INSTALL_CODE = `<!-- Add to your HTML <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Syne+Mono&display=swap" rel="stylesheet">`

/**
 * Font CSS configuration code.
 */
export const FONT_CSS_CODE = `/* Add to your globals.css */
body {
  font-family: "Syne", sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Syne Mono", monospace;
}

/* Or use Tailwind v4 @theme */
@theme {
  --font-sans: "Syne", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Syne Mono", monospace;
}`

/**
 * Color palette definitions.
 */
export const COLOR_PALETTE = [
  { name: "Pink", variable: "--color-pink", hex: "#FE5BD6", description: "Primary accent, backgrounds" },
  { name: "Amber", variable: "--color-amber", hex: "#FEC437", description: "Headers, highlights, CTAs" },
  { name: "Baby Blue", variable: "--color-baby-blue", hex: "#C9D9F0", description: "Cards, info sections" },
  { name: "Lavender", variable: "--color-lavender", hex: "#9A90CB", description: "Secondary accents, badges" },
] as const

/**
 * Font weight options for display.
 */
export const FONT_WEIGHTS = [
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 600, label: "Semibold" },
  { weight: 700, label: "Bold" },
  { weight: 800, label: "Extrabold" },
] as const
