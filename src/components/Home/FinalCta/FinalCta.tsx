import styled from "styled-components"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import { PrimaryButton } from "../../ui/Button"
import Reveal from "../../ui/Reveal"

const Box = styled.div`
  text-align: center;
  background: linear-gradient(180deg, rgba(234, 242, 255, 0.5), rgba(234, 242, 255, 0.9));
  border: 1px solid rgba(116, 185, 255, 0.3);
  border-radius: var(--radius-lg);
  padding: clamp(3rem, 7vw, 5rem) var(--space-8);

  h2 {
    font-size: var(--text-3xl);
  }

  p {
    margin: var(--space-4) auto var(--space-8);
    max-width: 40ch;
  }
`

function FinalCta() {
  return (
    <Section $compact>
      <Container>
        <Reveal>
          <Box>
            <h2>Today is a good day to start.</h2>
            <p>
              One page a day. Yours to keep, yours to share — always yours.
            </p>
            <PrimaryButton
              href="https://daykeeper.app"
              target="_blank"
              rel="noreferrer"
            >
              Start your journal
            </PrimaryButton>
          </Box>
        </Reveal>
      </Container>
    </Section>
  )
}

export default FinalCta
