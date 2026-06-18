const supportAreas = [
  {
    href: "/artist-development",
    title: "Artist development",
    description: "Build the structure behind artist growth, releases, catalog, marketing, and reporting.",
  },
  {
    href: "/independent-label-services",
    title: "Independent label services",
    description: "Organize label operations, artist support, release planning, catalog, and campaigns.",
  },
  {
    href: "/music-business-support",
    title: "Music business support",
    description: "Connect releases, catalog, royalties, distribution, playlists, sync, and marketing.",
  },
  {
    href: "/release-strategy",
    title: "Release strategy",
    description: "Plan release timing, campaign assets, streaming context, and rollout priorities.",
  },
  {
    href: "/sync-preparation",
    title: "Sync preparation",
    description: "Prepare music, metadata, rights context, and catalog details for sync opportunities.",
  },
  {
    href: "/playlist-strategy",
    title: "Playlist strategy",
    description: "Organize playlist goals, pitching context, streaming data, and campaign support.",
  },
  {
    href: "/catalog-management",
    title: "Catalog management",
    description: "Keep release records, metadata, rights context, and reporting details organized.",
  },
  {
    href: "/metadata-review",
    title: "Metadata review",
    description: "Clean up credits, release data, catalog details, and distribution readiness.",
  },
  {
    href: "/distribution-reporting",
    title: "Distribution reporting",
    description: "Review platform reporting context, catalog data, release history, and performance signals.",
  },
  {
    href: "/creator-tokens",
    title: "Creator tokens",
    description: "Plan tokenized creator access, fan engagement, Label IQ AI workflows, and campaign utility.",
  },
];

export function MusicBusinessSupportAreas() {
  return (
    <section className="section" aria-labelledby="music-business-support-areas-title">
      <div className="section-inner split-grid">
        <div className="section-heading">
          <p className="eyebrow">Music business support areas</p>
          <h2 id="music-business-support-areas-title">
            Explore DCI support across releases, catalog, playlists, sync, and creator tools.
          </h2>
          <p>
            Digital Currency Inc. helps independent artists, labels, managers,
            producers, creators, and creative teams organize the work around
            releases, catalog management, reporting, playlist strategy, sync
            preparation, music marketing, and creator-token planning.
          </p>
        </div>

        <div className="copy-stack">
          <ul className="feature-list compact">
            {supportAreas.map((area) => (
              <li key={area.href}>
                <a href={area.href}>{area.title}</a>
                <br />
                <span>{area.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
