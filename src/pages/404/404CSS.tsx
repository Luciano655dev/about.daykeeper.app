import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 1.25rem 4rem;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(116, 185, 255, 0.2), transparent 28rem),
    linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%);
`

export const BackgroundGlow = styled.div`
  position: absolute;
  inset: auto auto 10% 50%;
  width: min(70vw, 42rem);
  height: min(70vw, 42rem);
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(15, 23, 42, 0.1), transparent 65%);
  filter: blur(16px);
  pointer-events: none;
`

export const Panel = styled.div`
  position: relative;
  width: min(760px, 100%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: clamp(2rem, 4vw, 3rem);
  border: 1px solid rgba(116, 185, 255, 0.28);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 32px 80px rgba(15, 23, 42, 0.1);
  backdrop-filter: blur(14px);

  h1 {
    margin: 0;
    font-size: clamp(2.8rem, 8vw, 5.5rem);
    line-height: 0.92;
    max-width: 11ch;
    color: var(--dk-ink);
  }
`

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.06);
  color: var(--dk-slate);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
`

export const VisualCode = styled.p`
  margin: 0;
  font-family: "Rota_ExtraBold";
  font-size: clamp(5rem, 18vw, 10rem);
  line-height: 0.9;
  letter-spacing: -0.08em;
  color: rgba(15, 23, 42, 0.12);
`

export const Eyebrow = styled.p`
  margin: 0;
  font-family: "Rota_Bold";
  font-size: 1rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--dk-sky);
`

export const Message = styled.p`
  margin: 0;
  max-width: 42rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--dk-slate);

  a {
    color: var(--dk-sky);
  }
`

export const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.35rem;
`

export const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.4rem;
  padding: 0.95rem 1.35rem;
  border: 0;
  border-radius: 999px;
  font-size: 1rem;
  font-family: "Rota_Bold";
  background: linear-gradient(135deg, #74b9ff 0%, #0f172a 180%);
  color: #ffffff;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.18);
  }
`

export const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.4rem;
  padding: 0.95rem 1.35rem;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.76);
  color: var(--dk-ink);
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(116, 185, 255, 0.5);
    background: rgba(234, 242, 255, 0.9);
  }
`
