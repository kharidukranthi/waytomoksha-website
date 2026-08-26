import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { GuidedJourney } from "@/components/sections/GuidedJourney";
import { Card } from "@/components/ui/Card";
import { organization } from "@/data/organization";
import { websitePathHelps } from "@/data/journey";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageShell title="About" intro={organization.aboutBelief}>
      <section>
        <SectionHeading title="Who we are">
          <p className="leading-relaxed text-navy">{organization.about}</p>
        </SectionHeading>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="font-serif text-2xl text-navy">Mission</h2>
          <p className="mt-3 leading-relaxed text-navy">{organization.mission}</p>
        </Card>
        <Card>
          <h2 className="font-serif text-2xl text-navy">Vision</h2>
          <p className="mt-3 leading-relaxed text-navy">{organization.vision}</p>
        </Card>
      </section>

      <section>
        <SectionHeading title="Why a clear path matters">
          <p className="leading-relaxed text-navy">
            WhatsApp continues to support community communication. This website will
            make official information easier to find in one trusted place, including
            the mission, daily sessions, retreats, volunteering, and donations.
          </p>
        </SectionHeading>
      </section>

      <section>
        <SectionHeading title="How this website helps">
          <ul className="list-disc space-y-2 pl-5 text-navy">
            {websitePathHelps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionHeading>
      </section>

      <section id="guided-journey">
        <GuidedJourney />
      </section>
    </PageShell>
  );
}
