import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return (
    <PageShell
      title="Donate"
      intro="Donation details will be shown separately from retreat registration, starting with Zelle information and purpose cards."
    />
  );
}
