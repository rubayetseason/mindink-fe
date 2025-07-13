import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import ProfileChildrenLayout from "@/components/shared/layouts/ProfileChildrenLayout";
import { ThemeProvider } from "@/lib/theme-provider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MindInk",
  description: "lorem ipsum",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${raleway.variable} font-raleway antialiased`}>
          <ProfileChildrenLayout>{children}</ProfileChildrenLayout>
        </body>
      </ThemeProvider>
    </html>
  );
}
