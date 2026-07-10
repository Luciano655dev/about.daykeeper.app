import styled from "styled-components"

export const Container = styled.footer`
  background: linear-gradient(180deg, rgba(234, 242, 255, 0.35), rgba(234, 242, 255, 0.7));
  border-top: var(--border-soft);
  padding: clamp(3rem, 7vw, 5rem) 0 var(--space-8);
`

export const OtherContainer = styled.div`
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 2.5rem);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-12);

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const FooterIntro = styled.div`
  img {
    height: 1.5rem;
    display: block;
    margin-bottom: var(--space-4);
  }

  p {
    font-size: var(--text-sm);
    max-width: 32ch;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    grid-column: 1 / -1;
  }
`

export const FooterSection = styled.div`
  label {
    display: block;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: var(--text-sm);
    color: var(--dk-ink);
    margin-bottom: var(--space-4);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  a {
    font-size: var(--text-sm);
    color: var(--dk-slate);
    transition: color 0.2s var(--ease-out);

    &:hover {
      color: var(--dk-ink);
    }
  }
`

export const Copyright = styled.p`
  max-width: var(--container);
  margin: var(--space-12) auto 0;
  padding-inline: clamp(1.25rem, 4vw, 2.5rem);
  padding-top: var(--space-6);
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  font-size: var(--text-xs);
  color: var(--dk-slate);

  a {
    color: var(--dk-slate);
    font-weight: 600;

    &:hover {
      color: var(--dk-ink);
    }
  }
`
