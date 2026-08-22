export type JourneyStepStatus = "available" | "pending";

export type JourneyStep = {
  id: string;
  title: string;
  summary?: string;
  href?: string;
  cta: string;
  status: JourneyStepStatus;
  reviewNote?: string;
};

export const guidedJourneySteps: JourneyStep[] = [
  {
    id: "daily-sessions",
    title: "Join daily sessions",
    summary:
      "Begin with public meditation sessions offered in English, Telugu, and other groups.",
    href: "/daily-sessions",
    cta: "Join daily sessions",
    status: "available",
  },
  {
    id: "self-guided",
    title: "Follow a self-guided path",
    cta: "Follow self-guided path",
    status: "pending",
    reviewNote: "Approved step-by-step copy for the self-guided path is not in the current docs.",
  },
  {
    id: "mentorship",
    title: "Request guided mentorship",
    cta: "Request guided mentorship",
    status: "pending",
    reviewNote: "Guided mentorship is a later-phase feature and should stay a placeholder.",
  },
  {
    id: "dream-analysis",
    title: "Start dream analysis",
    cta: "Start dream analysis",
    status: "pending",
    reviewNote: "Dream analysis belongs to Project 3 and should stay a placeholder.",
  },
];

export const websitePathHelps = [
  "See what WayToMoksha is, including the mission and vision",
  "Find official daily session information in one place",
  "Learn about upcoming retreats",
  "Express volunteer interest",
  "Donate in support of the mission, separate from retreat fees",
  "Find official contact details",
];
