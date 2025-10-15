
import Image from 'next/image';
import type { Product } from '@/types/product';
import { categories } from '@/lib/products';
import { cn } from '@/lib/utils';

interface CategoryCirclesProps {
  onProductClick: (product: Product) => void;
}

export function CategoryCircles({ onProductClick }: CategoryCirclesProps) {
  const handleClick = (category: typeof categories[0]) => {
    const representativeProduct: Product = {
      id: `cat-${category.name.toLowerCase().replace(/\\s/g, '-')}`,
      name: `Featured ${category.name}`,
      category: category.name,
      description: `A fine selection of our best ${category.name.toLowerCase()}. Click 'View' to explore similar products from this category.`,
      image: category.image,
      hint: category.hint,
    };
    onProductClick(representativeProduct);
  };

  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex px-4 md:px-6 space-x-4 pb-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
                <button
                key={category.name}
                onClick={() => handleClick(category)}
                className="flex flex-col items-center space-y-2 flex-shrink-0 w-28 group text-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                <div className="relative w-[98px] h-[98px] rounded-full liquid-glass flex items-center justify-center">
                    <Icon className="h-12 w-12 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">{category.name}</p>
                </button>
            )
          })}
      </div>
    </div>
  );
}
