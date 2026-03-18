import { useEffect } from "react"
import {
  Backdrop,
  CloseButton,
  Dialog,
  ImageWrap,
} from "./ImageLightboxCSS"

type ImageLightboxProps = {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({
  src,
  alt,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  return (
    <Backdrop onClick={onClose}>
      <Dialog onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={onClose} aria-label="Close image">
          Close
        </CloseButton>
        <ImageWrap>
          <img src={src} alt={alt} />
        </ImageWrap>
      </Dialog>
    </Backdrop>
  )
}
