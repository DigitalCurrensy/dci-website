import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Music Catalog Management for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports music catalog management for independent artists, labels, managers, and creative teams with catalog organization, metadata review, royalty reporting readiness, distribution reporting, rights context, release planning, sync preparation, and label services.",
  alternates: {
    canonical: "/catalog-management",
  },
  openGraph: {
    title: "Music Catalog Management for Artists and Labels | DCI",
    description:
      "Catalog organization, metadata review, release records, royalty reporting readiness, distribution reporting, rights context, sync preparation, and label services for independent music teams.",
    url: "https://www.digitalcurrensy.com/catalog-management",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music catalog management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Catalog Management for Artists and Labels | DCI",
    description:
      "Music catalog management, metadata review, royalty reporting readiness, distribution reporting, rights context, release planning, sync preparation, and label services.",
    images: ["/og-image.jpg"],
  },
};

const catalogSupport = [
  "Music catalog organization",
  "Metadata, credits, and release record review",
  "Royalty reporting readiness",
  "Distribution reporting context",
  "Rights and ownership information organization",
  "Release planning and rollout history",
  "Streaming, playlist, and campaign context",
  "Sync preparation and licensing-readiness education",
  "Artist, label, and manager catalog support",
  "Label services for independent music teams",
];

const catalogChecklist = [
  "Artist, label, and catalog information",
  "Release titles, dates, links, metadata, and credits",
  "Ownership, contributor, and rights context",
  "Distribution and reporting information",
  "Streaming, playlist, and campaign history",
  "Sync, licensing, and royalty reporting questions",
];

const faqs = [
  {
    question: "What is music catalog management?",
    answer:
      "Music catalog management is the process of organizing release records, metadata, credits, ownership context, distribution information, reporting details, campaign history, and rights-readiness information so artists, labels, managers, and teams can manage their music with more clarity.",
  },
  {
    question: "How does DCI support catalog management?",
    answer:
      "DCI supports catalog management by helping independent music teams organize release information, metadata, credits, distribution reporting context, royalty reporting readiness, playlist and streaming history, rights context, sync preparation, and label service needs.",
  },
  {
    question: "Why does catalog organization matter for artists?",
    answer:
      "Catalog organization helps artists and teams understand what has been released, where it was distributed, how it was promoted, what metadata and credits are connected to it, and what reporting or rights questions may need review.",
  },
  {
    question: "Does catalog management help with royalty reporting?",
    answer:
      "Yes. Clean catalog information can make royalty reporting readiness easier by connecting release records, metadata, credits, platform data, distribution context, streaming activity, and ownership information in a more organized way.",
  },
  {
    question: "Who is DCI catalog management support built for?",
    answer:
      "DCI catalog management support is built for independent artists, labels, managers, producers, creators, and creative teams that need more structure around releases, metadata, reporting, distribution, rights context, sync preparation, and label services.",
  },
];

export default function CatalogManagementPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Catalog management</p>
            <h1>Organize your music catalog with more clarity.</h1>
            <p>
              Digital Currency Inc. supports music catalog management for
              independent artists, labels, managers, and creative teams with
              catalog organization, metadata review, royalty reporting readiness,
              distribution reporting, rights context, release planning, sync
              preparation, and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/royalty-reporting" variant="secondary">
                Explore reporting
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Catalog management works best when release records, metadata,
              credits, ownership context, reporting information, streaming
              history, and campaign details are organized before the next
              release begins.
            </p>
            <ul className="feature-list compact">
              {catalogSupport.slice(0, 4).map((item) => (
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
            <h2>Catalog records, metadata, reporting, and rights context.</h2>
            <p>
              DCI helps music teams organize catalog information across release
              planning, distribution reporting, royalty reporting readiness,
              metadata review, credits, rights context, playlist activity, sync
              preparation, and label services.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {catalogSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Catalog readiness</p>
            <h2>Bring release records and catalog details together.</h2>
            <p>
              A stronger catalog starts with organized release data, metadata,
              credits, rights context, distribution details, reporting exports,
              streaming history, campaign notes, and sync-readiness questions.
              DCI helps prepare those pieces with more structure.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {catalogChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="catalog-management-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Catalog management FAQ</p>
            <h2 id="catalog-management-faq-title">
              Music catalog organization, metadata, and reporting explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching music catalog management, metadata review, royalty
              reporting readiness, distribution reporting, release records,
              rights context, sync preparation, and label services.
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
            <h2>Prepare your catalog with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, metadata context,
              reporting questions, rights context, distribution details, and
              support needed. DCI reviews every invite request before opening
              platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
