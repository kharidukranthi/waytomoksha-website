import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";

export function VolunteerPreview() {
  return (
    <Section>
      <SectionHeading title="Become a volunteer">
        <p className="leading-relaxed text-muted">
          Sharing interest is only the first step. A current volunteer will
          contact you, human onboarding happens next, and a role is assigned later
          in the volunteer system.
        </p>
      </SectionHeading>
      <div className="mt-6 max-w-3xl space-y-4">
        <ol className="list-decimal space-y-2 pl-5 text-navy">
          <li>Submit volunteer interest</li>
          <li>An existing volunteer contacts you</li>
          <li>Human onboarding happens</li>
          <li>A role is assigned later</li>
        </ol>
        <Button href="/volunteer">Become a Volunteer</Button>
      </div>
    </Section>
  );
}
