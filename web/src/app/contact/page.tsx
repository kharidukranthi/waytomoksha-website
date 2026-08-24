import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { organization } from "@/data/organization";
import { whatsappCommunity } from "@/data/sessions";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="Reach WayToMoksha by email or phone. Official details are listed here so they are easy to find in one trusted place."
    >
      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Contact details</h2>
        <dl className="space-y-4 text-navy">
          <div>
            <dt className="text-sm font-medium text-teal">Email</dt>
            <dd>
              <a href={`mailto:${organization.email}`} className="hover:text-teal">
                {organization.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-teal">Phone</dt>
            <dd>
              <a href={`tel:${organization.phone}`} className="hover:text-teal">
                {organization.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-teal">Organization</dt>
            <dd>{organization.legalName}</dd>
            <dd className="mt-1 text-sm text-muted">{organization.taxStatus}</dd>
          </div>
        </dl>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Contact form</h2>
        <p className="leading-relaxed text-muted">
          A public contact form may be added later. Messages are not submitted
          from this page yet.
        </p>
        <div className="rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-sm text-muted">
          Contact form placeholder. There is no send button here so it cannot
          look like a live inbox.
        </div>
        <AdminReviewNote>
          Please confirm whether a public contact form should send email later,
          and to which address.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">{whatsappCommunity.label}</h2>
        <p className="leading-relaxed text-navy">
          WhatsApp continues to support community communication. A QR code will
          be generated later from the official invite link.
        </p>
        <div className="rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-sm text-muted">
          WhatsApp community link and QR placeholder.
        </div>
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
