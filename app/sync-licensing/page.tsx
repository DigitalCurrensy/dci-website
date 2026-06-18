import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Sync Licensing Preparation for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. helps artists, labels, managers, and creative teams prepare music catalogs for sync licensing opportunities with rights awareness, metadata review, release planning, distribution support, royalty reporting, and label services.",
  alternates: {
    canonical: "/sync-licensing",
  },
  openGraph: {
    title: "Sync Licensing Preparation for Artists and Labels | DCI",
    description:
      "DCI supports sync licensing preparation, rights-readiness education, catalog organization, metadata review, music distribution, royalty reporting, and label services.",
    url: "https://www.digitalcurrensy.com/sync-licensing",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. sync licensing preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sync Licensing Preparation for Artists and Labels | DCI",
    description:
      "Sync licensing preparation, rights-readiness education, catalog organization, metadata review, music distribution, royalty reporting, and label services.",
    images: ["/og-image.jpg"],
  },
};

const syncSupport = [
  "Sync licensing preparation",
  "Catalog organization for pitch readiness",
  "Metadata and release information review",
  "Rights-readiness education",
  "Music distribution support",
  "Royalty reporting context",
  "Playlist and streaming strategy alignment",
  "Label services for artists and creative teams",
];

const placements = [
  "Film and television opportunities",
  "Advertising and brand campaign use cases",
  "Gaming and interactive media opportunities",
  "Trailers, promos, and digital video content",
  "Creator and platform-driven content opportunities",
];

const faqs = [
  {
    question: "What is sync licensing?",
    answer:
      "Sync licensing is the process of licensing music for use with visual media, including film, television, advertising, games, trailers, promos, digital video, and creator content. Sync opportunities usually require clear rights information, organized metadata, and catalog readiness.",
  },
  {
    question: "How does DCI support sync licensing preparation?",
    answer:
      "DCI supports sync licensing preparation by helping artists, labels, managers, and creative teams organize catalog information, review metadata, understand rights-readiness, connect sync preparation with distribution, and prepare music for professional review.",
  },
  {
    question: "Does DCI guarantee sync placements?",
    answer:
      "No. DCI does not guarantee sync placements, licensing deals, approvals, or specific results. DCI helps artists and labels prepare their music, catalog information, and release materials for a more organized sync-readiness process.",
  },
  {
    question: "Why does metadata matter for sync?",
    answer:
      "Metadata helps music teams identify tracks, writers, artists, ownership details, release information, contact information, and catalog context. Clean metadata can make it easier to review music for licensing, pitching, reporting, and rights discussions.",
  },
  {
    question: "Who is DCI sync preparation built for?",
    answer:
      "DCI sync preparation is built for independent artists, labels, managers, producers, creators, and artist teams that want more structure around catalog organization, rights-readiness, music distribution, reporting, and release strategy.",
  },
];

export default function SyncLicensingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Sync licensing preparation</p>
            <h1>Prepare your catalog for sync opportunities.</h1>
            <p>
              Digital Currency Inc. helps artists, labels, managers, and
              creative teams prepare music catalogs for sync licensing
              opportunities with rights awareness, metadata review, release
              planning, distribution support, royalty reporting, and label
              services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/sync" variant="secondary">
                Explore sync
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Sync readiness starts before the pitch. DCI helps music teams
              organize releases, catalog information, metadata, rights context,
              and reporting so music can be reviewed with more clarity.
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
            <h2>Catalog organization, metadata, and rights-readiness.</h2>
            <p>
              Sync licensing preparation connects music distribution, catalog
              records, ownership awareness, release information, reporting, and
              creative positioning. DCI helps artists and labels prepare the
              materials that support a cleaner review process.
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
            <p className="eyebrow">Where music may be reviewed</p>
            <h2>Built for film, TV, ads, games, and visual media workflows.</h2>
            <p>
              DCI helps music teams think through sync preparation for visual
              media use cases while keeping catalog details, release records,
              rights awareness, and metadata organized.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {placements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="sync-licensing-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Sync licensing FAQ</p>
            <h2 id="sync-licensing-faq-title">
              Sync licensing, catalog prep, and rights-readiness explained.
            </h2>
            <p>
              Clear answers for artists and labels researching sync licensing,
              music for film and TV, catalog preparation, metadata, rights
              awareness, music distribution, royalty reporting, and label
              services.
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
              Share the artist, release, catalog, music links, rights context,
              sync goals, and support needed. DCI reviews every invite request
              before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
