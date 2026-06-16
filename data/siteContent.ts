export const globalContent = {
  companyName: "Digital Currensy Inc.",
  shortCompanyName: "DCI",
  domain: "https://digitalcurrensy.com",
  contactEmail: "info@digitalcurrensy.com",
};

export const externalLinks = {
  labelIqAiApp: "https://app.labeliq.ai",
  labelIqAiSite: "https://labeliq.ai",
  distroDashboard: "https://distro.digitalcurrensy.io",
  inviteQuestionnaire: "https://DCI.formberry.io/en/DigitalCurrensyInc-Questionnaire",
};

export const dashboardLogin = {
  headerLabel: "LOGIN",
  footerLabel: "Distro Login",
  promptPrefix: "Already a member?",
  promptLabel: "Log in to Distro Dashboard →",
  href: externalLinks.distroDashboard,
};

export const inviteApplication = {
  href: externalLinks.inviteQuestionnaire,
  external: true,
};

export const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PLAYLISTS", href: "/playlists" },
  { label: "SYNC", href: "/sync" },
  { label: "LABEL IQ AI", href: externalLinks.labelIqAiApp, external: true },
  { label: "GET AN INVITE", href: inviteApplication.href, external: true, cta: true },
];

export const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/digitalcurrensy" },
  { label: "TikTok", url: "https://www.tiktok.com/@digitalcurrensy" },
  { label: "YouTube", url: "https://www.youtube.com/@DigitalCurrensy" },
  { label: "X", url: "https://x.com/digitalcurrensy" },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/digitalcurrensy" },
  { label: "Kick", url: "https://kick.com/digitalcurrensy" },
  { label: "Twitch", url: "https://www.twitch.tv/digitalcurrensy" },
  {
    label: "DCI GPT",
    url: "https://chatgpt.com/g/g-2Td6g7htS-music-distribution-label-services-ai",
  },
];

export const footerContent = {
  body: "Independent distribution for artists building real momentum.",
  getInviteLabel: "Get An Invite",
  legalLinks: [
    { label: "Terms of service", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Cookie policy", href: "/cookies" },
  ],
  copyright: "© 2026 DIGITAL CURRENSY, INC. ALL RIGHTS RESERVED.",
};

export const ctaDefaults = {
  eyebrow: "DCI ACCESS",
  buttonLabel: "Get An Invite",
  href: inviteApplication.href,
  external: inviteApplication.external,
};

export const labelIqLinks = {
  app: externalLinks.labelIqAiApp,
  site: externalLinks.labelIqAiSite,
};

export const contactEmail = globalContent.contactEmail;

export const mediaPaths = {
  logoMark: "/assets/logo/dci-logo-2026.jpg",
  coinLight: "/assets/logo/dci-coin-light.png",
  coinDepth: "/assets/logo/dci-coin-depth.png",
  // This PNG can be optimized to WebP or AVIF later for production.
  heroArtist: "/assets/images/hero/dci-image-header.png",
  dashboard: "/assets/images/hero/dci-dashboard-preview.png",
  aboutStudio: "/assets/images/about/dci-about-luxury-studio.png",
  aboutStudioVideo: "/assets/videos/dci-about-studio-video.mp4",
  aboutTeam: "/assets/images/about/artist-team.jpg",
  aboutDashboard: "/assets/images/about/distribution-dashboard.jpg",
  // This PNG can be optimized to WebP or AVIF later for production.
  labelIqPreview: "/assets/images/labeliq/labeliq-ai-platform-preview.png",
  aiSong: "/assets/images/labeliq/ai-song-generator.jpg",
  aiVideo: "/assets/images/labeliq/ai-video-generator.jpg",
  creatorToken: "/assets/images/labeliq/creator-token-dashboard.jpg",
  aiMusicVideoPreview: "/assets/videos/dci-ai-mv-preview.mp4",
  officialVideo: "/assets/images/video/official-video-placeholder.jpg",
  shortVideo: "/assets/images/video/short-form-video-placeholder.jpg",
  aiMusicVideo: "/assets/images/video/ai-music-video-placeholder.jpg",
};

export const siteMetadata = {
  metadataBase: globalContent.domain,
  defaultTitle: "Digital Currensy Inc. | Independent Music Distribution",
  titleTemplate: "%s | Digital Currensy Inc.",
  description:
    "Invite-based independent music distribution, label services, playlist review, sync prep, video support, royalties, campaigns, and Label IQ AI.",
  openGraphTitle: "Digital Currensy Inc.",
  openGraphDescription: "Independent distribution for artists building real momentum.",
  openGraphImageAlt: "Digital Currensy Inc. chrome dashboard preview",
  twitterDescription: "Invite-based independent music distribution and label services.",
};
