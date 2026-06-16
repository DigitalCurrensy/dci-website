import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { labelIqContent } from "@/data/labelIqContent";
import { labelIqLinks, mediaPaths } from "@/data/siteContent";

export const metadata: Metadata = {
  title: labelIqContent.metadata.title,
  description: labelIqContent.metadata.description,
};

export default function LabelIqPage() {
  const { hero, externalPlatform } = labelIqContent;

  return (
    <main>
      <section className="page-hero label-page-hero">
        <div className="page-hero-copy reveal">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p>{hero.body}</p>
          <div className="button-row">
            <ChromeButton href={labelIqLinks.app} external>
              {hero.primaryCta.label}
            </ChromeButton>
            <ChromeButton href={labelIqLinks.site} external variant="secondary">
              {hero.secondaryCta.label}
            </ChromeButton>
          </div>
        </div>
        <MediaPlaceholder
          src={mediaPaths.labelIqPreview}
          label={hero.mediaLabel}
          alt="Label IQ AI platform preview showing AI music video projects"
          aspect="wide"
          className="reveal labeliq-platform-media"
          priority
        />
      </section>

      <section className="section chrome-section">
        <div className="section-inner">
          <div className="expectations reveal">
            <p className="eyebrow">{externalPlatform.eyebrow}</p>
            <h2>{externalPlatform.headline}</h2>
            <ul className="feature-list">
              {externalPlatform.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p>{externalPlatform.body}</p>
            <ChromeButton href={labelIqLinks.app} external>
              {externalPlatform.cta.label}
            </ChromeButton>
          </div>
        </div>
      </section>
    </main>
  );
}
