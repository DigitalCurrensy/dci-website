import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Music Business Support for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports independent artists, labels, managers, and creative teams with music business support, artist services, label services, release planning, royalty reporting, distribution reporting, catalog management, sync preparation, playlist strategy, and music marketing.",
  alternates: {
    canonical: "/music-business-support",
  },
  openGraph: {
    title: "Music Business Support for Artists and Labels | DCI",
    description:
      "Music business support, artist services, label services, release planning, royalty reporting, distribution reporting, catalog management, sync preparation, playlist strategy, and music marketing.",
    url: "https://www.digitalcurrensy.com/music-business-support",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music business support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Business Support for Artists and Labels | DCI",
    description:
      "Music business support for independent artists, labels, managers, and creative teams across releases, royalties, catalog, sync, playlists, and label services.",
    images: ["/og-image.jpg"],
  },
};

const businessSupport = [
  "Music business support",
  "Artist services and label services",
  "Release planning and release strategy",
  "Royalty reporting readiness",
  "Distribution reporting and platform context",
  "Catalog management and metadata review",
  "Playlist strategy and playlist pitching preparation",
  "Sync preparation and rights context",
  "Music marketing and promotion planning",
  "Independent music operation support",
];

const businessChecklist = [
  "Artist, label, and catalog information",
  "Release goals, rollout timeline, and support needs",
  "Music links, metadata, credits, and catalog records",
  "Distribution, royalty, and reporting questions",
  "Playlist, streaming, sync, and campaign context",
  "Marketing, promotion, and label service needs",
];

const faqs = [
  {
    question: "What is music business support?",
    answer:
      "Music business support helps artists, labels, managers, and creative teams organize the operational side of music releases, including release planning, royalty reporting, distribution reporting, catalog management, metadata, playlist strategy, sync preparation, music marketing, and label services.",
  },
  {
    question: "How does DCI support independent music teams?",
    answer:
      "DCI supports independent music teams by helping organize release information, catalog records, metadata, royalty questions, distribution context, playlist goals, sync preparation, marketing needs, reporting readiness, and label service requests.",
  },
  {
    question: "Is music business support only for labels?",
    answer:
      "No. DCI music business support is built for independent artists, labels, managers, producers, creators, and creative teams that need more structure around releases, catalog organization, reporting, marketing, playlist strategy, sync preparation, and music operations.",
  },
  {
    question: "Why does catalog organization matter for music business support?",
    answer:
      "Catalog organization helps connect releases to metadata, credits, rights context, distribution data, royalty reporting, playlist history, sync preparation, marketing campaigns, and long-term artist or label planning.",
  },
  {
    question: "Who is DCI music business support built for?",
    answer:
      "DCI music business support is built for independent artists, labels, managers, producers, creators, and teams that need help organizing release planning, royalty reporting, distribution reporting, metadata review, catalog management, sync preparation, playlist strategy, music marketing, and label services.",
  },
];

export default function MusicBusinessSupportPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music business support</p>
            <h1>Build your music operation with more structure.</h1>
            <p>
              Digital Currency Inc. supports independent artists, labels,
              managers, and creative teams with music business support, artist
              services, label services, release planning, royalty reporting,
              distribution reporting, catalog management, sync preparation,
              playlist strategy, and music marketing.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/artist-services" variant="secondary">
                Explore artist services
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Music business support works best when release records, catalog
              details, metadata, reporting questions, playlist goals, sync
              context, marketing needs, and label service requests are organized
              before the next move.
            </p>
            <ul className="feature-list compact">
              {businessSupport.slice(0, 4).map((item) => (
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
            <h2>Release operations, catalog structure, reporting, and strategy.</h2>
            <p>
              DCI helps music teams organize business support across artist
              services, label services, release planning, royalty reporting,
              distribution reporting, catalog management, metadata review,
              playlist strategy, sync preparation, music marketing, and
              promotion.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {businessSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Independent music operations</p>
            <h2>Connect the business details behind each release.</h2>
            <p>
              Independent music teams need more than a release date. DCI helps
              organize the information behind catalog records, distribution,
              royalty reporting, playlist planning, sync readiness, metadata,
              marketing, and label-level support.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {businessChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="music-business-support-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music business support FAQ</p>
            <h2 id="music-business-support-faq-title">
              Artist services, label services, and music operations explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching music business support, artist services, label
              services, release planning, royalty reporting, distribution
              reporting, catalog management, sync preparation, playlist
              strategy, and music marketing.
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
            <h2>Prepare your music business support request with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, reporting needs,
              royalty questions, playlist goals, sync context, campaign goals,
              metadata details, and support needed. DCI reviews every invite
              request before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
