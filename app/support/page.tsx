import type { Metadata } from "next";
import LegalView from "@/components/LegalView";
import { support } from "@/lib/content";

export const metadata: Metadata = { title: "Support · StepCamera" };

export default function SupportPage() {
  return <LegalView doc={support} />;
}
