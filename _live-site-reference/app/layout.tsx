import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteMetadata } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.metadataBase),
  title: {
    default: siteMetadata.defaultTitle,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.openGraphTitle,
    description: siteMetadata.openGraphDescription,
    url: siteMetadata.metadataBase,
    siteName: siteMetadata.openGraphTitle,
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: siteMetadata.openGraphImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.openGraphTitle,
    description: siteMetadata.twitterDescription,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};


const dciStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.digitalcurrensy.com/#organization",
      "name": "Digital Currency Inc.",
      "alternateName": ["DCI", "Digital Currensy"],
      "url": "https://www.digitalcurrensy.com",
      "logo": "https://www.digitalcurrensy.com/og-image.jpg",
      "email": "info@digitalcurrensy.com",
      "description": "Digital Currency Inc. is an independent music distribution, label services, and creator technology company supporting artists, labels, and creative teams.",
      "sameAs": [
        "https://www.instagram.com/digitalcurrensy",
        "https://www.tiktok.com/@digitalcurrensy",
        "https://www.youtube.com/@DigitalCurrensy",
        "https://x.com/digitalcurrensy",
        "https://www.linkedin.com/company/digitalcurrensy",
        "https://kick.com/digitalcurrensy",
        "https://www.twitch.tv/digitalcurrensy"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.digitalcurrensy.com/#website",
      "url": "https://www.digitalcurrensy.com",
      "name": "Digital Currency Inc.",
      "publisher": {
        "@id": "https://www.digitalcurrensy.com/#organization"
      },
      "description": "Independent music distribution, label services, royalties, playlist strategy, sync preparation, campaign support, and AI-powered music tools."
    },
    {
      "@type": "Service",
      "@id": "https://www.digitalcurrensy.com/#music-distribution-service",
      "name": "Independent Music Distribution and Label Services",
      "provider": {
        "@id": "https://www.digitalcurrensy.com/#organization"
      },
      "serviceType": "Music distribution, label services, royalties, playlist strategy, sync preparation, campaign support, and AI music tools",
      "areaServed": "Worldwide",
      "audience": {
        "@type": "Audience",
        "audienceType": "Independent artists, music labels, managers, producers, creators, and artist teams"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.digitalcurrensy.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does Digital Currency Inc. do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital Currency Inc. helps independent artists and labels with music distribution, royalties, playlist strategy, sync preparation, video support, campaign planning, and label services."
          }
        },
        {
          "@type": "Question",
          "name": "Who is DCI built for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DCI is built for independent artists, music labels, managers, producers, creators, and artist teams that want more support than basic upload-only distribution."
          }
        },
        {
          "@type": "Question",
          "name": "Does DCI support AI music and creator technology?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DCI connects music distribution with AI music tools, creator technology education, and guidance for artists and labels exploring modern release strategy."
          }
        },
        {
          "@type": "Question",
          "name": "How can artists work with DCI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DCI uses an invite-based access process. Artists, labels, and creative teams can request access through the invite form or contact DCI at info@digitalcurrensy.com."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dciStructuredData) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
