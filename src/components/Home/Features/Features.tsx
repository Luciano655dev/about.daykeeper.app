import styled from "styled-components"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import { Eyebrow, Heading, Lede } from "../../ui/Text"
import Reveal from "../../ui/Reveal"

const Intro = styled.div`
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background: var(--dk-paper);
  border: var(--border-soft);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  transition: box-shadow 0.3s var(--ease-out), transform 0.3s var(--ease-out);

  &:hover {
    box-shadow: var(--shadow-soft);
    transform: translateY(-2px);
  }

  h3 {
    font-size: var(--text-xl);
    margin: var(--space-6) 0 var(--space-3);
  }

  p {
    font-size: var(--text-sm);
    line-height: 1.7;
  }
`

const Glyph = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-md);
  background: var(--dk-mist);
  color: var(--dk-sky-deep);
`

const features = [
  {
    title: "Your day, in blocks",
    body: "Notes, tasks, events, and up to five photos or videos — one entry per day, built from the pieces that made it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="13" y="4" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="4" y="13" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16.5 13.5v6M13.5 16.5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Nothing posts itself",
    body: "There is no auto-share and no algorithm deciding for you. A day goes out only when you press Publish.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "You choose who sees each day",
    body: "Public, Followers, or Close Friends — set per entry, not per account. Some days are for everyone; most aren't.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Social when you want it",
    body: "Follow friends, react and comment, keep each other honest. Or ignore all of it and just write — both are the point.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <Section>
      <Container>
        <Intro>
          <Reveal>
            <Eyebrow>What it is</Eyebrow>
            <Heading data-align="center">
              A journal first. A network second.
            </Heading>
            <Lede data-align="center">
              Daykeeper is built around one habit: keeping your day. Everything
              else — the feed, the friends, the sharing — is optional.
            </Lede>
          </Reveal>
        </Intro>

        <Grid>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <FeatureCard>
                <Glyph>{f.icon}</Glyph>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </FeatureCard>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default Features
