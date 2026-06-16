import { inviteApplication } from "@/data/siteContent";

export type Field = {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "date"
    | "textarea"
    | "select"
    | "radio"
    | "checkbox";
  placeholder?: string;
  options?: string[];
  required?: boolean;
};

export type Step = {
  title: string;
  intro?: string;
  fields: Field[];
};

export type FormMode = "artist" | "campaign";

export const invitePageContent = {
  metadata: {
    title: "Get An Invite",
    description:
      "Complete the unified Digital Currensy Inc. platform application.",
  },
  hero: {
    eyebrow: "GET AN INVITE",
    headline: "Tell us about your next project.",
    intro:
      "Complete our unified platform application. DCI reviews every request to evaluate music, timeline, and campaign ecosystem fit.",
  },
  application: {
    buttonLabel: "START APPLICATION",
    href: inviteApplication.href,
    external: true,
  },
};

export const googleInviteContent = {
  selectorLabel: "Questionnaire type",
  panelNote:
    "This questionnaire is powered by Google Forms. Your response will be saved to DCI's review spreadsheet.",
  missingEmbedMessage:
    "Google Form URL not added yet. Paste the public Google Form URL in the form config file.",
  fallbackLabel: "Open Form In New Tab",
  forms: {
    artist: {
      selectorNumber: "01",
      title: "Artist Intake Questionnaire",
      description:
        "For artists, managers, producers, and labels requesting DCI platform access.",
      buttonLabel: "Start Artist Intake",
      responseSpreadsheetLabel: "Artist Intake Questionnaire - Responses",
    },
    campaign: {
      selectorNumber: "02",
      title: "Campaign Strategy & Marketing Questionnaire",
      description:
        "For releases that need marketing, playlist review, sync prep, video support, press, ads, or campaign planning.",
      buttonLabel: "Start Campaign Questionnaire",
      responseSpreadsheetLabel: "Campaign Strategy & Marketing Questionnaire - Responses",
    },
  },
};

export const artistSteps: Step[] = [
  {
    title: "Artist Information",
    intro: "Tell us who you are, where your music lives, and how we can review your request.",
    fields: [
      {
        name: "artistName",
        label: "Artist name",
        type: "text",
        placeholder: "Enter artist name, group name, producer name, or label name",
        required: true,
      },
      {
        name: "legalName",
        label: "Legal full name",
        type: "text",
        placeholder: "Enter your full legal name",
        required: true,
      },
      {
        name: "role",
        label: "Which best describes you?",
        type: "select",
        options: ["Artist", "Manager", "Producer", "Label", "Songwriter", "Creative Director", "Other"],
        required: true,
      },
      {
        name: "primaryGenre",
        label: "Primary genre",
        type: "text",
        placeholder: "Hip-Hop, R&B, Pop, Afrobeats, Latin, Gospel, Alternative",
        required: true,
      },
      {
        name: "secondaryGenre",
        label: "Secondary genre",
        type: "text",
        placeholder: "Optional",
      },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      {
        name: "email",
        label: "Email address",
        type: "email",
        placeholder: "name@email.com",
        required: true,
      },
      {
        name: "phone",
        label: "Phone number",
        type: "tel",
        placeholder: "Include country code if outside the U.S.",
        required: true,
      },
      {
        name: "location",
        label: "City / state / country",
        type: "text",
        placeholder: "Los Angeles, CA, United States",
        required: true,
      },
    ],
  },
  {
    title: "Social + Music Links",
    fields: [
      { name: "instagram", label: "Link to Instagram", type: "url", placeholder: "Paste Instagram link" },
      { name: "tiktok", label: "Link to TikTok", type: "url", placeholder: "Paste TikTok link" },
      { name: "youtube", label: "Link to YouTube", type: "url", placeholder: "Paste YouTube channel or video link" },
      { name: "website", label: "Link to website", type: "url", placeholder: "Artist website, Linktree, Beacons, or press link" },
      {
        name: "musicLink",
        label: "Paste your strongest music link",
        type: "url",
        placeholder: "Spotify, Apple Music, YouTube, SoundCloud, Dropbox, private SoundCloud",
        required: true,
      },
      { name: "spotify", label: "Spotify link", type: "url", placeholder: "Paste Spotify artist profile or song link" },
      { name: "appleMusic", label: "Apple Music link", type: "url", placeholder: "Paste Apple Music artist profile or song link" },
      { name: "youtubeMusic", label: "YouTube Music / music video link", type: "url", placeholder: "Paste YouTube link" },
      { name: "unreleasedMusic", label: "Unreleased music link", type: "url", placeholder: "Paste private link if you are submitting unreleased music" },
    ],
  },
  {
    title: "Agreement",
    fields: [
      {
        name: "artistAgreement",
        label:
          "I understand that submitting this form does not guarantee dashboard access, playlist placement, sync placement, distribution approval, campaign results, or service availability.",
        type: "checkbox",
        required: true,
      },
    ],
  },
];

