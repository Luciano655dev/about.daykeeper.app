import styled from "styled-components"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import { Eyebrow, Heading } from "../../ui/Text"
import Reveal from "../../ui/Reveal"

const Intro = styled.div`
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
`

const List = styled.div`
  max-width: var(--container-narrow);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`

const Item = styled.details`
  background: var(--dk-paper);
  border: var(--border-soft);
  border-radius: var(--radius-md);
  padding: 0;
  overflow: hidden;
  transition: box-shadow 0.3s var(--ease-out);

  &[open] {
    box-shadow: var(--shadow-soft);
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    cursor: pointer;
    list-style: none;
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--dk-ink);
    padding: var(--space-6);

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: "+";
      font-family: var(--font-body);
      font-size: var(--text-xl);
      font-weight: 400;
      color: var(--dk-sky-deep);
      line-height: 1;
      transition: transform 0.25s var(--ease-out);
      flex-shrink: 0;
    }
  }

  &[open] summary::after {
    transform: rotate(45deg);
  }

  p {
    font-size: var(--text-sm);
    line-height: 1.7;
    padding: 0 var(--space-6) var(--space-6);
    max-width: 62ch;
  }

  a {
    font-weight: 600;
  }
`

const faqs = [
  {
    q: "Is Daykeeper free?",
    a: "Yes. Daykeeper is free to use, with no ads.",
  },
  {
    q: "Is it available now?",
    a: (
      <>
        Yes — Daykeeper is live in beta at{" "}
        <a href="https://daykeeper.app" target="_blank" rel="noreferrer">
          daykeeper.app
        </a>
        . Beta means we ship improvements often and things keep getting better.
      </>
    ),
  },
  {
    q: "Can I keep everything private?",
    a: "Completely. Every entry has its own visibility — and if you never share anything, Daykeeper works perfectly as a personal journal.",
  },
  {
    q: "Is there a mobile app?",
    a: "It's in development. In the meantime, daykeeper.app works well on your phone's browser.",
  },
  {
    q: "Is Daykeeper open source?",
    a: (
      <>
        Yes — the API is MIT-licensed and development happens in the open on{" "}
        <a
          href="https://github.com/luciano655dev/daykeeper-api"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        . Contributions are welcome.
      </>
    ),
  },
  {
    q: "How do I get help or report a problem?",
    a: (
      <>
        Write to{" "}
        <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a> — a
        real person reads it.
      </>
    ),
  },
]

function Faq() {
  return (
    <Section>
      <Container>
        <Intro>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <Heading data-align="center">Fair things to ask</Heading>
          </Reveal>
        </Intro>

        <List>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <Item>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </Item>
            </Reveal>
          ))}
        </List>
      </Container>
    </Section>
  )
}

export default Faq
