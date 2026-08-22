import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { retreats } from "@/data/retreats";

const upcomingRetreat = retreats.find((retreat) => retreat.status === "upcoming");

export function RetreatsPreview() {
  return (
    <Section>
      <div className="max-w-3xl space-y-3">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">Upcoming retreat</h2>
        <p className="leading-relaxed text-muted">
          Retreats are a focused time for practice, learning, and community.
        </p>
      </div>

      {upcomingRetreat ? (
        <article className="mt-8 max-w-3xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-sm font-medium text-teal">May 29–31, 2026</p>
          <h3 className="mt-2 font-serif text-2xl text-navy">{upcomingRetreat.title}</h3>
          <p className="mt-3 text-muted">{upcomingRetreat.shortDescription}</p>
          <p className="mt-2 text-sm text-navy">
            {upcomingRetreat.venueName}, {upcomingRetreat.venueAddress}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/retreats">View Retreats</Button>
            <Button variant="secondary">Register</Button>
          </div>
        </article>
      ) : null}

      <div className="mt-6 max-w-3xl">
        <AdminReviewNote>
          Retreat registration, ticket prices, and whether lodging is handled
          internally or through the venue still need admin confirmation.
        </AdminReviewNote>
      </div>
    </Section>
  );
}
