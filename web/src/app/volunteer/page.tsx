import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Volunteer",
};

export default function VolunteerPage() {
  return (
    <PageShell
      title="Volunteer"
      intro="Volunteer interest intake will be added next. Registration is only the first step; a current volunteer will follow up."
    />
  );
}
