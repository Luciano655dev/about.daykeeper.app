import styled from "styled-components"

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 7rem 1.25rem 4rem;
  background: var(--dk-paper);
`

export const Wrapper = styled.div`
  width: min(960px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    margin: 0;
    font-size: clamp(2.4rem, 6vw, 4rem);
    line-height: 1;
    color: var(--dk-ink);
  }

  p {
    margin: 0;
    color: var(--dk-slate);
    font-size: 1.05rem;
    line-height: 1.65;
    max-width: 44rem;
  }
`

export const Meta = styled.div`
  color: var(--dk-slate);
  font-size: 0.95rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(116, 185, 255, 0.18);

  h2 {
    margin: 0;
    font-size: 1.45rem;
    color: var(--dk-ink);
  }

  p {
    margin: 0;
    color: var(--dk-slate);
    line-height: 1.75;
  }

  ul {
    margin: 0;
    padding-left: 1.1rem;
    color: var(--dk-slate);
  }

  li {
    margin-bottom: 0.55rem;
    line-height: 1.7;
  }

  a {
    color: var(--dk-sky);
  }
`
