import styled from "styled-components"

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: rgba(15, 23, 42, 0.82);
`

export const Dialog = styled.div`
  width: min(1200px, 100%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
`

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: var(--dk-paper);
  font-size: 0.95rem;
  cursor: pointer;
`

export const ImageWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  img {
    display: block;
    width: 100%;
    max-height: calc(100vh - 7rem);
    object-fit: contain;
  }
`
