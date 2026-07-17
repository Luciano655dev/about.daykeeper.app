import styled from "styled-components"
import Container from "../../ui/Container"
import BrowserFrame from "../../ui/BrowserFrame"

const Wrap = styled.section`
  padding-block: clamp(3.5rem, 9vw, 7rem);
`

const Stack = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 10vw, 8rem);
`

const Row = styled.div<{ $flip?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);

  ${({ $flip }) =>
    $flip &&
    `
      direction: rtl;
      > * { direction: ltr; }
    `}

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: var(--space-8);
  }
`

const Copy = styled.div`
  max-width: 34ch;

  h2 {
    font-size: var(--text-2xl);
  }

  p {
    margin-top: var(--space-4);
    line-height: 1.7;
    color: var(--dk-slate);
  }
`

const Note = styled.p`
  margin-top: var(--space-4) !important;
  font-size: var(--text-sm);
  color: var(--dk-slate);
  opacity: 0.75;
`

const rows = [
  {
    src: "/shots/create.png",
    alt: "The Daykeeper create-post screen, with text, media, and a privacy selector",
    title: "Everything from today, on one page",
    body: "Write a note, check off a task, add an event, or save up to five photos and videos. Daykeeper groups it all under the date, so you can find the whole day later.",
    note: "Set every page to Public, Close friends, or Private.",
  },
  {
    src: "/shots/profile.png",
    alt: "A Daykeeper profile showing an activity heatmap, streaks, followers, and daily entries",
    title: "A calendar you fill by living",
    body: "Each saved day appears on your calendar and activity map. Browse by date, follow your streak, and return to details you would have forgotten.",
    note: null,
    flip: true,
  },
  {
    src: "/shots/feed.png",
    alt: "The Daykeeper feed with entries from followed accounts",
    title: "Share a day, not your whole life",
    body: "Follow people you care about, then react or comment when they share. Prefer a private journal? Leave the social features alone. They never get in the way.",
    note: null,
  },
]

function Features() {
  return (
    <Wrap>
      <Stack>
        {rows.map((row) => (
          <Row key={row.title} $flip={row.flip}>
            <Copy>
              <h2>{row.title}</h2>
              <p>{row.body}</p>
              {row.note && <Note>{row.note}</Note>}
            </Copy>
            <BrowserFrame src={row.src} alt={row.alt} />
          </Row>
        ))}
      </Stack>
    </Wrap>
  )
}

export default Features
