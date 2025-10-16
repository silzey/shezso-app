
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

export const categories = [
    { name: 'Flower', icon: Flower },
    { name: 'Concentrates', icon: FlaskConical },
    { name: 'Vapes', icon: Bot },
    { name: 'Edibles', icon: Tablet },
    { name: 'Pre-rolls', icon: Cigarette },
    { name: 'Medical', icon: Stethoscope },
    { name: 'Tinctures', icon: Droplets },
    { name: 'Topicals', icon: SprayCan },
    { name: 'Gear', icon: ShoppingBag },
    { name: 'Deals', icon: Tag },
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
