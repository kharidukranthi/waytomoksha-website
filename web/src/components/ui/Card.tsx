type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card ${className}`}
    >
      {children}
    </article>
  );
}
