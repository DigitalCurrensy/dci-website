import { ChromeButton } from "@/components/ChromeButton";
import { ctaDefaults } from "@/data/siteContent";

type CTASectionProps = {
  title: string;
  body: string;
  eyebrow?: string;
  buttonLabel?: string;
  href?: string;
  external?: boolean;
  loginLink?: {
    promptPrefix: string;
    label: string;
    href: string;
  };
};

export function CTASection({
  title,
  body,
  eyebrow = ctaDefaults.eyebrow,
  buttonLabel = ctaDefaults.buttonLabel,
  href = ctaDefaults.href,
  external = ctaDefaults.external,
  loginLink,
}: CTASectionProps) {
  return (
    <section className="cta-band reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        {loginLink ? (
          <p className="cta-login-row">
            <span>{loginLink.promptPrefix}</span>{" "}
            <a href={loginLink.href} target="_blank" rel="noopener noreferrer">
              {loginLink.label}
            </a>
          </p>
        ) : null}
      </div>
      <ChromeButton href={href} external={external}>
        {buttonLabel}
      </ChromeButton>
    </section>
  );
}
