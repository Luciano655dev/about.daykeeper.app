import styled from "styled-components"

const Card = styled.div`
  width: min(34rem, 100%);
  background: var(--dk-paper);
  border: var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lift);
  padding: var(--space-8);
  text-align: left;

  @media (max-width: 480px) {
    padding: var(--space-6);
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
`

const DateTitle = styled.div`
  h3 {
    font-size: var(--text-xl);
    line-height: 1.2;
  }

  span {
    font-size: var(--text-xs);
    color: var(--dk-slate);
    opacity: 0.7;
  }
`

const PrivacyPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--dk-sky-deep);
  background: var(--dk-mist);
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-full);
  white-space: nowrap;

  svg {
    flex-shrink: 0;
  }
`

const TextBlock = styled.p`
  font-size: var(--text-sm);
  line-height: 1.7;
  color: var(--dk-slate);
  margin-bottom: var(--space-6);
`

const TaskList = styled.ul`
  list-style: none;
  margin: 0 0 var(--space-6);
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`

const Task = styled.li<{ $done?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: ${({ $done }) => ($done ? "rgba(51, 65, 85, 0.5)" : "var(--dk-slate)")};
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};

  span:first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 6px;
    border: 1.5px solid
      ${({ $done }) => ($done ? "var(--dk-sky-deep)" : "rgba(15, 23, 42, 0.2)")};
    background: ${({ $done }) => ($done ? "var(--dk-sky-deep)" : "transparent")};
    color: #fff;
    font-size: 0.7rem;
    flex-shrink: 0;
  }
`

const EventChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--dk-ink);
  background: rgba(234, 242, 255, 0.6);
  border: 1px solid rgba(116, 185, 255, 0.35);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-6);

  strong {
    font-weight: 600;
  }

  span {
    font-size: var(--text-xs);
    opacity: 0.7;
  }
`

const MediaRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
  margin-bottom: var(--space-6);
`

const MediaTile = styled.div<{ $hue: number }>`
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-sm);
  background: ${({ $hue }) =>
    `linear-gradient(135deg, hsl(${$hue}, 85%, 88%), hsl(${$hue + 25}, 80%, 78%))`};
`

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: var(--border-soft);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const PrivacySelect = styled.div`
  display: inline-flex;
  background: rgba(234, 242, 255, 0.55);
  border-radius: var(--radius-full);
  padding: 3px;

  span {
    font-size: var(--text-xs);
    font-weight: 600;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius-full);
    color: var(--dk-slate);
    white-space: nowrap;

    &[data-active="true"] {
      background: var(--dk-paper);
      color: var(--dk-sky-deep);
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.1);
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`

const PublishButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-sm);
  font-weight: 600;
  color: #fff;
  background: var(--dk-sky-deep);
  padding: 0.625rem 1.5rem;
  border-radius: var(--radius-full);
`

function DayPageMock() {
  return (
    <Card role="img" aria-label="Example of a Daykeeper day page: notes, tasks, an event, photos, and a Close Friends privacy setting, ready to publish">
      <Header>
        <DateTitle>
          <h3>Thursday, July 10</h3>
          <span>My Day</span>
        </DateTitle>
        <PrivacyPill>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12C19 16.5 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          Close Friends
        </PrivacyPill>
      </Header>

      <TextBlock>
        Slow morning, good coffee. Finally finished the sketch I&rsquo;ve been
        putting off all week — it felt great to close that loop.
      </TextBlock>

      <TaskList>
        <Task $done>
          <span>✓</span> Morning run — 5km
        </Task>
        <Task>
          <span />
          Call grandma
        </Task>
      </TaskList>

      <EventChip>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div>
          <strong>Dinner with Ana</strong> <span>· 7:30 pm</span>
        </div>
      </EventChip>

      <MediaRow>
        <MediaTile $hue={205} />
        <MediaTile $hue={35} />
        <MediaTile $hue={150} />
      </MediaRow>

      <FooterRow>
        <PrivacySelect>
          <span>Public</span>
          <span>Followers</span>
          <span data-active="true">Close Friends</span>
        </PrivacySelect>
        <PublishButton>Publish</PublishButton>
      </FooterRow>
    </Card>
  )
}

export default DayPageMock
