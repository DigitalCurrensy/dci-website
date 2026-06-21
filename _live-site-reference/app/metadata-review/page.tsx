import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Music Metadata Review for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports music metadata review for independent artists, labels, managers, and creative teams with release metadata, credits, catalog organization, distribution readiness, royalty reporting, sync preparation, and label services.",
  alternates: {
    canonical: "/metadata-review",
  },
  openGraph: {
    title: "Music Metadata Review for Artists and Labels | DCI",
    description:
      "Music metadata review, release metadata, credits, catalog organization, distribution readiness, royalty reporting, sync preparation, and label services for independent music teams.",
    url: "https://www.digitalcurrensy.com/metadata-review",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music metadata review",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Metadata Review for Artists and Labels | DCI",
    description:
      "Music metadata review, release metadata, credits, catalog organization, distribution readiness, royalty reporting, sync preparation, and label services.",
    images: ["/og-image.jpg"],
  },
};

const metadataSupport = [
  "Music metadata review",
  "Release title, artist, and contributor information",
  "Credits, roles, and catalog details",
  "Distribution readiness review",
  "Royalty reporting readiness",
  "Catalog organization and release records",
  "Streaming, playlist, and campaign context",
  "Rights context and ownership information",
  "Sync preparation and licensing-readiness education",
  "Label services for independent music teams",
];

const metadataChecklist = [
  "Artist names, release titles, versions, and dates",
  "Featured artists, producers, writers, and contributors",
  "Credits, roles, splits context, and ownership notes",
  "ISRC, UPC, links, artwork, and asset information",
  "Distribution, streaming, and platform context",
  "Royalty reporting, sync, and catalog questions",
];

const faqs = [
  {
    question: "What is music metadata review?",
    answer:
      "Music metadata review is the process of checking release information, artist names, credits, contributors, catalog details, ownership context, distribution data, and platform-facing information before or after a release is delivered.",
  },
  {
    question: "Why does metadata matter for artists and labels?",
    answer:
      "Metadata helps connect music releases to artists, credits, contributors, platforms, royalty reporting, catalog records, playlist context, sync preparation, and distribution systems. Clean metadata can make release planning and reporting easier to manage.",
  },
  {
    question: "How does DCI support metadata review?",
    answer:
      "DCI helps independent artists, labels, managers, and creative teams organize release metadata, credits, catalog information, distribution context, royalty reporting readiness, rights context, sync preparation, and label service needs.",
  },
  {
    question: "Does metadata review help with royalty reporting?",
    answer:
      "Yes. Organized metadata can support royalty reporting readiness by connecting release records, artist names, credits, ownership context, platform data, distribution information, and catalog details in a clearer way.",
  },
  {
    question: "Who is DCI metadata review support built for?",
    answer:
      "DCI metadata review support is built for independent artists, labels, managers, producers, creators, and creative teams that need more structure around release metadata, catalog organization, distribution readiness, royalty reporting, sync preparation, and label services.",
  },
];

export default function MetadataReviewPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Metadata review</p>
            <h1>Clean up release metadata before it causes problems.</h1>
            <p>
              Digital Currency Inc. supports music metadata review for
              independent artists, labels, managers, and creative teams with
              release metadata, credits, catalog organization, distribution
              readiness, royalty reporting, sync preparation, and label
              services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/catalog-management" variant="secondary">
                Explore catalog management
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Metadata review works best when release titles, artist names,
              credits, contributors, catalog records, links, artwork, ownership
              context, and distribution details are organized before delivery.
            </p>
            <ul className="feature-list compact">
              {metadataSupport.slice(0, 4).map((item) => (
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
            <h2>Release metadata, credits, catalog details, and reporting context.</h2>
            <p>
              DCI helps music teams organize metadata review across distribution
              readiness, release planning, catalog management, credits, royalty
              reporting readiness, rights context, sync preparation, playlist
              activity, and label services.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {metadataSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Release readiness</p>
            <h2>Review the details before the release moves.</h2>
            <p>
              Before music is delivered, promoted, pitched, reported, or
              prepared for sync review, artists and labels need clear release
              metadata, credits, links, assets, ownership context, distribution
              details, and catalog notes.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {metadataChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="metadata-review-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Metadata review FAQ</p>
            <h2 id="metadata-review-faq-title">
              Music metadata, release credits, and catalog organization explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching music metadata review, release metadata, credits,
              catalog organization, distribution readiness, royalty reporting,
              sync preparation, and label services.
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
            <h2>Prepare your release metadata with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, metadata context,
              credits, reporting questions, rights context, distribution details,
              and support needed. DCI reviews every invite request before
              opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
