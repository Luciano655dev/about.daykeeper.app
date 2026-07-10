import { Hero, Meta, Page, Section, Wrapper } from "../components/Legal/LegalPageCSS"

export default function Terms() {
  return (
    <Page>
      <Wrapper>
        <Hero>
          <h1>Terms of Use</h1>
          <p>
            These Terms of Use govern access to and use of Daykeeper, including
            the website at daykeeper.app, the Daykeeper web application, and the
            Daykeeper mobile app (together, the &ldquo;Service&rdquo;). Daykeeper
            is currently in beta.
          </p>
          <Meta>Effective date: 25/06/2026</Meta>
        </Hero>

        <Section>
          <h2>Acceptance</h2>
          <p>
            By accessing or using Daykeeper, you agree to these terms. If you do
            not agree, do not use the Service.
          </p>
        </Section>

        <Section>
          <h2>Eligibility</h2>
          <p>
            You must be at least the minimum age required in your country to use
            the Service (at least 13), and you must provide accurate information
            when you create an account. If you use the Service on behalf of an
            organization, you represent that you are authorized to do so.
          </p>
        </Section>

        <Section>
          <h2>Your Account</h2>
          <ul>
            <li>
              You are responsible for keeping your login credentials and devices
              secure and for all activity that occurs under your account.
            </li>
            <li>
              You may sign in with an email and password or with Google. You are
              encouraged to enable two-factor authentication for added security.
            </li>
            <li>
              Notify us promptly if you believe your account has been accessed
              without authorization.
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Acceptable Use</h2>
          <ul>
            <li>Use Daykeeper lawfully, respectfully, and responsibly.</li>
            <li>
              Do not attempt to disrupt, overload, scrape, reverse engineer, or
              abuse the Service or its infrastructure.
            </li>
            <li>
              Do not post content that is illegal, infringing, harassing, hateful,
              deceptive, or harmful to others, and do not impersonate others.
            </li>
            <li>
              Do not attempt to access accounts, data, or areas of the Service you
              are not authorized to access.
            </li>
            <li>
              You are responsible for activity performed through your account and
              for any content you upload or publish.
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Your Content</h2>
          <p>
            You retain ownership of the content you submit to Daykeeper, including
            your day pages, posts, comments, tasks, events, and media. By using
            the Service, you grant Daykeeper the limited, non-exclusive rights
            necessary to host, store, process, display, and operate that content
            within the Service. You are responsible for ensuring you have the
            rights to the content you upload.
          </p>
        </Section>

        <Section>
          <h2>Social Features</h2>
          <p>
            Daykeeper includes social features such as profiles, feeds, follows,
            follow requests, close friends, comments, and blocking. You are
            expected to interact respectfully with other users, and you control
            the visibility of your content through your privacy settings. We may
            remove content or limit features that violate these terms or harm
            other users.
          </p>
        </Section>

        <Section>
          <h2>Third-Party Services</h2>
          <p>
            The Service relies on third-party providers, including Google Sign-In,
            push notification delivery, hosting, database, email, and media
            storage. Your use of features that depend on these providers may also
            be subject to their respective terms and policies.
          </p>
        </Section>

        <Section>
          <h2>Intellectual Property</h2>
          <p>
            The Daykeeper name, logo, branding, and the software and design of the
            Service are owned by Daykeeper and protected by applicable laws. These
            terms do not grant you any right to use Daykeeper&rsquo;s branding
            without permission.
          </p>
        </Section>

        <Section>
          <h2>Beta Status and Availability</h2>
          <p>
            Daykeeper is provided in beta and is under active development. We may
            add, change, suspend, or remove features at any time, and the Service
            may experience interruptions or, in rare cases, data loss. Public
            status and analytics pages are provided for transparency and may
            change without notice. We recommend keeping your own copies of content
            that is important to you.
          </p>
        </Section>

        <Section>
          <h2>Termination</h2>
          <p>
            You may stop using the Service or delete your account at any time.
            Access may be limited, suspended, or terminated if your use violates
            these terms, creates a security risk, or harms the platform or its
            users.
          </p>
        </Section>

        <Section>
          <h2>Disclaimers</h2>
          <p>
            Daykeeper is provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis. No warranty is made that the Service will be
            uninterrupted, error-free, secure, or suitable for a specific purpose.
          </p>
        </Section>

        <Section>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Daykeeper will not be liable
            for any indirect, incidental, or consequential damages, or for any
            loss of data, arising from your use of or inability to use the Service.
          </p>
        </Section>

        <Section>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these terms as the Service evolves. When we make material
            changes, we will update the effective date above. Continued use of the
            Service after changes take effect means you accept the updated terms.
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
