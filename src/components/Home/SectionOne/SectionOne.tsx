import {
  Container,
  OtherContainer,
  SliderCard,
  CardText,
  TextContent,
  CardImage,
} from "./SectionOneCSS"

type SectionOneProps = {
  onImageClick: (src: string, alt: string) => void
}

export default function SectionOne({ onImageClick }: SectionOneProps) {
  return (
    <Container id="sectionOne" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <SliderCard>
          <CardText>
            <TextContent>
              <h1>Daykeeper turns daily life into long-term value</h1>
              <p>
                <strong>Daykeeper is live in BETA at daykeeper.app.</strong>
                <br />
                It helps people capture each day as a structured memory that
                blends journal notes, media, goals, and social context in one
                timeline.
                <br />
                <br />
                Instead of splitting behavior across social feeds, note apps,
                and calendars, Daykeeper creates one daily habit loop with
                stronger retention potential.
                <br />
                <br />
                Daykeeper is built as a daily-use product and an open platform
                with clear growth signals, transparent development, and practical
                paths for collaboration.
              </p>
            </TextContent>
          </CardText>

          <CardImage>
            <button
              type="button"
              onClick={() =>
                onImageClick("/DaykeeperLoginPage.png", "Daykeeper login page")
              }
              aria-label="Open Daykeeper login page image"
            >
              <img src="/DaykeeperLoginPage.png" alt="Daykeeper login page" />
            </button>
          </CardImage>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
