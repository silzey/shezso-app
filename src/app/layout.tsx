import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { FirebaseClientProvider } from "@/firebase";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const title = "Shezso | Local Cosmetics Finder & Beauty Deals";
const description =
  "Explore top-rated beauty brands and products in your area. Shezso is your ultimate cosmetics marketplace to find reviews, the latest info, and unbeatable deals.";
const url = "https://dispensary-13773344-54196.web.app";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cosmetics finder",
    "beauty delivery",
    "local beauty stores",
    "makeup reviews",
    "beauty deals",
    "cosmetics marketplace",
    "skincare",
    "makeup deals",
  ],
  metadataBase: new URL(url),
  manifest: "/manifest.json",
  openGraph: {
    title,
    description,
    url,
    siteName: "Shezso",
    images: [
      {
        url: '/favicon.png', // Relative URL to public folder
        width: 512,
        height: 512,
        alt: "Shezso - Cosmetics Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ['/favicon.png'], // Relative URL to public folder
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FirebaseClientProvider>
              {children}
              <Toaster />
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
