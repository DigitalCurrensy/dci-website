import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Artist Services for Independent Music Teams | Digital Currency Inc.",
  description:
    "Digital Currency Inc. provides artist services for independent artists, managers, labels, and creative teams, including music distribution support, release planning, royalties, reporting, playlist strategy, music promotion, sync preparation, and label services.",
  alternates: {
    canonical: "/artist-services",
  },
  openGraph: {
    title: "Artist Services for Independent Music Teams | DCI",
    description:
      "Artist services for independent music teams, including distribution support, release planning, royalties, reporting, playlist strategy, music promotion, sync preparation, and label services.",
    url: "https://www.digitalcurrensy.com/artist-services",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. artist services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artist Services for Independent Music Teams | DCI",
    description:
      "Distribution support, release planning, royalties, reporting, playlist strategy, music promotion, sync preparation, and label services for independent artists.",
    images: ["/og-image.jpg"],
  },
};

const artistSupport = [
  "Music distribution support",
  "Release planning and rollout strategy",
  "Music promotion preparation",
  "Playlist pitching readiness",
  "Streaming strategy alignment",
  "Royalty reporting readiness",
  "Catalog and metadata organization",
  "Sync preparation and rights-readiness education",
  "AI music tools and creator technology guidance",
  "Label services for independent artist teams",
];

const artistChecklist = [
  "Artist profile, release story, and catalog context",
  "Music links, metadata, credits, and assets",
  "Distribution and release timeline needs",
  "Playlist, streaming, and promotion goals",
  "Royalty reporting and catalog organization needs",
  "Sync, rights, and campaign planning context",
];

const faqs = [
  {
    question: "What are artist services?",
    answer:
      "Artist services are support systems that help independent artists and their teams manage release planning, distribution, promotion, playlist readiness, streaming strategy, royalty reporting, catalog organization, sync preparation, and label-level operations.",
  },
  {
    question: "How does DCI support independent artists?",
    answer:
      "DCI supports independent artists with music distribution support, release planning, promotion preparation, playlist strategy, streaming context, metadata review, royalty reporting readiness, sync preparation, AI music tools education, and label services.",
  },
  {
    question: "Are DCI artist services only for solo artists?",
    answer:
      "No. DCI artist services are built for independent artists, managers, labels, producers, creators, and creative teams that need more structure around releases, catalog growth, reporting, distribution, promotion, and strategy.",
  },
  {
    question: "Does DCI guarantee streams, playlist placements, or sales?",
    answer:
      "No. DCI does not guarantee streams, playlist placements, sales, press coverage, sync placements, followers, or specific campaign outcomes. DCI supports preparation, planning, organization, review, and strategy.",
  },
  {
    question: "How can artists request DCI artist services?",
    answer:
      "Artists, managers, labels, and creative teams can request access through the invite form. DCI reviews every invite request before opening platform access.",
  },
];

export default function ArtistServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Artist services</p>
            <h1>Support for independent artists and teams.</h1>
            <p>
              Digital Currency Inc. provides artist services for independent
              artists, managers, labels, and creative teams, including music
              distribution support, release planning, royalties, reporting,
              playlist strategy, music promotion, sync preparation, and label
              services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/label-services" variant="secondary">
                Explore label services
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              DCI helps artists prepare releases with more structure around
              delivery, metadata, campaign planning, playlist readiness,
              streaming goals, royalty reporting, catalog organization, and
              long-term creative strategy.
            </p>
            <ul className="feature-list compact">
              {artistSupport.slice(0, 4).map((item) => (
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
            <h2>Release planning, distribution, promotion, and reporting.</h2>
            <p>
              DCI connects artist services with music distribution, release
              planning, music promotion, playlist pitching preparation,
              streaming strategy, royalty reporting readiness, catalog
              organization, sync preparation, and label services.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {artistSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Artist readiness</p>
            <h2>Organize the release before the campaign moves.</h2>
            <p>
              Artist services work best when the release story, catalog details,
              metadata, music links, campaign goals, playlist targets, streaming
              context, royalty reporting needs, and sync preparation are clear
              before rollout.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {artistChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="artist-services-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Artist services FAQ</p>
            <h2 id="artist-services-faq-title">
              Independent artist services, release planning, and distribution
              support explained.
            </h2>
            <p>
              Clear answers for artists, managers, labels, and creative teams
              researching artist services, music distribution support, release
              planning, music promotion, playlist strategy, royalty reporting,
              sync preparation, catalog organization, and label services.
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
            <h2>Build your artist operation with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, campaign goals,
              playlist targets, streaming context, royalty reporting needs, sync
              context, and support needed. DCI reviews every invite request
              before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
