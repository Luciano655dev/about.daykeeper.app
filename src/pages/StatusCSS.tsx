import styled from "styled-components"

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: calc(4.25rem + clamp(2.5rem, 6vw, 4.5rem)) 0 clamp(3rem, 7vw, 5rem);
  background: var(--dk-paper);
`

export const Dashboard = styled.div`
  max-width: var(--container-wide);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
`

export const Hero = styled.section`
  width: 100%;
  padding-bottom: var(--space-4);
  border-bottom: var(--border-soft);
`

export const HeroText = styled.div`
  max-width: 46rem;

  h1 {
    margin: 0 0 var(--space-3);
    font-size: var(--text-4xl);
  }

  p {
    font-size: var(--text-base);
    line-height: 1.6;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  h2 {
    font-size: var(--text-2xl);
  }
`

export const Panel = styled.div`
  width: 100%;
  padding: var(--space-8);
  background: var(--dk-paper);
  border: var(--border-soft);
  border-radius: var(--radius-md);

  h3 {
    margin: 0 0 var(--space-4);
    font-size: var(--text-lg);
  }

  p {
    line-height: 1.6;
  }

  button {
    border: none;
    background: var(--dk-sky-deep);
    color: #ffffff;
    font-weight: 600;
    font-size: var(--text-sm);
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: background-color 0.2s var(--ease-out);

    &:hover {
      background: #318be7;
    }
  }

  svg {
    width: 100%;
    height: auto;
    aspect-ratio: 19 / 6.5;
    display: block;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 600px) {
    padding: var(--space-6);
  }
`

export const ControlsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
`

export const Select = styled.select`
  width: auto;
  min-width: 11rem;
  border: var(--border-soft);
  background: var(--dk-mist);
  padding: 0.75rem 0.95rem;
  border-radius: var(--radius-sm);
  font: inherit;
  font-size: var(--text-sm);
  color: var(--dk-ink);
  cursor: pointer;
`

export const Banner = styled.div`
  padding: var(--space-4) var(--space-6);
  color: var(--dk-error);
  background: rgba(185, 28, 28, 0.06);
  border: 1px solid rgba(185, 28, 28, 0.15);
  border-radius: var(--radius-sm);
`

export const StatusHeader = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--dk-slate);
  text-transform: capitalize;
`

export const StatusDot = styled.span<{ $status: "ok" | "degraded" }>`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 999px;
  background: ${({ $status }) =>
    $status === "ok" ? "var(--dk-success)" : "var(--dk-error)"};
`

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3);

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

export const StatCard = styled.div`
  padding: var(--space-4);
  background: rgba(234, 242, 255, 0.4);
  border-radius: var(--radius-sm);

  label {
    display: block;
    margin-bottom: var(--space-2);
    font-size: var(--text-xs);
    color: var(--dk-slate);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`

export const StatValue = styled.div`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-2xl);
  color: var(--dk-ink);
  line-height: 1.1;
`

export const PanelGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const DetailList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;

  li {
    margin-bottom: var(--space-2);
    color: var(--dk-slate);

    &::marker {
      color: var(--dk-sky);
    }
  }
`

export const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
`

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-4);
  margin-bottom: var(--space-4);

  h3 {
    margin: 0;
  }

  span {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: var(--text-2xl);
    color: var(--dk-ink);
  }
`

export const ChartMeta = styled.div`
  font-size: var(--text-sm);
  color: var(--dk-slate);
`

export const ChartLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-4);
  margin-bottom: var(--space-2);
`

export const ChartLegendItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  span {
    width: 0.9rem;
    height: 0.2rem;
    border-radius: 2px;
    display: inline-block;
  }

  label {
    font-size: var(--text-sm);
    color: var(--dk-slate);
    text-transform: capitalize;
  }
`

export const ChartEmpty = styled.div`
  padding: var(--space-4) 0;
  color: var(--dk-slate);
`
