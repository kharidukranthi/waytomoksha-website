import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { VolunteerInterestForm } from "@/components/forms/VolunteerInterestForm";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";

export const metadata: Metadata = {
  title: "Volunteer",
};

export default function VolunteerPage() {
  return (
    <PageShell
      title="Volunteer"
      intro="Sharing interest is only the first step. A current volunteer will follow up, then human onboarding happens, and a role is assigned later."
    >
      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Why volunteer</h2>
        <p className="leading-relaxed text-navy">
          WayToMoksha is a voluntary organization. People help with sessions,
          retreats, media, and community care. This page only collects interest.
          It does not create a login, assign tasks, or open a volunteer dashboard.
        </p>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">How it works</h2>
        <ol className="list-decimal space-y-2 pl-5 text-navy">
          <li>Submit volunteer interest on this page</li>
          <li>An existing volunteer contacts you</li>
          <li>Human onboarding happens</li>
          <li>A role is assigned later in the volunteer system</li>
        </ol>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Share your interest</h2>
        <p className="leading-relaxed text-muted">
          This form stays on this page. It does not save your details to a
          database or send them to WayToMoksha yet.
        </p>
        <VolunteerInterestForm />
        <AdminReviewNote>
          Current volunteer fields are sufficient for the skeleton. A shorter
          field list may replace this after content review. This form does not
          persist or deliver submissions.
        </AdminReviewNote>
      </section>
    </PageShell>
  );
}
