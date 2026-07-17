import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {
  Header,
  Nav,
  LogoLink,
  NavLinks,
  NavLink,
  NavCta,
  MenuButton,
  MobileSheet,
  MobileLink,
  MobileCta,
} from "./navbarCSS"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <Header $scrolled={scrolled}>
        <Nav aria-label="Main">
          <LogoLink to="/" aria-label="Daykeeper home">
            <img src="/Logo/SVG/Daykeeper-Horizontal-Main.svg" alt="Daykeeper" />
          </LogoLink>

          <NavLinks>
            <NavLink to="/open-source">Open Source</NavLink>
            <NavLink to="/status">Status</NavLink>
          </NavLinks>

          <NavCta href="https://daykeeper.app" target="_blank" rel="noreferrer">
            Open Daykeeper
          </NavCta>

          <MenuButton
            $open={open}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </MenuButton>
        </Nav>
      </Header>

      <MobileSheet $open={open} aria-hidden={!open}>
        <MobileLink to="/">Home</MobileLink>
        <MobileLink to="/open-source">Open Source</MobileLink>
        <MobileLink to="/status">Status</MobileLink>
        <MobileCta href="https://daykeeper.app" target="_blank" rel="noreferrer">
          Open Daykeeper
        </MobileCta>
      </MobileSheet>
    </>
  )
}

export default Navbar
