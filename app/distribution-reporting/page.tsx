import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Distribution Reporting for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports distribution reporting readiness for independent artists, labels, managers, and creative teams with music distribution reports, platform reporting, royalty reporting readiness, catalog organization, metadata review, release planning, and label services.",
  alternates: {
    canonical: "/distribution-reporting",
  },
  openGraph: {
    title: "Distribution Reporting for Artists and Labels | DCI",
    description:
      "Distribution reporting readiness, music distribution reports, platform reporting, royalty reporting readiness, catalog organization, metadata review, release planning, and label services.",
    url: "https://www.digitalcurrensy.com/distribution-reporting",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. distribution reporting support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Distribution Reporting for Artists and Labels | DCI",
    description:
      "Music distribution reporting, platform reporting, royalty reporting readiness, catalog organization, metadata review, release planning, and label services.",
    images: ["/og-image.jpg"],
  },
};

const reportingSupport = [
  "Distribution reporting readiness",
  "Music distribution report organization",
  "Platform reporting context",
  "Royalty reporting readiness",
  "Catalog organization and release records",
  "Metadata, credits, and release data review",
  "Streaming, playlist, and campaign context",
  "Release planning and rollout history",
  "Sync preparation and rights-readiness education",
  "Label services for independent music teams",
];

const reportingChecklist = [
  "Artist, label, and release information",
  "Distributor, platform, and reporting context",
  "Streaming, playlist, and campaign history",
  "Release dates, links, metadata, and credits",
  "Catalog records and royalty reporting questions",
  "Support needs for future release planning",
];

const faqs = [
  {
    question: "What is distribution reporting?",
    answer:
      "Distribution reporting is the process of reviewing and organizing information connected to music releases, platforms, streams, stores, reporting exports, catalog records, and royalty reporting context so artists, labels, managers, and teams can better understand release performance.",
  },
  {
    question: "How does DCI support distribution reporting readiness?",
    answer:
      "DCI helps independent artists, labels, managers, and creative teams organize distribution reporting context, release records, metadata, catalog information, royalty reporting questions, streaming activity, playlist history, campaign details, and label service needs.",
  },
  {
    question: "Does distribution reporting help with royalty reporting?",
    answer:
      "Yes. Distribution reporting can support royalty reporting readiness by connecting platform activity, release records, catalog data, metadata, credits, streaming context, and reporting exports in a more organized way.",
  },
  {
    question: "Why does catalog organization matter for distribution reporting?",
    answer:
      "Catalog organization helps connect each release to its metadata, credits, links, reporting data, rollout history, distribution context, playlist activity, and royalty reporting questions. That structure can make reporting easier to review.",
  },
  {
    question: "Who is DCI distribution reporting support built for?",
    answer:
      "DCI distribution reporting support is built for independent artists, labels, managers, producers, creators, and creative teams that want more structure around music distribution reports, platform reporting, catalog organization, metadata review, royalty reporting readiness, release planning, and label services.",
  },
];

export default function DistributionReportingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Distribution reporting</p>
            <h1>Review distribution data with better release context.</h1>
            <p>
              Digital Currency Inc. supports distribution reporting readiness for
              independent artists, labels, managers, and creative teams with
              music distribution reports, platform reporting, royalty reporting
              readiness, catalog organization, metadata review, release planning,
              and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/royalty-reporting" variant="secondary">
                Explore royalty reporting
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Distribution reporting works best when release records, catalog
              details, metadata, credits, platform activity, streaming history,
              playlist context, and campaign timing are organized before the
              next release moves.
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
            <h2>Platform reports, release records, catalog context, and royalties.</h2>
            <p>
              DCI helps music teams organize distribution reporting across
              catalog management, metadata review, royalty reporting readiness,
              platform reporting, streaming and playlist history, release
              planning, sync preparation, and label services.
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
            <h2>Connect distribution data to the release story.</h2>
            <p>
              Distribution reports are easier to review when artists and labels
              can connect platform data to release dates, metadata, credits,
              catalog records, campaign history, streaming context, playlist
              activity, royalty questions, and future planning needs.
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

      <section className="section" aria-labelledby="distribution-reporting-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Distribution reporting FAQ</p>
            <h2 id="distribution-reporting-faq-title">
              Music distribution reports, platform data, and catalog context explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching distribution reporting, music distribution reports,
              platform reporting, catalog organization, metadata review, royalty
              reporting readiness, release planning, and label services.
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
            <h2>Prepare your distribution reporting with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, platform
              reporting context, metadata details, royalty questions, campaign
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
