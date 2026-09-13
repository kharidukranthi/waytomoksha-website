export type NavItem = {
  label: string;
  href: string;
  emphasize?: boolean;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Daily Sessions", href: "/daily-sessions" },
  { label: "Retreats", href: "/retreats" },
  { label: "Store", href: "/store" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate", emphasize: true },
  { label: "Contact", href: "/contact" },
];
