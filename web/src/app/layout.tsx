import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, pageSeo } from "@/lib/seo";
import { allowIndexing, getSiteUrl } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const indexable = allowIndexing();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: pageSeo.home.title,
    template: "%s | WayToMoksha",
  },
  description: pageSeo.home.description,
  robots: indexable
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "WayToMoksha",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    locale: "en_US",
  },
  twitter: {
      card: "summary",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${sourceSans.variable} ${sourceSerif.variable} flex min-h-screen flex-col bg-background font-sans text-navy antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
