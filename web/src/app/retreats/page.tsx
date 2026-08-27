import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { RetreatCard } from "@/components/cards/RetreatCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPastRetreats, getUpcomingRetreats } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pageSeo.retreats);

export default function RetreatsPage() {
  const upcomingRetreats = getUpcomingRetreats();
  const pastRetreats = getPastRetreats();
  const upcomingGridClass =
    upcomingRetreats.length === 1
      ? "grid max-w-3xl gap-4"
      : "grid gap-4 md:grid-cols-2";

  return (
    <PageShell
      title="Retreats"
      intro="Upcoming retreats are listed first. Past retreat memories will be added as details are confirmed."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Retreats", path: "/retreats" },
        ])}
      />
      <section className="space-y-6">
        <SectionHeading title="Upcoming retreats" />
        <ul className={upcomingGridClass}>
          {upcomingRetreats.map((retreat) => (
            <li key={retreat.slug}>
              <RetreatCard retreat={retreat} />
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Past retreats">
          <p className="leading-relaxed text-muted">
            Gallery photos, dates, and short summaries will appear here after
            admins confirm the past retreat list.
          </p>
        </SectionHeading>
        <ul className="grid gap-4 md:grid-cols-2">
          {pastRetreats.map((retreat) => (
            <li key={retreat.slug}>
              <RetreatCard retreat={retreat} />
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
