import styled, { css } from "styled-components"

type ContainerWidth = "narrow" | "default" | "wide"

const widths = {
  narrow: css`
    max-width: var(--container-narrow);
  `,
  default: css`
    max-width: var(--container);
  `,
  wide: css`
    max-width: var(--container-wide);
  `,
}

const Container = styled.div<{ $width?: ContainerWidth }>`
  width: 100%;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 2.5rem);
  ${({ $width = "default" }) => widths[$width]}
`

export default Container
