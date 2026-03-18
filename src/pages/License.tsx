import { Hero, Meta, Page, Section, Wrapper } from "../components/Legal/LegalPageCSS"

export default function LicensePage() {
  return (
    <Page>
      <Wrapper>
        <Hero>
          <h1>Code License</h1>
          <p>
            Daykeeper is made up of multiple repositories with different license
            terms. Use each repository according to its own published license.
          </p>
          <Meta>Reference summary for current Daykeeper repositories</Meta>
        </Hero>

        <Section>
          <h2>daykeeper.app</h2>
          <p>
            Repository:{" "}
            <a
              href="https://github.com/luciano655dev/daykeeper.app"
              target="_blank"
              rel="noreferrer"
            >
              github.com/luciano655dev/daykeeper.app
            </a>
          </p>
          <p>
            License reference: Creative Commons Attribution-NonCommercial 4.0
            International (CC BY-NC 4.0).
          </p>
        </Section>

        <Section>
          <h2>daykeeper-api</h2>
          <p>
            Repository:{" "}
            <a
              href="https://github.com/luciano655dev/daykeeper-api"
              target="_blank"
              rel="noreferrer"
            >
              github.com/luciano655dev/daykeeper-api
            </a>
          </p>
          <p>
            License reference: MIT License.
          </p>
        </Section>

        <Section>
          <h2>about.daykeeper.app</h2>
          <p>
            Repository:{" "}
            <a
              href="https://github.com/luciano655dev/about.daykeeper.app"
              target="_blank"
              rel="noreferrer"
            >
              github.com/luciano655dev/about.daykeeper.app
            </a>
          </p>
          <p>
            License reference: proprietary / all rights reserved. This current
            repository license states that the software is proprietary and
            confidential, with use requiring prior written permission unless
            otherwise allowed by law.
          </p>
        </Section>

        <Section>
          <h2>Important Note</h2>
          <p>
            This page is a practical summary for users of the about website and
            is not a substitute for the full license text in each repository.
            Always review the source repository directly before reuse,
            modification, redistribution, or commercial use.
          </p>
        </Section>
      </Wrapper>
    </Page>
  )
}
