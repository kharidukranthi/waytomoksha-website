import Link from "next/link";
import { organization } from "@/data/organization";

type BrandMarkProps = {
  href?: string;
  tone?: "default" | "onHeader";
};

export function BrandMark({ href = "/", tone = "default" }: BrandMarkProps) {
  const mark = (
    <span className="inline-flex items-center gap-2 sm:gap-3">
      {/* Temporary placeholder until the official logo is provided. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/placeholder-logo.png"
        alt=""
        aria-hidden="true"
        className="h-8 w-auto sm:h-10"
      />
      <span className="inline-flex flex-col">
        <span
          className={`font-serif text-xl leading-none sm:text-2xl ${
            tone === "onHeader" ? "text-on-header" : "text-navy"
          }`}
        >
          {organization.name}
        </span>
        <span
          className={`mt-1 h-0.5 w-12 ${tone === "onHeader" ? "bg-gold" : "bg-teal"}`}
          aria-hidden="true"
        />
      </span>
    </span>
  );

  if (!href) {
    return mark;
  }

  return (
    <Link href={href} className="shrink-0" aria-label={`${organization.name} home`}>
      {mark}
    </Link>
  );
}
