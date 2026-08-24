export type VolunteerInterestArea = {
  id: string;
  label: string;
};

export type VolunteerInquiry = {
  name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  preferredLanguage: string;
  interests: string[];
  availability: string;
  notes: string;
};

export const volunteerInterestAreas: VolunteerInterestArea[] = [
  { id: "general", label: "General volunteering" },
  { id: "retreat-support", label: "Retreat support" },
  { id: "zoom-session-support", label: "Zoom/session support" },
  { id: "video-editing", label: "Video editing" },
  { id: "daily-session-support", label: "Daily session support" },
  { id: "dream-analysis-support", label: "Dream analysis support" },
  { id: "donation-support", label: "Donation support" },
  { id: "content-media-support", label: "Content/media support" },
];
