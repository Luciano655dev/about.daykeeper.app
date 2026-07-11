import styled from "styled-components"
import Container from "../../ui/Container"
import { PrimaryButton, GhostButton } from "../../ui/Button"
import BrowserFrame from "../../ui/BrowserFrame"

const HeroSection = styled.section`
  padding-top: calc(4.25rem + clamp(3.5rem, 8vw, 6.5rem));
  padding-bottom: clamp(3.5rem, 8vw, 6rem);
  background: linear-gradient(180deg, #f5f9ff 0%, var(--dk-paper) 62%);
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Beta = styled.span`
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--dk-slate);
  opacity: 0.75;
  margin-bottom: var(--space-6);
`

const Title = styled.h1`
  font-size: var(--text-hero);
  max-width: 16ch;
`

const Sub = styled.p`
  font-size: var(--text-xl);
  line-height: 1.5;
  color: var(--dk-slate);
  max-width: 42ch;
  margin-top: var(--space-6);
`

const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-8);
`

const Shot = styled.div`
  width: 100%;
  max-width: 62rem;
  margin-top: clamp(3rem, 7vw, 5rem);
`

function Hero() {
  return (
    <HeroSection>
      <Inner>
        <Beta>In beta at daykeeper.app</Beta>
        <Title>Keep your days.</Title>
        <Sub>
          A diary that lives online — as social, or as private, as you want.
          Write your day, keep it to yourself, or share it with the people who
          matter.
        </Sub>
        <Ctas>
          <PrimaryButton
            href="https://daykeeper.app"
            target="_blank"
            rel="noreferrer"
          >
            Start your journal
          </PrimaryButton>
          <GhostButton href="#tour">See how it works</GhostButton>
        </Ctas>

        <Shot id="tour">
          <BrowserFrame
            eager
            src="/shots/feed.png"
            alt="The Daykeeper feed, showing daily entries from people you follow"
          />
        </Shot>
      </Inner>
    </HeroSection>
  )
}

export default Hero
