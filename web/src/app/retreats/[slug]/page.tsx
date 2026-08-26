import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { Card } from "@/components/ui/Card";
import { PlaceholderPanel } from "@/components/ui/PlaceholderPanel";
import {
  getRetreatBySlug,
  getRetreatScheduleLabel,
  getRetreatsWithDetailPages,
  retreatHasDetailPage,
} from "@/lib/content";

type RetreatDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getRetreatsWithDetailPages().map((retreat) => ({ slug: retreat.slug }));
}

export async function generateMetadata({
  params,
}: RetreatDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) {
    return { title: "Retreat" };
  }

  return { title: retreat.title };
}

export default async function RetreatDetailPage({ params }: RetreatDetailPageProps) {
  const { slug } = await params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat || !retreatHasDetailPage(retreat)) {
    notFound();
  }

  const scheduleLabel = getRetreatScheduleLabel(retreat);

  return (
    <PageShell title={retreat.title} intro={retreat.shortDescription}>
      <Card className="max-w-3xl gap-3">
        <p className="font-medium text-teal">{scheduleLabel}</p>
        <p className="text-navy">
          {retreat.venueName}
          <br />
          {retreat.venueAddress}
        </p>
        {retreat.venueUrl ? (
          <a
            href={retreat.venueUrl}
            className="inline-block text-sm font-medium text-teal hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Venue website
          </a>
        ) : null}
      </Card>

      {retreat.topics.length > 0 || retreat.eventDetails.length > 0 ? (
        <section className="grid gap-6 md:grid-cols-2">
          {retreat.topics.length > 0 ? (
            <Card className="gap-3">
              <h2 className="font-serif text-2xl text-navy">Topics</h2>
              <ul className="list-disc space-y-2 pl-5 text-navy">
                {retreat.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </Card>
          ) : null}
          {retreat.eventDetails.length > 0 ? (
            <Card className="gap-3">
              <h2 className="font-serif text-2xl text-navy">Event details</h2>
              <ul className="list-disc space-y-2 pl-5 text-navy">
                {retreat.eventDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Card>
          ) : null}
        </section>
      ) : null}

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Stay and meals">
          <p className="leading-relaxed text-navy">
            Meals are included with a ticket. Accommodation is listed through the
            venue.
          </p>
        </SectionHeading>
        {retreat.accommodationUrl ? (
          <a
            href={retreat.accommodationUrl}
            className="inline-block text-sm font-medium text-teal hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Accommodation information
          </a>
        ) : null}
        <AdminReviewNote>
          Please confirm whether lodging is handled by WayToMoksha or only through
          the venue, and share final ticket prices when they are ready.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Registration">
          <p className="leading-relaxed text-muted">
            Registration options such as full price, pay what you can, and sponsor
            tiers will appear here. Registration is not open on this website yet.
          </p>
        </SectionHeading>
        <Button variant="secondary">Register</Button>
        <p className="text-sm text-muted">
          An optional donation may be offered during registration later. General
          donations stay on the Donate page and are separate from retreat fees.
        </p>
        <AdminReviewNote>
          Retreat registration, ticket prices, sponsor tiers, and optional
          donation amounts still need admin confirmation.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Schedule" />
        <PlaceholderPanel>
          An hourly retreat schedule will be added when it is confirmed.
        </PlaceholderPanel>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Gallery" />
        <PlaceholderPanel>Retreat photos will appear here later.</PlaceholderPanel>
        <AdminReviewNote>Gallery images have not been provided.</AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Testimonials" />
        <PlaceholderPanel>
          Testimonial videos and quotes will appear here later.
        </PlaceholderPanel>
        <AdminReviewNote>
          Testimonial videos have not been provided. Do not add invented quotes.
        </AdminReviewNote>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="FAQ" />
        <PlaceholderPanel>
          Questions and answers about this retreat will be added here.
        </PlaceholderPanel>
        <AdminReviewNote>
          Retreat FAQ copy has not been provided yet.
        </AdminReviewNote>
      </section>
    </PageShell>
  );
}
