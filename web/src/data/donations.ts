export type DonationPurpose = {
  id: string;
  title: string;
  description?: string;
  needsAdminReview?: boolean;
};

export type DonationTier = {
  id: string;
  label: string;
  amount?: string;
  needsAdminReview?: boolean;
};

export const donationPurposes: DonationPurpose[] = [
  { id: "retreat-support", title: "Retreat support", needsAdminReview: true },
  { id: "cow-care", title: "Cow care", needsAdminReview: true },
  { id: "snake-rescue", title: "Snake rescue", needsAdminReview: true },
  { id: "women-skill-support", title: "Women skill support", needsAdminReview: true },
  { id: "children-support", title: "Children support", needsAdminReview: true },
  { id: "elder-care", title: "Elder care", needsAdminReview: true },
  { id: "universe-seva", title: "Universe seva", needsAdminReview: true },
];

export const donationTiers: DonationTier[] = [
  { id: "monthly", label: "Monthly donation", needsAdminReview: true },
  { id: "custom", label: "Custom amount", needsAdminReview: true },
];
