"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/public/hero-products.jpg';

interface Slide {
  id: number;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: 'NEW',
    title: 'OIL CONTROL',
    subtitle: 'BALANCING SHAMPOO & CONDITIONER',
    description: '72HR OIL BALANCE WITH REFRESHED ROOTS & HYDRATED HAIR*',
    cta: 'EXPLORE NOW',
    ctaLink: '#products',
    image: heroImage.src,
  },
  {
    id: 2,
    title: '72HR HYDRATION',
    subtitle: 'AND A STRENGTHENED SKIN BARRIER',
    description: 'IN JUST 15MIN',
    cta: 'EXPLORE NOW',
    ctaLink: '#products',
    image: heroImage.src,
  },
  {
    id: 3,
    title: 'SKIN RENEWING',
    subtitle: 'BRIGHTENING LOTION WITH SPF 30',
    description: 'Helps Correct the look of Dark Spots for a more even skin tone',
    cta: 'BUY ONLINE',
    ctaLink: '#products',
    image: heroImage.src,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative pt-32 md:pt-40">
      {/* Hero Carousel */}
      <div className="relative h-[500px] md:h-[600px] bg-primary overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="container-wide h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                {/* Content */}
                <div className="text-primary-foreground space-y-4 md:space-y-6 z-10">
                  {slide.badge && (
                    <span className="inline-block font-display text-sm tracking-[0.3em] uppercase">
                      {slide.badge}
                    </span>
                  )}
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-none">
                    {slide.title}
                  </h1>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest uppercase">
                    {slide.subtitle}
                  </h2>
                  <p className="font-display text-sm md:text-base tracking-[0.2em] uppercase opacity-90">
                    {slide.description}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="btn-white inline-block mt-4"
                  >
                    {slide.cta}
                  </a>
                  <p className="font-body text-xs opacity-70 mt-4">
                    *In a consumer test. Cleanses to remove excess oil so that the scalp feels not too oily, not too dry
                  </p>
                </div>

                {/* Image */}
                <div className="hidden lg:flex justify-end items-center">
                  <img
                    src={slide.image}
                    alt="Lyra skincare products"
                    className="max-h-[450px] object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-primary-foreground" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="text-primary-foreground" size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-primary-foreground'
                  : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scrolling benefit ticker */}
      <div className="bg-cerave-light-blue py-3 overflow-hidden">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="font-display text-sm text-primary font-medium px-6">Developed With Dermatologists</span>
                <span className="text-primary/50">|</span>
                <span className="font-display text-sm text-primary font-medium px-6">Gentle On All Skin-Types</span>
                <span className="text-primary/50">|</span>
                <span className="font-display text-sm text-primary font-medium px-6">Made With 3 Essential Ceramides</span>
                <span className="text-primary/50">|</span>
                <span className="font-display text-sm text-primary font-medium px-6">Fragrance Free</span>
                <span className="text-primary/50">|</span>
                <span className="font-display text-sm text-primary font-medium px-6">Developed With Dermatologists</span>
                <span className="text-primary/50">|</span>
                <span className="font-display text-sm text-primary font-medium px-6">Gentle On All Skin-Types</span>
                <span className="text-primary/50">|</span>
                <span className="font-display text-sm text-primary font-medium px-6">Made With 3 Essential Ceramides</span>
                <span className="text-primary/50">|</span>
                <span className="font-display text-sm text-primary font-medium px-6">Fragrance Free</span>
                <span className="text-primary/50">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;