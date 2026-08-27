import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DonationPurposeCard } from "@/components/cards/DonationPurposeCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { Card } from "@/components/ui/Card";
import { PlaceholderPanel } from "@/components/ui/PlaceholderPanel";
import { donationPurposes, donationTiers } from "@/data/donations";
import { organization } from "@/data/organization";
import { breadcrumbJsonLd, pageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pageSeo.donate);

export default function DonatePage() {
  return (
    <PageShell
      title="Donate"
      intro="Donations support the WayToMoksha mission and are separate from retreat registration fees."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Donate", path: "/donate" },
        ])}
      />
      <section className="max-w-3xl space-y-4">
        <SectionHeading title={organization.donationHeadline}>
          <p className="leading-relaxed text-navy">{organization.donationDescription}</p>
        </SectionHeading>
        <Card className="gap-3">
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
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Donation purposes">
          <p className="leading-relaxed text-muted">
            These purpose titles are placeholders for layout. Official purposes
            will be gathered from the current website, WhatsApp, and existing
            donation requests after the skeleton is complete.
          </p>
        </SectionHeading>
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
        <SectionHeading title="Monthly and custom amounts">
          <p className="leading-relaxed text-muted">
            Amount options will appear here later. They are not payment buttons.
          </p>
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {donationTiers.map((tier) => (
            <li key={tier.id}>
              <PlaceholderPanel>
                <p className="font-medium text-navy">{tier.label}</p>
                <p className="mt-1">Placeholder only. No amount and no checkout.</p>
              </PlaceholderPanel>
            </li>
          ))}
        </ul>
        <AdminReviewNote>
          Monthly donation, custom amount, and sponsor tiers still need official
          labels and amounts.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="India donations" />
        <PlaceholderPanel>
          India donation details will be added later. Possible methods include
          Razorpay, UPI, bank transfer, or another option. None are implemented
          now.
        </PlaceholderPanel>
        <AdminReviewNote>
          India donations stay a placeholder until a method is chosen after the
          skeleton is complete.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl">
        <SectionHeading title="Retreat fees">
          <p className="leading-relaxed text-navy">
            Retreat tickets and optional donations during registration belong on
            each retreat page. This page is for general support of the mission
            only.
          </p>
        </SectionHeading>
      </section>
    </PageShell>
  );
}
