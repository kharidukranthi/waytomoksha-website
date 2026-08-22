import { DonatePreview } from "@/components/sections/DonatePreview";
import { GuidedJourney } from "@/components/sections/GuidedJourney";
import { Hero } from "@/components/sections/Hero";
import { MissionSummary } from "@/components/sections/MissionSummary";
import { RetreatsPreview } from "@/components/sections/RetreatsPreview";
import { SessionsPreview } from "@/components/sections/SessionsPreview";
import { VolunteerPreview } from "@/components/sections/VolunteerPreview";
import { Section } from "@/components/layout/Section";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <MissionSummary />
      <Section>
        <GuidedJourney preview />
      </Section>
      <SessionsPreview />
      <RetreatsPreview />
      <DonatePreview />
      <VolunteerPreview />
    </main>
  );
}
