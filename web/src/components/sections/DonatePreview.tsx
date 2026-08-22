import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { organization } from "@/data/organization";

export function DonatePreview() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">
          {organization.donationHeadline}
        </h2>
        <p className="leading-relaxed text-navy">{organization.donationDescription}</p>
        <p className="text-sm text-muted">
          Donations support the mission and are separate from retreat registration
          fees.
        </p>
        <p className="text-navy">
          <span className="font-medium">{organization.legalName}</span>
          <br />
          Zelle / Email: {organization.zelleEmail}
        </p>
        <p className="text-sm text-muted">{organization.taxStatus}</p>
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
