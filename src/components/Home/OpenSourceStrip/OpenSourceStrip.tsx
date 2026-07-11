import styled from "styled-components"
import { Link } from "react-router-dom"
import Container from "../../ui/Container"

const Wrap = styled.section`
  padding-block: clamp(3rem, 7vw, 5rem);
  border-top: 1px solid rgba(15, 23, 42, 0.06);
`

const Row = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Copy = styled.div`
  max-width: 48ch;

  h2 {
    font-size: var(--text-2xl);
  }

  p {
    margin-top: var(--space-4);
    line-height: 1.65;
    color: var(--dk-slate);
  }
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
`

const StripLink = styled.a`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--dk-ink);
  border: var(--border-soft);
  border-radius: var(--radius-full);
  padding: 0.625rem 1.25rem;
  transition: border-color 0.2s var(--ease-out), background 0.2s var(--ease-out);

  &:hover {
    border-color: rgba(15, 23, 42, 0.2);
    background: rgba(234, 242, 255, 0.4);
  }
`

function OpenSourceStrip() {
  return (
    <Wrap>
      <Row>
        <Copy>
          <h2>Built in the open.</h2>
          <p>
            The API is MIT-licensed, development happens on GitHub, and the
            platform&rsquo;s health is public — no black boxes.
          </p>
        </Copy>
        <Links>
          <StripLink
            href="https://github.com/luciano655dev/daykeeper-api"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </StripLink>
          <StripLink as={Link} to="/open-source">
            Open Source
          </StripLink>
          <StripLink as={Link} to="/status">
            Live Status
          </StripLink>
        </Links>
      </Row>
    </Wrap>
  )
}

export default OpenSourceStrip
