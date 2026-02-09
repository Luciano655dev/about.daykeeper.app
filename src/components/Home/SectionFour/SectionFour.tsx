import {
  Container,
  OtherContainer,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionFourCSS"

export default function SectionFour() {
  return (
    <Container id="sectionFour" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>Product and Growth Focus</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>1. Daily Memory Graph</h1>
            <p>
              Users create one Day entry that combines context and progress.
              <br />
              <ul>
                <li>
                  Journaling, media, highlights, and personal notes in one
                  place
                </li>
                <li>Structured data that is easier to revisit and organize</li>
                <li>
                  A clear daily habit loop that supports long-term retention
                </li>
              </ul>
            </p>
          </CardText>
          <CardText>
            <h1>2. Engagement and Retention</h1>
            <p>
              Daykeeper blends social interaction with practical planning.
              <ul>
                <li>
                  Reactions and comments create social accountability
                </li>
                <li>Calendar visibility increases return behavior</li>
                <li>
                  Tasks and goals keep utility high beyond content sharing
                </li>
              </ul>
            </p>
          </CardText>
          <CardText>
            <h1>3. Applied Use Cases</h1>
            <p>
              Organizations can run pilots for engagement-driven use cases.
              <ul>
                <li>
                  Cohort tracking for education, wellness, and creator programs
                </li>
                <li>Community updates tied to measurable participation</li>
                <li>
                  Integration opportunities for existing workflows
                </li>
              </ul>
            </p>
          </CardText>
          <CardText>
            <h1>4. Growth Path</h1>
            <p>
              Daykeeper is building toward premium consumer features,
              subscriptions for organized groups, and integration services. BETA
              execution is focused on proving demand before broad scaling.
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
