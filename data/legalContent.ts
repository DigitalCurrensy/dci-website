export type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalContent = {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

export const termsContent: LegalContent = {
  title: "Terms of Service",
  effectiveDate: "Effective Date: June 16, 2026",
  intro: [
    'Welcome to Digital Currensy Inc. ("DCI", "we", "us", or "our"). By accessing or using our website, platform services, or dashboard located at https://distro.digitalcurrensy.io (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Services.',
  ],
  sections: [
    {
      title: "1. Eligibility & Accounts",
      items: [
        "Age Requirement: You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account or submit music.",
        "Account Accuracy: You are responsible for maintaining accurate, complete, and up-to-date information on your dashboard.",
        "Security: You are solely responsible for protecting your account credentials. Any activity occurring under your account is your responsibility.",
      ],
    },
    {
      title: "2. Digital Distribution & Playlist Services",
      items: [
        'Grant of Rights: By submitting sound recordings and musical compositions (collectively, "Content") for distribution or playlist placement, you grant DCI a non-exclusive, worldwide license to distribute, stream, perform, and market your music to Digital Service Providers (DSPs) and curators.',
        "Ownership: You retain 100% of your underlying copyrights. DCI does not claim ownership over your music.",
        "Playlist Placements: Submission to DCI’s curated playlist ecosystem via our intake questionnaires does not guarantee placement. All placements are merit-based, subjective, and subject to editorial review.",
      ],
    },
    {
      title: "3. Sync Licensing & Media Lanes",
      items: [
        "Pitching Authorization: If you opt into DCI’s Sync program, you authorize DCI to pitch your catalog to TV, film, sports, gaming, and brand partners.",
        "Clearance: You warrant that you control 100% of both the master and publishing rights for any track submitted to Sync, or that you have secured all necessary third-party clearances.",
      ],
    },
    {
      title: "4. Label IQ AI & Creative Tools",
      items: [
        "AI Generation: Our Label IQ AI tools allow users to generate promotional assets, music videos, or short-form clips. You agree not to use copyrighted material without authorization when prompting or feeding inputs into the AI.",
        "Platform Tokens: Any creator or campaign tokens launched via DCI are subject to platform compliance and may not be used as unregulated financial instruments.",
      ],
    },
    {
      title: "5. Prohibited Conduct & Fraud",
      paragraphs: [
        "DCI maintains a strict zero-tolerance policy for streaming fraud, artificial manipulation of metrics, and copyright infringement. We reserve the right to immediately terminate accounts, take down content, and withhold royalties if fraudulent activity is detected by our system or our DSP partners.",
      ],
    },
    {
      title: "6. Limitation of Liability",
      paragraphs: [
        'DCI provides its services "as is" without warranties of any kind. In no event shall Digital Currensy Inc. be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use the platform.',
      ],
    },
  ],
};

export const privacyContent: LegalContent = {
  title: "Privacy Policy",
  effectiveDate: "Effective Date: June 16, 2026",
  intro: [
    "Digital Currensy Inc. is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information across our website, onboarding forms, and distribution platform.",
  ],
  sections: [
    {
      title: "1. Information We Collect",
      items: [
        "Account Information: Name, legal name, stage name, email address, password, and profile preferences.",
        "Asset Submissions: Audio files, metadata, artwork, lyrics, music videos, and social media links.",
        "Financial Data: Tax information (W-9/W-8BEN), banking details, or PayPal routing data for royalty payouts.",
        "Usage & Tech Data: IP address, browser type, device information, and interaction logs with the dashboard.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      paragraphs: ["We use your collected data to execute your music distribution contracts, including:"],
      items: [
        "Delivering your content and metadata cleanly to streaming platforms (Spotify, Apple Music, TikTok, etc.).",
        "Processing, tracking, and distributing your monthly royalty payments.",
        "Reviewing your campaign eligibility via our Formberry artist questionnaire.",
        "Generating assets via our Label IQ AI video and jingle engines.",
      ],
    },
    {
      title: "3. Data Sharing & Third Parties",
      paragraphs: [
        "DCI does not sell your data. We share your information only with essential partners required to perform our core distribution business:",
      ],
      items: [
        "Digital Service Providers (DSPs): To make your music available to listeners globally.",
        "Payment Processors: To safely deposit your earnings.",
        "Compliance & Fraud Systems: To protect our catalog from artificial streaming behaviors.",
      ],
    },
    {
      title: "4. Your Rights & Data Retention",
      paragraphs: [
        "Depending on your location (such as the UK, EU under GDPR, or California under CCPA), you have the right to request access to your data, request corrections, or request total deletion of your personal account records. We retain your asset data for as long as your distribution agreement with DCI remains active.",
      ],
    },
  ],
};

export const cookiesContent: LegalContent = {
  title: "Cookie Policy",
  effectiveDate: "Effective Date: June 16, 2026",
  intro: [
    "Digital Currensy Inc. uses cookies and similar tracking technologies to enhance your browsing experience, keep you securely logged into your dashboard, and analyze our traffic.",
  ],
  sections: [
    {
      title: "1. What Are Cookies?",
      paragraphs: [
        "Cookies are small text files stored on your browser or device when you visit a website. They help the site remember your actions and preferences over time.",
      ],
    },
    {
      title: "2. The Types of Cookies We Use",
      items: [
        "Essential Cookies: Crucial for platform operation. These keep you authenticated securely within https://distro.digitalcurrensy.io so you don't have to log back in every time you change pages.",
        "Performance & Analytics Cookies: These help us track which site sections are highly active (e.g., how often users check out our Playlists page vs Sync lanes) so we can optimize site loading speeds and layouts.",
        "Functional Cookies: Used to remember choices you make, such as dark mode preferences or audio player volume settings.",
      ],
    },
    {
      title: "3. How to Control Cookies",
      paragraphs: [
        "Most web browsers allow you to manage or block cookies through their system settings. Please note that blocking essential cookies may cause our distribution dashboard or dashboard video tools to stop functioning correctly.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "If you have any questions, concerns, or data requests regarding our Terms of Service, Privacy Policy, or Cookie Policy, please reach out directly to our operations team:",
        "Email: info@digitalcurrensy.com",
      ],
    },
  ],
};
