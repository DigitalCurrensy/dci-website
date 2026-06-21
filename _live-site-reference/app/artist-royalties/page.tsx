import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Music Royalties and Reporting for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. helps artists, labels, managers, and creative teams understand music royalties, distribution reporting, catalog organization, streaming strategy, playlist readiness, sync preparation, and label services.",
  alternates: {
    canonical: "/artist-royalties",
  },
  openGraph: {
    title: "Music Royalties and Reporting for Artists and Labels | DCI",
    description:
      "DCI supports artists and labels with royalty reporting guidance, release planning, catalog organization, music distribution, streaming strategy, sync preparation, and label services.",
    url: "https://www.digitalcurrensy.com/artist-royalties",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music royalties and reporting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Royalties and Reporting for Artists and Labels | DCI",
    description:
      "Music royalties, royalty reporting, catalog organization, music distribution, streaming strategy, playlist readiness, sync prep, and label services.",
    images: ["/og-image.jpg"],
  },
};

const royaltySupport = [
  "Music royalty reporting guidance",
  "Distribution royalty visibility and release tracking",
  "Catalog organization for artists and labels",
  "Metadata and release information review",
  "Streaming performance context",
  "Playlist strategy connected to catalog growth",
  "Sync preparation and rights-readiness education",
  "Label services for artist teams and creative operators",
];

const audience = [
  "Independent artists tracking release performance",
  "Labels managing multiple artists or catalogs",
  "Managers reviewing reporting and release activity",
  "Producers and creators organizing catalog information",
  "Artist teams that need more structure around royalties and reporting",
];

const faqs = [
  {
    question: "What are music royalties?",
    answer:
      "Music royalties are revenue generated from the use, streaming, sale, performance, licensing, or distribution of music. Different royalty types can involve sound recordings, compositions, publishing, performance rights, neighboring rights, sync licensing, and other music business areas.",
  },
  {
    question: "How does DCI support royalty reporting?",
    answer:
      "DCI supports royalty reporting by helping artists, labels, managers, and creative teams understand distribution reporting, organize release information, review catalog activity, and connect royalty visibility to release strategy and catalog planning.",
  },
  {
    question: "Does music distribution affect royalties?",
    answer:
      "Yes. Music distribution affects how releases are delivered to platforms, how metadata is organized, how reporting is received, and how artists and labels review streaming and digital store activity connected to their catalog.",
  },
  {
    question: "Who is DCI royalty support built for?",
    answer:
      "DCI royalty support is built for independent artists, labels, managers, producers, creators, and artist teams that want more structure around music distribution, reporting, catalog growth, and release planning.",
  },
  {
    question: "Does DCI provide legal, tax, or financial advice?",
    answer:
      "No. DCI does not provide legal, tax, financial, or investment advice. Artists and labels should speak with qualified professionals about contracts, royalty rights, publishing, taxes, accounting, and ownership questions.",
  },
];

export default function ArtistRoyaltiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music royalties and reporting</p>
            <h1>Royalty visibility with release strategy behind it.</h1>
            <p>
              Digital Currency Inc. helps artists, labels, managers, and
              creative teams understand royalty reporting, catalog organization,
              music distribution, streaming strategy, playlist readiness, sync
              preparation, and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/music-distribution" variant="secondary">
                Explore distribution
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Royalties are easier to understand when releases, metadata,
              reporting, catalog records, and campaign activity are organized.
              DCI gives artists and teams a more structured way to connect
              distribution activity with long-term catalog growth.
            </p>
            <ul className="feature-list compact">
              {royaltySupport.slice(0, 4).map((item) => (
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
            <h2>Reporting, catalog organization, and release context.</h2>
            <p>
              Royalty support is not only about numbers. Artists and labels need
              clean release information, organized catalog records, reporting
              context, streaming performance awareness, and a plan for what
              happens after each release goes live.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {royaltySupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Who it is for</p>
            <h2>Built for artists, labels, managers, and catalog teams.</h2>
            <p>
              DCI supports music teams that want a clearer operating layer
              around releases, royalties, catalog tracking, distribution
              reporting, streaming strategy, and label-level planning.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="artist-royalties-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Artist royalties FAQ</p>
            <h2 id="artist-royalties-faq-title">
              Music royalties, reporting, and catalog strategy explained.
            </h2>
            <p>
              Clear answers for artists and labels researching music royalties,
              royalty reporting, distribution reporting, catalog organization,
              streaming strategy, sync preparation, and label services.
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
            <h2>Organize your next release with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, royalty reporting
              needs, and support needed. DCI reviews every invite request before
              opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
