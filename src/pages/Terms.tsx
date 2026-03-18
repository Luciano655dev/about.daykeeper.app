import { Hero, Meta, Page, Section, Wrapper } from "../components/Legal/LegalPageCSS"

export default function Terms() {
  return (
    <Page>
      <Wrapper>
        <Hero>
          <h1>Terms of Use</h1>
          <p>
            These Terms of Use govern access to and use of Daykeeper at
            daykeeper.app, including related services, content, and public
            status information.
          </p>
          <Meta>Effective date: 18/03/2026</Meta>
        </Hero>

        <Section>
          <h2>Acceptance</h2>
          <p>
            By accessing or using Daykeeper, you agree to these terms. If you do
            not agree, do not use the service.
          </p>
        </Section>

        <Section>
          <h2>Use of the Service</h2>
          <ul>
            <li>You must use Daykeeper lawfully and responsibly.</li>
            <li>You may not attempt to disrupt, overload, or abuse the service.</li>
            <li>
              You are responsible for activity performed through your account and
              any content you upload or publish.
            </li>
          </ul>
        </Section>

        <Section>
          <h2>User Content</h2>
          <p>
            You retain ownership of content you submit to Daykeeper. By using
            the platform, you grant Daykeeper the limited rights necessary to
            host, process, display, and operate that content within the service.
          </p>
        </Section>

        <Section>
          <h2>Availability</h2>
          <p>
            Daykeeper may change, suspend, or remove features at any time,
            especially while the product remains in beta. Public status and
            analytics pages are provided for transparency but may change without
            notice.
          </p>
        </Section>

        <Section>
          <h2>Termination</h2>
          <p>
            Access may be limited or terminated if use violates these terms,
            creates security risk, or harms the platform or its users.
          </p>
        </Section>

        <Section>
          <h2>Disclaimers</h2>
          <p>
            Daykeeper is provided on an “as is” and “as available” basis. No
            warranty is made that the service will be uninterrupted, error-free,
            or suitable for a specific purpose.
          </p>
        </Section>

        <Section>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a>.
          </p>
        </Section>
      </Wrapper>
    </Page>
  )
}
