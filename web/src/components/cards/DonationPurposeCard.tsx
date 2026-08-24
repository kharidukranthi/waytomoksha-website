import type { DonationPurpose } from "@/data/donations";

type DonationPurposeCardProps = {
  purpose: DonationPurpose;
};

export function DonationPurposeCard({ purpose }: DonationPurposeCardProps) {
  return (
    <article className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-background p-6">
      <h3 className="font-serif text-2xl text-navy">{purpose.title}</h3>
      {purpose.description ? (
        <p className="text-sm leading-relaxed text-muted">{purpose.description}</p>
      ) : (
        <p className="text-sm leading-relaxed text-muted">
          Official description will be added during content review.
        </p>
      )}
    </article>
  );
}
