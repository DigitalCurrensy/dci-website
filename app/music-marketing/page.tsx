import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Music Marketing Strategy for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. helps independent artists, labels, managers, and creative teams prepare music marketing strategy with release planning, playlist readiness, streaming support, metadata review, campaign organization, and label services.",
  alternates: {
    canonical: "/music-marketing",
  },
  openGraph: {
    title: "Music Marketing Strategy for Artists and Labels | DCI",
    description:
      "Music marketing preparation, release campaign planning, playlist readiness, streaming strategy, metadata review, artist promotion support, and label services.",
    url: "https://www.digitalcurrensy.com/music-marketing",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music marketing strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Marketing Strategy for Artists and Labels | DCI",
    description:
      "Music marketing preparation, release campaign planning, playlist readiness, streaming strategy, metadata review, artist promotion support, and label services.",
    images: ["/og-image.jpg"],
  },
};

const marketingSupport = [
  "Release campaign planning",
  "Artist positioning and rollout strategy",
  "Playlist readiness and pitching preparation",
  "Streaming strategy alignment",
  "Metadata and release information review",
  "Campaign assets and link organization",
  "Catalog growth and audience planning",
  "Label services for independent music teams",
];

const campaignChecklist = [
  "Release date and rollout timeline",
  "Artist story and campaign angle",
  "Clean metadata and distribution context",
  "Playlist, social, press, and content priorities",
  "Streaming links, assets, and audience goals",
];

const faqs = [
  {
    question: "What is music marketing?",
    answer:
      "Music marketing is the process of preparing, positioning, and promoting a release so the right listeners, platforms, curators, partners, and supporters can understand the music. It includes release planning, artist positioning, playlist readiness, streaming strategy, content planning, and campaign organization.",
  },
  {
    question: "How does DCI support music marketing?",
    answer:
      "DCI helps artists, labels, managers, and creative teams organize music marketing strategy by reviewing release information, clarifying campaign goals, preparing playlist and streaming context, supporting distribution planning, and connecting campaign preparation with label services.",
  },
  {
    question: "Does DCI guarantee music marketing results?",
    answer:
      "No. DCI does not guarantee playlist placements, press coverage, streaming numbers, follower growth, sales results, or specific campaign outcomes. DCI supports preparation, strategy, review, organization, and release planning so music teams can campaign with more structure.",
  },
  {
    question: "When should artists start music marketing?",
    answer:
      "Artists should start music marketing before release day. A stronger rollout usually includes release planning, metadata review, campaign assets, artist story, playlist readiness, streaming goals, and enough time to organize the campaign before the music goes live.",
  },
  {
    question: "Who is music marketing support built for?",
    answer:
      "DCI music marketing support is built for independent artists, music labels, managers, producers, creators, and artist teams that want more structure around release planning, streaming strategy, playlist readiness, distribution, reporting, and label services.",
  },
];

export default function MusicMarketingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music marketing strategy</p>
            <h1>Market releases with structure.</h1>
            <p>
              Digital Currency Inc. helps independent artists, labels, managers,
              and creative teams prepare music marketing strategy with release
              planning, playlist readiness, streaming support, metadata review,
              campaign organization, and label services.
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
              A stronger campaign starts before release day. DCI helps music
              teams organize the release story, rollout timeline, playlist
              context, streaming goals, metadata, and campaign assets with more
              clarity.
            </p>
            <ul className="feature-list compact">
              {marketingSupport.slice(0, 4).map((item) => (
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
            <h2>Campaign planning, release strategy, and artist positioning.</h2>
            <p>
              DCI connects music marketing preparation with distribution,
              playlist readiness, streaming strategy, metadata review, catalog
              growth, reporting, and label services for independent music teams.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {marketingSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Campaign readiness</p>
            <h2>Prepare the story, assets, timeline, and rollout.</h2>
            <p>
              Before a release campaign begins, artists and labels need clear
              release information, clean metadata, campaign assets, streaming
              context, audience goals, and a practical rollout plan. DCI helps
              organize those pieces before the campaign moves.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {campaignChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="music-marketing-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music marketing FAQ</p>
            <h2 id="music-marketing-faq-title">
              Music marketing, release planning, and campaign strategy explained.
            </h2>
            <p>
              Clear answers for artists and labels researching music marketing,
              release strategy, playlist readiness, streaming support, music
              distribution, campaign planning, and label services.
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
            <h2>Plan your next music campaign with DCI.</h2>
            <p>
              Share the artist, release, music links, campaign goals, playlist
              targets, streaming context, assets, and support needed. DCI reviews
              every invite request before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
