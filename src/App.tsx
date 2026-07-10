import { useEffect } from "react"
import { useLocation, Outlet } from "react-router-dom"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/Footer/Footer"

const SkipLink = styled.a`
  position: absolute;
  top: -100%;
  left: var(--space-4);
  z-index: 200;
  background: var(--dk-paper);
  color: var(--dk-ink);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-soft);
  font-weight: 600;

  &:focus {
    top: var(--space-4);
  }
`

function App() {
  return (
    <>
      <ScrollToTop />
      <GlobalStyles />
      <SkipLink href="#content">Skip to content</SkipLink>
      <Navbar />

      <main id="content">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
