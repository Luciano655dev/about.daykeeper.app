import {
  Container,
  OtherContainer,
  SliderCard,
  CardText,
  TextContent,
  CardImage,
} from "./SectionThreeCSS"

export default function SectionThree() {
  return (
    <Container id="sectionThree" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <SliderCard>
          <CardImage>
            <img src="/DaykeeperFeedPage.png" alt="Daykeeper feed screen" />
          </CardImage>
          <CardText>
            <TextContent>
              <h1>Building in Public During BETA</h1>
              <p>
                Daykeeper is live at daykeeper.app and evolving through real
                usage and direct feedback loops. The focus right now is
                consistent delivery, stronger repeat usage, and transparent
                progress across product and code.
                <br />
                <br />
                <strong>What is active now:</strong>
                <br />
                <strong>Product Iteration.</strong> Continuous updates for
                posting, timeline, and profile.
                <br />
                <br />
                <strong>Open Development.</strong> Roadmap and code progress are
                visible on GitHub.
                <br />
                <br />
                <strong>Pilot Collaborations.</strong> Real use-case tests with
                teams that want measurable engagement.
                <br />
                <br />
                <strong>Beta Feedback Loop.</strong> Product decisions are
                shaped by active usage signals.
                <br />
                <br />
                For roadmap details, collaboration ideas, or product feedback,
                email{" "}
                <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a>
                . You can also view the{" "}
                <a
                  href="https://github.com/luciano655dev/DayKeeper-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  repository
                </a>{" "}
                or{" "}
                <a href="https://daykeeper.app" target="_blank" rel="noreferrer">
                  open daykeeper.app
                </a>
                .
              </p>
            </TextContent>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
