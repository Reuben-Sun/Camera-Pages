import type { Metadata } from "next";
import LegalView from "@/components/LegalView";
import { privacy } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy Policy · StepCamera" };

export default function PrivacyPage() {
  return <LegalView doc={privacy} />;
}
