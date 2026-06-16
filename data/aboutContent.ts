import { inviteApplication } from "@/data/siteContent";

export const aboutContent = {
  metadata: {
    title: "About",
    description:
      "Learn how Digital Currensy Inc. supports independent artists, managers, producers, and labels with invite-based distribution and label services.",
  },
  hero: {
    eyebrow: "ABOUT DIGITAL CURRENSY INC.",
    headline: "Built for independent artists who want control and support.",
    paragraphs: [
      "Digital Currensy Inc. is a music distribution and label services company working with independent artists, managers, producers, and labels.",
      "We help artists release music, manage content, organize royalties, review playlist opportunities, prepare for sync, support video content, and build release plans with clearer information.",
    ],
    mediaLabel: "Artist Photo Placeholder",
  },
  mission: {
    eyebrow: "MISSION",
    headline: "Our mission is simple.",
    paragraphs: [
      "Help independent artists and labels keep control of their music while giving them the tools, support, and information needed to move with more confidence.",
      "That means clean delivery, clear reporting, organized rights information, practical campaign support, and technology that makes the release process easier to understand.",
    ],
    mediaLabel: "Artist Team Placeholder",
  },
  whatDciDoes: {
    eyebrow: "WHAT DCI DOES",
    headline: "Distribution, support, and release information in one invite-based system.",
    paragraphs: [
      "DCI brings distribution, label services, playlists, sync prep, video content support, royalty tools, and Label IQ AI into one invite-based system.",
      "Artists can use the platform to release audio and video, track performance, manage payees, review royalty information, and request added support around a release.",
    ],
  },
  audience: {
    eyebrow: "WHO DCI IS FOR",
    headline: "Built for teams serious about release quality, ownership, timing, and growth.",
    items: [
      "Independent artists preparing singles, EPs, albums, or videos",
      "Managers looking for distribution and campaign support",
      "Producers and creators managing multiple releases",
      "Independent labels that need infrastructure, reporting, and support",
      "Artists who want playlist review, sync prep, and smarter release planning",
    ],
  },
  inviteBased: {
    eyebrow: "WHY INVITE-BASED",
    headline: "Access starts with the music, the rights, the timeline, and the goals.",
    paragraphs: [
      "Not every release needs the same support. Not every artist is at the same stage. DCI uses an invite process so we can understand the music, the rights, the timeline, and the goals before opening dashboard access or recommending services.",
      "This keeps the process cleaner for the artist and clearer for the team reviewing each release.",
    ],
    cta: { label: "Get An Invite", href: inviteApplication.href, external: true },
    statementEyebrow: "TELL US WHAT YOU ARE BUILDING.",
    statement:
      "Request an invite and share your music, release plans, and service needs.",
  },
  finalCta: {
    title: "Tell us what you are building.",
    body: "Request an invite and share your music, release plans, and service needs.",
    buttonLabel: "Get An Invite",
    href: inviteApplication.href,
    external: true,
  },
};
