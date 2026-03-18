import {
  Container,
  OtherContainer,
  GalleryRow,
  GalleryImage,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionTwoCSS"

type SectionTwoProps = {
  onImageClick: (src: string, alt: string) => void
}

export default function SectionTwo({ onImageClick }: SectionTwoProps) {
  return (
    <Container id="sectionTwo" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>Why Daykeeper Matters</UpperTitle>
        <GalleryRow>
          <GalleryImage>
            <button
              type="button"
              onClick={() =>
                onImageClick(
                  "/DaykeeperCreatePostPage.png",
                  "Daykeeper create post page"
                )
              }
              aria-label="Open Daykeeper create post page image"
            >
              <img src="/DaykeeperCreatePostPage.png" alt="Daykeeper create post page" />
            </button>
          </GalleryImage>
          <GalleryImage>
            <button
              type="button"
              onClick={() =>
                onImageClick("/DaykeeperSearchPage.png", "Daykeeper search page")
              }
              aria-label="Open Daykeeper search page image"
            >
              <img src="/DaykeeperSearchPage.png" alt="Daykeeper search page" />
            </button>
          </GalleryImage>
          <GalleryImage>
            <button
              type="button"
              onClick={() =>
                onImageClick("/DaykeeperProfilePage.png", "Daykeeper profile page")
              }
              aria-label="Open Daykeeper profile page image"
            >
              <img src="/DaykeeperProfilePage.png" alt="Daykeeper profile page" />
            </button>
          </GalleryImage>
        </GalleryRow>
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
