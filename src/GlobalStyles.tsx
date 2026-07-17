import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --dk-sky: #74b9ff;
    --dk-sky-deep: #4a9ef5;
    --dk-ink: #0f172a;
    --dk-slate: #334155;
    --dk-mist: #eaf2ff;
    --dk-paper: #ffffff;
    --dk-error: #b91c1c;
    --dk-success: #15803d;

    --font-display: "Rota", "Inter Variable", system-ui, sans-serif;
    --font-body: "Inter Variable", system-ui, -apple-system, sans-serif;

    --text-xs: 0.8125rem;
    --text-sm: 0.9375rem;
    --text-base: 1.0625rem;
    --text-lg: 1.1875rem;
    --text-xl: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
    --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
    --text-3xl: clamp(1.875rem, 1.5rem + 1.6vw, 2.625rem);
    --text-4xl: clamp(2.25rem, 1.7rem + 2.6vw, 3.5rem);
    --text-hero: clamp(2.75rem, 1.9rem + 4.2vw, 4.75rem);

    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-24: 6rem;

    --radius-sm: 10px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-full: 999px;

    --container-narrow: 44rem;
    --container: 72rem;
    --container-wide: 80rem;

    --border-soft: 1px solid rgba(15, 23, 42, 0.08);
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }

  :root[data-theme="dark"] {
    --dk-sky: #60a5fa;
    --dk-ink: #e5e7eb;
    --dk-slate: #9ca3af;
    --dk-mist: #111827;
    --dk-paper: #0b0f14;
    --dk-error: #f87171;
    --dk-success: #4ade80;
  }

  @font-face {
    font-family: "Rota";
    src: url("/fonts/Rota-Medium.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Rota";
    src: url("/fonts/Rota-SemiBold.otf") format("opentype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Rota";
    src: url("/fonts/Rota-Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Rota";
    src: url("/fonts/Rota-ExtraBold.otf") format("opentype");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--dk-paper);
    color: var(--dk-slate);
    font-family: var(--font-body);
    font-size: var(--text-base);
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 800;
    color: var(--dk-ink);
    letter-spacing: -0.02em;
    line-height: 1.12;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: var(--dk-sky-deep);
    text-decoration: none;
  }

  button {
    font-family: var(--font-body);
  }

  ::selection {
    background: var(--dk-mist);
    color: var(--dk-ink);
  }

  :focus-visible {
    outline: 2px solid var(--dk-sky);
    outline-offset: 3px;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyles
