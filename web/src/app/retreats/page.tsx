import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { RetreatCard } from "@/components/cards/RetreatCard";
import { getPastRetreats, getUpcomingRetreats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Retreats",
};

export default function RetreatsPage() {
  const upcomingRetreats = getUpcomingRetreats();
  const pastRetreats = getPastRetreats();

  return (
    <PageShell
      title="Retreats"
      intro="Upcoming retreats are listed first. Past retreat memories will be added as details are confirmed."
    >
      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-navy">Upcoming retreats</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {upcomingRetreats.map((retreat) => (
            <li key={retreat.slug}>
              <RetreatCard retreat={retreat} />
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-navy">Past retreats</h2>
        <p className="max-w-3xl leading-relaxed text-muted">
          Gallery photos, dates, and short summaries will appear here after
          admins confirm the past retreat list.
        </p>
        <ul className="grid gap-4 md:grid-cols-2">
          {pastRetreats.map((retreat) => (
            <li key={retreat.slug}>
              <RetreatCard retreat={retreat} />
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
