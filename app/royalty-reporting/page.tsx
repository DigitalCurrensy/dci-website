import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Royalty Reporting for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports royalty reporting readiness for independent artists, labels, managers, and creative teams with music royalties, distribution reporting, catalog organization, metadata review, release planning, and label services.",
  alternates: {
    canonical: "/royalty-reporting",
  },
  openGraph: {
    title: "Royalty Reporting for Artists and Labels | DCI",
    description:
      "Royalty reporting readiness, music royalties, distribution reporting, catalog organization, metadata review, release planning, and label services for independent music teams.",
    url: "https://www.digitalcurrensy.com/royalty-reporting",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. royalty reporting support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royalty Reporting for Artists and Labels | DCI",
    description:
      "Royalty reporting readiness, music royalties, distribution reporting, catalog organization, metadata review, release planning, and label services.",
    images: ["/og-image.jpg"],
  },
};

const reportingSupport = [
  "Royalty reporting readiness",
  "Music royalty organization",
  "Distribution reporting review",
  "Catalog and release data organization",
  "Metadata, credits, and ownership context",
  "Artist, label, and team reporting preparation",
  "Release planning and catalog tracking",
  "Playlist, streaming, and campaign context",
  "Sync preparation and rights-readiness education",
  "Label services for independent music teams",
];

const reportingChecklist = [
  "Artist, label, and release information",
  "Catalog, metadata, credits, and ownership context",
  "Distribution reporting and platform data",
  "Release timeline and campaign history",
  "Streaming, playlist, and promotion context",
  "Royalty reporting questions and support needs",
];

const faqs = [
  {
    question: "What is royalty reporting?",
    answer:
      "Royalty reporting is the process of organizing and reviewing music earnings information connected to releases, streams, sales, licensing, distribution activity, and catalog performance so artists, labels, managers, and teams can understand reporting with more clarity.",
  },
  {
    question: "How does DCI support royalty reporting readiness?",
    answer:
      "DCI helps independent artists, labels, managers, and creative teams prepare royalty reporting by organizing release information, catalog data, metadata, distribution reporting context, streaming history, campaign details, and label service needs.",
  },
  {
    question: "Does DCI collect royalties for artists?",
    answer:
      "DCI supports royalty reporting readiness and catalog organization. Specific royalty collection, payment, and administration details depend on the services approved for each artist, label, or team after review.",
  },
  {
    question: "Why does metadata matter for royalty reporting?",
    answer:
      "Metadata helps connect releases, credits, ownership context, contributors, catalog details, and distribution information. Clean metadata can make royalty reporting, catalog tracking, release planning, and rights review easier to organize.",
  },
  {
    question: "Who is DCI royalty reporting support built for?",
    answer:
      "DCI royalty reporting support is built for independent artists, labels, managers, producers, creators, and creative teams that want more structure around music royalties, distribution reporting, catalog organization, release planning, and label services.",
  },
];

export default function RoyaltyReportingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Royalty reporting</p>
            <h1>Understand royalties with cleaner reporting context.</h1>
            <p>
              Digital Currency Inc. supports royalty reporting readiness for
              independent artists, labels, managers, and creative teams with
              music royalties, distribution reporting, catalog organization,
              metadata review, release planning, and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/artist-royalties" variant="secondary">
                Explore royalties
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Royalty reporting works best when releases, metadata, catalog
              information, credits, ownership context, platform reports, and
              campaign history are organized before questions become urgent.
            </p>
            <ul className="feature-list compact">
              {reportingSupport.slice(0, 4).map((item) => (
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
            <h2>Music royalties, catalog data, and distribution reporting.</h2>
            <p>
              DCI helps music teams organize royalty reporting readiness with
              catalog information, metadata review, release planning,
              distribution reporting context, playlist and streaming activity,
              sync preparation, and label services.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {reportingSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Reporting readiness</p>
            <h2>Bring release, catalog, and reporting details together.</h2>
            <p>
              Before royalty questions can be reviewed clearly, artists and
              labels need organized release details, metadata, catalog context,
              reporting exports, streaming history, campaign timing, and support
              needs. DCI helps prepare those pieces with more structure.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {reportingChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="royalty-reporting-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Royalty reporting FAQ</p>
            <h2 id="royalty-reporting-faq-title">
              Music royalties, reporting, and catalog organization explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching royalty reporting, music royalties, distribution
              reporting, catalog organization, metadata review, release
              planning, and label services.
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
            <h2>Prepare your royalty reporting with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, reporting
              questions, metadata context, distribution details, and support
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
