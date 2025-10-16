
import type { Product } from "@/types/product";
import { generateProducts, categories, realImageUrls } from './product-generator';

export { categories, realImageUrls };

export const allProducts: Record<string, Product[]> = categories.reduce((acc, category) => {
  acc[category.name] = generateProducts(category, 15);
  return acc;
}, {} as Record<string, Product[]>);


export const allProductsFlat: Product[] = Object.values(allProducts).flat();

export const foundationProducts: Product[] = [
    {
        id: 'estee-lauder-double-wear',
        name: 'Double Wear Stay-in-Place Foundation',
        category: 'Foundation',
        description: 'Estée Lauder’s signature, long-wear, full-coverage liquid foundation.',
        image: 'https://picsum.photos/seed/foundation1/400/400',
        hint: 'foundation bottle'
    },
    {
        id: 'estee-lauder-double-wear-sheer',
        name: 'Double Wear Sheer Long-Wear Foundation SPF 19',
        category: 'Foundation',
        description: 'A more sheer / lightweight version in the Double Wear family.',
        image: 'https://picsum.photos/seed/foundation2/400/400',
        hint: 'foundation bottle'
    },
    {
        id: 'estee-lauder-futurist-hydra',
        name: 'Futurist Hydra Rescue Moisturizing Makeup SPF 45',
        category: 'Foundation',
        description: 'A more hydrating, skin-care-forward formula (with SPF 45).',
        image: 'https://picsum.photos/seed/foundation3/400/400',
        hint: 'foundation bottle'
    },
    {
        id: 'estee-lauder-futurist-skintint',
        name: 'Futurist SkinTint Serum Foundation SPF 20',
        category: 'Foundation',
        description: 'Very light / “skin tint” category, bridging makeup + skincare.',
        image: 'https://picsum.photos/seed/foundation4/400/400',
        hint: 'serum bottle'
    },
    {
        id: 'estee-lauder-double-wear-max-cover',
        name: 'Double Wear Maximum Cover Camouflage Makeup',
        category: 'Foundation',
        description: 'Heavier, more camouflaging formula for face & body with long wear.',
        image: 'https://picsum.photos/seed/foundation5/400/400',
        hint: 'foundation tube'
    },
    {
        id: 'estee-lauder-double-wear-cushion',
        name: 'Double Wear Soft Glow Matte Cushion Makeup',
        category: 'Foundation',
        description: 'Cushion format version in the Double Wear line (matte / soft glow).',
        image: 'https://picsum.photos/seed/foundation6/400/400',
        hint: 'cushion compact'
    },
    {
        id: 'estee-lauder-double-wear-powder',
        name: 'Double Wear Stay-in-Place Matte Powder Foundation',
        category: 'Foundation',
        description: 'Powder foundation option under the “Double Wear / stay-in-place” concept.',
        image: 'https://picsum.photos/seed/foundation7/400/400',
        hint: 'powder compact'
    },
    {
        id: 'estee-lauder-renutriv-radiance',
        name: 'Re-Nutriv Ultra Radiance Liquid Foundation',
        category: 'Foundation',
        description: 'From Estée Lauder’s premium “Re-Nutriv” / luxury line, with radiance & skincare elements.',
        image: 'https://picsum.photos/seed/foundation8/400/400',
        hint: 'luxury foundation'
    }
];
