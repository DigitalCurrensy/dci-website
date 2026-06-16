import { inviteApplication } from "@/data/siteContent";

export const servicesContent = {
  metadata: {
    title: "Services",
    description:
      "Explore DCI distribution, royalty tools, playlist review, sync prep, label services, music video support, and Label IQ AI.",
  },
  hero: {
    eyebrow: "DCI SERVICES",
    headline:
      "Distribution, label services, playlists, sync prep, video support, and campaign planning.",
    paragraphs: [
      "DCI gives independent artists and labels a clear way to release music and add support around the moments that matter.",
      "Start with clean distribution. Add playlist review, marketing, creative, sync prep, video content, publishing support, or Label IQ AI when your release needs more structure.",
    ],
  },
  mediaAccentTitles: [
    "Music Distribution",
    "Playlist Review + Pitching",
    "Music Video Content + AI Visuals",
  ],
  details: [
    {
      title: "Music Distribution",
      image: "/assets/images/services/dci-service-music-distribution.png",
      imageAlt: "Chrome music distribution icon",
      description:
        "Deliver your music to major streaming, video, and digital platforms with the files, metadata, artwork, timing, and release information organized before submission.",
      includes: [
        "Audio release setup",
        "Video delivery support",
        "Metadata review",
        "Release scheduling",
        "ISRC and UPC support",
        "Smart link setup when available",
        "Platform delivery support",
        "Performance tracking",
      ],
      note:
        "Distribution is not just uploading a song. It is making sure the release information is clean before it goes out.",
    },
    {
      title: "Royalty Tools + Splits",
      image: "/assets/images/services/royalties.jpg",
      description:
        "DCI helps artists manage royalty assignments, payee invitations, reporting, and payout setup through the platform.",
      includes: [
        "Payee invites",
        "Royalty split setup",
        "Royalty reporting",
        "Payment information setup",
        "Monthly reporting support",
        "Shared revenue tracking",
      ],
      note:
        "The goal is to help everyone understand what they are owed and where the money is coming from.",
    },
    {
      title: "Playlist Review + Pitching",
      image: "/assets/images/services/dci-service-playlist-review.png",
      imageAlt: "Chrome playlist review and submission icon",
      description:
        "Submit music for playlist review across DCI's curated playlist network and campaign opportunities. Playlist review is based on sound, fit, timing, audience, and release goals.",
      includes: [
        "Playlist submission review",
        "Genre and mood matching",
        "Release timing review",
        "Campaign playlist opportunities",
        "DJ pool support when available",
        "Feedback when needed",
      ],
      note: "Good playlist support starts with fit. The right song needs the right lane.",
    },
    {
      title: "Sync Prep + Licensing Support",
      image: "/assets/images/services/sync.jpg",
      description:
        "DCI helps prepare music for film, TV, advertising, sports, brand, and content opportunities by organizing the details that music supervisors and partners need.",
      includes: [
        "Clean song information",
        "Rights confirmation",
        "Instrumental availability",
        "Clean versions when needed",
        "Mood and usage notes",
        "Artist and contact information",
        "Pitch-ready metadata",
      ],
      note:
        "Sync starts before the pitch. The music needs to be easy to understand, easy to clear, and easy to present.",
      cta: "View Sync Page",
      href: "/sync",
    },
    {
      title: "Label Services",
      image: "/assets/images/services/label-services.jpg",
      description:
        "For releases that need more than distribution, DCI offers label services that help artists plan, package, and promote their music with more structure.",
      includes: [
        "Release strategy",
        "Marketing planning",
        "Digital advertising support",
        "Press support",
        "Artist bio support",
        "One sheet support",
        "EPK support",
        "Creative direction",
        "Social media campaign support",
        "Artist development sessions",
      ],
      note: "Label services help turn a release into a campaign.",
    },
    {
      title: "Music Video Content + AI Visuals",
      image: "/assets/images/services/dci-service-video-ai-visuals.png",
      imageAlt: "Chrome music video and AI visuals icon",
      description:
        "Music video content should support the release. DCI helps artists plan, distribute, and market video assets, while Label IQ AI gives creators a way to make AI-powered videos, short-form clips, visualizers, and custom music video content.",
      includes: [
        "Official music video support",
        "Video distribution support",
        "Premium video partner delivery when available",
        "YouTube rollout support",
        "Music video marketing support",
        "Short-form video planning",
        "AI music video content through Label IQ AI",
        "Custom AI video assets",
        "Visualizer and teaser concepts",
        "Trailer clips",
        "Vertical video edits",
        "Campaign video assets",
      ],
      note:
        "The song needs content around it. This service helps artists turn the video into a release asset, a marketing asset, and a fan-facing moment.",
      cta: "Request Video Support",
    },
    {
      title: "AI Music, AI Video + Creator Tokens",
      image: "/assets/images/labeliq/labeliq-ai-platform-preview.png",
      description:
        "Label IQ AI is the connected AI platform for creators who want to make songs, videos, jingles, short-form content, and fan-backed campaigns.",
      includes: [
        "AI song creation",
        "AI jingle creation",
        "Short-form AI video content",
        "AI music video clips",
        "Custom AI videos",
        "Custom AI songs",
        "Custom campaign jingles",
        "Creator token launches",
        "Music token launches",
        "Fan-funded campaign pages",
        "Automatic revenue-share tools when available",
      ],
      note:
        "Label IQ AI helps creators make content and fund ideas faster. DCI connects artists to the platform when they need AI creative, fan-backed campaigns, or custom AI assets.",
      cta: "Launch Label IQ AI",
    },
  ],
  expectations: {
    eyebrow: "CLEAR EXPECTATIONS MATTER.",
    headline: "No inflated promises. Just cleaner setup and practical support.",
    paragraphs: [
      "DCI does not guarantee streams, playlist placement, sync placement, press coverage, viral moments, fan funding, token sales, or specific campaign results.",
      "We focus on clean setup, strong presentation, organized information, and practical support around the release.",
    ],
  },
  cta: {
    title: "Need support for your next release?",
    body:
      "Request an invite and tell us what you are releasing, when it is coming out, and what kind of support you need.",
    buttonLabel: "Get An Invite",
    href: inviteApplication.href,
    external: true,
  },
};
