import type { Metadata } from "next";
import { DonatePreview } from "@/components/sections/DonatePreview";
import { GuidedJourney } from "@/components/sections/GuidedJourney";
import { Hero } from "@/components/sections/Hero";
import { MissionSummary } from "@/components/sections/MissionSummary";
import { RetreatsPreview } from "@/components/sections/RetreatsPreview";
import { SessionsPreview } from "@/components/sections/SessionsPreview";
import { VolunteerPreview } from "@/components/sections/VolunteerPreview";
import { WebsitePurpose } from "@/components/sections/WebsitePurpose";
import { Section } from "@/components/layout/Section";
import { pageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <MissionSummary />
      <WebsitePurpose />
      <Section id="guided-journey">
        <GuidedJourney />
      </Section>
      <SessionsPreview />
      <RetreatsPreview />
      <DonatePreview />
      <VolunteerPreview />
    </main>
  );
}
