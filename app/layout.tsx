import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const fontSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dynamic Subdomains in Next.js",
  description: "This is a demo of dynamic subdomains in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
