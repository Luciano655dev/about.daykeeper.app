import styled from "styled-components"
import { Link } from "react-router-dom"
import Container from "../components/ui/Container"
import Section from "../components/ui/Section"
import { Eyebrow, Heading, Lede } from "../components/ui/Text"
import { GhostButton } from "../components/ui/Button"
import Reveal from "../components/ui/Reveal"

const PageHero = styled.div`
  padding-top: calc(4.25rem + clamp(3rem, 8vw, 6rem));
  padding-bottom: clamp(3rem, 7vw, 5rem);
  background: linear-gradient(180deg, rgba(234, 242, 255, 0.7), var(--dk-paper));
  text-align: center;

  h1 {
    font-size: var(--text-4xl);
    max-width: 18ch;
    margin-inline: auto;
  }
`

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const RepoCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: var(--dk-paper);
  border: var(--border-soft);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  color: var(--dk-slate);
  transition: box-shadow 0.3s var(--ease-out), transform 0.3s var(--ease-out);

  &:hover {
    box-shadow: var(--shadow-soft);
    transform: translateY(-2px);
  }

  h3 {
    font-size: var(--text-lg);
  }

  p {
    font-size: var(--text-sm);
    line-height: 1.65;
    flex: 1;
  }
`

const LicenseTag = styled.span`
  align-self: flex-start;
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--dk-sky-deep);
  background: var(--dk-mist);
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-full);
`

const SplitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: var(--text-2xl);
    margin-bottom: var(--space-4);
  }

  p {
    font-size: var(--text-base);
    line-height: 1.7;
  }

  p + p {
    margin-top: var(--space-4);
  }

  a {
    font-weight: 600;
  }
`

const CenterIntro = styled.div`
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
`

const LicenseNote = styled.p`
  text-align: center;
  font-size: var(--text-sm);
  margin-top: var(--space-12);

  a {
    font-weight: 600;
  }
`

const repos = [
  {
    name: "Daykeeper API",
    license: "MIT",
    desc: "The backend that powers everything — accounts, day pages, the social graph, and security.",
    href: "https://github.com/luciano655dev/daykeeper-api",
  },
  {
    name: "Daykeeper Docs",
    license: "Docs",
    desc: "API reference and guides for building on top of Daykeeper.",
    href: "https://github.com/luciano655dev/daykeeper-docs",
  },
  {
    name: "About Website",
    license: "CC BY-NC 4.0",
    desc: "This very site. Found a typo or a broken layout? Open an issue.",
    href: "https://github.com/luciano655dev/daykeeper-about",
  },
]

export default function OpenSource() {
  return (
    <>
      <PageHero>
        <Container>
          <Reveal>
            <Eyebrow>Open Source</Eyebrow>
            <h1>Built in the open.</h1>
            <Lede data-align="center">
              Daykeeper isn&rsquo;t a black box. The code is public, progress
              is visible, and anyone can help make it better.
            </Lede>
          </Reveal>
        </Container>
      </PageHero>

      <Section $compact>
        <Container>
          <CenterIntro>
            <Reveal>
              <Heading data-align="center">The repositories</Heading>
            </Reveal>
          </CenterIntro>
          <RepoGrid>
            {repos.map((repo, i) => (
              <Reveal key={repo.name} delay={i * 80}>
                <RepoCard href={repo.href} target="_blank" rel="noreferrer">
                  <LicenseTag>{repo.license}</LicenseTag>
                  <h3>{repo.name}</h3>
                  <p>{repo.desc}</p>
                </RepoCard>
              </Reveal>
            ))}
          </RepoGrid>
          <LicenseNote>
            Full licensing details live on the{" "}
            <Link to="/license">Code License</Link> page.
          </LicenseNote>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <SplitGrid>
            <Reveal>
              <div>
                <h2>Contributing</h2>
                <p>
                  Contributions are welcome across the board — code, docs,
                  design, QA, or just a well-written bug report. Browse the
                  open issues on GitHub, or open a new one if you&rsquo;ve
                  spotted something.
                </p>
                <p>
                  Not sure where to start?{" "}
                  <a
                    href="https://github.com/luciano655dev/daykeeper-api/issues"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The issue tracker
                  </a>{" "}
                  is the front door.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2>Community &amp; collaborations</h2>
                <p>
                  Follow along on{" "}
                  <a
                    href="https://www.instagram.com/daykeeperapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>{" "}
                  for updates, or check the{" "}
                  <Link to="/status">live status page</Link> to see the
                  platform grow in real time.
                </p>
                <p>
                  Creators, educators, and communities interested in working
                  with Daykeeper can reach us at{" "}
                  <a href="mailto:contact@daykeeper.app">
                    contact@daykeeper.app
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </SplitGrid>
        </Container>
      </Section>

      <Section $compact>
        <Container style={{ textAlign: "center" }}>
          <Reveal>
            <GhostButton
              href="https://github.com/luciano655dev"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub →
            </GhostButton>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
