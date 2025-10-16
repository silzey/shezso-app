
'use client';

import { useParams, notFound } from 'next/navigation';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BottomNavBar } from "@/components/bottom-nav-bar";
import { Brush, Star, Gift, PenSquare, HeartPulse, Megaphone } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const featuresData = [
    {
        icon: Brush,
        title: "Explore Products",
        description: "Dive into a vast catalog of the latest in beauty, fashion, and wellness. We feature products from established brands and emerging companies, giving you a comprehensive look at what's new and noteworthy.",
        slug: "explore-products"
    },
    {
        icon: Star,
        title: "True Testimonials & Reviews",
        description: "Make confident decisions with authentic feedback. Our platform is built on trust, allowing users to leave honest reviews and share their true testimony about products they've tried.",
        slug: "read-real-reviews"
    },
    {
        icon: Gift,
        title: "Giveaways & Deals",
        description: "Who doesn't love freebies? We partner with brands to host exciting giveaways and provide exclusive deals. It's our way of thanking our amazing community.",
        slug: "discover-deals"
    },
    {
        icon: PenSquare,
        title: "Creator Portal",
        description: "Are you passionate about creating content? Join our creator portal to connect with brands, receive products for review, and grow your influence. We believe in the power of authentic voices.",
        slug: "creator-portal"
    },
    {
        icon: HeartPulse,
        title: "Health & Wellness Hub",
        description: "Beauty and fashion are more than skin deep. Explore our health and wellness section for content and products that help you feel as good as you look, promoting a balanced and healthy lifestyle.",
        slug: "health-and-wellness"
    },
    {
        icon: Megaphone,
        title: "Advertise With Us",
        description: "Get your products in front of a passionate and engaged audience. We offer advertising opportunities for both large and small companies, helping you connect with consumers who care.",
        slug: "advertise-with-us"
    }
];

export default function FeatureDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const feature = featuresData.find(f => f.slug === slug);

  if (!feature) {
    notFound();
  }

  const { icon: Icon, title, description } = feature;

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost">
              <Link href="/about">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to About
              </Link>
            </Button>
          </div>
          <article className="prose lg:prose-lg dark:prose-invert max-w-none bg-card/60 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Icon className="h-10 w-10 text-primary" />
              <h1 className="!mb-0 !text-primary">{title}</h1>
            </div>
            <p className="lead">{description}</p>
          </article>
        </div>
      </main>
      <Footer />
      <BottomNavBar />
    </div>
  );
}
