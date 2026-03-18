import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  .grid-item {
    width: 10px;
    height: 10px;
    margin: 1px;
    opacity: 0.1;
    will-change: opacity;
  }
`
