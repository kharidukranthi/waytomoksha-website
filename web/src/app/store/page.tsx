import type { Metadata } from "next";
import { StoreKitCard } from "@/components/cards/StoreKitCard";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { orderingSteps, storeKits } from "@/data/store";
import { breadcrumbJsonLd, pageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pageSeo.store);

export default function StorePage() {
  return (
    <PageShell
      title="Store"
      intro="Browse the available spiritual support kits and items. For now, ordering is handled manually by the WayToMoksha team."
    >
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Store", path: "/store" },
        ])}
      />

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="How ordering works">
          <p className="leading-relaxed text-muted">
            This page is a catalog only. The WayToMoksha team confirms availability,
            pricing, and payment instructions.
          </p>
        </SectionHeading>
        <Card className="gap-4">
          <ol className="list-decimal space-y-2 pl-5 text-navy">
            {orderingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
      </section>

      {storeKits.map((kit) => (
        <section key={kit.id} className="max-w-4xl">
          <StoreKitCard kit={kit} />
        </section>
      ))}

      <section className="max-w-3xl">
        <SectionHeading title="Supporting items">
          <p className="leading-relaxed text-navy">
            Some supporting items, such as California Sage or cleansing sticks, may
            be purchased separately from public marketplaces if needed. They are not
            store products sold directly by WayToMoksha.
          </p>
        </SectionHeading>
      </section>

      <section className="max-w-3xl space-y-4">
        <SectionHeading title="Contact to order">
          <p className="leading-relaxed text-navy">
            To order or ask about availability and pricing, please contact the
            WayToMoksha team.
          </p>
        </SectionHeading>
        <Button href="/contact">Contact the team</Button>
      </section>
    </PageShell>
  );
}
