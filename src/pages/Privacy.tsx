import { Hero, Meta, Page, Section, Wrapper } from "../components/Legal/LegalPageCSS"

export default function Privacy() {
  return (
    <Page>
      <Wrapper>
        <Hero>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how Daykeeper may collect, use, and
            store information when you use daykeeper.app and related public
            website pages.
          </p>
          <Meta>Effective date: 18/03/2026</Meta>
        </Hero>

        <Section>
          <h2>Information Collected</h2>
          <ul>
            <li>Account information you provide directly.</li>
            <li>Content you create, post, or upload inside the service.</li>
            <li>Operational and technical data needed to run and secure the platform.</li>
            <li>Aggregated analytics shown on the public status dashboard.</li>
          </ul>
        </Section>

        <Section>
          <h2>How Information Is Used</h2>
          <ul>
            <li>To operate and improve Daykeeper.</li>
            <li>To maintain platform security, integrity, and reliability.</li>
            <li>To support product analytics, diagnostics, and service status reporting.</li>
            <li>To communicate important account or platform information.</li>
          </ul>
        </Section>

        <Section>
          <h2>Public Analytics</h2>
          <p>
            Daykeeper may publish aggregated service metrics such as user,
            content, interaction, and server status data. These metrics are
            intended to reflect platform activity in summary form and not to
            expose private account-level information.
          </p>
        </Section>

        <Section>
          <h2>Data Sharing</h2>
          <p>
            Daykeeper does not publish private user data as part of the public
            about website. Information may be shared only when necessary to
            operate the service, comply with legal obligations, or protect the
            platform and its users.
          </p>
        </Section>

        <Section>
          <h2>Retention and Security</h2>
          <p>
            Data may be retained as needed for operations, compliance, product
            improvement, and security. Reasonable measures may be used to
            protect stored information, but no system can guarantee absolute
            security.
          </p>
        </Section>

        <Section>
          <h2>Contact</h2>
          <p>
            Privacy questions can be sent to{" "}
            <a href="mailto:contact@daykeeper.app">contact@daykeeper.app</a>.
          </p>
        </Section>
      </Wrapper>
    </Page>
  )
}
