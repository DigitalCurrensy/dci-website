import { dashboardLogin, inviteApplication } from "@/data/siteContent";

export const homeContent = {
  metadata: {
    title: "Independent Music Distribution",
    description:
      "Digital Currensy Inc. helps artists and labels release music, manage royalties, pitch playlists, prepare sync, support video content, and plan campaigns.",
  },
  hero: {
    eyebrow: "DIGITAL CURRENSY INC. / DCI",
    headline: "Independent music distribution with real support behind it.",
    subheadline:
      "Distribution, royalties, playlists, sync prep, video support, and campaign services for independent artists and labels.",
    supportLine:
      "Built for teams that need clean delivery, clear reporting, and support around the release.",
    primaryCta: { label: "GET AN INVITE", href: inviteApplication.href, external: true },
    secondaryCta: { label: "EXPLORE SERVICES", href: "/services" },
    mediaLabel: "Hero Video Placeholder",
  },
  servicesPreview: {
    eyebrow: "SERVICES",
    headline: "Release support without the noise.",
    body: "Start with distribution, then add focused support when the release calls for it.",
    cta: { label: "View Services", href: "/services" },
    cards: [
      {
        title: "Distribution",
        icon: "01",
        description:
          "Release your music to major streaming, video, and digital platforms with clean metadata, release setup, and delivery support.",
      },
      {
        title: "Playlists",
        icon: "02",
        description:
          "Submit music for playlist review across DCI's curated playlist network and related campaign lanes.",
      },
      {
        title: "Sync",
        icon: "03",
        href: "/sync",
        description:
          "Prepare songs for film, TV, brand, sports, and content opportunities with the right files, notes, and rights information.",
      },
      {
        title: "Label Services",
        icon: "04",
        description:
          "Add support for rollout planning, creative assets, marketing, press, artist packaging, and release strategy.",
      },
    ],
  },
  labelIqAi: {
    eyebrow: "LABEL IQ AI",
    headline: "AI music, AI video, jingles, and fan-backed campaigns.",
    body:
      "Create short-form AI video content, AI songs, jingles, music video clips, and custom campaign assets through Label IQ AI. Artists can also launch creator or music tokens so fans can support approved projects.",
    features: [
      "AI songs",
      "AI jingles",
      "Short-form AI video",
      "AI music video clips",
      "Custom AI videos",
      "Creator tokens",
    ],
    primaryCta: { label: "Launch Label IQ AI" },
    secondaryCta: { label: "Learn More" },
    note:
      "Label IQ AI is a separate connected platform. Some features may require approval, platform terms, or campaign review.",
    mediaLabel: "Label IQ AI Platform Preview",
  },
  playlistsPreview: {
    eyebrow: "CURATED PLAYLISTS",
    headline: "Curated lanes for records that fit.",
    body: "Playlist review is based on sound, timing, and campaign context. Placement is never guaranteed.",
    cta: { label: "View Playlists", href: "/playlists" },
  },
  musicVideoContent: {
    eyebrow: "MUSIC VIDEO CONTENT",
    headline: "Video content for the way music moves now.",
    body:
      "Plan official videos, short-form assets, visualizers, teasers, and AI-powered clips around the release instead of treating video as a separate upload.",
    features: [
      "Music video distribution",
      "Video rollout support",
      "Short-form video content",
      "AI music video clips",
      "Custom AI video content",
      "Visualizer concepts",
      "Trailer and teaser planning",
      "YouTube and social video support",
    ],
    primaryCta: { label: "Request Video Support", href: inviteApplication.href, external: true },
    secondaryCta: { label: "Create With Label IQ AI" },
    mediaLabels: {
      officialVideo: "Official Music Video Placeholder",
      shortVideo: "Short-Form / AI Video Placeholder",
    },
  },
  finalCta: {
    title: "Request access to DCI.",
    body:
      "Share the artist, release, music links, and support needed. DCI reviews every invite request before opening platform access.",
    buttonLabel: "Get An Invite",
    href: inviteApplication.href,
    external: true,
    loginLink: {
      promptPrefix: dashboardLogin.promptPrefix,
      label: dashboardLogin.promptLabel,
      href: dashboardLogin.href,
    },
  },
};
