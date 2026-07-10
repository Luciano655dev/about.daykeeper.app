import styled from "styled-components"
import Container from "../../ui/Container"
import { PrimaryButton, GhostButton } from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import DayPageMock from "../DayPageMock/DayPageMock"

const HeroSection = styled.section`
  position: relative;
  padding-top: calc(4.25rem + clamp(3.5rem, 9vw, 7rem));
  padding-bottom: clamp(4rem, 9vw, 7rem);
  background: linear-gradient(180deg, rgba(234, 242, 255, 0.8) 0%, rgba(234, 242, 255, 0.35) 55%, var(--dk-paper) 100%);
  overflow: hidden;

  /* faint ruled-paper lines, a quiet nod to the journal */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      180deg,
      transparent 0,
      transparent 2.25rem,
      rgba(15, 23, 42, 0.03) 2.25rem,
      rgba(15, 23, 42, 0.03) calc(2.25rem + 1px)
    );
    pointer-events: none;
  }
`

const Inner = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Beta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dk-sky-deep);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(116, 185, 255, 0.4);
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-6);

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--dk-sky-deep);
  }
`

const Title = styled.h1`
  font-size: var(--text-hero);
  max-width: 14ch;
`

const Sub = styled.p`
  font-size: var(--text-xl);
  line-height: 1.55;
  max-width: 44ch;
  margin-top: var(--space-6);
`

const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-8);
`

const TrustLine = styled.p`
  font-size: var(--text-sm);
  color: var(--dk-slate);
  opacity: 0.75;
  margin-top: var(--space-6);
`

const MockWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: clamp(3rem, 7vw, 5rem);
`

function Hero() {
  return (
    <HeroSection>
      <Inner>
        <Reveal>
          <Beta>Now in beta</Beta>
        </Reveal>
        <Reveal delay={80}>
          <Title>Keep your days.</Title>
        </Reveal>
        <Reveal delay={160}>
          <Sub>
            Daykeeper is a diary that lives online — as social, or as private,
            as you want. Write your day, keep it for yourself, or share it
            with the people who matter.
          </Sub>
        </Reveal>
        <Reveal delay={240}>
          <Ctas>
            <PrimaryButton
              href="https://daykeeper.app"
              target="_blank"
              rel="noreferrer"
            >
              Start your journal
            </PrimaryButton>
            <GhostButton href="#showcase">See how it works</GhostButton>
          </Ctas>
        </Reveal>
        <Reveal delay={320}>
          <TrustLine>Free &middot; Open source &middot; No ads</TrustLine>
        </Reveal>

        <MockWrap id="showcase">
          <Reveal delay={200}>
            <DayPageMock />
          </Reveal>
        </MockWrap>
      </Inner>
    </HeroSection>
  )
}

export default Hero
