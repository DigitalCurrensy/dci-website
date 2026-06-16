import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";
import { CTASection } from "@/components/CTASection";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { PlaylistCard } from "@/components/PlaylistCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { homeContent } from "@/data/homeContent";
import { labelIqLinks, mediaPaths } from "@/data/siteContent";
import { playlistsContent } from "@/data/playlistsContent";

export const metadata: Metadata = {
  title: homeContent.metadata.title,
  description: homeContent.metadata.description,
};

export default function Home() {
  const {
    hero,
    servicesPreview,
    labelIqAi,
    playlistsPreview,
    musicVideoContent,
    finalCta,
  } = homeContent;

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-copy reveal">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p>{hero.subheadline}</p>
          <p className="support-line">{hero.supportLine}</p>
          <div className="button-row">
            <ChromeButton href={hero.primaryCta.href} external={hero.primaryCta.external}>
              {hero.primaryCta.label}
            </ChromeButton>
            <ChromeButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ChromeButton>
          </div>
        </div>

        <div className="hero-media reveal">
          <MediaPlaceholder
            src={mediaPaths.heroArtist}
            label={hero.mediaLabel}
            alt="Luxury recording studio scene for Digital Currensy Inc."
            aspect="wide"
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow={servicesPreview.eyebrow}
            title={servicesPreview.headline}
            body={servicesPreview.body}
          />
          <div className="service-grid four">
            {servicesPreview.cards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="section-action">
            <ChromeButton href={servicesPreview.cta.href} variant="secondary">
              {servicesPreview.cta.label}
            </ChromeButton>
          </div>
        </div>
      </section>

      <section className="section chrome-section">
        <div className="section-inner labeliq-preview">
          <div className="copy-stack reveal">
            <p className="eyebrow">{labelIqAi.eyebrow}</p>
            <h2>{labelIqAi.headline}</h2>
            <p>{labelIqAi.body}</p>
            <ul className="feature-list">
              {labelIqAi.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="button-row">
              <ChromeButton href={labelIqLinks.app} external>
                {labelIqAi.primaryCta.label}
              </ChromeButton>
              <ChromeButton href={labelIqLinks.site} external variant="secondary">
                {labelIqAi.secondaryCta.label}
              </ChromeButton>
            </div>
            <small>{labelIqAi.note}</small>
          </div>
          <div className="media-stack reveal">
            <MediaPlaceholder
              src={mediaPaths.labelIqPreview}
              label={labelIqAi.mediaLabel}
              alt="Label IQ AI platform preview showing AI music video projects"
              aspect="wide"
              className="labeliq-platform-media"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow={playlistsPreview.eyebrow}
            title={playlistsPreview.headline}
            body={playlistsPreview.body}
          />
          <div className="playlist-preview">
            {playlistsContent.playlists.slice(0, 4).map((playlist) => (
              <PlaylistCard key={playlist.title} {...playlist} />
            ))}
          </div>
          <div className="section-action">
            <ChromeButton href={playlistsPreview.cta.href} variant="secondary">
              {playlistsPreview.cta.label}
            </ChromeButton>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-inner split-grid reverse">
          <div className="video-preview-card reveal">
            <video
              className="video-preview-player"
              src={mediaPaths.aiMusicVideoPreview}
              controls
              playsInline
              preload="metadata"
              aria-label="AI music video content preview"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="copy-stack reveal">
            <p className="eyebrow">{musicVideoContent.eyebrow}</p>
            <h2>{musicVideoContent.headline}</h2>
            <p>{musicVideoContent.body}</p>
            <ul className="feature-list compact">
              {musicVideoContent.features.slice(0, 4).map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <div className="button-row">
              <ChromeButton
                href={musicVideoContent.primaryCta.href}
                external={musicVideoContent.primaryCta.external}
              >
                {musicVideoContent.primaryCta.label}
              </ChromeButton>
              <ChromeButton href={labelIqLinks.app} external variant="secondary">
                {musicVideoContent.secondaryCta.label}
              </ChromeButton>
            </div>
          </div>
        </div>
      </section>

      <div className="section-inner final-home-cta">
        <CTASection
          title={finalCta.title}
          body={finalCta.body}
          buttonLabel={finalCta.buttonLabel}
          href={finalCta.href}
          external={finalCta.external}
          loginLink={finalCta.loginLink}
        />
      </div>
    </main>
  );
}
