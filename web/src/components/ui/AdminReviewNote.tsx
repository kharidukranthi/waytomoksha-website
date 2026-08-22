type AdminReviewNoteProps = {
  children: React.ReactNode;
};

export function AdminReviewNote({ children }: AdminReviewNoteProps) {
  return (
    <p
      role="note"
      className="rounded-md border border-gold/50 bg-gold/10 px-4 py-3 text-sm text-navy"
    >
      Needs admin review: {children}
    </p>
  );
}
