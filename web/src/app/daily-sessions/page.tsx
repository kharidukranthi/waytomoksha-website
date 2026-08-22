import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Daily Sessions",
};

export default function DailySessionsPage() {
  return (
    <PageShell
      title="Daily Sessions"
      intro="Public meditation schedules will be listed here so visitors can join without first needing WhatsApp."
    />
  );
}
