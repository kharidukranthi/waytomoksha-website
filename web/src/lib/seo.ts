import type { Metadata } from "next";
import { organization } from "@/data/organization";
import { allowIndexing, getSiteUrl } from "@/lib/site";

export const brandName = organization.brandName;

export const pageSeo = {
  home: {
    title: "WayToMoksha | Meditation, Retreats, Dreams and Spiritual Growth",
    description:
      "WayToMoksha is a non-religious, non-profit voluntary organization focused on mindful meditation, vegetarianism, inner awareness, retreats, and spiritual growth.",
    path: "/",
  },
  about: {
    title: "About WayToMoksha | Mission, Vision and Spiritual Journey",
    description:
      "Learn about WayToMoksha, a non-religious non-profit organization dedicated to mindful meditation, inner awareness, vegetarianism, dreams, spirituality, and service.",
    path: "/about",
  },
  dailySessions: {
    title: "Daily Meditation Sessions | WayToMoksha",
    description:
      "Find WayToMoksha daily meditation sessions, YouTube links, and schedules for English, Telugu, 4P meditation, kids meditation, and book readings.",
    path: "/daily-sessions",
  },
  retreats: {
    title: "Retreats | WayToMoksha",
    description:
      "Explore upcoming and past WayToMoksha retreats focused on meditation, dreams, healing, spiritual growth, and community learning.",
    path: "/retreats",
  },
  volunteer: {
    title: "Volunteer with WayToMoksha | Seva and Community Support",
    description:
      "Express interest in volunteering with WayToMoksha. Support retreats, daily sessions, video editing, content, dream analysis support, and community service.",
    path: "/volunteer",
  },
  donate: {
    title: "Donate to WayToMoksha | Support the Mission",
    description:
      "Support Way To Moksha FOUNDATION INC through donations that help retreats, community service, daily sessions, spiritual education, and seva activities.",
    path: "/donate",
  },
  contact: {
    title: "Contact WayToMoksha | Email, Phone and Community Information",
    description:
      "Contact Way To Moksha FOUNDATION INC by email or phone for official WayToMoksha information.",
    path: "/contact",
  },
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = path === "/" ? getSiteUrl() : `${getSiteUrl()}${path}`;
  const indexable = allowIndexing();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: brandName,
      title,
      description,
      url,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NGO", "Organization"],
        "@id": `${url}/#organization`,
        name: organization.legalName,
        legalName: organization.legalName,
        alternateName: organization.alternateNames,
        url,
        email: organization.email,
        telephone: organization.phone,
        sameAs: organization.sameAs,
        contactPoint: {
          "@type": "ContactPoint",
          email: organization.email,
          telephone: organization.phone,
          contactType: "customer support",
          areaServed: "US",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: brandName,
        alternateName: organization.alternateNames,
        url,
        description: pageSeo.home.description,
        publisher: { "@id": `${url}/#organization` },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? url : `${url}${item.path}`,
    })),
  };
}

export function retreatEventJsonLd(retreat: {
  title: string;
  slug: string;
  shortDescription: string;
  startAt: string;
  endAt: string;
  venueName: string;
  venueAddress: string;
}) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: retreat.title,
    description: retreat.shortDescription,
    url: `${url}/retreats/${retreat.slug}`,
    startDate: retreat.startAt,
    endDate: retreat.endAt,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: retreat.venueName,
      address: retreat.venueAddress,
    },
    organizer: {
      "@type": "NGO",
      name: organization.legalName,
      url,
    },
  };
}
