export type RetreatStatus = "upcoming" | "past";
export type RegistrationStatus = "placeholder" | "external" | "none";

export type Retreat = {
  slug: string;
  title: string;
  status: RetreatStatus;
  startAt: string;
  endAt: string;
  timezone: string;
  location: string;
  venueName: string;
  venueAddress: string;
  venueUrl?: string;
  shortDescription: string;
  topics: string[];
  eventDetails: string[];
  accommodationUrl?: string;
  registrationStatus: RegistrationStatus;
  gallery?: string[];
  testimonials?: string[];
  needsAdminReview?: boolean;
};

export const retreats: Retreat[] = [
  {
    slug: "astral-healing-central-florida",
    title: "Astral Healing: 2-Day Retreat for Wisdom Through Dreams in Central Florida",
    status: "upcoming",
    startAt: "2026-05-29T17:00:00",
    endAt: "2026-05-31T21:00:00",
    timezone: "America/New_York",
    location: "Weirsdale, FL, USA",
    venueName: "The Grand Oaks Resort",
    venueAddress: "3000 Marion County Rd, Weirsdale, FL 32195, USA",
    venueUrl: "https://thegrandoaks.com",
    shortDescription: "Self healing with Astral Masters",
    topics: [
      "Ultimate Truth",
      "Manifesting money and health in a right way",
      "How our ancestors make a difference in our lives",
    ],
    eventDetails: [
      "Hosted on a scenic equestrian property",
      "Meals included with ticket",
      "Accommodation available at https://thegrandoaks.com",
    ],
    accommodationUrl: "https://thegrandoaks.com",
    registrationStatus: "placeholder",
    needsAdminReview: true,
  },
];
