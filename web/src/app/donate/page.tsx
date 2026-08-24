import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { DonationPurposeCard } from "@/components/cards/DonationPurposeCard";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { donationPurposes, donationTiers } from "@/data/donations";
import { organization } from "@/data/organization";

export const metadata: Metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return (
    <PageShell
      title="Donate"
      intro="Donations support the WayToMoksha mission and are separate from retreat registration fees."
    >
      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">{organization.donationHeadline}</h2>
        <p className="leading-relaxed text-navy">{organization.donationDescription}</p>
        <p className="font-medium text-navy">{organization.legalName}</p>
        <p className="text-navy">
          Zelle / Email:{" "}
          <a href={`mailto:${organization.zelleEmail}`} className="text-teal hover:underline">
            {organization.zelleEmail}
          </a>
        </p>
        <p className="text-sm text-muted">{organization.taxStatus}</p>
        <p className="text-sm leading-relaxed text-muted">
          Use Zelle in your bank app to send a donation. There is no card payment
          on this website.
        </p>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-serif text-3xl text-navy">Donation purposes</h2>
          <p className="leading-relaxed text-muted">
            These purpose titles are placeholders for layout. Official purposes
            will be gathered from the current website, WhatsApp, and existing
            donation requests after the skeleton is complete.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {donationPurposes.map((purpose) => (
            <li key={purpose.id}>
              <DonationPurposeCard purpose={purpose} />
            </li>
          ))}
        </ul>
        <AdminReviewNote>
          Donation purposes stay as placeholders until content is collected after
          the website skeleton is complete.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Monthly and custom amounts</h2>
        <p className="leading-relaxed text-muted">
          Amount options will appear here later. They are not payment buttons.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {donationTiers.map((tier) => (
            <li
              key={tier.id}
              className="rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-navy"
            >
              <p className="font-medium">{tier.label}</p>
              <p className="mt-1 text-sm text-muted">Placeholder only. No amount and no checkout.</p>
            </li>
          ))}
        </ul>
        <AdminReviewNote>
          Monthly donation, custom amount, and sponsor tiers still need official
          labels and amounts.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">India donations</h2>
        <div className="rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-sm text-muted">
          India donation details will be added later. Possible methods include
          Razorpay, UPI, bank transfer, or another option. None are implemented
          now.
        </div>
        <AdminReviewNote>
          India donations stay a placeholder until a method is chosen after the
          skeleton is complete.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-3">
        <h2 className="font-serif text-3xl text-navy">Retreat fees</h2>
        <p className="leading-relaxed text-navy">
          Retreat tickets and optional donations during registration belong on
          each retreat page. This page is for general support of the mission
          only.
        </p>
      </section>
    </PageShell>
  );
}
