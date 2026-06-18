import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";

export const metadata: Metadata = {
  title: "Creator Tokens for Artists and Labels | Digital Currency Inc.",
  description:
    "Digital Currency Inc. supports creator token planning for independent artists, labels, managers, and creative teams with Label IQ AI, tokenized creator access, fan engagement, campaign utility, catalog metadata, release strategy, reporting readiness, blockchain transaction context, and label services.",
  alternates: {
    canonical: "/creator-tokens",
  },
  openGraph: {
    title: "Creator Tokens for Artists and Labels | DCI",
    description:
      "Creator token planning, Label IQ AI, tokenized creator access, fan engagement, campaign utility, catalog metadata, release strategy, reporting readiness, blockchain transaction context, and label services.",
    url: "https://www.digitalcurrensy.com/creator-tokens",
    siteName: "Digital Currency Inc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Digital Currency Inc. creator token support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Tokens for Artists and Labels | DCI",
    description:
      "Creator token planning for independent artists, labels, managers, and creative teams across Label IQ AI, fan engagement, catalog metadata, release campaigns, and label services.",
    images: ["/og-image.jpg"],
  },
};

const tokenSupport = [
  "Creator token planning",
  "Label IQ AI creator workflow support",
  "Tokenized creator access and campaign utility",
  "Fan engagement and audience activation",
  "Artist services and label services",
  "Release planning and release strategy",
  "Catalog metadata and asset organization",
  "Reporting readiness and campaign context",
  "Blockchain transaction context",
  "Independent music operation support",
];

const tokenChecklist = [
  "Artist, label, and creator information",
  "Release, catalog, and campaign goals",
  "Music links, metadata, credits, and assets",
  "Fan access, token utility, and community context",
  "Label IQ AI workflow and support needs",
  "Reporting, distribution, royalty, and compliance questions",
];

const faqs = [
  {
    question: "What are creator tokens?",
    answer:
      "Creator tokens can be used to organize digital access, campaign utility, fan engagement, creator participation, community rewards, and collectible-style experiences around an artist, label, release, or creative project.",
  },
  {
    question: "How does DCI support creator token planning?",
    answer:
      "DCI helps independent artists, labels, managers, and creative teams organize creator token planning through Label IQ AI workflows, catalog metadata, campaign goals, release strategy, fan engagement context, reporting readiness, blockchain transaction context, and label service support.",
  },
  {
    question: "How does Label IQ AI connect to creator tokens?",
    answer:
      "Label IQ AI can support creator-token planning by helping music teams organize artist information, catalog records, release context, campaign goals, token utility ideas, fan engagement strategy, reporting questions, and label service needs before a creator-token rollout.",
  },
  {
    question: "Are creator tokens the same as investments?",
    answer:
      "No. DCI creator-token planning is focused on creator access, campaign utility, fan engagement, catalog organization, and operational readiness. It is not financial, investment, tax, legal, or securities advice.",
  },
  {
    question: "Who is DCI creator token support built for?",
    answer:
      "DCI creator token support is built for independent artists, labels, managers, producers, creators, and creative teams that need structure around tokenized access, fan engagement, Label IQ AI workflows, release strategy, catalog metadata, reporting readiness, blockchain transaction context, and label services.",
  },
];

export default function CreatorTokensPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Creator tokens</p>
            <h1>Plan creator token experiences with more structure.</h1>
            <p>
              Digital Currency Inc. supports creator token planning for
              independent artists, labels, managers, and creative teams with
              Label IQ AI, tokenized creator access, fan engagement, campaign
              utility, catalog metadata, release strategy, reporting readiness,
              blockchain transaction context, and label services.
            </p>
            <div className="button-row">
              <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
              <ChromeButton href="/label-iq-ai" variant="secondary">
                Explore Label IQ AI
              </ChromeButton>
            </div>
          </div>

          <div className="copy-stack">
            <p>
              Creator token planning works best when artist information, catalog
              metadata, campaign goals, token utility, fan access, reporting
              questions, release strategy, and label support needs are organized
              before rollout.
            </p>
            <ul className="feature-list compact">
              {tokenSupport.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Label IQ AI is available at{" "}
              <a href="https://app.labeliq.ai" target="_blank" rel="noreferrer">
                app.labeliq.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">What DCI supports</p>
            <h2>Creator access, campaign utility, fan engagement, and label operations.</h2>
            <p>
              DCI helps artists and music teams organize creator token planning
              across Label IQ AI workflows, fan engagement, campaign utility,
              release planning, catalog metadata, reporting readiness,
              blockchain transaction context, artist services, label services,
              and independent music operations.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {tokenSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-grid reverse">
          <div className="section-heading">
            <p className="eyebrow">Token readiness</p>
            <h2>Connect creator token ideas to real campaign structure.</h2>
            <p>
              Before launching creator-token experiences, music teams need clear
              creator information, release context, catalog metadata, token
              utility, fan access goals, campaign assets, reporting questions,
              distribution context, and support needs.
            </p>
          </div>

          <div className="copy-stack">
            <ul className="feature-list compact">
              {tokenChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="creator-tokens-faq-title">
        <div className="section-inner split-grid">
          <div className="section-heading">
            <p className="eyebrow">Creator tokens FAQ</p>
            <h2 id="creator-tokens-faq-title">
              Creator access, Label IQ AI, and token planning explained.
            </h2>
            <p>
              Clear answers for artists, labels, managers, and creative teams
              researching creator tokens, tokenized creator access, fan
              engagement, Label IQ AI, release campaigns, catalog metadata,
              reporting readiness, blockchain transaction context, and label
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
            <h2>Prepare your creator token request with DCI.</h2>
            <p>
              Share the artist, label, release, catalog, music links, token
              utility ideas, fan engagement goals, Label IQ AI workflow needs,
              reporting questions, metadata details, and support needed. DCI
              reviews every invite request before opening platform access.
            </p>
          </div>
          <ChromeButton href="/get-an-invite">Get an invite</ChromeButton>
        </div>
      </div>
    </main>
  );
}
