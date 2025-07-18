import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import CommentInjector from "../components/common/CommentInjector";

export const metadata: Metadata = {
  title: "Dermal Skin Clinic and Spa Guam",
  description: "Professional skin care services in Guam. Licensed esthetician, certified massage therapist, and expert facials."
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        <meta charSet="utf-8" />
        <meta name="keywords" content="Guam spa, skin clinic, facial, massage, waxing, esthetician, body treatment, beauty, skincare, spa Guam, Dermal Skin Clinic and Spa Guam" />
        <meta name="author" content="Dermal Skin Clinic and Spa Guam" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Dermal Skin Clinic and Spa Guam" />
        <meta property="og:description" content="Professional skin care services in Guam. Licensed esthetician, certified massage therapist, and expert facials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dermalskincareandspaguam.com/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:site_name" content="Dermal Skin Clinic and Spa Guam" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dermal Skin Clinic and Spa Guam" />
        <meta name="twitter:description" content="Professional skin care services in Guam. Licensed esthetician, certified massage therapist, and expert facials." />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="canonical" href="https://dermalskincareandspaguam.com/" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
        {/* <CommentInjector /> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
