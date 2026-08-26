import { Container } from "@/components/ui/Container";

type PageShellProps = {
  title: string;
  intro?: string;
  children?: React.ReactNode;
};

export function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <main className="flex-1">
      <div className="py-16 sm:py-20">
        <Container>
          <header className="mb-12 max-w-3xl space-y-5">
            <h1 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
              {title}
            </h1>
            {intro ? (
              <p className="text-lg leading-relaxed text-muted">{intro}</p>
            ) : null}
          </header>
          <div className="space-y-16 sm:space-y-20">{children}</div>
        </Container>
      </div>
    </main>
  );
}
