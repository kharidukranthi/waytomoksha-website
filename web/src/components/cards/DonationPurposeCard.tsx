import { Card } from "@/components/ui/Card";
import type { DonationPurpose } from "@/data/donations";

type DonationPurposeCardProps = {
  purpose: DonationPurpose;
};

export function DonationPurposeCard({ purpose }: DonationPurposeCardProps) {
  return (
    <Card className="gap-2">
      <h3 className="font-serif text-2xl text-navy">{purpose.title}</h3>
      {purpose.description ? (
        <p className="text-sm leading-relaxed text-muted">{purpose.description}</p>
      ) : (
        <p className="text-sm leading-relaxed text-muted">
          Official description will be added during content review.
        </p>
      )}
    </Card>
  );
}
