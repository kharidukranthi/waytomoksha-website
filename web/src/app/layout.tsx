import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { organization } from "@/data/organization";
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

export const metadata: Metadata = {
  title: {
    default: organization.name,
    template: `%s | ${organization.name}`,
  },
  description: organization.heroDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${sourceSerif.variable} flex min-h-screen flex-col bg-background font-sans text-navy antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
