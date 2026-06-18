import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Playlist Pitching Strategy for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. helps independent artists, labels, managers, and creative teams prepare playlist pitching strategy with release planning, playlist readiness, streaming support, metadata review, campaign strategy, and label services.",
  alternates: {
    canonical: "/playlist-pitching",
  },
  openGraph: {
    title: "Playlist Pitching Strategy for Artists and Labels | DCI",
    description:
      "Playlist pitching preparation, release planning, playlist readiness, streaming strategy, metadata review, campaign support, and label services for independent music teams.",
    url: "https://www.digitalcurrensy.com/playlist-pitching",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. playlist pitching strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playlist Pitching Strategy for Artists and Labels | DCI",
    description:
      "Playlist pitching preparation, release planning, playlist readiness, streaming strategy, metadata review, campaign support, and label services.",
    images: ["/og-image.jpg"],
  },
};

const playlistSupport = [
  "Playlist pitching preparation",
  "Release timeline and rollout planning",
  "Playlist readiness review",
  "Streaming strategy alignment",
  "Metadata and release information review",
  "Artist campaign support",
  "Catalog and audience positioning",
  "Label services for independent music teams",
];

const readiness = [
  "Clear artist and release information",
  "Strong release date and rollout plan",
  "Clean metadata and DSP delivery context",
  "Playlist targets matched to the sound and audience",
  "Campaign assets, links, and artist story organized",
];

const faqs = [
  {
    question: "What is playlist pitching?",
    answer:
      "Playlist pitching is the process of preparing and submitting music for playlist consideration across streaming platforms, editorial teams, independent curators, and campaign partners. Strong playlist pitching starts with release planning, clean metadata, clear positioning, and realistic audience strategy.",
  },
  {
    question: "How does DCI support playlist pitching?",
    answer:
      "DCI helps artists, labels, managers, and creative teams prepare playlist pitching strategy by reviewing release information, organizing campaign context, aligning playlist targets, supporting streaming strategy, and connecting playlist readiness with distribution and label services.",
  },
  {
    question: "Does DCI guarantee playlist placements?",
    answer:
      "No. DCI does not guarantee playlist placements, editorial approvals, curator responses, streaming results, or specific outcomes. DCI supports preparation, strategy, review, and release organization so music teams can approach playlist pitching with more structure.",
  },
  {
    question: "When should artists prepare playlist pitching?",
    answer:
      "Artists should prepare playlist pitching before release day. A stronger process usually includes release planning, metadata review, creative assets, artist story, streaming links, campaign goals, and enough time for review before the music goes live.",
  },
  {
    question: "Who is playlist pitching support built for?",
    answer:
      "DCI playlist pitching support is built for independent artists, music labels, managers, producers, creators, and artist teams that want more structure around release planning, playlist readiness, streaming strategy, distribution, reporting, and campaign support.",
  },
];

export default function PlaylistPitchingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Playlist pitching strategy</p>
            <h1>Pitch playlists with a plan.</h1>
            <p>
              Digital Currency Inc. helps independent artists, labels, managers,
              and creative teams prepare playlist pitching strategy with release
              planning, playlist readiness, streaming support, metadata review,
              campaign strategy, and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/playlists" variant="secondary">
                Explore playlists
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Playlist pitching works best when the release is organized before
              the campaign begins. DCI helps music teams prepare the release
              story, metadata, streaming context, and playlist targets with more
              structure.
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
            <h2>Release planning, playlist readiness, and campaign context.</h2>
            <p>
              DCI connects playlist pitching preparation with music
              distribution, streaming strategy, metadata review, artist campaign
              support, and label services for independent music teams.
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
            <p className="eyebrow">Playlist readiness</p>
            <h2>Prepare the music, story, metadata, and rollout.</h2>
            <p>
              Before pitching, artists and labels need clear release details,
              clean metadata, campaign assets, playlist targets, and a realistic
              streaming strategy. DCI helps organize those pieces before the
              release is reviewed.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {readiness.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="playlist-pitching-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Playlist pitching FAQ</p>
            <h2 id="playlist-pitching-faq-title">
              Playlist pitching, release planning, and streaming strategy
              explained.
            </h2>
            <p>
              Clear answers for artists and labels researching playlist
              pitching, playlist strategy, release readiness, streaming support,
              music distribution, campaign planning, and label services.
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
            <h2>Plan your playlist campaign with DCI.</h2>
            <p>
              Share the artist, release, music links, playlist goals, streaming
              context, campaign assets, and support needed. DCI reviews every
              invite request before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
