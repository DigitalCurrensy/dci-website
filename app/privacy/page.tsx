import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyContent } from "@/data/legalContent";

export const metadata: Metadata = {
  title: privacyContent.title,
  description: "Digital Currensy Inc. privacy policy.",
};

export default function PrivacyPage() {
  return <LegalPage content={privacyContent} />;
}
