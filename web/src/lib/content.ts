import { retreats, type Retreat } from "@/data/retreats";

export function getUpcomingRetreats(): Retreat[] {
  return retreats.filter((retreat) => retreat.status === "upcoming");
}

export function getPastRetreats(): Retreat[] {
  return retreats.filter((retreat) => retreat.status === "past");
}

export function getRetreatBySlug(slug: string): Retreat | undefined {
  return retreats.find((retreat) => retreat.slug === slug);
}

export function retreatHasDetailPage(retreat: Retreat): boolean {
  return retreat.status === "upcoming" && Boolean(retreat.startAt);
}

export function getRetreatsWithDetailPages(): Retreat[] {
  return retreats.filter(retreatHasDetailPage);
}

export function getRetreatScheduleLabel(retreat: Retreat): string {
  if (retreat.scheduleLabel) {
    return retreat.scheduleLabel;
  }

  if (!retreat.startAt) {
    return "Date to be confirmed";
  }

  return retreat.startAt;
}
