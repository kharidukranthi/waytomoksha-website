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

export const donationPurposes: DonationPurpose[] = [];
export const donationTiers: DonationTier[] = [];
