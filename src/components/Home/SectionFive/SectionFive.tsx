import {
  Container,
  OtherContainer,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionFiveCSS"

export default function SectionFive() {
  return (
    <Container id="#sectionFive" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>FAQ</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>Is Daykeeper already live?</h1>
            <p>
              Yes. Daykeeper is currently in BETA at daykeeper.app, with active
              updates and ongoing feedback collection from real users.
            </p>
          </CardText>
          <CardText>
            <h1>Can Daykeeper run pilot programs?</h1>
            <p>
              Yes. We evaluate pilots based on use-case clarity and measurable
              engagement outcomes. Start the conversation at
              contact@daykeeper.app.
            </p>
          </CardText>
          <CardText>
            <h1>How can contributors start?</h1>
            <p>
              Review the GitHub repositories and open an issue or pull request.
              We welcome code, docs, QA, and design support.
            </p>
          </CardText>
          <CardText>
            <h1>What should we expect during beta?</h1>
            <p>
              BETA-stage execution with fast iteration, transparent progress,
              and a retention-focused product strategy before large-scale
              expansion.
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
