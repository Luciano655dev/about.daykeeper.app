import { Hero, Meta, Page, Section, Wrapper } from "../components/Legal/LegalPageCSS"

export default function Privacy() {
  return (
    <Page>
      <Wrapper>
        <Hero>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains what information Daykeeper collects, how
            it is used, and the choices you have. It applies to the Daykeeper
            website at daykeeper.app, the Daykeeper web application, and the
            Daykeeper mobile app (together, the &ldquo;Service&rdquo;). Daykeeper
            is currently in beta.
          </p>
          <Meta>Effective date: 25/06/2026</Meta>
        </Hero>

        <Section>
          <h2>Information You Provide</h2>
          <ul>
            <li>
              <strong>Account information.</strong> When you create an account we
              collect your email address, your username/handle, and a securely
              hashed password. If you sign in with Google, we receive your Google
              account&rsquo;s name, email address, and profile picture in place of
              a password.
            </li>
            <li>
              <strong>Content you create.</strong> Day pages and journal entries,
              posts, comments and replies, tasks, events, and any media or images
              you upload to the Service.
            </li>
            <li>
              <strong>Social information.</strong> Your follows, follow requests,
              followers, close-friends lists, blocked accounts, and your account
              privacy preferences.
            </li>
            <li>
              <strong>Communications.</strong> Messages you send to us, such as
              support or feedback emails.
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Information Collected Automatically</h2>
          <ul>
            <li>
              <strong>Security and device data.</strong> Device identifiers
              (stored in hashed form), IP addresses, browser or app user-agent
              details, login timestamps, and active session and refresh tokens.
            </li>
            <li>
              <strong>Two-factor data.</strong> If you enable two-factor
              authentication, we store your chosen method and the secrets and
              backup-code hashes needed to verify it.
            </li>
            <li>
              <strong>Technical and diagnostic data.</strong> Server logs, error
              reports, and performance information used to operate, debug, and
              secure the platform.
            </li>
          </ul>
        </Section>

        <Section>
          <h2>How Information Is Used</h2>
          <ul>
            <li>To create and maintain your account and provide the Service.</li>
            <li>To store, display, and operate the content you create.</li>
            <li>To enable social features such as feeds, follows, and notifications.</li>
            <li>
              To authenticate logins, detect new or untrusted devices, and protect
              the security, integrity, and reliability of the platform.
            </li>
            <li>To send important account, security, and service communications.</li>
            <li>To diagnose problems and improve Daykeeper.</li>
          </ul>
        </Section>

        <Section>
          <h2>Authentication, Two-Factor, and Device Security</h2>
          <p>
            Daykeeper uses short-lived access tokens and rotating refresh tokens
            to keep you signed in. You may optionally enable two-factor
            authentication using an emailed one-time code or an authenticator app
            (TOTP) with backup codes. When a login comes from a device we have not
            seen before, we may send a new-device alert by email and push
            notification that includes the approximate IP address and the parsed
            device/browser description so you can confirm the activity. You can
            mark a device as trusted to reduce repeated verification for a limited
            period, and you can review and revoke devices and sessions at any time
            in your settings.
          </p>
        </Section>

        <Section>
          <h2>Push Notifications</h2>
          <p>
            If you use the mobile app and enable notifications, we use Firebase
            Cloud Messaging to deliver push notifications such as social activity
            and security alerts. You can disable push notifications in your device
            or app settings.
          </p>
        </Section>

        <Section>
          <h2>Public, Private, and Shared Content</h2>
          <p>
            What others can see depends on your account privacy settings and the
            audience you choose for your content, including options such as
            close-friends visibility. Blocking an account limits its ability to
            interact with you. Please remember that content you choose to share
            publicly may be viewed, saved, or re-shared by others.
          </p>
        </Section>

        <Section>
          <h2>Public Analytics</h2>
          <p>
            Daykeeper may publish aggregated service metrics, such as totals for
            users, content, interactions, and server status, on a public status
            dashboard. These metrics are presented in summary form and are not
            intended to expose private, account-level information.
          </p>
        </Section>

        <Section>
          <h2>Service Providers</h2>
          <p>
            We rely on trusted third parties to run the Service, and limited data
            is shared with them only as needed to operate it:
          </p>
          <ul>
            <li><strong>Google</strong> &mdash; to verify Google Sign-In.</li>
            <li><strong>Firebase Cloud Messaging</strong> &mdash; to deliver push notifications.</li>
            <li><strong>Hosting and database providers</strong> &mdash; to run our servers and store data.</li>
            <li><strong>Email delivery and media storage providers</strong> &mdash; to send emails and store uploaded media.</li>
          </ul>
          <p>
            These providers process data on our behalf and are subject to their
            own privacy terms.
          </p>
        </Section>

        <Section>
          <h2>Data Sharing</h2>
          <p>
            Daykeeper does not sell your personal information and does not publish
            private user data on the public website. Information may be shared only
            with the service providers above, when required to comply with legal
            obligations, or when necessary to protect the rights, safety, and
            integrity of the platform and its users.
          </p>
        </Section>

        <Section>
          <h2>Retention</h2>
          <p>
            We retain account and content data for as long as your account is
            active or as needed to provide the Service. Security and log data may
            be kept for a limited period for diagnostics and abuse prevention.
            When you delete your account, we delete or de-identify your personal
            data, except where retention is required for legal, security, or
            legitimate operational reasons.
          </p>
        </Section>

        <Section>
          <h2>Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect
            stored information, including password hashing, hashed device
            identifiers, and protected authentication tokens. No system can
            guarantee absolute security, and you are responsible for keeping your
            credentials and devices secure.
          </p>
        </Section>

        <Section>
          <h2>Your Choices and Rights</h2>
          <ul>
            <li>Access and edit your profile and account information.</li>
            <li>Control your privacy settings, close-friends lists, and blocks.</li>
            <li>Enable, disable, or reset two-factor authentication.</li>
            <li>Review and revoke trusted devices and active sessions.</li>
            <li>Delete your account at any time from your settings.</li>
          </ul>
          <p>
            Depending on where you live, you may have additional rights over your
            personal data. To make a request, contact us using the details below.
          </p>
        </Section>

        <Section>
          <h2>Children</h2>
          <p>
            Daykeeper is not directed to children under the age required by the
            laws of their country (at least 13). We do not knowingly collect
            personal information from children below that age, and will delete such
            data if we become aware of it.
          </p>
        </Section>

        <Section>
          <h2>International Data</h2>
          <p>
            Daykeeper operates online and may process and store data on servers
            located in other countries. By using the Service, you understand that
            your information may be transferred to and processed in locations
            outside your own.
          </p>
        </Section>

        <Section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy as the Service evolves. When we make
            material changes, we will update the effective date above and, where
            appropriate, provide additional notice.
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
