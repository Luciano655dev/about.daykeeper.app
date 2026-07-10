import styled from "styled-components"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import { Eyebrow, Heading, Lede } from "../../ui/Text"
import Reveal from "../../ui/Reveal"

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`

const Item = styled.li`
  display: flex;
  gap: var(--space-4);

  strong {
    display: block;
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--dk-ink);
    margin-bottom: var(--space-1);
  }

  p {
    font-size: var(--text-sm);
    line-height: 1.65;
  }
`

const Check = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: var(--dk-paper);
  color: var(--dk-sky-deep);
  border: 1px solid rgba(116, 185, 255, 0.4);
  flex-shrink: 0;
  margin-top: 2px;
`

const check = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const items = [
  {
    title: "Two-factor authentication",
    body: "Protect your account with codes by email or an authenticator app — your choice.",
  },
  {
    title: "Sign in with Google",
    body: "One tap to get in, with nothing extra to remember.",
  },
  {
    title: "Device management",
    body: "See every device signed in to your account, and sign out the ones you don't recognize.",
  },
  {
    title: "A cared-for space",
    body: "Uploaded media is automatically screened, so the space stays safe for everyone.",
  },
]

function Security() {
  return (
    <Section $tint>
      <Container>
        <Layout>
          <Reveal>
            <div>
              <Eyebrow>Private by respect</Eyebrow>
              <Heading>Your journal is yours. We treat it that way.</Heading>
              <Lede>
                A diary holds things you wouldn&rsquo;t say out loud. Daykeeper
                is built with the security features of a much bigger app —
                because your days deserve them.
              </Lede>
            </div>
          </Reveal>

          <List>
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Item>
                  <Check>{check}</Check>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                </Item>
              </Reveal>
            ))}
          </List>
        </Layout>
      </Container>
    </Section>
  )
}

export default Security
