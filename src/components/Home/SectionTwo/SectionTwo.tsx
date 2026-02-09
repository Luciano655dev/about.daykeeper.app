import {
  Container,
  OtherContainer,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionTwoCSS"

export default function SectionTwo() {
  return (
    <Container id="sectionTwo" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>Why Daykeeper Matters</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>Retention by Design</h1>
            <p>
              Daykeeper is validating a retention-first behavior model in BETA:
              one product for memory capture, planning, and social
              accountability. The strategy favors durable habits over vanity
              traffic.
            </p>
          </CardText>
          <CardText>
            <h1>Real-World Pilots</h1>
            <p>
              We collaborate with teams that care about engagement outcomes:
              creators, educators, communities, and small businesses. Pilot
              programs can test real use cases and help shape integrations
              while the platform is still evolving fast.
            </p>
          </CardText>
          <CardText>
            <h1>Open Product Development</h1>
            <p>
              Daykeeper is open source and welcomes builders across engineering,
              design, QA, and documentation. Contributors influence roadmap
              decisions directly and help deliver product improvements to active
              beta users.
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
