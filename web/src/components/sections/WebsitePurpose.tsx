import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { websitePathHelps } from "@/data/journey";

export function WebsitePurpose() {
  return (
    <Section id="website-purpose">
      <div className="space-y-12">
        <SectionHeading title="Why a clear path matters">
          <p className="leading-relaxed text-navy">
            WhatsApp continues to support community communication. This website will
            make official information easier to find in one trusted place, including
            the mission, daily sessions, retreats, volunteering, and donations.
          </p>
        </SectionHeading>

        <SectionHeading title="How this website helps">
          <ul className="list-disc space-y-2 pl-5 text-navy">
            {websitePathHelps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionHeading>
      </div>
    </Section>
  );
}
