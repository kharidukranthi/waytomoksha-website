type AdminReviewNoteProps = {
  children: React.ReactNode;
};

export function AdminReviewNote({ children }: AdminReviewNoteProps) {
  return (
    <p
      role="note"
      className="rounded-md border border-border border-l-4 border-l-navy/40 bg-background px-4 py-3 text-sm text-muted"
    >
      Needs admin review: {children}
    </p>
  );
}
