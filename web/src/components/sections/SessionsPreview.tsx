import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { sessions } from "@/data/sessions";

export function SessionsPreview() {
  return (
    <Section tone="surface">
      <SectionHeading title="Daily sessions">
        <p className="leading-relaxed text-muted">
          Public meditation sessions are offered in several groups. Full schedules
          and join links will live on the Daily Sessions page.
        </p>
      </SectionHeading>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => (
          <li key={session.id}>
            <Card>
              <h3 className="font-serif text-xl text-navy">{session.name}</h3>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href="/daily-sessions">View Daily Sessions</Button>
      </div>
    </Section>
  );
}
