import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";
import { CTASection } from "@/components/CTASection";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { aboutContent } from "@/data/aboutContent";
import { mediaPaths } from "@/data/siteContent";

export const metadata: Metadata = {
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
};

export default function AboutPage() {
  const { hero, mission, whatDciDoes, audience, inviteBased, finalCta } = aboutContent;

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-copy reveal">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          {hero.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <MediaPlaceholder
          src={mediaPaths.aboutStudio}
          label={hero.mediaLabel}
          alt="Luxury recording studio scene for Digital Currensy Inc."
          aspect="wide"
          className="reveal about-editorial-media"
          priority
        />
      </section>

      <section className="section">
        <div className="section-inner split-grid">
          <div className="copy-stack reveal">
            <p className="eyebrow">{mission.eyebrow}</p>
            <h2>{mission.headline}</h2>
            {mission.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-video-card reveal">
            <video
              className="about-video-player"
              src={mediaPaths.aboutStudioVideo}
              controls
              playsInline
              preload="metadata"
              aria-label="Digital Currensy Inc. studio video preview"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="section chrome-section">
        <div className="section-inner">
          <div className="copy-stack reveal">
            <p className="eyebrow">{whatDciDoes.eyebrow}</p>
            <h2>{whatDciDoes.headline}</h2>
            {whatDciDoes.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner audience-layout">
          <div className="copy-stack reveal">
            <p className="eyebrow">{audience.eyebrow}</p>
            <h2>{audience.headline}</h2>
          </div>
          <div className="audience-grid">
            {audience.items.map((item) => (
              <article className="mini-card reveal" key={item}>
                <span />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section invite-explain">
        <div className="section-inner split-grid">
          <div className="copy-stack reveal">
            <p className="eyebrow">{inviteBased.eyebrow}</p>
            <h2>{inviteBased.headline}</h2>
            {inviteBased.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ChromeButton href={inviteBased.cta.href} external={inviteBased.cta.external}>
              {inviteBased.cta.label}
            </ChromeButton>
          </div>
          <div className="statement-panel reveal">
            <p className="eyebrow">{inviteBased.statementEyebrow}</p>
            <h3>{inviteBased.statement}</h3>
          </div>
        </div>
      </section>

      <div className="section-inner">
        <CTASection
          title={finalCta.title}
          body={finalCta.body}
          buttonLabel={finalCta.buttonLabel}
          href={finalCta.href}
          external={finalCta.external}
        />
      </div>
    </main>
  );
}
