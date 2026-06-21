import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Independent Music Distribution for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. provides independent music distribution, label services, royalties support, playlist strategy, sync preparation, campaign planning, and AI-powered music tools for artists and labels.",
  alternates: {
    canonical: "/music-distribution",
  },
  openGraph: {
    title: "Independent Music Distribution for Artists and Labels | DCI",
    description:
      "DCI helps artists, labels, managers, and creative teams distribute music with strategy, support, royalties guidance, playlist readiness, sync preparation, and AI-powered music tools.",
    url: "https://www.digitalcurrensy.com/music-distribution",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music distribution and label services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Independent Music Distribution for Artists and Labels | DCI",
    description:
      "Independent music distribution, royalties support, playlist strategy, sync prep, campaign planning, and AI-powered music tools.",
    images: ["/og-image.jpg"],
  },
};

const distributionServices = [
  "Release setup and music distribution support",
  "Metadata, delivery, and catalog planning",
  "Music royalties and reporting guidance",
  "Playlist strategy and playlist readiness",
  "Sync licensing preparation",
  "Video content and campaign support",
  "AI music tools and creator technology education",
  "Label services for artists, managers, and creative teams",
];

const audience = [
  "Independent artists preparing new releases",
  "Labels managing multiple artists or catalogs",
  "Managers building release plans",
  "Producers and creators expanding into distribution",
  "Artist teams that need more support than basic upload-only platforms",
];

const faqs = [
  {
    question: "What is independent music distribution?",
    answer:
      "Independent music distribution is the process of delivering music to streaming platforms and digital stores while helping artists and labels manage release setup, metadata, royalties, catalog planning, and promotion strategy.",
  },
  {
    question: "How does DCI support music distribution?",
    answer:
      "DCI supports music distribution with release planning, delivery support, royalty and reporting guidance, playlist strategy, sync preparation, video support, campaign planning, and AI-powered music tools.",
  },
  {
    question: "Who is DCI music distribution built for?",
    answer:
      "DCI is built for independent artists, labels, managers, producers, creators, and artist teams that want structured support around releases, royalties, streaming strategy, and catalog growth.",
  },
  {
    question: "Does DCI help with playlist strategy?",
    answer:
      "Yes. DCI supports playlist strategy and playlist readiness by helping artists and teams prepare releases, organize assets, understand positioning, and plan campaigns around streaming growth.",
  },
  {
    question: "Does DCI support AI music tools?",
    answer:
      "Yes. DCI connects music distribution with AI music tools, creator technology education, and guidance for artists and labels exploring modern release strategy.",
  },
];

export default function MusicDistributionPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Independent music distribution</p>
            <h1>Music distribution with strategy, support, and structure.</h1>
            <p>
              Digital Currency Inc. helps independent artists, labels, managers,
              and creative teams distribute music with release planning,
              royalties guidance, playlist strategy, sync preparation, campaign
              support, and AI-powered music tools.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/services" variant="secondary">
                Explore services
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              DCI is built for teams that need more than upload-only
              distribution. The platform connects music delivery with label
              services, reporting support, playlist readiness, sync prep,
              campaign planning, and creator technology education.
            </p>
            <ul className="feature-list compact">
              {distributionServices.slice(0, 4).map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">What DCI supports</p>
            <h2>Distribution connected to the full release plan.</h2>
            <p>
              A successful release needs more than uploading a file. Artists and
              labels need clean metadata, clear rights information, royalty
              visibility, campaign timing, playlist readiness, and a strategy
              for what happens after the song goes live.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {distributionServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Who it is for</p>
            <h2>Built for artists, labels, and creative teams.</h2>
            <p>
              DCI supports music entrepreneurs who want a more organized path
              for release planning, streaming strategy, catalog growth, and
              label-level operations.
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

      <section className="section" aria-labelledby="music-distribution-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music distribution FAQ</p>
            <h2 id="music-distribution-faq-title">
              Independent distribution questions, answered.
            </h2>
            <p>
              Clear answers for artists and labels researching distribution,
              royalties, playlists, sync preparation, streaming strategy, and AI
              music tools.
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
            <h2>Request access to DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, and support
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
