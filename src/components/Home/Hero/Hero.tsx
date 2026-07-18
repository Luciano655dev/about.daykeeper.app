import styled from "styled-components"
import Container from "../../ui/Container"
import { PrimaryButton, GhostButton } from "../../ui/Button"

const HeroSection = styled.section`
  padding-top: calc(4.25rem + clamp(3.5rem, 8vw, 6.5rem));
  padding-bottom: clamp(3.5rem, 8vw, 6rem);
  background: #f5f9ff;
  border-bottom: var(--border-soft);
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Logo = styled.img`
  width: 2.5rem;
  height: auto;
  margin-bottom: var(--space-6);
`

const Title = styled.h1`
  font-size: var(--text-hero);
  max-width: 17ch;
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

function Hero() {
  return (
    <HeroSection>
      <Inner>
        <Logo
          src="/Logo/SVG/Daykeeper-Mark-Blue.svg"
          alt=""
          aria-hidden="true"
        />
        <Title>Remember the day you actually had.</Title>
        <Sub>
          Daykeeper gives each date one page for notes, tasks, plans, photos,
          and videos. Keep it private, share it with close friends, or publish
          it when you choose.
        </Sub>
        <Ctas>
          <PrimaryButton
            href="https://daykeeper.app"
            target="_blank"
            rel="noreferrer"
          >
            Write today&rsquo;s page
          </PrimaryButton>
          <GhostButton href="#features">See how it works</GhostButton>
        </Ctas>
      </Inner>
    </HeroSection>
  )
}

export default Hero
