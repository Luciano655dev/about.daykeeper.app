import styled from "styled-components"
import Container from "../../ui/Container"
import Reveal from "../../ui/Reveal"
import { Icon, type IconName } from "../../ui/Icon"

const Wrap = styled.section`
  padding-block: clamp(3.5rem, 8vw, 6rem);
  border-top: 1px solid rgba(15, 23, 42, 0.06);
`

const Layout = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
`

const Lead = styled.div`
  h2 {
    font-size: var(--text-2xl);
    max-width: 18ch;
  }

  p {
    margin-top: var(--space-4);
    line-height: 1.7;
    color: var(--dk-slate);
    max-width: 40ch;
  }
`

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0 0 var(--space-4) !important;
  color: var(--dk-sky-deep) !important;
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

const List = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8) var(--space-6);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  h3 {
    font-family: var(--font-display);
    font-size: var(--text-base);
    font-weight: 700;
    color: var(--dk-ink);
    margin-bottom: var(--space-2);
  }

  p {
    margin: 0;
    font-size: var(--text-sm);
    line-height: 1.6;
    color: var(--dk-slate);
  }
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: var(--space-3);
`

const ItemIcon = styled.span`
  padding-top: 0.1rem;
  color: var(--dk-sky-deep);
`

const items: { icon: IconName; term: string; description: string }[] = [
  {
    icon: "shield",
    term: "Two-factor authentication",
    description: "Use email codes or an authenticator app.",
  },
  {
    icon: "lock",
    term: "Sign in with Google",
    description: "Use your Google account without another password.",
  },
  {
    icon: "history",
    term: "Device management",
    description: "Review active sessions and revoke any device you do not recognize.",
  },
  {
    icon: "image",
    term: "Screened media",
    description: "Photos and videos pass automated safety checks before they are shared.",
  },
]

function Security() {
  return (
    <Wrap>
      <Layout>
        <Reveal>
          <Lead>
            <Eyebrow><Icon name="lock" size={16} /> Account controls</Eyebrow>
            <h2>Private means private.</h2>
            <p>
              Visibility is set per page. Account controls include two-factor
              authentication and device sessions, while uploads pass through
              automated media checks.
            </p>
          </Lead>
        </Reveal>
        <List>
          {items.map((item, index) => (
            <Reveal key={item.term} delay={index * 70}>
              <Item>
                <ItemIcon aria-hidden="true"><Icon name={item.icon} size={17} /></ItemIcon>
                <div>
                  <h3>{item.term}</h3>
                  <p>{item.description}</p>
                </div>
              </Item>
            </Reveal>
          ))}
        </List>
      </Layout>
    </Wrap>
  )
}

export default Security
