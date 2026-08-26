import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { Card } from "@/components/ui/Card";
import { organization } from "@/data/organization";

export function DonatePreview() {
  return (
    <Section tone="surface">
      <SectionHeading title={organization.donationHeadline}>
        <p className="leading-relaxed text-navy">{organization.donationDescription}</p>
        <p className="leading-relaxed text-muted">
          Donations support the mission and are separate from retreat registration
          fees.
        </p>
      </SectionHeading>
      <div className="mt-6 max-w-3xl space-y-4">
        <Card className="gap-3">
          <p className="text-navy">
            <span className="font-medium">{organization.legalName}</span>
            <br />
            Zelle / Email: {organization.zelleEmail}
          </p>
          <p className="text-sm text-muted">{organization.taxStatus}</p>
        </Card>
        <AdminReviewNote>
          Donation purpose cards, sponsor tiers, custom amounts, and India
          donation details will be added on the Donate page after admin review.
        </AdminReviewNote>
        <Button href="/donate" variant="accent">
          Donate
        </Button>
      </div>
    </Section>
  );
}
