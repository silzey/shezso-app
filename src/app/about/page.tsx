git push -u origin main

'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BottomNavBar } from "@/components/bottom-nav-bar";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brush, Star, Gift, PenSquare, HeartPulse, Megaphone } from "lucide-react";
import Link from 'next/link';

const features = [
    {
        icon: Brush,
        title: "Explore Products",
        description: "View the latest in beauty, fashion, and wellness from brands large and small.",
        slug: "explore-products"
    },
    {
        icon: Star,
        title: "True Testimonials",
        description: "Read authentic reviews from our community and share your own experiences.",
        slug: "read-real-reviews"
    },
    {
        icon: Gift,
        title: "Giveaways & Deals",
        description: "Participate in exclusive giveaways and find unbeatable deals on top products.",
        slug: "discover-deals"
    },
    {
        icon: PenSquare,
        title: "Creator Portal",
        description: "Join our creator program, receive products, and share your honest reviews.",
        slug: "creator-portal"
    },
    {
        icon: HeartPulse,
        title: "Health & Wellness",
        description: "Discover content and products that promote a healthy and balanced lifestyle.",
        slug: "health-and-wellness"
    },
    {
        icon: Megaphone,
        title: "Advertise With Us",
        description: "Showcase your products to a dedicated audience. We welcome companies of all sizes.",
        slug: "advertise-with-us"
    }
]

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-muted/40">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-cursive text-primary mb-4">Welcome to Shezso</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted community for authentic reviews on beauty, fashion, and wellness. We connect users with the latest products, host exciting giveaways, and empower creators to share their true testimony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link href={`/about/${feature.slug}`} key={feature.title} className="block hover:no-underline">
                <Card className="shadow-md hover:shadow-lg transition-shadow bg-card/60 backdrop-blur-sm h-full">
                    <CardHeader className="flex flex-row items-start gap-4 p-4">
                        <feature.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                            <CardDescription className="mt-1 text-sm md:text-base">{feature.description}</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

        </main>
        <Footer />
        <BottomNavBar />
      </div>
    </>
  );
}
