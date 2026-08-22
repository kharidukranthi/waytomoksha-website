import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Retreats",
};

export default function RetreatsPage() {
  return (
    <PageShell
      title="Retreats"
      intro="Upcoming and past retreats will appear here, with shareable detail pages added in a later increment."
    />
  );
}
