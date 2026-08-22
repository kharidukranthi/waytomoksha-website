import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { sessions } from "@/data/sessions";

export function SessionsPreview() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl space-y-3">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">Daily sessions</h2>
        <p className="leading-relaxed text-muted">
          Public meditation sessions are offered in several groups. Full schedules
          and join links will live on the Daily Sessions page.
        </p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => (
          <li
            key={session.id}
            className="rounded-2xl border border-border bg-background p-5"
          >
            <h3 className="font-serif text-xl text-navy">{session.name}</h3>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href="/daily-sessions">View Daily Sessions</Button>
      </div>
    </Section>
  );
}
