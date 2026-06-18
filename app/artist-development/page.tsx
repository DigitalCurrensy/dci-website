import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Artist Development Support | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports independent artists, labels, managers, and creative teams with artist development, artist services, release strategy, music business support, playlist strategy, music marketing, catalog management, metadata review, royalty reporting, distribution reporting, and label services.",
  alternates: {
    canonical: "/artist-development",
  },
  openGraph: {
    title: "Artist Development Support | DCI",
    description:
      "Artist development, artist services, release strategy, music business support, playlist strategy, music marketing, catalog management, metadata review, royalty reporting, distribution reporting, and label services.",
    url: "https://www.digitalcurrensy.com/artist-development",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. artist development support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artist Development Support | DCI",
    description:
      "Artist development support for independent artists, labels, managers, and creative teams across releases, catalog, marketing, playlists, reporting, and label services.",
    images: ["/og-image.jpg"],
  },
};

const artistSupport = [
  "Artist development support",
  "Artist services and label services",
  "Release planning and release strategy",
  "Music business support",
  "Playlist strategy and playlist pitching preparation",
  "Music marketing and promotion planning",
  "Catalog management and metadata review",
  "Distribution reporting and platform context",
  "Royalty reporting readiness",
  "Sync preparation and rights context",
];

const artistChecklist = [
  "Artist, release, and catalog information",
  "Release goals, rollout timeline, and support needs",
  "Music links, metadata, credits, and assets",
  "Playlist, streaming, sync, and campaign context",
  "Distribution, royalty, and reporting questions",
  "Marketing, promotion, and label service needs",
];

const faqs = [
  {
    question: "What is artist development?",
    answer:
      "Artist development is the process of helping artists organize the structure behind their music career, including release planning, catalog management, music marketing, playlist strategy, metadata review, distribution reporting, royalty reporting, sync preparation, and business support.",
  },
  {
    question: "How does DCI support artist development?",
    answer:
      "DCI supports artist development by helping independent artists, labels, managers, and creative teams organize release information, catalog records, metadata, playlist goals, streaming context, marketing needs, royalty questions, distribution reports, and label service requests.",
  },
  {
    question: "Is artist development only about marketing?",
    answer:
      "No. Marketing is one part of artist development, but DCI also supports release strategy, catalog organization, metadata review, distribution reporting, royalty reporting readiness, playlist strategy, sync preparation, and broader music business support.",
  },
  {
    question: "Why does catalog management matter for artist development?",
    answer:
      "Catalog management helps connect an artist's releases to metadata, credits, rights context, distribution reports, royalty questions, playlist history, sync preparation, marketing campaigns, and long-term growth planning.",
  },
  {
    question: "Who is DCI artist development support built for?",
    answer:
      "DCI artist development support is built for independent artists, labels, managers, producers, creators, and creative teams that need help organizing release planning, artist services, music business support, catalog management, metadata review, playlist strategy, music marketing, royalty reporting, distribution reporting, sync preparation, and label services.",
  },
];

export default function ArtistDevelopmentPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Artist development</p>
            <h1>Build the structure behind your artist growth.</h1>
            <p>
              Digital Currency Inc. supports independent artists, labels,
              managers, and creative teams with artist development, artist
              services, release strategy, music business support, playlist
              strategy, music marketing, catalog management, metadata review,
              royalty reporting, distribution reporting, and label services.
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
              Artist development works best when releases, catalog records,
              metadata, playlist goals, streaming context, campaign assets,
              reporting questions, marketing needs, and label service support
              are organized with a clear plan.
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
            <h2>Artist services, release strategy, catalog structure, and growth planning.</h2>
            <p>
              DCI helps artists and music teams organize development support
              across release planning, artist services, label services, music
              business support, playlist strategy, music marketing, catalog
              management, metadata review, royalty reporting, distribution
              reporting, and sync preparation.
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
            <h2>Connect release planning to long-term artist development.</h2>
            <p>
              Independent artists need more than a single campaign. DCI helps
              organize release goals, catalog records, metadata, credits,
              streaming context, playlist planning, marketing direction,
              distribution reporting, royalty questions, sync preparation, and
              support needs.
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

      <section className="section" aria-labelledby="artist-development-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Artist development FAQ</p>
            <h2 id="artist-development-faq-title">
              Artist services, release strategy, and growth support explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching artist development, artist services, release strategy,
              music business support, playlist strategy, music marketing,
              catalog management, metadata review, royalty reporting,
              distribution reporting, sync preparation, and label services.
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
            <h2>Prepare your artist development request with DCI.</h2>
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
