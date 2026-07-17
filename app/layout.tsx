import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PN2B | ตรวจสอบพัสดุ",
  description:
    "ระบบตรวจสอบพัสดุออนไลน์ของ PN2B รองเท้ามือสอง รองรับ Flash Express, J&T Express, KEX, DHL และไปรษณีย์ไทย",

  keywords: [
    "PN2B",
    "ตรวจสอบพัสดุ",
    "เช็กพัสดุ",
    "Flash Express",
    "J&T",
    "KEX",
    "DHL",
    "ไปรษณีย์ไทย",
  ],

  applicationName: "PN2B Tracking",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "PN2B | ตรวจสอบพัสดุ",
    description:
      "ระบบตรวจสอบพัสดุออนไลน์ของ PN2B รองเท้ามือสอง",
    siteName: "PN2B Tracking",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "PN2B Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PN2B | ตรวจสอบพัสดุ",
    description:
      "ระบบตรวจสอบพัสดุออนไลน์ของ PN2B รองเท้ามือสอง",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}