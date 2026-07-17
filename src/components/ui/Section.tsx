import styled, { css } from "styled-components"

const Section = styled.section<{ $tint?: boolean; $compact?: boolean }>`
  padding-block: ${({ $compact }) =>
    $compact ? "clamp(2.5rem, 6vw, 4.5rem)" : "clamp(4rem, 10vw, 8rem)"};

  ${({ $tint }) =>
    $tint &&
    css`
      background: rgba(234, 242, 255, 0.55);
    `}
`

export default Section
