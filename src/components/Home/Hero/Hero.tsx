import styled from "styled-components"
import Container from "../../ui/Container"
import { PrimaryButton, GhostButton } from "../../ui/Button"
import BrowserFrame from "../../ui/BrowserFrame"

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

const Shot = styled.div`
  width: 100%;
  max-width: 62rem;
  margin-top: clamp(3rem, 7vw, 5rem);
`

function Hero() {
  return (
    <HeroSection>
      <Inner>
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
          <GhostButton href="#tour">See a day in Daykeeper</GhostButton>
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
