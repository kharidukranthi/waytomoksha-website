import { RetreatCard } from "@/components/cards/RetreatCard";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getUpcomingRetreats } from "@/lib/content";

export function RetreatsPreview() {
  const upcomingRetreats = getUpcomingRetreats();

  return (
    <Section>
      <SectionHeading title="Upcoming retreats">
        <p className="leading-relaxed text-muted">
          Retreats are a focused time for practice, learning, and community.
        </p>
      </SectionHeading>

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
