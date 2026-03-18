import { useState } from "react"
import Main from "../components/Home/Main/Main"
import SectionOne from "../components/Home/SectionOne/SectionOne"
import SectionTwo from "../components/Home/SectionTwo/SectionTwo"
import SectionThree from "../components/Home/SectionThree/SectionThree"
import SectionFour from "../components/Home/SectionFour/SectionFour"
import SectionFive from "../components/Home/SectionFive/SectionFive"
import ImageLightbox from "../components/Home/ImageLightbox/ImageLightbox"

type ActiveImage = {
  src: string
  alt: string
} | null

export default function Home() {
  const [activeImage, setActiveImage] = useState<ActiveImage>(null)

  return (
    <body>
      <Main />
      <SectionOne onImageClick={(src, alt) => setActiveImage({ src, alt })} />
      <SectionTwo onImageClick={(src, alt) => setActiveImage({ src, alt })} />
      <SectionThree onImageClick={(src, alt) => setActiveImage({ src, alt })} />
      <SectionFour />
      <SectionFive />
      {activeImage && (
        <ImageLightbox
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveImage(null)}
        />
      )}
    </body>
  )
}
