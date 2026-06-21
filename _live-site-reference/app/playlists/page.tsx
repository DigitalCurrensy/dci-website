import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PlaylistCard } from "@/components/PlaylistCard";
import { SectionHeading } from "@/components/SectionHeading";
import { playlistsContent } from "@/data/playlistsContent";

export const metadata: Metadata = {
  title: playlistsContent.metadata.title,
  description: playlistsContent.metadata.description,
};

export default function PlaylistsPage() {
  const { hero, philosophy, categories, playlistCardsSection, playlists, process, cta } =
    playlistsContent;

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
      </section>

      <section className="section chrome-section">
        <div className="section-inner split-grid">
          <div className="copy-stack reveal">
            <p className="eyebrow">{philosophy.eyebrow}</p>
            <h2>{philosophy.headline}</h2>
            {philosophy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article className="mini-card reveal" key={category.title}>
                <span />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow={playlistCardsSection.eyebrow}
            title={playlistCardsSection.headline}
            body={playlistCardsSection.body}
          />
          <div className="playlist-grid">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.title} {...playlist} />
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-inner">
          <SectionHeading eyebrow={process.eyebrow} title={process.headline} />
          <div className="process-grid four">
            {process.steps.map((step, index) => (
              <article className="process-step reveal" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
          <p className="disclaimer reveal">{process.disclaimer}</p>
        </div>
      </section>

      <div className="section-inner">
        <CTASection
          title={cta.title}
          body={cta.body}
          buttonLabel={cta.buttonLabel}
          href={cta.href}
          external={cta.external}
        />
      </div>
    </main>
  );
}
