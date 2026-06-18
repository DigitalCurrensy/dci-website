import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Streaming Strategy for Independent Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. helps artists, labels, managers, and creative teams plan streaming strategy, release timing, playlist readiness, catalog growth, music distribution, royalty reporting, sync preparation, and campaign support.",
  alternates: {
    canonical: "/streaming-strategy",
  },
  openGraph: {
    title: "Streaming Strategy for Independent Artists and Labels | DCI",
    description:
      "DCI supports streaming strategy, release planning, playlist readiness, catalog organization, royalty reporting, sync preparation, and label services for independent music teams.",
    url: "https://www.digitalcurrensy.com/streaming-strategy",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. streaming strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streaming Strategy for Independent Artists and Labels | DCI",
    description:
      "Streaming strategy, release planning, playlist readiness, catalog growth, music distribution, royalty reporting, sync prep, and campaign support.",
    images: ["/og-image.jpg"],
  },
};

const strategySupport = [
  "Release planning and rollout strategy",
  "Streaming platform positioning",
  "Playlist readiness review",
  "Catalog growth planning",
  "Metadata and release information review",
  "Royalty reporting context",
  "Campaign support for artists and labels",
  "Sync preparation connected to release strategy",
];

const audience = [
  "Independent artists preparing a release",
  "Labels planning catalog growth",
  "Managers building release timelines",
  "Producers and creators organizing music assets",
  "Artist teams looking for more structure after distribution",
];

const faqs = [
  {
    question: "What is streaming strategy?",
    answer:
      "Streaming strategy is the plan behind how a release is prepared, delivered, positioned, promoted, reviewed, and supported across streaming platforms. It can include release timing, metadata, playlist readiness, artist profiles, campaign planning, catalog organization, and performance review.",
  },
  {
    question: "How does DCI support streaming strategy?",
    answer:
      "DCI supports streaming strategy by helping artists, labels, managers, and creative teams connect music distribution with release planning, playlist readiness, catalog organization, royalty reporting, sync preparation, and campaign support.",
  },
  {
    question: "Is streaming strategy only about playlists?",
    answer:
      "No. Playlists can be one part of a streaming strategy, but a stronger plan also includes release setup, metadata, artist positioning, catalog growth, audience development, reporting review, content planning, and long-term release consistency.",
  },
  {
    question: "Does DCI guarantee streams or playlist placement?",
    answer:
      "No. DCI does not guarantee streams, playlist placement, platform promotion, or specific performance results. DCI helps artists and labels prepare, organize, and support releases with a more strategic process.",
  },
  {
    question: "Who is DCI streaming strategy built for?",
    answer:
      "DCI streaming strategy is built for independent artists, labels, managers, producers, creators, and artist teams that want more support around release planning, distribution, playlists, reporting, and catalog growth.",
  },
];

export default function StreamingStrategyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Streaming strategy</p>
            <h1>Build every release with a plan behind it.</h1>
            <p>
              Digital Currency Inc. helps artists, labels, managers, and
              creative teams plan streaming strategy, release timing, playlist
              readiness, catalog growth, music distribution, royalty reporting,
              sync preparation, and campaign support.
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
              A release needs more than an upload. DCI helps music teams think
              through the timing, metadata, playlist readiness, reporting,
              content, and catalog strategy that support a stronger streaming
              rollout.
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
            <h2>Release planning, playlist readiness, and catalog growth.</h2>
            <p>
              Streaming strategy connects distribution with the work that
              happens before and after a release goes live. DCI helps artists
              and labels organize release information, review readiness, plan
              campaign support, and understand performance in context.
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
            <p className="eyebrow">Who it is for</p>
            <h2>Built for artists, labels, managers, and release teams.</h2>
            <p>
              DCI supports music teams that want a clearer process around
              release planning, streaming growth, playlist readiness, catalog
              organization, distribution reporting, and label-level campaign
              support.
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

      <section className="section" aria-labelledby="streaming-strategy-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Streaming strategy FAQ</p>
            <h2 id="streaming-strategy-faq-title">
              Streaming, playlists, releases, and catalog growth explained.
            </h2>
            <p>
              Clear answers for artists and labels researching streaming
              strategy, playlist readiness, release planning, music
              distribution, royalty reporting, campaign support, and catalog
              growth.
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
            <h2>Plan your next release with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, streaming goals,
              playlist readiness, and support needed. DCI reviews every invite
              request before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
