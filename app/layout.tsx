import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mediaPaths, siteMetadata } from "@/data/siteContent";
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
