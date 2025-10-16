
'use client';

import { HeroSlider } from './hero-slider';
import type { Slide } from './ui/HeroSliderScript';

const foundationSlides: Slide[] = [
  {
    name: ['Radiant', 'Glow'],
    color: '#E29578',
    image: 'https://images.pexels.com/photos/3762881/pexels-photo-3762881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['New', 'Foundation', 'Lightweight', 'All Day', 'Matte'],
    dataLabels: ['Tag', 'Type', 'Feel', 'Wear', 'Finish'],
  },
  {
    name: ['Velvet', 'Lips'],
    color: '#D88A8A',
    image: 'https://images.pexels.com/photos/2533618/pexels-photo-2533618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['Best Seller', 'Lipstick', 'Hydrating', 'Vibrant', 'Cruelty-Free'],
    dataLabels: ['Tag', 'Type', 'Feature', 'Color', 'Info'],
  },
  {
    name: ['Natural', 'Beauty'],
    color: '#A4B494',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['Skincare', 'Serum', 'Organic', 'Nourishing', 'Vegan'],
    dataLabels: ['Category', 'Type', 'Benefit', 'Benefit', 'Info'],
  },
  {
    name: ['Bold', 'Lashes'],
    color: '#8C7A6B',
    image: 'https://images.pexels.com/photos/2105453/pexels-photo-2105453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['Volumizing', 'Mascara', 'Long-Lasting', 'No Clumps', 'Waterproof'],
    dataLabels: ['Effect', 'Type', 'Wear', 'Benefit', 'Feature'],
  },
];

export function FoundationHeroSlider() {
  return <HeroSlider slides={foundationSlides} />;
}