export const campaignSteps: Step[] = [
  {
    title: "Campaign Basics",
    fields: [
      { name: "artistName", label: "Artist name", type: "text", placeholder: "Enter artist name", required: true },
      { name: "contactEmail", label: "Contact email", type: "email", placeholder: "name@email.com", required: true },
      { name: "releaseTitle", label: "Release title", type: "text", placeholder: "Song, EP, album, or video title", required: true },
      {
        name: "releaseType",
        label: "Release type",
        type: "radio",
        options: ["Single", "EP", "Album", "Mixtape", "Music Video", "Catalog Campaign", "Brand Campaign", "Tour / Event Campaign", "Other"],
        required: true,
      },
      { name: "targetDate", label: "Target release date", type: "date", required: true },
      {
        name: "alreadyOut",
        label: "Is this release already out?",
        type: "radio",
        options: ["Yes", "No", "Coming soon", "Part of the campaign is already live"],
        required: true,
      },
    ],
  },
  {
    title: "Services Needed",
    fields: [
      {
        name: "servicesNeeded",
        label: "What do you need help with?",
        type: "checkbox",
        options: [
          "Music Distribution",
          "Video Distribution",
          "Royalty Splits",
          "Playlist Review",
          "Sync Prep",
          "Label Services",
          "Marketing Campaign",
          "Music Video Content",
          "Press / Blog Support",
          "Artist Bio / One Sheet / EPK",
          "Publishing Support",
          "Label IQ AI",
          "AI Song Creation",
          "AI Jingle Creation",
          "AI Music Video Content",
          "Short-Form AI Video Content",
          "Creator Token Launch",
          "Fan-Funded Campaign",
          "Not sure yet",
        ],
        required: true,
      },
      {
        name: "topPriority",
        label: "Which service is the top priority?",
        type: "select",
        options: [
          "Music Distribution",
          "Video Distribution",
          "Playlist Review",
          "Sync Prep",
          "Marketing Campaign",
          "Music Video Content",
          "Press / Blog Support",
          "Artist Bio / One Sheet / EPK",
          "Publishing Support",
          "Label IQ AI",
          "AI Song Creation",
          "AI Video Content",
          "Creator Token Launch",
          "Fan-Funded Campaign",
          "Not sure yet",
        ],
        required: true,
      },
      {
        name: "assetsNeeded",
        label: "Do you need help creating campaign assets?",
        type: "checkbox",
        options: [
          "Cover Artwork",
          "Motion Artwork",
          "Music Video",
          "Trailer",
          "Teasers",
          "Reels / TikToks / Shorts",
          "Digital Ads",
          "Press Photos",
          "Artist Bio",
          "One Sheet",
          "EPK",
          "Smart Link",
          "Lyric Clips",
          "Performance Clips",
          "Behind-the-Scenes Content",
          "AI Video Content",
          "AI Song or Jingle",
          "Creator Token Campaign",
          "Not sure yet",
        ],
      },
    ],
  },
  {
    title: "Campaign Goals",
    fields: [
      {
        name: "mainGoal",
        label: "What is the main goal for this release?",
        type: "checkbox",
        options: [
          "Build awareness",
          "Grow streams",
          "Support a music video",
          "Reach playlist listeners",
          "Prepare for sync opportunities",
          "Build a stronger artist brand",
          "Set up a larger campaign",
          "Organize catalog and royalties",
          "Create short-form AI content",
          "Create an AI song or jingle",
          "Create AI music video content",
          "Launch a creator token",
          "Let fans help fund the project",
        ],
        required: true,
      },
      {
        name: "secondaryGoal",
        label: "What is the secondary goal?",
        type: "checkbox",
        options: [
          "Grow social media",
          "Get press coverage",
          "Drive YouTube views",
          "Increase Spotify saves",
          "Build email or SMS list",
          "Reach DJs",
          "Reach influencers",
          "Reach music supervisors",
          "Promote a live event",
          "Support a tour",
          "Build regional awareness",
          "Not sure yet",
        ],
      },
      {
        name: "successDefinition",
        label: "What would make this campaign successful to you?",
        type: "textarea",
        placeholder: "Tell us what result matters most.",
        required: true,
      },
    ],
  },
  {
    title: "Agreement",
    fields: [
      {
        name: "campaignAgreement",
        label:
          "I understand that submitting this form does not guarantee playlist placement, sync placement, press coverage, streams, views, followers, sales, fan funding, token sales, or campaign results.",
        type: "checkbox",
        required: true,
      },
    ],
  },
];

export const inviteFormContent = {
  selectorLabel: "Questionnaire type",
  startEyebrow: "START QUESTIONNAIRE",
  successEyebrow: "SUBMITTED",
  successHeadline: "Request received.",
  startAnotherLabel: "Start Another Request",
  requiredError: "This field is required.",
  submitError: "Something did not send. Please check your connection and try again.",
  emptySelectLabel: "Select one",
  stepLabel: "Step",
  backLabel: "Back",
  saveLabel: "Save / Continue Later",
  continueLabel: "Continue",
  submittingLabel: "Submitting",
  forms: {
    artist: {
      selectorNumber: "01",
      selectorTitle: "Artist Intake Questionnaire",
      selectorDescription: "Artist, manager, label, producer, or catalog access request.",
      title: "Artist Intake Questionnaire",
      intro:
        "Tell us who you are, where your music lives, and how we can review your request. This form helps Digital Currensy Inc. understand the artist, team, catalog, and platform fit before sending next steps.",
      submit: "Submit Artist Intake",
      confirmation:
        "Your artist intake has been submitted. Thank you for requesting access to Digital Currensy Inc. The DCI team will review your music, links, rights information, and service needs. If your submission is a fit, we will follow up with next steps.",
    },
    campaign: {
      selectorNumber: "02",
      selectorTitle: "Campaign Strategy & Marketing Questionnaire",
      selectorDescription: "Marketing, playlist, sync, video, AI, and rollout support.",
      title: "Campaign Strategy & Marketing Questionnaire",
      intro:
        "Use this form if you need marketing, playlist review, sync prep, music video content support, press, ads, or a release campaign.",
      submit: "Submit Campaign Request",
      confirmation:
        "Your campaign request has been submitted. Thank you for sharing your release details. The DCI team will review your goals, music links, budget, timeline, and service needs. If the campaign is a fit, we will follow up with next steps.",
    },
  },
};
