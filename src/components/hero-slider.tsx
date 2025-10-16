
'use client';

import { HeroSliderScript, type Slide } from './ui/HeroSliderScript';

const defaultSlides: Slide[] = [
  {
    name: ['Blue', 'Dream'],
    color: '#3E82C4',
    image: 'https://images.pexels.com/photos/7773109/pexels-photo-7773109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['24%', 'Sativa', 'Berry', 'Uplifting', '0.2%'],
    dataLabels: ['THC', 'Type', 'Aroma', 'Effect', 'CBD'],
  },
  {
    name: ['OG', 'Kush'],
    color: '#4B8F8C',
    image: 'https://images.pexels.com/photos/7667739/pexels-photo-7667739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['22%', 'Hybrid', 'Earthy', 'Relaxing', '0.3%'],
    dataLabels: ['THC', 'Type', 'Aroma', 'Effect', 'CBD'],
  },
  {
    name: ['Sour', 'Diesel'],
    color: '#A0B35D',
    image: 'https://images.pexels.com/photos/8139067/pexels-photo-8139067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['26%', 'Sativa', 'Diesel', 'Energizing', '0.1%'],
    dataLabels: ['THC', 'Type', 'Aroma', 'Effect', 'CBD'],
  },
  {
    name: ['GSC', 'Pre-roll'],
    color: '#D88A8A',
    image: 'https://images.pexels.com/photos/7667727/pexels-photo-7667727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    data: ['20%', 'Indica', 'Sweet', 'Calming', '0.5%'],
    dataLabels: ['THC', 'Type', 'Aroma', 'Effect', 'CBD'],
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
          alt="Cannabis Product"
          data-ai-hint="cannabis flower"
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
