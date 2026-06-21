import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";
import { syncContent } from "@/data/syncContent";

export const metadata: Metadata = {
  title: syncContent.metadata.title,
  description: syncContent.metadata.description,
};

export default function SyncPage() {
  const { hero, mediaLanes, process, readiness, disclaimer, cta } = syncContent;

  return (
    <main>
      <section className="page-hero sync-hero">
        <div className="page-hero-copy reveal">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p>{hero.subheadline}</p>
        </div>
      </section>

      <section className="section chrome-section sync-lanes-section">
        <div className="section-inner sync-impact-inner">
          <div className="sync-impact-heading reveal">
            <p className="sync-impact-label">{mediaLanes.eyebrow}</p>
            <h2>{mediaLanes.headline}</h2>
            <p>{mediaLanes.body}</p>
          </div>
          <div className="sync-text-wall reveal" aria-label={mediaLanes.ariaLabel}>
            {mediaLanes.names.map((lane) => (
              <span key={lane}>{lane}</span>
            ))}
          </div>
          {mediaLanes.note ? <p className="disclaimer reveal">{mediaLanes.note}</p> : null}
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading reveal">
            <p className="eyebrow">{process.eyebrow}</p>
            <h2>{process.headline}</h2>
            <p>{process.body}</p>
          </div>
          <div className="process-grid sync-process">
            {process.steps.map((step, index) => (
              <article className="process-step reveal" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section chrome-section">
        <div className="section-inner sync-checklist-layout">
          <div className="section-heading reveal">
            <p className="eyebrow">{readiness.eyebrow}</p>
            <h2>{readiness.headline}</h2>
          </div>
          <ul className="sync-checklist reveal">
            {readiness.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="expectations sync-expectations reveal">
            <p className="eyebrow">{disclaimer.eyebrow}</p>
            <h2>{disclaimer.headline}</h2>
            <p>{disclaimer.body}</p>
          </div>

          <div className="cta-band sync-cta reveal">
            <div>
              <p className="eyebrow">{cta.eyebrow}</p>
              <h2>{cta.headline}</h2>
              <p>{cta.body}</p>
            </div>
            <ChromeButton href={cta.href} external={cta.external}>
              {cta.buttonLabel}
            </ChromeButton>
          </div>
        </div>
      </section>
    </main>
  );
}
