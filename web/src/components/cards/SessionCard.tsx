import { AdminReviewNote } from "@/components/ui/AdminReviewNote";
import { Card } from "@/components/ui/Card";
import type { Session } from "@/data/sessions";

type SessionCardProps = {
  session: Session;
};

export function SessionCard({ session }: SessionCardProps) {
  return (
    <Card className="gap-4">
      <div className="space-y-1">
        {session.language ? (
          <p className="text-sm font-medium text-teal">{session.language}</p>
        ) : null}
        <h3 className="font-serif text-2xl text-navy">{session.name}</h3>
      </div>

      {session.notes ? <p className="text-sm leading-relaxed text-muted">{session.notes}</p> : null}

      {session.usaTime || session.indiaTime ? (
        <dl className="space-y-2 text-sm text-navy">
          {session.usaTime ? (
            <div>
              <dt className="font-medium">USA time</dt>
              <dd className="text-muted">{session.usaTime}</dd>
            </div>
          ) : null}
          {session.indiaTime ? (
            <div>
              <dt className="font-medium">India time</dt>
              <dd className="text-muted">{session.indiaTime}</dd>
            </div>
          ) : null}
        </dl>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-background px-4 py-3 text-sm text-muted">
          Schedule to be confirmed.
        </div>
      )}

      {session.youtubeUrl ? (
        <a
          href={session.youtubeUrl}
          className="text-sm font-medium text-teal hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          YouTube Live
        </a>
      ) : null}

      <div className="rounded-xl border border-dashed border-border bg-background px-4 py-3 text-sm text-muted">
        {session.zoomUrl ? (
          <a href={session.zoomUrl} className="font-medium text-teal hover:underline">
            Join on Zoom
          </a>
        ) : (
          <p>A public Zoom link will be added here when it is available.</p>
        )}
      </div>

      {session.needsAdminReview ? (
        <AdminReviewNote>
          {session.reviewNote ?? "Session details still need admin confirmation."}
        </AdminReviewNote>
      ) : null}
    </Card>
  );
}
