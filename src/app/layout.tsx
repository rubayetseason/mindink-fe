import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/layouts/Navbar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300" ,"400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MindInk",
  description: "lorem ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} font-raleway antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
