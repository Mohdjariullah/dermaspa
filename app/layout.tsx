import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dermal Skin Clinic and Spa Guam",
  description: "Professional skin care services in Guam. Licensed esthetician, certified massage therapist, and expert facials.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
