import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { GuidedJourney } from "@/components/sections/GuidedJourney";
import { organization } from "@/data/organization";
import { websitePathHelps } from "@/data/journey";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageShell title="About" intro={organization.aboutBelief}>
      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Who we are</h2>
        <p className="leading-relaxed text-navy">{organization.about}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-serif text-2xl text-navy">Mission</h2>
          <p className="mt-3 leading-relaxed text-navy">{organization.mission}</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-serif text-2xl text-navy">Vision</h2>
          <p className="mt-3 leading-relaxed text-navy">{organization.vision}</p>
        </div>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">Why a clear path matters</h2>
        <p className="leading-relaxed text-navy">
          WhatsApp continues to support community communication. This website will
          make official information easier to find in one trusted place, including
          the mission, daily sessions, retreats, volunteering, and donations.
        </p>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-serif text-3xl text-navy">How this website helps</h2>
        <ul className="list-disc space-y-2 pl-5 text-navy">
          {websitePathHelps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="guided-journey">
        <GuidedJourney />
      </section>
    </PageShell>
  );
}
