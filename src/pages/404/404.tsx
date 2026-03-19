import {
  BackgroundGlow,
  Container,
  Eyebrow,
  HomeButton,
  LinkGroup,
  Message,
  Panel,
  SecondaryLink,
  StatusPill,
  VisualCode,
} from "./404CSS"

export default function Page404() {
  return (
    <Container>
      <BackgroundGlow aria-hidden="true" />
      <Panel>
        <StatusPill>404 error</StatusPill>
        <VisualCode>404</VisualCode>
        <Eyebrow>Route not found</Eyebrow>
        <h1>This page does not exist.</h1>
        <Message>
          The link may be outdated, the URL may be wrong, or the page may have
          been moved. Use one of the routes below to get back into Daykeeper.
        </Message>
        <LinkGroup>
          <HomeButton to="/">Go to home</HomeButton>
          <SecondaryLink to="/status">Open status</SecondaryLink>
          <SecondaryLink to="/license">View license</SecondaryLink>
        </LinkGroup>
        <Message>
          Need help? Email{" "}
          <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a>.
        </Message>
      </Panel>
    </Container>
  )
}
