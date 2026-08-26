type SectionHeadingProps = {
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <h2 className="font-serif text-3xl text-navy sm:text-4xl">{title}</h2>
      {children}
    </div>
  );
}
