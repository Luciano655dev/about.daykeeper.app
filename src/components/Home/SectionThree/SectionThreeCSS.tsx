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

  @media (max-width: 1024px) {
    min-height: 130vh;
    justify-content: start;
    align-items: start;
  }
  @media (max-width: 768px) {
    min-height: 165vh;
  }
`

export const OtherContainer = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: start;
    width: 100vw;
    height: 100vh;
  }
`

export const SliderCard = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
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
    width: 90%;
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
  }
  p {
    font-size: 1.5em;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }
  a {
    color: #6db5ff;
  }
`

export const CardImage = styled.div`
  max-width: 40%;
  margin-right: 2em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    max-height: 90%;
    max-width: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 80%;
    margin-right: 0;
    height: auto;
    margin-top: 20px;

    img {
      width: 70%;
      margin-top: 4em;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    min-width: 20em;
  }
`
