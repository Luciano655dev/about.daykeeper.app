import styled from "styled-components"
import Container from "../../ui/Container"
import { Icon, type IconName } from "../../ui/Icon"
import Reveal from "../../ui/Reveal"

const Wrap = styled.section`
  padding-block: clamp(4.5rem, 10vw, 8rem);
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1.2fr);
  align-items: end;
  gap: var(--space-8);
  margin-bottom: clamp(2.5rem, 6vw, 4.5rem);

  h2 {
    max-width: 13ch;
    font-size: var(--text-3xl);
  }

  p {
    max-width: 48ch;
    justify-self: end;
    color: var(--dk-slate);
    line-height: 1.7;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;

    p {
      justify-self: start;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: var(--border-soft);
  border-left: var(--border-soft);

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Feature = styled.article`
  height: 100%;
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-right: var(--border-soft);
  border-bottom: var(--border-soft);
  transition: background-color 0.24s var(--ease-out);

  &:hover {
    background: rgba(234, 242, 255, 0.38);
  }

  &:hover svg {
    transform: translateY(-2px);
  }

  svg {
    color: var(--dk-sky-deep);
    transition: transform 0.24s var(--ease-out);
  }

  h3 {
    margin-top: auto;
    font-size: var(--text-xl);
  }

  p {
    margin-top: var(--space-3);
    color: var(--dk-slate);
    font-size: var(--text-sm);
    line-height: 1.65;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }
`

const Index = styled.span`
  margin-left: auto;
  color: rgba(51, 65, 85, 0.55);
  font-family: var(--font-display);
  font-size: var(--text-xs);
`

const IconRow = styled.div`
  display: flex;
  align-items: center;
`

const features: Array<{
  icon: IconName
  title: string
  body: string
}> = [
  {
    icon: "calendar",
    title: "One date, one page",
    body: "Everything you save is attached to the day it happened. Browse the calendar instead of searching through separate apps.",
  },
  {
    icon: "note",
    title: "Different entries belong together",
    body: "A page can contain notes, tasks, events, photos, and videos. Use only the parts that fit the day.",
  },
  {
    icon: "lock",
    title: "Privacy is set per page",
    body: "Choose Private, Close friends, or Public before you share. Yesterday and today do not need the same audience.",
  },
  {
    icon: "history",
    title: "History stays browsable",
    body: "The calendar, activity map, and streaks make it easy to return to a date without turning your journal into a scorecard.",
  },
  {
    icon: "people",
    title: "Social when you invite it",
    body: "Follow people, react, and comment when it adds something. A private journal works just as well without any of it.",
  },
  {
    icon: "shield",
    title: "Account controls are visible",
    body: "Use two-factor authentication, review active devices, and revoke sessions you do not recognize from your settings.",
  },
]

function Features() {
  return (
    <Wrap id="features">
      <Container>
        <Intro>
          <Reveal>
            <h2>What a day page can hold.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Most days are a mix of small things. Daykeeper keeps that mix
              intact, then gives you a simple way to find it again.
            </p>
          </Reveal>
        </Intro>

        <Grid>
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 70}>
              <Feature>
                <IconRow>
                  <Icon name={feature.icon} size={25} />
                  <Index>{String(index + 1).padStart(2, "0")}</Index>
                </IconRow>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </Feature>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Wrap>
  )
}

export default Features
