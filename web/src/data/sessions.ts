export type SessionTime = {
  label: string;
  usaTime?: string;
  indiaTime?: string;
};

export type Session = {
  id: string;
  name: string;
  language?: string;
  category: string;
  usaTime?: string;
  indiaTime?: string;
  youtubeUrl?: string;
  zoomUrl?: string;
  notes?: string;
  needsAdminReview?: boolean;
  reviewNote?: string;
  times?: SessionTime[];
};

export type AdditionalIndiaTiming = {
  time: string;
  label: string;
};

export const sessions: Session[] = [
  {
    id: "english-daily",
    name: "English Daily Meditation",
    language: "English",
    category: "daily-meditation",
    usaTime: "Night 9:00 PM Eastern Time",
    indiaTime: "Morning 6:30 AM IST",
    youtubeUrl: "https://www.youtube.com/@WayToMokshaEnglish",
    needsAdminReview: true,
    reviewNote:
      "Times are placeholders. Official schedules will be confirmed during content review. USA times are shown in Eastern Time.",
  },
  {
    id: "telugu-daily",
    name: "Telugu Daily Meditation",
    language: "Telugu",
    category: "daily-meditation",
    usaTime: "Morning 11:30 AM Eastern Time",
    indiaTime: "Night 8:30 PM IST",
    youtubeUrl: "https://www.youtube.com/@WaytomokshaTelugu",
    needsAdminReview: true,
    reviewNote:
      "Times are placeholders. Official schedules will be confirmed during content review. USA times are shown in Eastern Time.",
  },
  {
    id: "4p",
    name: "4P Meditation",
    category: "4p",
    usaTime: "Night 7:00 PM Eastern Time",
    notes: "Paschathap, Parivarthan, Prayaschith, Prakriya",
    needsAdminReview: true,
    reviewNote:
      "This USA time is a placeholder. Additional India timings are listed in a separate section and are not tied to 4P.",
  },
  {
    id: "kids",
    name: "Kids Meditation",
    category: "kids",
    needsAdminReview: true,
    reviewNote:
      "Kids Meditation times are a placeholder. The official schedule will be added during content review.",
  },
  {
    id: "book-readings",
    name: "Book readings",
    category: "book-readings",
    needsAdminReview: true,
    reviewNote:
      "Schedule and join links for book readings are placeholders. Official details will be added during content review.",
  },
];

export const additionalIndiaTimings: AdditionalIndiaTiming[] = [
  { time: "4:30 AM", label: "Telugu" },
  { time: "5:30 AM", label: "English" },
  { time: "9:30 AM", label: "Telugu" },
  { time: "12:06 PM", label: "Telugu" },
  { time: "4:30 PM", label: "Anusha" },
  { time: "6:30 PM", label: "English" },
  { time: "9:30 PM", label: "Hindi" },
];

export const whatsappCommunity = {
  label: "WhatsApp community",
  url: undefined as string | undefined,
  qrImage: undefined as string | undefined,
  needsAdminReview: true,
};
