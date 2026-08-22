import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  tone?: "background" | "surface";
};

export function Section({ children, id, tone = "background" }: SectionProps) {
  return (
    <section
      id={id}
      className={tone === "surface" ? "bg-surface" : "bg-background"}
    >
      <Container className="py-16 sm:py-20">{children}</Container>
    </section>
  );
}
