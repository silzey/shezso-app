
'use client';

import {
  Flower,
  FlaskConical,
  Bot,
  Tablet,
  Cigarette,
  Stethoscope,
  Droplets,
  SprayCan,
  ShoppingBag,
  Tag,
  type LucideProps,
  PaintBucket,
  Palette,
  Eye,
  Brush,
  PersonStanding,
  HeartPulse,
  Scale,
  Sofa,
  Footprints,
  Shirt,
  ShoppingBasket,
  HeartHandshake,
  Briefcase,
  Baby,
  Sparkles,
} from 'lucide-react';
import type { Product } from '@/types/product';

export const realImageUrls = [
  'https://images.pexels.com/photos/7667737/pexels-photo-7667737.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7773109/pexels-photo-7773109.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7667739/pexels-photo-7667739.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8139067/pexels-photo-8139067.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7667727/pexels-photo-7667727.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7667713/pexels-photo-7667713.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8139676/pexels-photo-8139676.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7667740/pexels-photo-7667740.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7667724/pexels-photo-7667724.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2249625/pexels-photo-2249625.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3676962/pexels-photo-3676962.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7908293/pexels-photo-7908293.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7667741/pexels-photo-7667741.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8410298/pexels-photo-8410298.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const LipstickIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4.8 11.3l1.8-1.8c.5-.5 1.3-.5 1.8 0l2.4 2.4c.5.5.5 1.3 0 1.8l-1.8 1.8" />
    <path d="M8.2 9.5l-2.6 2.6" />
    <path d="M12.5 5.1L15 2.6c.5-.5 1.3-.5 1.8 0l2.6 2.6c.5.5.5 1.3 0 1.8l-2.6 2.6" />
    <path d="m10.1 11.5 2.4-2.4" />
    <path d="M14 20.8V14l4.2-4.2" />
    <path d="M18 14V8.5c0-1.4-1.1-2.5-2.5-2.5H14" />
  </svg>
);

export const categories = [
    { name: 'Foundation', icon: PaintBucket },
    { name: 'Lipstick', icon: LipstickIcon },
    { name: 'Blush', icon: Sparkles },
    { name: 'Concealer', icon: Sparkles },
    { name: 'Eyeliner', icon: Eye },
    { name: 'Mascara', icon: Eye },
    { name: 'Brushes', icon: Brush },
    { name: 'Yoga', icon: PersonStanding },
    { name: 'Health', icon: HeartPulse },
    { name: 'Dieting', icon: Scale },
    { name: 'Relaxation', icon: Sofa },
    { name: 'Shoes', icon: Footprints },
    { name: 'Dresses', icon: Shirt },
    { name: 'Skirts', icon: Shirt },
    { name: 'Accessories', icon: ShoppingBasket },
    { name: 'Women\'s Health', icon: HeartPulse },
    { name: 'Self Love', icon: HeartHandshake },
    { name: 'Career', icon: Briefcase },
    { name: 'Motherhood', icon: Baby },
];


export const generateProducts = (category: { name: string; icon: React.ComponentType<LucideProps>; }, count: number): Product[] => {
  const products: Product[] = [];
  const types: Array<'Sativa' | 'Indica' | 'Hybrid'> = ['Sativa', 'Indica', 'Hybrid'];
  
  for (let i = 1; i <= count; i++) {
    const productType = types[Math.floor(Math.random() * types.length)];
    const thc = parseFloat((18 + Math.random() * 12).toFixed(1));
    const imageIndex = (category.name.length + i) % realImageUrls.length;

    products.push({
      id: `${category.name.toLowerCase().replace(/\\s+/g, '-')}-${i}`,
      name: `${productType} ${category.name.slice(0, -1)} ${i}`,
      category: category.name,
      type: productType,
      thc: thc,
      price: parseFloat((25 + Math.random() * 50).toFixed(2)),
      description: `This is a high-quality ${productType} ${category.name.toLowerCase()} with a THC content of ${thc}%. Perfect for both new and experienced users looking for a reliable and enjoyable experience.`,
      image: realImageUrls[imageIndex],
      hint: `${category.name.toLowerCase()} cannabis`,
      stock: Math.floor(Math.random() * 100),
      active: true,
      rating: parseFloat((4 + Math.random()).toFixed(1)),
    });
  }
  return products;
};
