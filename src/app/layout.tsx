import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";

const oxygen = Oxygen({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ocean's Bounty",
  description: "A SeaFood Grocery Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oxygen.className}>{children}</body>
    </html>
  );
}
