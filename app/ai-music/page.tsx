import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "AI Music Tools for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. connects music distribution, label services, AI music tools, creator technology education, release strategy, playlist readiness, sync preparation, and campaign planning for artists and labels.",
  alternates: {
    canonical: "/ai-music",
  },
  openGraph: {
    title: "AI Music Tools for Artists and Labels | DCI",
    description:
      "DCI helps artists, labels, managers, and creative teams understand AI music tools, creator technology, release strategy, playlist readiness, sync prep, and label services.",
    url: "https://www.digitalcurrensy.com/ai-music",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. AI music tools and label services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Music Tools for Artists and Labels | DCI",
    description:
      "AI music tools, creator technology education, music distribution, label services, release strategy, playlist readiness, and sync prep.",
    images: ["/og-image.jpg"],
  },
};

const aiMusicSupport = [
  "AI music tool education for artists and labels",
  "Release strategy for AI-assisted music workflows",
  "Music distribution connected to creator technology",
  "Playlist readiness and campaign positioning",
  "Sync preparation and catalog organization",
  "Metadata, rights, and release planning guidance",
  "Label services for modern music teams",
  "DCI GPT support for distribution and release questions",
];

const useCases = [
  "Artists exploring AI-assisted music creation",
  "Labels evaluating AI tools for release planning",
  "Managers building smarter campaign workflows",
  "Producers organizing catalogs and release assets",
  "Creative teams connecting AI tools with distribution strategy",
];

const faqs = [
  {
    question: "What are AI music tools?",
    answer:
      "AI music tools are software systems that can assist with music creation, idea generation, content planning, release organization, metadata workflows, campaign support, and creative strategy. Artists and labels should use them carefully, responsibly, and with attention to rights, ownership, and platform rules.",
  },
  {
    question: "How does DCI support AI music?",
    answer:
      "DCI supports AI music through education, release strategy, distribution planning, playlist readiness, sync preparation, campaign guidance, and DCI GPT assistance for artists, labels, managers, and creative teams.",
  },
  {
    question: "Can AI music be distributed?",
    answer:
      "AI-assisted music may be distributable depending on the tools used, the rights involved, the originality of the work, and the rules of each platform or partner. Artists and labels should review ownership, licensing, and disclosure requirements before release.",
  },
  {
    question: "Who is DCI AI music support built for?",
    answer:
      "DCI AI music support is built for independent artists, labels, managers, producers, creators, and artist teams exploring AI tools, creator technology, music distribution, and modern release strategy.",
  },
  {
    question: "Does DCI provide legal advice about AI music?",
    answer:
      "No. DCI does not provide legal advice. Artists and labels should speak with qualified professionals about copyright, licensing, rights ownership, platform policies, and commercial use of AI-generated or AI-assisted music.",
  },
];

export default function AiMusicPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">AI music and creator technology</p>
            <h1>AI music tools with release strategy behind them.</h1>
            <p>
              Digital Currency Inc. helps artists, labels, managers, and
              creative teams understand how AI music tools connect to music
              distribution, release planning, playlist readiness, sync
              preparation, campaign strategy, and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/label-iq-ai">Explore Label IQ AI</ChromeButton>
              <ChromeButton href="/get-an-invite" variant="secondary">
                Get an invite
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              AI can support the creative and operational side of music, but it
              still needs structure. DCI focuses on responsible AI education,
              release planning, catalog organization, campaign support, and
              distribution strategy for modern music teams.
            </p>
            <ul className="feature-list compact">
              {aiMusicSupport.slice(0, 4).map((item) => (
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
            <h2>AI tools connected to music business execution.</h2>
            <p>
              AI music strategy is not only about generating sounds. Artists and
              labels also need release structure, rights awareness, metadata,
              campaign timing, playlist positioning, sync preparation, and a
              clear path from idea to distribution.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {aiMusicSupport.map((item) => (
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
            <h2>Built for artists, labels, and teams using AI carefully.</h2>
            <p>
              DCI helps music teams explore AI-assisted workflows without losing
              sight of ownership, quality control, release planning, streaming
              strategy, fan trust, and long-term catalog value.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ai-music-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">AI music FAQ</p>
            <h2 id="ai-music-faq-title">
              AI music, distribution, and creator technology explained.
            </h2>
            <p>
              Clear answers for artists and labels researching AI music tools,
              AI-assisted releases, distribution strategy, rights awareness,
              playlist readiness, and label services.
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
            <h2>Build your AI music release strategy with DCI.</h2>
            <p>
              Share the artist, release, catalog, music links, AI tools used,
              and support needed. DCI reviews every invite request before
              opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
