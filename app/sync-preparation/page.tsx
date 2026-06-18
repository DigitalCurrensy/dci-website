import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Sync Preparation for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports sync preparation for independent artists, labels, managers, and creative teams with sync licensing readiness, catalog organization, metadata review, rights context, release records, distribution reporting, playlist strategy, and label services.",
  alternates: {
    canonical: "/sync-preparation",
  },
  openGraph: {
    title: "Sync Preparation for Artists and Labels | DCI",
    description:
      "Sync preparation, sync licensing readiness, catalog organization, metadata review, rights context, release records, distribution reporting, playlist strategy, and label services.",
    url: "https://www.digitalcurrensy.com/sync-preparation",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. sync preparation support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sync Preparation for Artists and Labels | DCI",
    description:
      "Sync preparation, sync licensing readiness, catalog organization, metadata review, rights context, release records, and label services.",
    images: ["/og-image.jpg"],
  },
};

const syncSupport = [
  "Sync preparation planning",
  "Sync licensing readiness education",
  "Catalog organization for music review",
  "Metadata, credits, and release record review",
  "Rights context and ownership information",
  "Music for film, TV, ads, games, trailers, and promos",
  "Distribution reporting and platform context",
  "Playlist, streaming, and campaign history",
  "Release planning and catalog readiness",
  "Label services for independent music teams",
];

const syncChecklist = [
  "Artist, label, and catalog information",
  "Release links, metadata, credits, and versions",
  "Ownership, contributor, and rights context",
  "Clean audio, artwork, and asset information",
  "Streaming, playlist, and campaign history",
  "Sync goals, usage context, and support needs",
];

const faqs = [
  {
    question: "What is sync preparation?",
    answer:
      "Sync preparation is the process of organizing music, catalog information, metadata, credits, rights context, ownership notes, release records, and assets so music can be reviewed more clearly for film, television, advertising, games, trailers, promos, and other visual media opportunities.",
  },
  {
    question: "How does DCI support sync preparation?",
    answer:
      "DCI helps independent artists, labels, managers, and creative teams organize sync preparation through catalog organization, metadata review, release records, rights context, distribution reporting, playlist and streaming history, campaign context, and label service support.",
  },
  {
    question: "Is sync preparation different from sync licensing?",
    answer:
      "Yes. Sync preparation is the organization work that happens before music is reviewed or pitched for sync opportunities. Sync licensing is the permission and business process connected to using music in visual media.",
  },
  {
    question: "Why does metadata matter for sync preparation?",
    answer:
      "Metadata helps connect each release to artist names, credits, contributors, versions, catalog records, rights context, links, and reporting information. Clean metadata can make sync preparation easier to review and organize.",
  },
  {
    question: "Who is DCI sync preparation support built for?",
    answer:
      "DCI sync preparation support is built for independent artists, labels, managers, producers, creators, and creative teams that need more structure around catalog organization, metadata review, rights context, release records, distribution reporting, playlist history, and label services.",
  },
];

export default function SyncPreparationPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Sync preparation</p>
            <h1>Prepare your catalog for sync review.</h1>
            <p>
              Digital Currency Inc. supports sync preparation for independent
              artists, labels, managers, and creative teams with sync licensing
              readiness, catalog organization, metadata review, rights context,
              release records, distribution reporting, playlist strategy, and
              label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/sync-licensing" variant="secondary">
                Explore sync licensing
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Sync preparation works best when catalog details, release records,
              metadata, credits, rights context, ownership notes, links, assets,
              and campaign history are organized before music is reviewed.
            </p>
            <ul className="feature-list compact">
              {syncSupport.slice(0, 4).map((item) => (
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
            <h2>Catalog readiness, rights context, and sync organization.</h2>
            <p>
              DCI helps music teams organize sync preparation across catalog
              management, metadata review, release records, rights context,
              distribution reporting, playlist history, streaming context,
              release planning, and label services.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {syncSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Sync readiness</p>
            <h2>Organize the details before music is reviewed.</h2>
            <p>
              Before music is considered for film, television, advertising,
              games, trailers, promos, or brand uses, artists and labels need
              organized catalog records, release metadata, credits, rights
              context, ownership notes, assets, links, and support needs.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {syncChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="sync-preparation-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Sync preparation FAQ</p>
            <h2 id="sync-preparation-faq-title">
              Sync readiness, catalog prep, and rights context explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching sync preparation, sync licensing readiness, music for
              film and TV, catalog organization, metadata review, rights
              context, distribution reporting, and label services.
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
            <h2>Prepare your sync materials with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, metadata context,
              rights questions, sync goals, distribution details, campaign
              history, and support needed. DCI reviews every invite request
              before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
