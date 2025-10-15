
import type { Product } from "@/types/product";

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

export const categories = [
    { name: 'Foundation', hint: 'foundation makeup', image: 'https://picsum.photos/seed/foundation/400/400' },
    { name: 'Lipstick', hint: 'lipstick tube', image: 'https://picsum.photos/seed/lipstick/400/400' },
    { name: 'Blush', hint: 'blush powder', image: 'https://picsum.photos/seed/blush/400/400' },
    { name: 'Concealer', hint: 'concealer stick', image: 'https://picsum.photos/seed/concealer/400/400' },
    { name: 'Eyeliner', hint: 'eyeliner pencil', image: 'https://picsum.photos/seed/eyeliner/400/400' },
    { name: 'Mascara', hint: 'mascara wand', image: 'https://picsum.photos/seed/mascara/400/400' },
    { name: 'Brushes', hint: 'makeup brushes', image: 'https://picsum.photos/seed/brushes/400/400' },
    { name: 'Yoga', hint: 'yoga pose', image: 'https://picsum.photos/seed/yoga/400/400' },
    { name: 'Health', hint: 'healthy food', image: 'https://picsum.photos/seed/health/400/400' },
    { name: 'Dieting', hint: 'fresh salad', image: 'https://picsum.photos/seed/dieting/400/400' },
    { name: 'Relaxation', hint: 'calm meditation', image: 'https://picsum.photos/seed/relaxation/400/400' },
    { name: 'Shoes', hint: 'stylish shoes', image: 'https://picsum.photos/seed/shoes/400_400' },
    { name: 'Dresses', hint: 'elegant dress', image: 'https://picsum.photos/seed/dresses/400/400' },
    { name: 'Skirts', hint: 'flowing skirt', image: 'https://picsum.photos/seed/skirts/400/400' },
    { name: 'Accessories', hint: 'fashion accessories', image: 'https://picsum.photos/seed/accessories/400/400' },
    { name: 'Women\'s Health', hint: 'woman meditating', image: 'https://picsum.photos/seed/womenshealth/400/400' },
    { name: 'Self Love', hint: 'happy person', image: 'https://picsum.photos/seed/selflove/400/400' },
    { name: 'Career', hint: 'professional woman', image: 'https://picsum.photos/seed/career/400/400' },
    { name: 'Motherhood', hint: 'mother child', image: 'https://picsum.photos/seed/motherhood/400/400' },
];


export const generateProducts = (category: { name: string, hint: string, image: string }, count: number): Product[] => {
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

