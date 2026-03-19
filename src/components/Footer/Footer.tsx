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
            daykeeper.app
          </a>
          <p>
            Daykeeper is building a daily product around memory, planning, and
            social accountability.
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
              <Link to="/status">Status Dashboard</Link>
            </li>
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
              <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <label>Open Source</label>
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
          <label>Community</label>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/daykeeperapp"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/greenguruprojectbyshaanguru/"
                target="_blank"
                rel="noreferrer"
              >
                Green Guru Project
              </a>
            </li>
            <li>
              <a href="mailto:contact@daykeeper.app">
                Collaboration Contact
              </a>
            </li>
          </ul>
        </FooterSection>
      </OtherContainer>

      <Copyright>
        &copy; {new Date().getFullYear()} Daykeeper. Built around{" "}
        <a href="https://daykeeper.app" target="_blank" rel="noreferrer">
          daykeeper.app
        </a>
        .
      </Copyright>
    </Container>
  )
}

export default Footer
