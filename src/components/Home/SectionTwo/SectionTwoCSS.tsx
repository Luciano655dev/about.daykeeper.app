import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 1.25rem;

  @media (max-width: 1024px) {
    min-height: auto;
    justify-content: start;
    align-items: start;
  }
`

export const OtherContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
    width: 100%;
    min-height: auto;
  }
`

export const GalleryRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
  margin-bottom: 3em;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: end;

    > div:nth-child(2) {
      transform: translateY(2em);
    }
  }
`

export const GalleryImage = styled.div`
  width: 100%;
  overflow: hidden;

  button {
    width: 100%;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: contain;
  }
`

export const SliderCard = styled.div`
  position: relative;
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: row;
  gap: 2em;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: auto;
    gap: 2.5em;
  }
`

export const UpperTitle = styled.h1`
  font-family: "Rota_Bold";
  font-size: 3em;
  margin: 0;
  margin-bottom: 0.5em;
  color: var(--dk-ink);
  text-align: center;
`

export const CardText = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  h1 {
    font-family: "Rota_Bold";
    font-size: 2em;
    margin-bottom: 0;
    color: var(--dk-ink);
  }
  p {
    font-size: 1.5em;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 1.15em;
      line-height: 1.6;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;

    h1 {
      font-size: 2em;
    }
  }
`
