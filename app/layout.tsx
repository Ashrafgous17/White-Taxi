// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://whitetaxi.in"; // TODO: change to your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "White Taxi | One-way & Outstation Cabs",
    template: "%s | White Taxi",
  },
  description:
    "Book safe, affordable one-way and round-trip outstation cabs across South India. Fixed fares, clean cars, professional drivers, 24×7 support on WhatsApp and phone.",
  keywords: [
    "White Taxi",
    "outstation cabs",
    "one way taxi",
    "drop taxi",
    "Chennai to Bangalore cab",
    "Chennai to Pondicherry taxi",
    "Coimbatore to Ooty cab",
    "airport taxi",
    "cab booking South India",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "White Taxi | One-way & Outstation Cabs",
    description:
      "Book safe, affordable one-way and round-trip outstation cabs across South India. Transparent fares and verified drivers.",
    siteName: "White Taxi",
    images: [
      {
        url: "/og-image.jpg", // put an image in /public
        width: 1200,
        height: 630,
        alt: "White Taxi – One-way & Outstation Cabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Taxi | One-way & Outstation Cabs",
    description:
      "Book safe, affordable one-way and round-trip outstation cabs across South India with White Taxi.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  themeColor: "#020617", // dark slate
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
