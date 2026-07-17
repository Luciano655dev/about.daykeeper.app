import styled from "styled-components"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import { Heading } from "../../ui/Text"

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
        Yes. Open{" "}
        <a href="https://daykeeper.app" target="_blank" rel="noreferrer">
          daykeeper.app
        </a>
        {" "}in any modern browser and create an account.
      </>
    ),
  },
  {
    q: "Can I keep everything private?",
    a: "Yes. Every page has its own visibility setting. You can use Daykeeper as a private journal without following or sharing with anyone.",
  },
  {
    q: "Is there a mobile app?",
    a: "It's in development. In the meantime, daykeeper.app works well on your phone's browser.",
  },
  {
    q: "Is Daykeeper open source?",
    a: (
      <>
        Yes. The API is MIT-licensed and its development happens on{" "}
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
        <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a>. A
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
          <Heading data-align="center">Questions</Heading>
        </Intro>

        <List>
          {faqs.map((f) => (
            <Item key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  )
}

export default Faq
