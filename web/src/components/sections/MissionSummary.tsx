import { Section } from "@/components/layout/Section";
import { organization } from "@/data/organization";

export function MissionSummary() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">Our mission</h2>
        <p className="leading-relaxed text-navy">{organization.mission}</p>
        <p className="leading-relaxed text-muted">{organization.additionalDescription}</p>
      </div>
    </Section>
  );
}
