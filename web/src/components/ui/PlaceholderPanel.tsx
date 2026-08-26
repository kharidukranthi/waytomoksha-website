type PlaceholderPanelProps = {
  children: React.ReactNode;
};

export function PlaceholderPanel({ children }: PlaceholderPanelProps) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-sm text-muted">
      {children}
    </div>
  );
}
