import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { Card } from "@/components/ui/Card";
import { PlaceholderPanel } from "@/components/ui/PlaceholderPanel";
import { organization } from "@/data/organization";
import { whatsappCommunity } from "@/data/sessions";
import { breadcrumbJsonLd, pageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="Reach WayToMoksha by email or phone. Official details are listed here so they are easy to find in one trusted place."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="space-y-4">
        <SectionHeading title="Contact details" />
        <ul className="grid gap-4 md:grid-cols-3">
          <li>
            <Card className="gap-2">
              <p className="text-sm font-medium text-teal">Email</p>
              <a href={`mailto:${organization.email}`} className="text-teal hover:underline">
                {organization.email}
              </a>
            </Card>
          </li>
          <li>
            <Card className="gap-2">
              <p className="text-sm font-medium text-teal">Phone</p>
              <a href={`tel:${organization.phone}`} className="text-teal hover:underline">
                {organization.phone}
              </a>
            </Card>
          </li>
          <li>
            <Card className="gap-2">
              <p className="text-sm font-medium text-teal">Organization</p>
              <p className="text-navy">{organization.legalName}</p>
              <p className="text-sm text-muted">{organization.taxStatus}</p>
            </Card>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Contact form">
          <p className="leading-relaxed text-muted">
            A public contact form may be added later. Messages are not submitted
            from this page yet.
          </p>
        </SectionHeading>
        <PlaceholderPanel>
          Contact form placeholder. There is no send button here so it cannot
          look like a live inbox.
        </PlaceholderPanel>
        <AdminReviewNote>
          Please confirm whether a public contact form should send email later,
          and to which address.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title={whatsappCommunity.label}>
          <p className="leading-relaxed text-navy">
            WhatsApp continues to support community communication. A QR code will
            be generated later from the official invite link.
          </p>
        </SectionHeading>
        <PlaceholderPanel>WhatsApp community link and QR placeholder.</PlaceholderPanel>
        {whatsappCommunity.needsAdminReview ? (
          <AdminReviewNote>
            WhatsApp QR stays a placeholder until an official invite link is
            available.
          </AdminReviewNote>
        ) : null}
      </section>
    </PageShell>
  );
}
