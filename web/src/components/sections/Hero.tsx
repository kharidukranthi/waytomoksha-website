import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { organization } from "@/data/organization";

export function Hero() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container className="max-w-3xl space-y-6">
        <p className="text-sm font-medium tracking-wide text-teal uppercase">
          {organization.name}
        </p>
        <h1 className="font-serif text-4xl leading-tight text-navy sm:text-6xl">
          {organization.heroHeadline}
        </h1>
        <p className="text-lg leading-relaxed text-muted">{organization.tagline}</p>
        <p className="leading-relaxed text-navy">{organization.heroDescription}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button href="/daily-sessions">View Daily Sessions</Button>
          <Button href="/retreats" variant="secondary">
            View Retreats
          </Button>
          <Button href="/volunteer" variant="secondary">
            Become a Volunteer
          </Button>
          <Button href="/donate" variant="accent">
            Donate
          </Button>
        </div>
      </Container>
    </section>
  );
}
