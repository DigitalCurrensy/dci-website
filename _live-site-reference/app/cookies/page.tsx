import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { cookiesContent } from "@/data/legalContent";

export const metadata: Metadata = {
  title: cookiesContent.title,
  description: "Digital Currensy Inc. cookie policy.",
};

export default function CookiesPage() {
  return <LegalPage content={cookiesContent} />;
}
