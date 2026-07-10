import { Link } from "react-router-dom"
import {
  Container,
  Copyright,
  FooterIntro,
  FooterSection,
  OtherContainer,
} from "./FooterCSS"

function Footer() {
  return (
    <Container>
      <OtherContainer>
        <FooterIntro>
          <a href="https://daykeeper.app" target="_blank" rel="noreferrer">
            <img
              src="/Logo/SVG/Daykeeper-Horizontal-Main.svg"
              alt="Daykeeper"
            />
          </a>
          <p>
            A journal that lives online — as social, or as private, as you
            want it to be.
          </p>
        </FooterIntro>

        <FooterSection>
          <label>Explore</label>
          <ul>
            <li>
              <a href="https://daykeeper.app" target="_blank" rel="noreferrer">
                Open Daykeeper
              </a>
            </li>
            <li>
              <Link to="/open-source">Open Source</Link>
            </li>
            <li>
              <Link to="/status">Status</Link>
            </li>
            <li>
              <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <label>Code</label>
          <ul>
            <li>
              <a
                href="https://github.com/luciano655dev/daykeeper-api"
                target="_blank"
                rel="noreferrer"
              >
                Daykeeper API
              </a>
            </li>
            <li>
              <a
                href="https://github.com/luciano655dev/daykeeper-docs"
                target="_blank"
                rel="noreferrer"
              >
                Daykeeper Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/luciano655dev/daykeeper-about"
                target="_blank"
                rel="noreferrer"
              >
                About Website
              </a>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <label>Legal</label>
          <ul>
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/license">Code License</Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/daykeeperapp"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </FooterSection>
      </OtherContainer>

      <Copyright>
        &copy; {new Date().getFullYear()} Daykeeper. Made with care around{" "}
        <a href="https://daykeeper.app" target="_blank" rel="noreferrer">
          daykeeper.app
        </a>
        .
      </Copyright>
    </Container>
  )
}

export default Footer
