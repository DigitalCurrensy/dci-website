import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Music Release Strategy for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports music release strategy for independent artists, labels, managers, and creative teams with release planning, rollout timing, distribution readiness, playlist strategy, music marketing, metadata review, streaming strategy, and label services.",
  alternates: {
    canonical: "/release-strategy",
  },
  openGraph: {
    title: "Music Release Strategy for Artists and Labels | DCI",
    description:
      "Music release strategy, release planning, rollout timing, distribution readiness, playlist strategy, music marketing, metadata review, streaming strategy, and label services.",
    url: "https://www.digitalcurrensy.com/release-strategy",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music release strategy support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Release Strategy for Artists and Labels | DCI",
    description:
      "Music release strategy, release planning, rollout timing, distribution readiness, playlist strategy, music marketing, metadata review, and label services.",
    images: ["/og-image.jpg"],
  },
};

const strategySupport = [
  "Music release strategy",
  "Release planning and rollout timing",
  "Distribution readiness review",
  "Playlist strategy and pitching preparation",
  "Streaming strategy alignment",
  "Music marketing and promotion planning",
  "Metadata, credits, and release information review",
  "Catalog organization and release records",
  "Royalty and distribution reporting readiness",
  "Label services for independent music teams",
];

const strategyChecklist = [
  "Artist, release, and catalog information",
  "Release goals, timeline, and rollout plan",
  "Music links, metadata, credits, and assets",
  "Distribution, playlist, and streaming context",
  "Marketing, promotion, and audience goals",
  "Reporting questions and support needs",
];

const faqs = [
  {
    question: "What is music release strategy?",
    answer:
      "Music release strategy is the planning process behind how a release is prepared, delivered, positioned, promoted, reviewed, and supported across distribution, streaming, playlist pitching, marketing, metadata, reporting, and catalog systems.",
  },
  {
    question: "How does DCI support release strategy?",
    answer:
      "DCI helps independent artists, labels, managers, and creative teams organize release strategy through release planning, rollout timing, distribution readiness, playlist strategy, music marketing, metadata review, streaming strategy, catalog organization, reporting readiness, and label services.",
  },
  {
    question: "Is release strategy different from release planning?",
    answer:
      "Yes. Release planning focuses on organizing the steps and timeline for a release. Release strategy connects those steps to the larger goals around positioning, distribution, playlist pitching, streaming, marketing, catalog value, reporting, and long-term artist or label growth.",
  },
  {
    question: "Why does metadata matter for release strategy?",
    answer:
      "Metadata helps connect release titles, artist names, credits, contributors, links, platform information, catalog records, and reporting context. Clean metadata can make release planning, distribution, playlist preparation, and reporting easier to manage.",
  },
  {
    question: "Who is DCI release strategy support built for?",
    answer:
      "DCI release strategy support is built for independent artists, labels, managers, producers, creators, and creative teams that need more structure around release planning, distribution readiness, playlist strategy, streaming strategy, music marketing, metadata review, reporting readiness, and label services.",
  },
];

export default function ReleaseStrategyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Release strategy</p>
            <h1>Build a release strategy before the rollout starts.</h1>
            <p>
              Digital Currency Inc. supports music release strategy for
              independent artists, labels, managers, and creative teams with
              release planning, rollout timing, distribution readiness, playlist
              strategy, music marketing, metadata review, streaming strategy,
              and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/release-planning" variant="secondary">
                Explore release planning
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Release strategy works best when the release story, timeline,
              metadata, distribution path, playlist goals, streaming context,
              campaign assets, reporting needs, and support plan are organized
              before the rollout begins.
            </p>
            <ul className="feature-list compact">
              {strategySupport.slice(0, 4).map((item) => (
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
            <h2>Release planning, rollout timing, distribution, and campaign structure.</h2>
            <p>
              DCI helps music teams organize release strategy across planning,
              distribution readiness, playlist preparation, streaming strategy,
              music marketing, promotion, metadata review, catalog organization,
              royalty reporting readiness, and label services.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {strategySupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Rollout readiness</p>
            <h2>Connect the release plan to the bigger campaign.</h2>
            <p>
              Before a campaign begins, artists and labels need clear release
              goals, timeline, metadata, credits, links, assets, distribution
              details, playlist targets, streaming context, marketing direction,
              and reporting questions.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {strategyChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="release-strategy-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Release strategy FAQ</p>
            <h2 id="release-strategy-faq-title">
              Release planning, rollout strategy, and campaign readiness explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching music release strategy, release planning, rollout
              timing, distribution readiness, playlist strategy, music
              marketing, metadata review, streaming strategy, and label
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
            <h2>Prepare your release strategy with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, release goals,
              rollout timeline, playlist targets, streaming context, metadata
              details, campaign assets, and support needed. DCI reviews every
              invite request before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
