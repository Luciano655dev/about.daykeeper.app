import { useEffect, useState } from "react"
import {
  NavbarContainer,
  HamburguerMenu,
  HamburguerMenuIcon,
  NavbarLink,
  HamburguerMenuLink,
} from "./navbarCSS"
import "./transitions.css"

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  useEffect(() => {
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
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavbarContainer className={isVisible ? "visible" : "hidden"}>
      <div>
        <a href="/">
          <img
            src="/Logo/SVG/Daykeeper-Horizontal-Main.svg"
            alt="DayKeeper Logo"
          />
        </a>
      </div>

      <div className={`normal-items`}>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/#sectionTwo">Overview</NavbarLink>
        <NavbarLink href="/#sectionThree">Updates</NavbarLink>
      </div>

      <HamburguerMenuIcon
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        checked={isMenuVisible}
        onClick={toggleMenu}
      />
      <HamburguerMenu className={isMenuVisible ? "menuVisible" : "menuHidden"}>
        <HamburguerMenuLink href="/" onClick={() => toggleMenu()}>
          Home
        </HamburguerMenuLink>
        <HamburguerMenuLink href="/#sectionTwo" onClick={() => toggleMenu()}>
          Overview
        </HamburguerMenuLink>
        <HamburguerMenuLink href="/#sectionThree" onClick={() => toggleMenu()}>
          Updates
        </HamburguerMenuLink>
      </HamburguerMenu>
    </NavbarContainer>
  )
}

export default Navbar
