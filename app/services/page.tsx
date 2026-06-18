import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";
import { CTASection } from "@/components/CTASection";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { servicesContent } from "@/data/servicesContent";
import { inviteApplication, labelIqLinks } from "@/data/siteContent";
import { MusicBusinessSupportAreas } from "@/components/MusicBusinessSupportAreas";

export const metadata: Metadata = {
  title: servicesContent.metadata.title,
  description: servicesContent.metadata.description,
};

export default function ServicesPage() {
  const { hero, details, expectations, cta } = servicesContent;
  const serviceMediaAccents = new Set(servicesContent.mediaAccentTitles);

  return (
    <main>
      <section className="page-hero services-hero">
        <div className="page-hero-copy reveal">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          {hero.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-inner service-detail-list">
          {details.map((service, index) => {
            const showMediaAccent = serviceMediaAccents.has(service.title);
            const serviceHref = "href" in service ? service.href : undefined;
            const serviceExternal =
              serviceHref === undefined ? true : "external" in service ? service.external : undefined;
            const ctaHref =
              serviceHref ?? (service.title.includes("AI") ? labelIqLinks.app : inviteApplication.href);

            return (
              <article
                className={`service-detail reveal ${
                  showMediaAccent ? "service-detail-with-media" : "service-detail-text-only"
                }`}
                key={service.title}
              >
                <div className="service-detail-copy">
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="feature-list compact">
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="plain-note">{service.note}</p>
                  {service.cta ? (
                    <ChromeButton href={ctaHref} external={Boolean(serviceExternal)} variant="secondary">
                      {service.cta}
                    </ChromeButton>
                  ) : null}
                </div>
                {showMediaAccent ? (
                  <div className="service-detail-media-slot">
                    <MediaPlaceholder
                      src={service.image}
                      alt={"imageAlt" in service ? service.imageAlt : undefined}
                      label={`${service.title} Editorial Accent`}
                      aspect="square"
                      className="service-media-accent"
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section chrome-section">
        <div className="section-inner">
          <div className="expectations reveal">
            <p className="eyebrow">{expectations.eyebrow}</p>
            <h2>{expectations.headline}</h2>
            {expectations.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
          <MusicBusinessSupportAreas />

    </main>
  );
}
