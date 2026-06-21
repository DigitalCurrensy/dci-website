import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Music Release Planning for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. helps independent artists, labels, managers, and creative teams prepare music release planning with distribution readiness, playlist strategy, streaming goals, metadata review, campaign organization, and label services.",
  alternates: {
    canonical: "/release-planning",
  },
  openGraph: {
    title: "Music Release Planning for Artists and Labels | DCI",
    description:
      "Music release planning, distribution readiness, playlist strategy, streaming goals, metadata review, campaign organization, and label services for independent music teams.",
    url: "https://www.digitalcurrensy.com/release-planning",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music release planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Release Planning for Artists and Labels | DCI",
    description:
      "Music release planning, distribution readiness, playlist strategy, streaming goals, metadata review, campaign organization, and label services.",
    images: ["/og-image.jpg"],
  },
};

const planningSupport = [
  "Release timeline and rollout planning",
  "Distribution readiness review",
  "Playlist pitching preparation",
  "Streaming strategy alignment",
  "Metadata and release information review",
  "Campaign asset organization",
  "Royalty and reporting readiness",
  "Label services for independent music teams",
];

const releaseChecklist = [
  "Release date and delivery timeline",
  "Artist, title, credits, and metadata details",
  "Artwork, audio, links, and campaign assets",
  "Playlist targets and streaming goals",
  "Reporting, catalog, and royalty context",
];

const faqs = [
  {
    question: "What is music release planning?",
    answer:
      "Music release planning is the process of organizing a release before it goes live. It includes distribution timing, metadata review, artist positioning, playlist readiness, streaming goals, campaign assets, rollout strategy, and reporting preparation.",
  },
  {
    question: "How does DCI support release planning?",
    answer:
      "DCI helps artists, labels, managers, and creative teams prepare release plans by reviewing release information, organizing campaign context, supporting distribution readiness, aligning playlist and streaming strategy, and connecting planning with label services.",
  },
  {
    question: "When should artists start planning a release?",
    answer:
      "Artists should begin release planning before the release date is locked. A stronger process gives the team time to review metadata, prepare assets, organize playlist strategy, confirm distribution details, clarify campaign goals, and plan the rollout.",
  },
  {
    question: "Does release planning guarantee results?",
    answer:
      "No. Release planning does not guarantee playlist placements, streams, sales, press coverage, or specific campaign outcomes. DCI supports preparation, strategy, organization, and review so music teams can release with more structure.",
  },
  {
    question: "Who is DCI release planning built for?",
    answer:
      "DCI release planning support is built for independent artists, music labels, managers, producers, creators, and artist teams that want more structure around distribution, playlist readiness, streaming strategy, metadata, reporting, and label services.",
  },
];

export default function ReleasePlanningPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music release planning</p>
            <h1>Plan releases before they go live.</h1>
            <p>
              Digital Currency Inc. helps independent artists, labels, managers,
              and creative teams prepare music release planning with distribution
              readiness, playlist strategy, streaming goals, metadata review,
              campaign organization, and label services.
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
              A release works better when the timeline, metadata, campaign
              assets, playlist goals, streaming strategy, and distribution
              details are organized before launch. DCI helps music teams prepare
              those pieces with more structure.
            </p>
            <ul className="feature-list compact">
              {planningSupport.slice(0, 4).map((item) => (
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
            <h2>Release timelines, distribution readiness, and campaign prep.</h2>
            <p>
              DCI connects release planning with music distribution, playlist
              pitching preparation, streaming strategy, metadata review, royalty
              reporting readiness, campaign organization, and label services.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {planningSupport.map((item) => (
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
            <h2>Organize the details before the rollout starts.</h2>
            <p>
              Before release day, artists and labels need clear metadata, strong
              assets, realistic timing, playlist context, streaming goals,
              reporting awareness, and a practical campaign plan. DCI helps
              bring those details into one cleaner process.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {releaseChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="release-planning-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Release planning FAQ</p>
            <h2 id="release-planning-faq-title">
              Music release planning, distribution, and rollout strategy
              explained.
            </h2>
            <p>
              Clear answers for artists and labels researching release planning,
              distribution readiness, playlist strategy, streaming support,
              campaign preparation, metadata review, and label services.
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
            <h2>Prepare your next release with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, timeline,
              campaign goals, playlist targets, streaming context, and support
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
