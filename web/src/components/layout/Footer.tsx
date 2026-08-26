import { BrandMark } from "@/components/layout/BrandMark";
import { Navigation } from "@/components/layout/Navigation";
import { Container } from "@/components/ui/Container";
import { organization } from "@/data/organization";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <BrandMark />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {organization.tagline}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-navy">Explore</p>
          <Navigation variant="footer" />
        </div>

        <div className="space-y-2 text-sm text-muted">
          <p className="font-semibold text-navy">Contact</p>
          <p>
            <a href={`mailto:${organization.email}`} className="hover:text-teal">
              {organization.email}
            </a>
          </p>
          <p>
            <a href={`tel:${organization.phone}`} className="hover:text-teal">
              {organization.phone}
            </a>
          </p>
          <p>{organization.taxStatus}</p>
        </div>
      </Container>
    </footer>
  );
}
