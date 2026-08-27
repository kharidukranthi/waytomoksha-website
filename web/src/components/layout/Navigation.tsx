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
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center text-sm text-muted hover:text-teal"
              >
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
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-md px-3 py-2 text-sm ${
                    item.emphasize
                      ? "bg-gold font-medium text-navy"
                      : isActive
                        ? "bg-on-header/10 font-semibold text-gold"
                        : "text-on-header hover:bg-on-header/10"
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
              aria-current={isActive ? "page" : undefined}
              className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy hover:bg-gold-dark"
            >
              {item.label}
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center text-sm ${
              isActive
                ? "font-semibold text-gold"
                : "text-on-header hover:text-gold"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
