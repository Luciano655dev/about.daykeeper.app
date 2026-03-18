import styled from "styled-components"

export const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 3rem 1.25rem 4rem;
  margin-top: 2rem;
`

export const OtherContainer = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(116, 185, 255, 0.2);

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 0.9fr 0.9fr 0.9fr;
    align-items: start;
  }
`

export const FooterIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    font-family: "Rota_Bold";
    font-size: 1.35rem;
    color: var(--dk-ink);
    text-decoration: none;
  }

  p {
    margin: 0;
    max-width: 24rem;
    color: var(--dk-slate);
    line-height: 1.65;
  }
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  label {
    font-family: "Rota_Bold";
    color: var(--dk-ink);
    margin-bottom: 0.75rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin-bottom: 0.45rem;
  }

  a {
    color: var(--dk-slate);
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--dk-ink);
  }
`

export const Copyright = styled.p`
  width: min(1180px, 100%);
  margin: 1.5rem auto 0;
  color: var(--dk-slate);
  font-size: 0.95rem;

  a {
    color: var(--dk-slate);
  }

  a:hover {
    color: var(--dk-ink);
  }
`
