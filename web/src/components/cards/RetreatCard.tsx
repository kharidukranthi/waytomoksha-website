import { Button } from "@/components/ui/Button";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import type { Retreat } from "@/data/retreats";
import { getRetreatScheduleLabel, retreatHasDetailPage } from "@/lib/content";

type RetreatCardProps = {
  retreat: Retreat;
};

export function RetreatCard({ retreat }: RetreatCardProps) {
  const scheduleLabel = getRetreatScheduleLabel(retreat);
  const hasDetailPage = retreatHasDetailPage(retreat);
  const locationLabel = [retreat.venueName, retreat.venueAddress || retreat.location]
    .filter(Boolean)
    .join(", ");

  if (retreat.status === "past") {
    return (
      <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6">
        <p className="text-sm font-medium text-teal">Past retreat</p>
        <h3 className="font-serif text-2xl text-navy">Details coming soon</h3>
        <p className="text-sm leading-relaxed text-muted">
          Date, location, summary, and gallery photos will appear here after
          official past retreat content is collected.
        </p>
        <div className="rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-sm text-muted">
          Gallery preview placeholder.
        </div>
        <AdminReviewNote>
          Past retreat cards are placeholders only. Do not treat them as real
          events.
        </AdminReviewNote>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6">
      <p className="text-sm font-medium text-teal">{scheduleLabel}</p>
      <h3 className="font-serif text-2xl text-navy">{retreat.title}</h3>
      {retreat.shortDescription ? (
        <p className="leading-relaxed text-muted">{retreat.shortDescription}</p>
      ) : null}
      {locationLabel ? <p className="text-sm text-navy">{locationLabel}</p> : null}
      <div className="mt-auto flex flex-wrap gap-3">
        {hasDetailPage ? (
          <Button href={`/retreats/${retreat.slug}`}>View details</Button>
        ) : (
          <Button href="/retreats">View Retreats</Button>
        )}
        {retreat.registrationStatus === "placeholder" ? (
          <Button variant="secondary">Register</Button>
        ) : null}
      </div>
      {retreat.needsAdminReview ? (
        <AdminReviewNote>
          Registration, ticket prices, and whether lodging is handled internally or
          through the venue still need admin confirmation.
        </AdminReviewNote>
      ) : null}
    </article>
  );
}
