import { RetreatCard } from "@/components/cards/RetreatCard";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { getUpcomingRetreats } from "@/lib/content";

export function RetreatsPreview() {
  const upcomingRetreats = getUpcomingRetreats();

  return (
    <Section>
      <div className="max-w-3xl space-y-3">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">Upcoming retreats</h2>
        <p className="leading-relaxed text-muted">
          Retreats are a focused time for practice, learning, and community.
        </p>
      </div>

      <ul className="mt-8 grid max-w-3xl gap-4">
        {upcomingRetreats.map((retreat) => (
          <li key={retreat.slug}>
            <RetreatCard retreat={retreat} />
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button href="/retreats" variant="secondary">
          View Retreats
        </Button>
      </div>
    </Section>
  );
}
