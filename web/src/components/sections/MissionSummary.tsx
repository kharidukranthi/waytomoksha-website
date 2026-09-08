import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { organization } from "@/data/organization";

export function MissionSummary() {
  return (
    <Section id="who-we-are" tone="surface">
      <SectionHeading title="Who we are">
        <p className="leading-relaxed text-navy">{organization.about}</p>
        <p className="leading-relaxed text-muted">{organization.aboutBelief}</p>
      </SectionHeading>

      <div id="mission" className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="font-serif text-2xl text-navy">Mission</h2>
          <p className="mt-3 leading-relaxed text-navy">{organization.mission}</p>
        </Card>
        <Card>
          <h2 className="font-serif text-2xl text-navy">Vision</h2>
          <p className="mt-3 leading-relaxed text-navy">{organization.vision}</p>
        </Card>
      </div>
    </Section>
  );
}
