import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="Email, phone, and organization status will be listed here, with placeholders for WhatsApp and a future contact form."
    />
  );
}
