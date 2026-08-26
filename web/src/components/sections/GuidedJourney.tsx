import { Button } from "@/components/ui/Button";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { guidedJourneySteps } from "@/data/journey";

type GuidedJourneyProps = {
  preview?: boolean;
};

export function GuidedJourney({ preview = false }: GuidedJourneyProps) {
  const steps = preview ? guidedJourneySteps.slice(0, 4) : guidedJourneySteps;

  return (
    <div className="space-y-8">
      <SectionHeading title={preview ? "A guided path" : "Getting started"}>
        <p className="leading-relaxed text-muted">
          WayToMoksha is building a clear path so people can begin with daily
          practice, then choose self-guided learning, mentorship, or dream
          analysis when those offerings are ready.
        </p>
      </SectionHeading>

      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.id}>
            <Card className="gap-4">
              <p className="text-sm font-medium text-teal">Step {index + 1}</p>
              <h3 className="font-serif text-2xl text-navy">{step.title}</h3>
              {step.summary ? (
                <p className="text-sm leading-relaxed text-muted">{step.summary}</p>
              ) : null}
              {step.reviewNote ? (
                <AdminReviewNote>{step.reviewNote}</AdminReviewNote>
              ) : null}
              <div className="mt-auto">
                <Button href={step.href} variant={step.href ? "primary" : "secondary"}>
                  {step.cta}
                </Button>
              </div>
            </Card>
          </li>
        ))}
      </ol>

      {preview ? (
        <Button href="/about#guided-journey" variant="secondary">
          See the full getting-started path
        </Button>
      ) : null}
    </div>
  );
}
