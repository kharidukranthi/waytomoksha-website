import { BrandMark } from "@/components/layout/BrandMark";
import { Navigation } from "@/components/layout/Navigation";
import { Container } from "@/components/ui/Container";
import { organization } from "@/data/organization";

function youtubeLabel(url: string) {
  if (url.toLowerCase().includes("telugu")) {
    return "YouTube Telugu";
  }

  if (url.toLowerCase().includes("english")) {
    return "YouTube English";
  }

  return "YouTube";
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <BrandMark />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {organization.tagline}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Official website of {organization.legalName}.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-navy">Explore</p>
          <Navigation variant="footer" />
        </div>

        <div className="space-y-2 text-sm text-muted">
          <p className="font-semibold text-navy">Contact</p>
          <p>
            <a
              href={`mailto:${organization.email}`}
              className="inline-flex min-h-11 items-center text-teal hover:underline"
            >
              {organization.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${organization.phone}`}
              className="inline-flex min-h-11 items-center text-teal hover:underline"
            >
              {organization.phone}
            </a>
          </p>
          <p>{organization.taxStatus}</p>
          {organization.sameAs.length > 0 ? (
            <ul className="space-y-1 pt-2">
              {organization.sameAs.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    className="inline-flex min-h-11 items-center text-teal hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {youtubeLabel(url)}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
