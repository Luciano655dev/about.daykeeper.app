import { useEffect, useRef, type ReactNode } from "react"
import styled from "styled-components"

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

let sharedObserver: IntersectionObserver | null = null

const getObserver = () => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true")
            sharedObserver?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    )
  }
  return sharedObserver
}

const RevealBox = styled.div<{ $delay: number }>`
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out);
  transition-delay: ${({ $delay }) => $delay}ms;

  &[data-visible="true"] {
    opacity: 1;
    transform: none;
  }
`

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-visible", "true")
      return
    }

    const observer = getObserver()
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return (
    <RevealBox ref={ref} $delay={delay} className={className}>
      {children}
    </RevealBox>
  )
}
