import styled from "styled-components"

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: calc(4.25rem + clamp(2.5rem, 6vw, 4.5rem)) 0 clamp(3rem, 7vw, 5rem);
  background: var(--dk-paper);
`

export const Wrapper = styled.div`
  max-width: var(--container-narrow);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding-bottom: var(--space-8);
  border-bottom: var(--border-soft);

  h1 {
    font-size: var(--text-4xl);
  }

  p {
    font-size: var(--text-base);
    line-height: 1.7;
  }
`

export const Meta = styled.div`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--dk-sky-deep);
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);

  h2 {
    font-size: var(--text-xl);
    padding-top: var(--space-4);
  }

  p {
    line-height: 1.75;
  }

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: var(--space-2);
    line-height: 1.7;

    &::marker {
      color: var(--dk-sky);
    }
  }

  a {
    font-weight: 600;
  }
`
