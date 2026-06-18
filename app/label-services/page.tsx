import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Label Services for Independent Artists and Music Teams | Digital Currency Inc.",
  description:
    "Digital Currency Inc. provides label services for independent artists, labels, managers, and creative teams, including music distribution support, release planning, royalties, reporting, playlist strategy, sync preparation, campaign planning, and AI music tools.",
  alternates: {
    canonical: "/label-services",
  },
  openGraph: {
    title: "Label Services for Independent Artists and Music Teams | DCI",
    description:
      "Independent label services, music distribution support, release planning, royalty reporting, playlist strategy, sync preparation, campaign planning, and AI music tools.",
    url: "https://www.digitalcurrensy.com/label-services",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. label services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Label Services for Independent Artists and Music Teams | DCI",
    description:
      "Independent label services, distribution support, release planning, royalty reporting, playlist strategy, sync preparation, campaign planning, and AI music tools.",
    images: ["/og-image.jpg"],
  },
};

const labelSupport = [
  "Music distribution support",
  "Release planning and rollout strategy",
  "Royalty reporting readiness",
  "Catalog and metadata organization",
  "Playlist pitching preparation",
  "Streaming strategy alignment",
  "Sync preparation and rights-readiness education",
  "AI music tools and creator technology guidance",
  "Campaign planning and asset organization",
  "Support for artists, labels, managers, and creative teams",
];

const serviceChecklist = [
  "Artist, release, and catalog context",
  "Distribution and delivery needs",
  "Metadata, credits, links, and assets",
  "Playlist, streaming, and campaign goals",
  "Royalty reporting and catalog organization",
  "Sync, rights, and licensing preparation",
];

const faqs = [
  {
    question: "What are label services?",
    answer:
      "Label services are support systems that help artists and music teams operate with more structure around releases, distribution, catalog organization, reporting, campaign planning, playlist readiness, sync preparation, and long-term music strategy.",
  },
  {
    question: "How does DCI support independent artists and labels?",
    answer:
      "DCI supports independent artists, labels, managers, and creative teams with music distribution support, release planning, royalty reporting readiness, catalog organization, playlist strategy, sync preparation, campaign planning, and AI music tools education.",
  },
  {
    question: "Is DCI only for record labels?",
    answer:
      "No. DCI is built for independent artists, artist teams, labels, managers, producers, creators, and creative teams that need more support than basic upload-only distribution.",
  },
  {
    question: "Do label services guarantee streams or playlist placements?",
    answer:
      "No. DCI does not guarantee streams, playlist placements, sales, press coverage, sync placements, or campaign outcomes. DCI helps music teams prepare, organize, review, and plan with more structure.",
  },
  {
    question: "How can artists request DCI label services?",
    answer:
      "Artists, labels, managers, and creative teams can request access through the invite form. DCI reviews each request before opening platform access.",
  },
];

export default function LabelServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Label services</p>
            <h1>Support for independent music teams.</h1>
            <p>
              Digital Currency Inc. provides label services for independent
              artists, labels, managers, and creative teams, including music
              distribution support, release planning, royalties, reporting,
              playlist strategy, sync preparation, campaign planning, and AI
              music tools.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/services" variant="secondary">
                Explore services
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              DCI helps music teams move beyond basic upload-only distribution
              by organizing release strategy, catalog information, playlist
              readiness, reporting context, sync preparation, and campaign
              support in one cleaner process.
            </p>
            <ul className="feature-list compact">
              {labelSupport.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">What DCI supports</p>
            <h2>Distribution, reporting, campaign planning, and catalog support.</h2>
            <p>
              DCI connects independent label services with music distribution,
              release planning, royalty reporting readiness, metadata review,
              playlist strategy, sync preparation, campaign organization, and AI
              music tools education.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {labelSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Access preparation</p>
            <h2>Bring your release, catalog, and campaign details together.</h2>
            <p>
              Label services work best when the artist, catalog, metadata,
              release timeline, campaign goals, playlist targets, royalty
              reporting needs, and sync context are clear before the release
              process begins.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {serviceChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="label-services-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Label services FAQ</p>
            <h2 id="label-services-faq-title">
              Independent label services, distribution support, and artist
              services explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching label services, music distribution support, royalty
              reporting, playlist strategy, sync preparation, campaign planning,
              catalog organization, and AI music tools.
            </p>
          </div>

          <div className="copy-stack">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-inner final-home-cta">
        <div className="cta-band">
          <div>
            <p className="eyebrow">DCI access</p>
            <h2>Build your independent music operation with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, campaign goals,
              reporting needs, playlist targets, sync context, and support
              needed. DCI reviews every invite request before opening platform
              access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
