import { Container, OtherContainer, Copyright } from "./FooterCSS"

function Footer() {
  return (
    <Container>
      <Copyright>&copy; {new Date().getFullYear()} Daykeeper</Copyright>
      <OtherContainer>
        <div>
          <label>Contact</label>
          <ul>
            <li>
              <a href="https://daykeeper.app">daykeeper.app</a>
            </li>
            <li>
              <a href="https://www.instagram.com/daykeeperapp">Instagram</a>
            </li>
            <li>
              <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a>
            </li>
          </ul>
        </div>
        <div>
          <label>Open Source</label>
          <ul>
            <li>
              <a href="https://github.com/luciano655dev/daykeeper-api">
                Daykeeper API
              </a>
            </li>
            <li>
              <a href="https://github.com/luciano655dev/daykeeper-docs">
                Daykeeper Docs
              </a>
            </li>
            <li>
              <a href="https://github.com/luciano655dev/daykeeper-app">
                Daykeeper APP
              </a>
            </li>
            <li>
              <a href="https://github.com/luciano655dev/daykeeper-about">
                Daykeeper About Website
              </a>
            </li>
          </ul>
        </div>
        <div>
          <label>Build with Daykeeper</label>
          <ul>
            <li>
              <a href="https://daykeeper.app">Try the BETA app</a>
            </li>
            <li>
              <a href="mailto:contact@daykeeper.app">
                Roadmap / Collaboration Contact
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/greenguruprojectbyshaanguru/">
                Current Collaboration: Green Guru Project
              </a>
            </li>
          </ul>
        </div>
      </OtherContainer>
    </Container>
  )
}

export default Footer
