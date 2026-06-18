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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
