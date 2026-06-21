import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Playlist Strategy for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports playlist strategy for independent artists, labels, managers, and creative teams with playlist readiness, playlist pitching preparation, streaming strategy, release planning, metadata review, campaign assets, and label services.",
  alternates: {
    canonical: "/playlist-strategy",
  },
  openGraph: {
    title: "Playlist Strategy for Artists and Labels | DCI",
    description:
      "Playlist strategy, playlist pitching preparation, streaming strategy, release planning, metadata review, campaign assets, and label services for independent music teams.",
    url: "https://www.digitalcurrensy.com/playlist-strategy",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. playlist strategy support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playlist Strategy for Artists and Labels | DCI",
    description:
      "Playlist strategy, playlist readiness, playlist pitching preparation, streaming strategy, release planning, metadata review, and label services.",
    images: ["/og-image.jpg"],
  },
};

const playlistSupport = [
  "Playlist strategy planning",
  "Playlist pitching preparation",
  "Playlist readiness review",
  "Streaming strategy alignment",
  "Release planning and rollout timing",
  "Metadata, links, and campaign asset review",
  "Artist positioning and release story organization",
  "Catalog, reporting, and performance context",
  "Music marketing and promotion planning",
  "Label services for independent music teams",
];

const playlistChecklist = [
  "Artist, release, and campaign information",
  "Playlist goals and target audience context",
  "Streaming links, metadata, and release assets",
  "Release timeline and rollout plan",
  "Playlist pitching notes and campaign story",
  "Marketing, reporting, and label service needs",
];

const faqs = [
  {
    question: "What is playlist strategy?",
    answer:
      "Playlist strategy is the process of preparing a release for playlist consideration with clear release information, artist positioning, metadata, streaming context, campaign timing, playlist targets, and promotion assets.",
  },
  {
    question: "How does DCI support playlist strategy?",
    answer:
      "DCI helps independent artists, labels, managers, and creative teams organize playlist strategy by reviewing playlist readiness, release planning, metadata, campaign assets, artist positioning, streaming strategy, playlist pitching preparation, and label service needs.",
  },
  {
    question: "Is playlist strategy different from playlist pitching?",
    answer:
      "Yes. Playlist strategy is the planning behind the campaign, while playlist pitching is the act of submitting or presenting the release for consideration. Strategy helps prepare the release story, timing, metadata, assets, audience context, and streaming goals before pitching begins.",
  },
  {
    question: "Why does metadata matter for playlist strategy?",
    answer:
      "Metadata helps connect the release to artist names, credits, links, catalog records, platform information, release timing, and playlist context. Clean metadata can make playlist preparation and campaign organization easier.",
  },
  {
    question: "Who is DCI playlist strategy support built for?",
    answer:
      "DCI playlist strategy support is built for independent artists, labels, managers, producers, creators, and creative teams that need more structure around playlist readiness, playlist pitching, streaming strategy, release planning, music marketing, metadata review, and label services.",
  },
];

export default function PlaylistStrategyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Playlist strategy</p>
            <h1>Build a playlist plan before the campaign moves.</h1>
            <p>
              Digital Currency Inc. supports playlist strategy for independent
              artists, labels, managers, and creative teams with playlist
              readiness, playlist pitching preparation, streaming strategy,
              release planning, metadata review, campaign assets, and label
              services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/playlist-pitching" variant="secondary">
                Explore playlist pitching
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Playlist strategy works best when the release story, metadata,
              links, assets, timeline, streaming goals, audience context, and
              playlist targets are organized before pitching begins.
            </p>
            <ul className="feature-list compact">
              {playlistSupport.slice(0, 4).map((item) => (
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
            <h2>Playlist readiness, streaming context, and campaign planning.</h2>
            <p>
              DCI helps music teams organize playlist strategy across release
              planning, playlist pitching preparation, metadata review, campaign
              assets, artist positioning, streaming strategy, music marketing,
              reporting context, and label services.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {playlistSupport.map((item) => (
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
            <h2>Connect the release story to playlist goals.</h2>
            <p>
              Before a playlist campaign begins, artists and labels need clear
              release details, metadata, streaming links, audience context,
              playlist goals, campaign assets, rollout timing, and support
              needs. DCI helps organize those pieces with more structure.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {playlistChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="playlist-strategy-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Playlist strategy FAQ</p>
            <h2 id="playlist-strategy-faq-title">
              Playlist readiness, pitching, and streaming strategy explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching playlist strategy, playlist pitching preparation,
              playlist readiness, streaming strategy, release planning, metadata
              review, campaign assets, and label services.
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
            <h2>Prepare your playlist strategy with DCI.</h2>
            <p>
              Share the artist, release, music links, playlist goals, campaign
              assets, streaming context, metadata details, timeline, and support
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
