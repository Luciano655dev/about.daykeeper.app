import styled from "styled-components"

export const Eyebrow = styled.span`
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dk-sky-deep);
  margin-bottom: var(--space-4);
`

export const Heading = styled.h2`
  font-size: var(--text-3xl);
  max-width: 24ch;

  &[data-align="center"] {
    margin-inline: auto;
  }
`

export const Lede = styled.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  max-width: 56ch;
  margin-top: var(--space-6);

  &[data-align="center"] {
    margin-inline: auto;
  }
`

export const Prose = styled.div`
  max-width: 60ch;

  p + p {
    margin-top: var(--space-4);
  }
`
