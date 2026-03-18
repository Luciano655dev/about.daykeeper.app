import styled from "styled-components"

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 7rem 1.25rem 4rem;
  background: var(--dk-paper);
`

export const Dashboard = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Hero = styled.section`
  width: 100%;
  padding-bottom: 1rem;
`

export const HeroText = styled.div`
  max-width: 46rem;

  h1 {
    margin: 0 0 0.4rem;
    font-size: clamp(2.5rem, 6vw, 4.25rem);
    line-height: 1;
    color: var(--dk-ink);
  }

  p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--dk-slate);
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  h2 {
    margin: 0;
    font-size: 2rem;
    color: var(--dk-ink);
  }
`

export const Panel = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  background: var(--dk-paper);

  h3 {
    margin: 0 0 0.85rem;
    font-size: 1.2rem;
    color: var(--dk-ink);
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  button {
    border: none;
    background: var(--dk-sky);
    color: var(--dk-paper);
    padding: 0.8rem 1.1rem;
    cursor: pointer;
  }

  svg {
    width: 100%;
    height: auto;
    aspect-ratio: 19 / 6.5;
    display: block;
    margin-bottom: 0.75rem;
  }
`

export const ControlsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`

export const Select = styled.select`
  width: auto;
  min-width: 11rem;
  border: none;
  background: var(--dk-mist);
  padding: 0.75rem 0.95rem;
  font: inherit;
  color: var(--dk-ink);
`

export const Banner = styled.div`
  padding: 1rem 0;
  color: var(--dk-error);
`

export const StatusHeader = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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
  gap: 0.75rem;

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

export const StatCard = styled.div`
  padding: 1rem 0;

  label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.85rem;
    color: var(--dk-slate);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`

export const StatValue = styled.div`
  font-size: 1.5rem;
  color: var(--dk-ink);
  line-height: 1.1;
`

export const PanelGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const DetailList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;

  li {
    margin-bottom: 0.5rem;
    color: var(--dk-slate);
  }
`

export const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1rem;

  h3 {
    margin: 0;
  }

  span {
    font-size: 1.5rem;
    color: var(--dk-ink);
  }
`

export const ChartMeta = styled.div`
  font-size: 0.95rem;
  color: var(--dk-slate);
`

export const ChartLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  margin-bottom: 0.5rem;
`

export const ChartLegendItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  span {
    width: 0.9rem;
    height: 0.2rem;
    display: inline-block;
  }

  label {
    font-size: 0.95rem;
    color: var(--dk-slate);
    text-transform: capitalize;
  }
`

export const ChartEmpty = styled.div`
  padding: 1rem 0;
  color: var(--dk-slate);
`
