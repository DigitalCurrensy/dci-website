import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsContent } from "@/data/legalContent";

export const metadata: Metadata = {
  title: termsContent.title,
  description: "Digital Currensy Inc. terms of service.",
};

export default function TermsPage() {
  return <LegalPage content={termsContent} />;
}
