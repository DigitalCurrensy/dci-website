import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Independent Label Services | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports independent labels, artists, managers, and creative teams with label services, artist services, release planning, catalog management, royalty reporting, distribution reporting, playlist strategy, sync preparation, music marketing, and independent music operations.",
  alternates: {
    canonical: "/independent-label-services",
  },
  openGraph: {
    title: "Independent Label Services | DCI",
    description:
      "Independent label services, artist services, release planning, catalog management, royalty reporting, distribution reporting, playlist strategy, sync preparation, and music marketing.",
    url: "https://www.digitalcurrensy.com/independent-label-services",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. independent label services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Independent Label Services | DCI",
    description:
      "Label services for independent artists, labels, managers, and creative teams across releases, catalog, royalties, distribution, playlists, sync, and marketing.",
    images: ["/og-image.jpg"],
  },
};

const labelSupport = [
  "Independent label services",
  "Artist services and release support",
  "Release planning and release strategy",
  "Catalog management and metadata review",
  "Royalty reporting readiness",
  "Distribution reporting and platform context",
  "Playlist strategy and playlist pitching preparation",
  "Sync preparation and rights context",
  "Music marketing and promotion planning",
  "Independent music operation support",
];

const labelChecklist = [
  "Label, artist, and catalog information",
  "Release goals, rollout timeline, and support needs",
  "Music links, metadata, credits, and assets",
  "Distribution, royalty, and reporting questions",
  "Playlist, streaming, sync, and campaign context",
  "Marketing, promotion, and label service needs",
];

const faqs = [
  {
    question: "What are independent label services?",
    answer:
      "Independent label services help artists, labels, managers, and creative teams organize release planning, catalog management, metadata review, royalty reporting, distribution reporting, playlist strategy, sync preparation, music marketing, and operational support without needing a traditional major-label structure.",
  },
  {
    question: "How does DCI support independent labels?",
    answer:
      "DCI helps independent labels organize artist information, release records, catalog details, metadata, royalty questions, distribution context, playlist goals, sync preparation, marketing needs, reporting readiness, and label service requests.",
  },
  {
    question: "Are independent label services only for labels?",
    answer:
      "No. DCI independent label services are also built for independent artists, managers, producers, creators, and creative teams that need label-style structure around releases, catalog organization, reporting, playlist strategy, sync preparation, and music marketing.",
  },
  {
    question: "Why does catalog management matter for independent labels?",
    answer:
      "Catalog management helps connect releases to metadata, credits, contributors, rights context, distribution reports, royalty questions, playlist history, sync preparation, marketing campaigns, and long-term label planning.",
  },
  {
    question: "Who is DCI independent label services support built for?",
    answer:
      "DCI independent label services support is built for independent labels, artists, managers, producers, creators, and creative teams that need help organizing release planning, artist services, royalty reporting, distribution reporting, catalog management, metadata review, playlist strategy, sync preparation, music marketing, and label operations.",
  },
];

export default function IndependentLabelServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Independent label services</p>
            <h1>Support your independent label operation with DCI.</h1>
            <p>
              Digital Currency Inc. supports independent labels, artists,
              managers, and creative teams with label services, artist services,
              release planning, catalog management, royalty reporting,
              distribution reporting, playlist strategy, sync preparation, music
              marketing, and independent music operations.
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
              Independent label work needs structure across releases, catalog
              records, metadata, royalty questions, distribution reporting,
              playlist goals, sync context, marketing needs, and artist support.
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
            <h2>Label operations, artist support, release planning, and catalog structure.</h2>
            <p>
              DCI helps independent music teams organize label services across
              artist support, release planning, catalog management, metadata
              review, royalty reporting, distribution reporting, playlist
              strategy, sync preparation, music marketing, and promotion.
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
            <p className="eyebrow">Label readiness</p>
            <h2>Connect artist, release, catalog, and reporting details.</h2>
            <p>
              Independent labels need organized artist records, release
              timelines, metadata, credits, music links, distribution context,
              royalty reporting questions, playlist strategy, sync preparation,
              campaign assets, and support needs.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {labelChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="independent-label-services-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Independent label services FAQ</p>
            <h2 id="independent-label-services-faq-title">
              Label services, artist support, and independent music operations explained.
            </h2>
            <p>
              Clear answers for labels, artists, managers, and creative teams
              researching independent label services, artist services, release
              planning, catalog management, royalty reporting, distribution
              reporting, playlist strategy, sync preparation, music marketing,
              and label operations.
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
            <h2>Prepare your independent label services request with DCI.</h2>
            <p>
              Share the label, artist, release, catalog, music links, reporting
              needs, royalty questions, playlist goals, sync context, campaign
              goals, metadata details, and support needed. DCI reviews every
              invite request before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
