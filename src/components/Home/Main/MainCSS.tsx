import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    padding: 0 1.25rem;

    img {
      width: 7em;
      margin-bottom: 1em;
    }

    h1 {
      font-size: 7em;
      margin: 0;
      line-height: 1.2;

      color: var(--dk-slate);
      font-family: "Rota_Bold";
      text-align: center;
    }
    h3 {
      font-size: 2em;
      margin: 0;
      text-align: center;
    }
  }

  @media screen and (max-width: 1000px) {
    div {
      div {
        width: 45vw;
      }
    }
  }

  @media screen and (max-width: 600px) {
    div h1 {
      font-size: 15vw;
    }
    div h3 {
      font-size: 6vw;
    }
    div div {
      width: 80vw;
    }
    div img {
      width: 5em;
    }
  }
`
