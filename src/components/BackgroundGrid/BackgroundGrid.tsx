import { useState, useEffect, useCallback } from "react"
import { Container } from "./BackgroundGridCSS"
import colors from "../../constants/colors"

function BackgroundGrid() {
  const [grid, setGrid] = useState<string[]>([])
  const size = Math.round(window.innerWidth / 30)

  const generateGrid = useCallback(() => {
    return Array.from({ length: size * size }, () =>
      Math.random() > (size > 15 ? 0.01 : 0.08)
        ? colors.DK_PAPER
        : colors.DK_SKY
    )
  }, [size])

  useEffect(() => {
    setGrid(generateGrid())
  }, [generateGrid])

  return (
    <Container>
      {grid.map((color, index) => (
        <div
          key={index}
          className="grid-item"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </Container>
  )
}

export default BackgroundGrid
