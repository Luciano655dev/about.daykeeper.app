import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {
      --dk-sky: #74b9ff;
      --dk-ink: #0f172a;
      --dk-slate: #334155;
      --dk-mist: #eaf2ff;
      --dk-paper: #ffffff;
      --dk-error: #b91c1c;
      --dk-success: #15803d;
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
      font-family: "Rota_Medium";
      src: url("/fonts/Rota-Medium.otf");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "Rota_ExtraBold";
      src: url("/fonts/Rota-ExtraBold.otf");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "Rota_Bold";
      src: url("/fonts/Rota-Bold.otf");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "Rota_SemiBold";
      src: url("/fonts/Rota-SemiBold.otf");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "Rota_Italic";
      src: url("/fonts/Rota-Italic.otf");
      font-weight: normal;
      font-style: normal;
    }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--dk-paper);
    user-select: none;
    font-family: "Rota_Medium";

    p, h1, h2, h3, span, label {
      color: var(--dk-slate);
    }
    h1 {
      font-family: "Rota_ExtraBold";
      color: var(--dk-ink);
    }
    label {
      font-family: "Rota_Bold";
    }
    button {
      font-family: "Rota_Bold";
      color: var(--dk-slate);
    }
    a {
      color: var(--dk-sky);
    }
    button:hover{
    }
  }
`

export default GlobalStyles
