export type StoreKit = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  pricingNote: string;
};

export const storeKits: StoreKit[] = [
  {
    id: "wealth-kit",
    title: "Wealth Kit Guide",
    description:
      "This guide shows the spiritual support items included in the Wealth Kit.",
    image: "/store/wealth-kit-guide.jpg",
    alt: "Wealth Kit Guide showing included spiritual support items",
    width: 1448,
    height: 1086,
    pricingNote: "Contact us for availability and pricing.",
  },
  {
    id: "protection-kit",
    title: "Protection Kit Guide",
    description:
      "This guide shows the spiritual support items included in the Protection Kit.",
    image: "/store/protection-kit-guide.jpg",
    alt: "Protection Kit Guide showing included spiritual support items",
    width: 1024,
    height: 1536,
    pricingNote: "Contact us for availability and pricing.",
  },
];

export const orderingSteps = [
  "Review the available kits and items.",
  "Contact the WayToMoksha team to confirm availability and pricing.",
  "Complete payment using the instructions shared by the team.",
  "The team will coordinate pickup, shipping, or tracking details.",
];
