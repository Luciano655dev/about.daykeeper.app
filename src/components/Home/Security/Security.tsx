import styled from "styled-components"
import Container from "../../ui/Container"

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

const List = styled.dl`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8) var(--space-6);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  dt {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--dk-ink);
    margin-bottom: var(--space-2);
  }

  dd {
    margin: 0;
    font-size: var(--text-sm);
    line-height: 1.6;
    color: var(--dk-slate);
  }
`

const items = [
  ["Two-factor authentication", "Codes by email or an authenticator app — your choice."],
  ["Sign in with Google", "One tap in, nothing extra to remember."],
  ["Device management", "See what's signed in, and sign out anything you don't recognize."],
  ["Screened media", "Uploads are checked automatically, so the space stays safe."],
]

function Security() {
  return (
    <Wrap>
      <Layout>
        <Lead>
          <h2>Your journal is yours.</h2>
          <p>
            A diary holds things you wouldn&rsquo;t say out loud. Daykeeper is
            built with the security a private space deserves.
          </p>
        </Lead>
        <List>
          {items.map(([term, desc]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{desc}</dd>
            </div>
          ))}
        </List>
      </Layout>
    </Wrap>
  )
}

export default Security
