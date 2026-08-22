import { Container } from "@/components/ui/Container";

type PageShellProps = {
  title: string;
  intro?: string;
  children?: React.ReactNode;
};

export function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <main className="flex-1">
      <div className="py-12 sm:py-16">
        <Container>
          <header className="mb-10 max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
              {title}
            </h1>
            {intro ? (
              <p className="text-lg leading-relaxed text-muted">{intro}</p>
            ) : null}
          </header>
          <div className="space-y-12 sm:space-y-16">{children}</div>
        </Container>
      </div>
    </main>
  );
}
