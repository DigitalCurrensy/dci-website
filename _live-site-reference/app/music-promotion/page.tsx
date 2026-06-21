import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Music Promotion for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. helps independent artists, labels, managers, and creative teams prepare music promotion with release campaigns, playlist readiness, streaming strategy, content planning, metadata review, and label services.",
  alternates: {
    canonical: "/music-promotion",
  },
  openGraph: {
    title: "Music Promotion for Artists and Labels | DCI",
    description:
      "Music promotion preparation, release campaigns, playlist readiness, streaming strategy, content planning, metadata review, and label services for independent music teams.",
    url: "https://www.digitalcurrensy.com/music-promotion",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. music promotion support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Promotion for Artists and Labels | DCI",
    description:
      "Music promotion preparation, release campaigns, playlist readiness, streaming strategy, content planning, metadata review, and label services.",
    images: ["/og-image.jpg"],
  },
};

const promotionSupport = [
  "Artist promotion strategy",
  "Release campaign planning",
  "Playlist readiness preparation",
  "Streaming strategy alignment",
  "Content and campaign asset organization",
  "Metadata and release information review",
  "Audience and catalog growth planning",
  "Label services for independent music teams",
];

const promotionChecklist = [
  "Artist story and release angle",
  "Release timeline and campaign schedule",
  "Playlist, streaming, and content priorities",
  "Music links, assets, and metadata details",
  "Reporting, audience, and catalog context",
];

const faqs = [
  {
    question: "What is music promotion?",
    answer:
      "Music promotion is the process of preparing and sharing a release so listeners, curators, platforms, partners, and supporters can understand the music. It can include artist positioning, release campaigns, playlist readiness, streaming strategy, content planning, and campaign organization.",
  },
  {
    question: "How does DCI support music promotion?",
    answer:
      "DCI helps artists, labels, managers, and creative teams prepare music promotion by organizing release information, reviewing metadata, clarifying campaign goals, supporting playlist and streaming context, and connecting promotion planning with label services.",
  },
  {
    question: "Does DCI guarantee playlist placements or streams?",
    answer:
      "No. DCI does not guarantee playlist placements, streams, followers, press coverage, sales, or specific campaign outcomes. DCI supports preparation, strategy, organization, review, and release planning so music teams can promote with more structure.",
  },
  {
    question: "When should artists start music promotion?",
    answer:
      "Artists should start music promotion before the release goes live. A stronger campaign usually includes release planning, metadata review, assets, artist story, playlist readiness, streaming goals, and enough time to organize the rollout.",
  },
  {
    question: "Who is DCI music promotion built for?",
    answer:
      "DCI music promotion support is built for independent artists, music labels, managers, producers, creators, and artist teams that want more structure around release campaigns, streaming strategy, playlist readiness, distribution, reporting, and label services.",
  },
];

export default function MusicPromotionPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music promotion</p>
            <h1>Promote releases with a plan.</h1>
            <p>
              Digital Currency Inc. helps independent artists, labels, managers,
              and creative teams prepare music promotion with release campaigns,
              playlist readiness, streaming strategy, content planning, metadata
              review, and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/music-marketing" variant="secondary">
                Explore marketing
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Promotion works better when the release story, rollout timeline,
              playlist context, streaming goals, campaign assets, and metadata
              are organized before the campaign starts.
            </p>
            <ul className="feature-list compact">
              {promotionSupport.slice(0, 4).map((item) => (
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
            <h2>Artist promotion, release campaigns, and playlist readiness.</h2>
            <p>
              DCI connects music promotion preparation with release planning,
              music distribution, playlist pitching preparation, streaming
              strategy, metadata review, campaign assets, reporting, and label
              services for independent music teams.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {promotionSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Promotion readiness</p>
            <h2>Prepare the story, schedule, assets, and targets.</h2>
            <p>
              Before a campaign moves, artists and labels need a clear release
              angle, campaign timing, playlist context, streaming goals, content
              priorities, clean metadata, and organized links. DCI helps bring
              those details into a more structured process.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {promotionChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="music-promotion-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Music promotion FAQ</p>
            <h2 id="music-promotion-faq-title">
              Music promotion, release campaigns, and playlist readiness
              explained.
            </h2>
            <p>
              Clear answers for artists and labels researching music promotion,
              artist promotion, release campaigns, playlist readiness, streaming
              strategy, content planning, distribution support, and label
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
            <h2>Prepare your next promotion plan with DCI.</h2>
            <p>
              Share the artist, release, music links, campaign goals, playlist
              targets, streaming context, content assets, and support needed.
              DCI reviews every invite request before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
