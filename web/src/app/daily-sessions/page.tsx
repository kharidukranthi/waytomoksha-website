import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SessionCard } from "@/components/cards/SessionCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { Card } from "@/components/ui/Card";
import { PlaceholderPanel } from "@/components/ui/PlaceholderPanel";
import {
  additionalIndiaTimings,
  sessions,
  whatsappCommunity,
} from "@/data/sessions";
import { breadcrumbJsonLd, pageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pageSeo.dailySessions);

export default function DailySessionsPage() {
  return (
    <PageShell
      title="Daily Sessions"
      intro="WhatsApp continues to support community communication. This page gathers official session times and join links in one trusted place."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Daily Sessions", path: "/daily-sessions" },
        ])}
      />
      <section>
        <SectionHeading title="How do I start?" />
        <Card className="mt-6 max-w-3xl gap-4">
          <ol className="list-decimal space-y-2 pl-5 text-navy">
            <li>Choose a session below that fits your language and time.</li>
            <li>Use the YouTube Live link on that card when one is listed.</li>
            <li>
              WhatsApp remains available for community conversation. Official
              schedules and public join links will stay on this page.
            </li>
          </ol>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Session schedule">
          <p className="leading-relaxed text-muted">
            Scan the cards for times, notes, and public join links. Times shown
            here are placeholders for layout. Official schedules will be added
            during content review. USA times use Eastern Time.
          </p>
        </SectionHeading>
        <ul className="grid gap-4 md:grid-cols-2">
          {sessions.map((session) => (
            <li key={session.id}>
              <SessionCard session={session} />
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Community">
          <p className="leading-relaxed text-navy">
            {whatsappCommunity.label} continues to support conversation among
            participants. A QR code will be generated later from the official
            invite link.
          </p>
        </SectionHeading>
        <PlaceholderPanel>WhatsApp community link and QR placeholder.</PlaceholderPanel>
        <PlaceholderPanel>
          A shared Zoom entry point will be added if a public Zoom link is
          approved.
        </PlaceholderPanel>
        {whatsappCommunity.needsAdminReview ? (
          <AdminReviewNote>
            WhatsApp QR stays a placeholder until an official invite link is
            available. Public Zoom links can be added later.
          </AdminReviewNote>
        ) : null}
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Additional India timings">
          <p className="leading-relaxed text-muted">
            This is a separate placeholder section. These timings are not tied to
            any daily session or to 4P Meditation.
          </p>
        </SectionHeading>
        <ul className="divide-y divide-border rounded-2xl border border-dashed border-border">
          {additionalIndiaTimings.map((timing) => (
            <li
              key={`${timing.time}-${timing.label}`}
              className="flex items-baseline justify-between gap-4 px-4 py-3 text-navy"
            >
              <span className="font-medium">{timing.time}</span>
              <span className="text-muted">{timing.label}</span>
            </li>
          ))}
        </ul>
        <AdminReviewNote>
          Official India timings will be filled during content review. Keep this
          list separate from the session cards until then.
        </AdminReviewNote>
      </section>
    </PageShell>
  );
}
