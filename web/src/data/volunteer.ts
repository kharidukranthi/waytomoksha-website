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

export const volunteerInterestAreas: VolunteerInterestArea[] = [];
