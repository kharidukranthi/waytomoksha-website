export type NavItem = {
  label: string;
  href: string;
  emphasize?: boolean;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Daily Sessions", href: "/daily-sessions" },
  { label: "Retreats", href: "/retreats" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate", emphasize: true },
  { label: "Contact", href: "/contact" },
];
