import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SessionCard } from "@/components/cards/SessionCard";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import {
  additionalIndiaTimings,
  sessions,
  whatsappCommunity,
} from "@/data/sessions";

export const metadata: Metadata = {
  title: "Daily Sessions",
};

export default function DailySessionsPage() {
  return (
    <PageShell
      title="Daily Sessions"
      intro="WhatsApp continues to support community communication. This page gathers official session times and join links in one trusted place."
    >
      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">How do I start?</h2>
        <ol className="list-decimal space-y-2 pl-5 text-navy">
          <li>Choose a session below that fits your language and time.</li>
          <li>Use the YouTube Live link on that card when one is listed.</li>
          <li>
            WhatsApp remains available for community conversation. Official
            schedules and public join links will stay on this page.
          </li>
        </ol>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-serif text-3xl text-navy">Session schedule</h2>
          <p className="leading-relaxed text-muted">
            Scan the cards for times, notes, and public join links. Times shown
            here are placeholders for layout. Official schedules will be added
            during content review. USA times use Eastern Time.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {sessions.map((session) => (
            <li key={session.id}>
              <SessionCard session={session} />
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Community</h2>
        <p className="leading-relaxed text-navy">
          {whatsappCommunity.label} continues to support conversation among
          participants. A public community link and QR code will be added here
          when they are confirmed.
        </p>
        <div className="rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-sm text-muted">
          WhatsApp community link and QR placeholder.
        </div>
        <div className="rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-sm text-muted">
          A shared Zoom entry point will be added if a public Zoom link is
          approved.
        </div>
        {whatsappCommunity.needsAdminReview ? (
          <AdminReviewNote>
            Official WhatsApp community URL, QR code, and any public Zoom links
            still need confirmation.
          </AdminReviewNote>
        ) : null}
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Additional India timings</h2>
        <p className="leading-relaxed text-muted">
          This is a separate placeholder section. These timings are not tied to
          any daily session or to 4P Meditation.
        </p>
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
