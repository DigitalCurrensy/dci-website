import type { LegalContent } from "@/data/legalContent";

type LegalPageProps = {
  content: LegalContent;
};

export function LegalPage({ content }: LegalPageProps) {
  return (
    <main className="legal-page">
      <article className="legal-shell reveal">
        <header className="legal-header">
          <p className="eyebrow">Digital Currensy Inc.</p>
          <h1>{content.title}</h1>
          <p className="legal-effective">{content.effectiveDate}</p>
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </header>

        <div className="legal-content">
          {content.sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
