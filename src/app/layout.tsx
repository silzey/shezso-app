
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { PT_Sans, Belleza } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { FirebaseClientProvider } from "@/firebase";
import { cn } from "@/lib/utils";

const ptSans = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-sans",
});

const belleza = Belleza({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-belleza",
});

const title = "Shezso | Your Ultimate Beauty & Cosmetics Marketplace";
const description =
  "Discover and review the latest in beauty. Shezso is your community-driven marketplace for authentic reviews, top brands, and exclusive deals on cosmetics and skincare.";
const url = "https://dispensary-13773344-54196.web.app";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cosmetics",
    "beauty",
    "makeup",
    "skincare",
    "reviews",
    "beauty deals",
    "cosmetics marketplace",
    "shade finder",
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
        alt: "Shezso - Beauty Marketplace",
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
      <body className={cn("antialiased", ptSans.variable, belleza.variable)}>
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
