import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { organization } from "@/data/organization";

export function MissionSummary() {
  return (
    <Section tone="surface">
      <SectionHeading title="Our mission">
        <p className="leading-relaxed text-navy">{organization.mission}</p>
        <p className="leading-relaxed text-muted">{organization.additionalDescription}</p>
      </SectionHeading>
    </Section>
  );
}
