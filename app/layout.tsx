import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PN2B | เช็กสถานะพัสดุ",
    template: "%s | PN2B",
  },

  description:
    "ระบบตรวจสอบสถานะพัสดุสำหรับลูกค้าร้านพี่น้องสองบี รองเท้ามือสอง",

  applicationName: "PN2B Tracking",

  keywords: [
    "PN2B",
    "เช็กพัสดุ",
    "ตรวจสอบพัสดุ",
    "รองเท้ามือสอง",
    "Flash",
    "J&T",
    "KEX",
    "DHL",
    "ไปรษณีย์ไทย",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "PN2B | เช็กสถานะพัสดุ",
    description:
      "ระบบตรวจสอบสถานะพัสดุสำหรับลูกค้าร้านพี่น้องสองบี รองเท้ามือสอง",
    siteName: "PN2B Tracking",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "PN2B",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={kanit.variable}>
      <body>{children}</body>
    </html>
  );
}