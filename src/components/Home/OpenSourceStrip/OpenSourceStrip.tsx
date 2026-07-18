import styled from "styled-components"
import { Link } from "react-router-dom"
import Container from "../../ui/Container"
import Reveal from "../../ui/Reveal"
import { Icon, type IconName } from "../../ui/Icon"

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

const Mark = styled.span`
  display: block;
  margin-bottom: var(--space-5);
  color: var(--dk-sky-deep);
`

const Links = styled.div`
  min-width: min(100%, 20rem);
  display: grid;
`

const StripLink = styled.a`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--dk-ink);
  padding: 1rem 0;
  border-bottom: var(--border-soft);
  transition: color 0.2s var(--ease-out), padding-left 0.2s var(--ease-out);

  &:first-child {
    border-top: var(--border-soft);
  }

  svg:first-child {
    color: var(--dk-sky-deep);
  }

  svg:last-child {
    margin-left: auto;
  }

  &:hover {
    color: var(--dk-sky-deep);
    padding-left: var(--space-2);
  }
`

const links: { label: string; icon: IconName; href: string; internal?: boolean }[] = [
  { label: "API source on GitHub", icon: "code", href: "https://github.com/luciano655dev/daykeeper-api" },
  { label: "Open-source details", icon: "globe", href: "/open-source", internal: true },
  { label: "Live service status", icon: "history", href: "/status", internal: true },
]

function OpenSourceStrip() {
  return (
    <Wrap>
      <Row>
        <Reveal>
          <Copy>
            <Mark aria-hidden="true"><Icon name="code" size={21} /></Mark>
            <h2>Check the work.</h2>
            <p>
              The API is MIT-licensed. Source code, API documentation, service
              health, and response data are available from the links here.
            </p>
          </Copy>
        </Reveal>
        <Reveal delay={100}>
          <Links>
            {links.map((item) => item.internal ? (
              <StripLink as={Link} to={item.href} key={item.label}>
                <Icon name={item.icon} size={17} />
                {item.label}
                <Icon name="arrow" size={15} />
              </StripLink>
            ) : (
              <StripLink href={item.href} target="_blank" rel="noreferrer" key={item.label}>
                <Icon name={item.icon} size={17} />
                {item.label}
                <Icon name="arrow" size={15} />
              </StripLink>
            ))}
          </Links>
        </Reveal>
      </Row>
    </Wrap>
  )
}

export default OpenSourceStrip
