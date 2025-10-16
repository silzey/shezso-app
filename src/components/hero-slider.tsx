
'use client';

import { HeroSliderScript, type Slide } from './ui/HeroSliderScript';

const defaultSlides: Slide[] = [
  {
    name: ['Silky', 'Serum'],
    color: '#E29578',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['Skincare', 'Serum', 'Organic', 'Nourishing', 'Vegan'],
    dataLabels: ['Category', 'Type', 'Benefit', 'Benefit', 'Info'],
  },
  {
    name: ['Radiant', 'Glow'],
    color: '#D88A8A',
    image: 'https://images.pexels.com/photos/3762881/pexels-photo-3762881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['New', 'Foundation', 'Lightweight', 'All Day', 'Matte'],
    dataLabels: ['Tag', 'Type', 'Feel', 'Wear', 'Finish'],
  },
  {
    name: ['Bold', 'Lashes'],
    color: '#8C7A6B',
    image: 'https://images.pexels.com/photos/2105453/pexels-photo-2105453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['Volumizing', 'Mascara', 'Long-Lasting', 'No Clumps', 'Waterproof'],
    dataLabels: ['Effect', 'Type', 'Wear', 'Benefit', 'Feature'],
  },
  {
    name: ['Velvet', 'Lips'],
    color: '#A4B494',
    image: 'https://images.pexels.com/photos/2533618/pexels-photo-2533618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['Best Seller', 'Lipstick', 'Hydrating', 'Vibrant', 'Cruelty-Free'],
    dataLabels: ['Tag', 'Type', 'Feature', 'Color', 'Info'],
  },
];

interface HeroSliderProps {
  slides?: Slide[];
}

export function HeroSlider({ slides = defaultSlides }: HeroSliderProps) {
  const initialSlide = slides[0];

  return (
    <div className="slider-container" style={{background: initialSlide.color}}>
      <div className="content">
        <div className="color-overlay"></div>
        <div className="product-name">
          <span className="word-part first-word">{initialSlide.name[0]}</span>
          <span className="word-part second-word">{initialSlide.name[1]}</span>
        </div>
        <img
          className="product-image"
          src={initialSlide.image}
          alt="Beauty Product or Model"
          data-ai-hint="beauty fashion"
        />
        <div className="data-panel">
          {initialSlide.data.map((value, index) => (
            <div className="data-item" key={index}>
              <div className="data-value">{value}</div>
              <div className="data-label">{initialSlide.dataLabels[index]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        {slides.map((_, index) => (
            <div key={index} className={`control-dot ${index === 0 ? 'active' : ''}`} data-index={index}></div>
        ))}
      </div>
      <HeroSliderScript slides={slides} />
    </div>
  );
}
