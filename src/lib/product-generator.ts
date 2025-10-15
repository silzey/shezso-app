
import type { Product } from "@/types/product";
import { Brush, PersonStanding, HeartPulse, Salad, Wind, Foot, Shirt, Sparkles, HandHeart, Briefcase, Baby } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import React from "react";

const placeholderHint = 'beauty product';

export const realImageUrls: string[] = [
    "https://images.pexels.com/photos/7667737/pexels-photo-7667737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7773109/pexels-photo-7773109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667739/pexels-photo-7667739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667711/pexels-photo-7667711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8139067/pexels-photo-8139067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667727/pexels-photo-7667727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667746/pexels-photo-7667746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667717/pexels-photo-7667717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667729/pexels-photo-7667729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7938367/pexels-photo-7938367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667723/pexels-photo-7667723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7733470/pexels-photo-7733470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8139676/pexels-photo-8139676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667726/pexels-photo-7667726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667718/pexels-photo-7667718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7667742/pexels-photo-7667742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const FoundationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l-4.37-4.37a2 2 0 0 1 0-2.82L4.8 1.21a2 2 0 0 1 2.82 0L9 2.4l1.59-1.59a2 2 0 0 1 2.82 0l1.18 1.18a2 2 0 0 1 0 2.82zM11 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM14 7l-1.5 1.5-1.12-1.12a2 2 0 0 0-2.83 0L7 9l-1.5 1.5"/><path d="M12 22v-5"/><path d="M8.5 17h7"/><path d="M12 17a5 5 0 0 0-5 5v0h10v0a5 5 0 0 0-5-5z"/></svg>
);
const LipstickIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 10.5c.6-1.1 1.5-2.2 2.5-3 .9-.7 2-.7 2.9 0 1 .8 1.9 1.9 2.5 3 .5 1 .5 2.1 0 3.1-.6 1.1-1.5 2.2-2.5 3-.9.7-2 .7-2.9 0-1-.8-1.9-1.9-2.5-3-.5-1-.5-2.1 0-3.1Z"/><path d="m7.5 15.5 2-2"/><path d="m14.5 8.5 2-2"/><path d="M9 22v-3.5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5V22"/><path d="M7 22h10"/></svg>
);
const BlushIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M12 12s2-4 4-4 4 2 4 4-2 4-4 4-4-2-4-4"/></svg>
);
const ConcealerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-7.5c0-1.4-1.1-2.5-2.5-2.5h0c-1.4 0-2.5 1.1-2.5 2.5V22"/><path d="m12 14 5-5"/><path d="M12 14c-2.5-1-4.5-1-7 0"/><path d="M17 9c2.5 1 4.5 1 7 0"/><path d="M10 22h4"/><path d="m17 9-1.5-1.5a2.83 2.83 0 0 0-4 0L10 9"/></svg>
);
const EyelinerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/><path d="M20.3 15.8c-1.2 1-2.9 1.5-4.8 1.5"/></svg>
);
const MascaraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.17 12.83a2.47 2.47 0 0 0-3.34-3.34l-2.17 2.17 3.34 3.34Z"/><path d="m14 7-8.5 8.5"/><path d="M12.5 8.5 7 14"/><path d="m11 10-1.5 1.5"/><path d="M18.5 4.5 14 9"/><path d="M9 13l-1.5 1.5"/><path d="M3 21c-1.42-.04-2.39-1.28-2-3 1.12-5.04 5.24-8.9 10-10 .47-.13 1-.03 1.3.3.3.3.4.77.3 1.25-2.25 1.22-9.3 9.3-10 10-.18.18-.4.3-.6.4Z"/></svg>
);
const SkirtIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v6h-4v-4h-4v4H4v-6Z"/></svg>
);

export const categories: { name: string; hint: string; icon: LucideIcon | React.ComponentType, image: string }[] = [
    { name: 'Foundation', hint: 'foundation makeup', icon: FoundationIcon, image: 'https://picsum.photos/seed/foundation/400/400' },
    { name: 'Lipstick', hint: 'lipstick tube', icon: LipstickIcon, image: 'https://picsum.photos/seed/lipstick/400/400' },
    { name: 'Blush', hint: 'blush powder', icon: BlushIcon, image: 'https://picsum.photos/seed/blush/400/400' },
    { name: 'Concealer', hint: 'concealer stick', icon: ConcealerIcon, image: 'https://picsum.photos/seed/concealer/400/400' },
    { name: 'Eyeliner', hint: 'eyeliner pencil', icon: EyelinerIcon, image: 'https://picsum.photos/seed/eyeliner/400/400' },
    { name: 'Mascara', hint: 'mascara wand', icon: MascaraIcon, image: 'https://picsum.photos/seed/mascara/400/400' },
    { name: 'Brushes', hint: 'makeup brushes', icon: Brush, image: 'https://picsum.photos/seed/brushes/400/400' },
    { name: 'Yoga', hint: 'yoga pose', icon: PersonStanding, image: 'https://picsum.photos/seed/yoga/400/400' },
    { name: 'Health', hint: 'healthy food', icon: HeartPulse, image: 'https://picsum.photos/seed/health/400/400' },
    { name: 'Dieting', hint: 'fresh salad', icon: Salad, image: 'https://picsum.photos/seed/dieting/400/400' },
    { name: 'Relaxation', hint: 'calm meditation', icon: Wind, image: 'https://picsum.photos/seed/relaxation/400/400' },
    { name: 'Shoes', hint: 'stylish shoes', icon: Foot, image: 'https://picsum.photos/seed/shoes/400/400' },
    { name: 'Dresses', hint: 'elegant dress', icon: Shirt, image: 'https://picsum.photos/seed/dresses/400/400' },
    { name: 'Skirts', hint: 'flowing skirt', icon: SkirtIcon, image: 'https://picsum.photos/seed/skirts/400/400' },
    { name: 'Accessories', hint: 'fashion accessories', icon: Sparkles, image: 'https://picsum.photos/seed/accessories/400/400' },
    { name: "Women's Health", hint: 'woman meditating', icon: HandHeart, image: 'https://picsum.photos/seed/womenshealth/400/400' },
    { name: 'Self Love', hint: 'happy person', icon: HandHeart, image: 'https://picsum.photos/seed/selflove/400/400' },
    { name: 'Career', hint: 'professional woman', icon: Briefcase, image: 'https://picsum.photos/seed/career/400/400' },
    { name: 'Motherhood', hint: 'mother child', icon: Baby, image: 'https://picsum.photos/seed/motherhood/400/400' },
];

export const generateProducts = (category: typeof categories[0], count: number): Product[] => {
  const products: Product[] = [];
  const productNames = [
    'Radiant Glow', 'Silk Finish', 'Velvet Touch', 'Pure Elegance', 'Natural Charm',
    'Morning Dew', 'Sun Kissed', 'Evening Star', 'Urban Decay', 'Lush Life',
    'Modern Muse', 'Classic Beauty', 'Boho Chic', 'Glamour Queen', 'Minimalist'
  ];

  for (let i = 0; i < count; i++) {
    const name = `${productNames[i % productNames.length]} ${category.name}`;
    products.push({
      id: `${category.name.slice(0,3).toUpperCase()}${i}`,
      name: name,
      category: category.name,
      description: `A popular ${category.name.toLowerCase()} with a distinct feel. Known for its quality and smooth application. Perfect for both new and experienced users.`,
      image: realImageUrls[i % realImageUrls.length],
      hint: category.hint || placeholderHint,
      stock: Math.floor(Math.random() * 100),
      active: true,
      rating: +(4 + Math.random()).toFixed(1),
    });
  }
  return products;
};
