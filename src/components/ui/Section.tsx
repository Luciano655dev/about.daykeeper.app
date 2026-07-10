import styled, { css } from "styled-components"

const Section = styled.section<{ $tint?: boolean; $compact?: boolean }>`
  padding-block: ${({ $compact }) =>
    $compact ? "clamp(2.5rem, 6vw, 4.5rem)" : "clamp(4rem, 10vw, 8rem)"};

  ${({ $tint }) =>
    $tint &&
    css`
      background: linear-gradient(
        180deg,
        rgba(234, 242, 255, 0.45) 0%,
        rgba(234, 242, 255, 0.75) 50%,
        rgba(234, 242, 255, 0.45) 100%
      );
    `}
`

export default Section
