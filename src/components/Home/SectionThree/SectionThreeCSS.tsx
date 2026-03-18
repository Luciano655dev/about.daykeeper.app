import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 5em;
  padding: 0 1.25rem;

  @media (max-width: 1024px) {
    min-height: auto;
    justify-content: start;
    align-items: start;
    margin-bottom: 4em;
  }
`

export const OtherContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: start;
    width: 100%;
    min-height: auto;
  }
`

export const SliderCard = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 2em;

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: auto;
    gap: 2.5em;
  }
`

export const CardText = styled.div`
  width: 60%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 8em;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding-top: 0;
  }
`

export const TextContent = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-family: "Rota_Bold";
    font-size: 3em;
    color: var(--dk-ink);
  }
  p {
    font-size: 1.5em;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.15em;
      line-height: 1.6;
    }
  }
  a {
    color: var(--dk-sky);
  }
`

export const CardImage = styled.div`
  width: 48%;
  min-width: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }
`
