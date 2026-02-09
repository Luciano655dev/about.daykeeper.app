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
            <img src="/DaykeeperLoginPage.png" alt="Daykeeper login screen" />
          </CardImage>
          <CardText>
            <TextContent>
              <h1>Be a partner</h1>
              <p>
                <strong>Partner your company.</strong>
                <br />
                If you own a business or lead a group, let’s collaborate. A
                partnership with Daykeeper can help us both grow by reaching new
                audiences and building meaningful initiatives.
                <br />
                <br />
                <strong>Be a creator.</strong>
                <br />
                Love making content? You can contribute by creating videos and
                posts that introduce Daykeeper to new communities.
                <br />
                <br />
                <strong>Moderate our community.</strong>
                <br />
                Help build a positive, welcoming space. Engage with members,
                answer questions, organize discussions, and share ideas that
                improve the community experience.
                <br />
                <br />
                <strong>Other ways to partner.</strong>
                <br />
                Have another idea? We’re open to it. Reach out and let’s talk
                through a collaboration that fits.
              </p>
            </TextContent>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
