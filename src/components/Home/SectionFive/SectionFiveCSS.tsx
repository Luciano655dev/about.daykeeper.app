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

export const SliderCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: auto;
  }
`

export const UpperTitle = styled.h1`
  font-family: "Rota_Bold";
  font-size: 3em;
  margin: 0;
  margin-bottom: 0.5em;
  color: var(--dk-ink);
`

export const CardText = styled.div`
  width: 100%;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: start;

  margin-left: 2em;
  margin-right: 2em;

  h1 {
    font-family: "Rota_Bold";
    font-size: 2.5em;
    margin: 0;
    color: var(--dk-ink);
  }
  p {
    margin: 0;
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
    margin-left: 0;
    margin-right: 0;

    h1 {
      font-size: 2em;
    }
  }
`
