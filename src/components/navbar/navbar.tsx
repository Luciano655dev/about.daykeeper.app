import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  NavbarContainer,
  HamburguerMenu,
  HamburguerMenuIcon,
  NavbarLink,
  HamburguerMenuLink,
} from "./navbarCSS"
import "./transitions.css"

function Navbar() {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  useEffect(() => {
    if (
      pathname === "/status" ||
      pathname === "/terms" ||
      pathname === "/privacy" ||
      pathname === "/license"
    ) {
      setIsVisible(true)
      return
    }

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - window.innerHeight * 0.5) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      if (window.innerWidth >= 800) {
        setIsMenuVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  return (
    <NavbarContainer className={isVisible ? "visible" : "hidden"}>
      <div>
        <Link to="/">
          <img
            src="/Logo/SVG/Daykeeper-Horizontal-Main.svg"
            alt="DayKeeper Logo"
          />
        </Link>
      </div>

      <div className={`normal-items`}>
        <NavbarLink to="/">Home</NavbarLink>
        <a href="/#sectionTwo">Overview</a>
        <a href="/#sectionThree">Updates</a>
        <NavbarLink to="/status">Status</NavbarLink>
        <NavbarLink to="/terms">Terms</NavbarLink>
      </div>

      <HamburguerMenuIcon
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        checked={isMenuVisible}
        onClick={toggleMenu}
      />
      <HamburguerMenu className={isMenuVisible ? "menuVisible" : "menuHidden"}>
        <HamburguerMenuLink to="/" onClick={() => toggleMenu()}>
          Home
        </HamburguerMenuLink>
        <a href="/#sectionTwo" onClick={() => toggleMenu()}>
          Overview
        </a>
        <a href="/#sectionThree" onClick={() => toggleMenu()}>
          Updates
        </a>
        <HamburguerMenuLink to="/status" onClick={() => toggleMenu()}>
          Status
        </HamburguerMenuLink>
        <HamburguerMenuLink to="/terms" onClick={() => toggleMenu()}>
          Terms
        </HamburguerMenuLink>
      </HamburguerMenu>
    </NavbarContainer>
  )
}

export default Navbar
