import Link from "next/link";
import { organization } from "@/data/organization";

type BrandMarkProps = {
  href?: string;
};

export function BrandMark({ href = "/" }: BrandMarkProps) {
  const wordmark = (
    <span className="inline-flex flex-col">
      <span className="font-serif text-xl leading-none text-navy sm:text-2xl">
        {organization.name}
      </span>
      <span className="mt-1 h-0.5 w-12 bg-teal" aria-hidden="true" />
    </span>
  );

  if (!href) {
    return wordmark;
  }

  return (
    <Link href={href} className="shrink-0" aria-label={`${organization.name} home`}>
      {wordmark}
    </Link>
  );
}
