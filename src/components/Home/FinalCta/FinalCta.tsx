import styled from "styled-components"
import Container from "../../ui/Container"
import { PrimaryButton } from "../../ui/Button"

const Wrap = styled.section`
  padding-block: clamp(4rem, 10vw, 7rem);
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  text-align: center;

  h2 {
    font-size: var(--text-3xl);
  }

  p {
    margin: var(--space-4) auto var(--space-8);
    max-width: 38ch;
    color: var(--dk-slate);
  }
`

function FinalCta() {
  return (
    <Wrap>
      <Container $width="narrow">
        <h2>Start with today.</h2>
        <p>One page a day. Yours to keep, yours to share — always yours.</p>
        <PrimaryButton
          href="https://daykeeper.app"
          target="_blank"
          rel="noreferrer"
        >
          Start your journal
        </PrimaryButton>
      </Container>
    </Wrap>
  )
}

export default FinalCta
