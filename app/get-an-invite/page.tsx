import type { Metadata } from "next";
import { ChromeButton } from "@/components/ChromeButton";
import { invitePageContent } from "@/data/inviteContent";

export const metadata: Metadata = {
  title: invitePageContent.metadata.title,
  description: invitePageContent.metadata.description,
};

export default function GetAnInvitePage() {
  return (
    <main>
      <section className="page-hero invite-hero">
        <div className="page-hero-copy reveal">
          <p className="eyebrow">{invitePageContent.hero.eyebrow}</p>
          <h1>{invitePageContent.hero.headline}</h1>
          <p>{invitePageContent.hero.intro}</p>
        </div>
      </section>

      <section className="section invite-section single-invite-section">
        <div className="section-inner invite-single-inner">
          <div className="single-invite-card reveal">
            <ChromeButton
              href={invitePageContent.application.href}
              external={invitePageContent.application.external}
              className="single-invite-action"
            >
              {invitePageContent.application.buttonLabel}
            </ChromeButton>
          </div>
        </div>
      </section>
    </main>
  );
}
