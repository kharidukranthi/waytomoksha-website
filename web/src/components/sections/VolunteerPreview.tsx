import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function VolunteerPreview() {
  return (
    <Section>
      <div className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">Become a volunteer</h2>
        <p className="leading-relaxed text-muted">
          Sharing interest is only the first step. A current volunteer will
          contact you, human onboarding happens next, and a role is assigned later
          in the volunteer system.
        </p>
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
