import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { organization } from "@/data/organization";

export function Hero() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container className="mx-auto max-w-3xl space-y-6 text-center sm:space-y-8">
        <p className="text-sm font-medium tracking-wide text-teal uppercase">
          {organization.name}
        </p>
        <h1 className="font-serif text-4xl leading-tight text-navy sm:text-6xl">
          {organization.heroHeadline}
        </h1>
        <p className="text-lg leading-relaxed text-muted">{organization.tagline}</p>
        <p className="leading-relaxed text-navy">{organization.heroDescription}</p>
        <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button href="/daily-sessions" className="w-full sm:w-auto">
            View Daily Sessions
          </Button>
          <Button href="/retreats" variant="secondary" className="w-full sm:w-auto">
            View Retreats
          </Button>
          <Button href="/volunteer" variant="secondary" className="w-full sm:w-auto">
            Become a Volunteer
          </Button>
          <Button href="/donate" variant="accent" className="w-full sm:w-auto">
            Donate
          </Button>
        </div>
      </Container>
    </section>
  );
}
