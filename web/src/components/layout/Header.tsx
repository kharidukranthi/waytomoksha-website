"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/layout/BrandMark";
import { Navigation } from "@/components/layout/Navigation";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const donateItem = navigation.find((item) => item.emphasize);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <BrandMark />
        <Navigation pathname={pathname} variant="header" />

        <div className="flex items-center gap-3 lg:hidden">
          {donateItem ? (
            <Link
              href={donateItem.href}
              className="rounded-full bg-saffron px-4 py-2 text-sm font-medium text-white"
            >
              {donateItem.label}
            </Link>
          ) : null}
          <button
            type="button"
            className="rounded-md border border-border px-3 py-2 text-sm text-navy"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container>
            <Navigation
              pathname={pathname}
              variant="mobile"
              onNavigate={() => setIsOpen(false)}
            />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
