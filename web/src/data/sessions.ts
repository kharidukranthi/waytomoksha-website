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
  times?: SessionTime[];
};

export const sessions: Session[] = [
  {
    id: "english-daily",
    name: "English Daily Meditation",
    language: "English",
    category: "daily-meditation",
    youtubeUrl: "https://www.youtube.com/@WayToMokshaEnglish",
    needsAdminReview: true,
  },
  {
    id: "telugu-daily",
    name: "Telugu Daily Meditation",
    language: "Telugu",
    category: "daily-meditation",
    youtubeUrl: "https://www.youtube.com/@WaytomokshaTelugu",
    needsAdminReview: true,
  },
  {
    id: "4p",
    name: "4P Meditation",
    category: "4p",
    notes: "Paschathap, Parivarthan, Prayaschith, Prakriya",
    needsAdminReview: true,
  },
  {
    id: "kids",
    name: "Kids Meditation",
    category: "kids",
    needsAdminReview: true,
  },
  {
    id: "book-readings",
    name: "Book readings",
    category: "book-readings",
    needsAdminReview: true,
  },
];
