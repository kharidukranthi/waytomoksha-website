import Link from "next/link";
import { navigation } from "@/data/navigation";

export function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavigationProps = {
  pathname?: string;
  variant: "header" | "mobile" | "footer";
  onNavigate?: () => void;
};

export function Navigation({ pathname = "", variant, onNavigate }: NavigationProps) {
  if (variant === "footer") {
    return (
      <nav aria-label="Footer">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-muted hover:text-teal">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  if (variant === "mobile") {
    return (
      <nav id="mobile-navigation" aria-label="Mobile">
        <ul className="flex flex-col gap-1 py-3">
          {navigation.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    item.emphasize
                      ? "bg-saffron font-medium text-white"
                      : isActive
                        ? "bg-surface font-semibold text-teal"
                        : "text-navy hover:bg-surface"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
      {navigation.map((item) => {
        const isActive = isActivePath(pathname, item.href);

        if (item.emphasize) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full bg-saffron px-4 py-2 text-sm font-medium text-white hover:bg-saffron/90"
            >
              {item.label}
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm ${
              isActive ? "font-semibold text-teal" : "text-navy hover:text-teal"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
