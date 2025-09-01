import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';

const TOTAL_IMAGES = 18;
const IMAGES_PER_SLIDE = 3;

export const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(TOTAL_IMAGES / IMAGES_PER_SLIDE));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Prepare image URLs
  const imageUrls = Array.from({ length: TOTAL_IMAGES }, (_, i) => `/gallery/g${i + 1}.jpeg`);

  // Get images for current slide
  const slideImages = imageUrls.slice(
    currentSlide * IMAGES_PER_SLIDE,
    currentSlide * IMAGES_PER_SLIDE + IMAGES_PER_SLIDE
  );

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-4">
            <Icon path="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm1.5-1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H3.75Z" className="w-10 h-10 text-amber-500"/>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Gallery</h2>
          </div>
        </div>
        {/* Carousel */}
        <div className="relative flex justify-center items-center w-full h-[32rem] bg-white rounded-xl shadow-2xl overflow-hidden">
          <div
            className="flex gap-8"
            style={{
              width: `calc(100% * ${Math.ceil(TOTAL_IMAGES / IMAGES_PER_SLIDE)})`,
              transition: 'transform 0.7s cubic-bezier(0.77,0,0.175,1)',
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {Array.from({ length: Math.ceil(TOTAL_IMAGES / IMAGES_PER_SLIDE) }).map((_, slideIdx) => {
              const slideStart = slideIdx * IMAGES_PER_SLIDE;
              const slideImages = imageUrls.slice(slideStart, slideStart + IMAGES_PER_SLIDE);
              return (
                <div
                  key={slideIdx}
                  className="flex gap-8 justify-center items-center"
                  style={{ minWidth: '100%' }}
                >
                  {slideImages.map((url, idx) => (
                    <div
                      key={idx}
                      className={`overflow-hidden rounded-lg shadow-lg group transition-all duration-700 ease-in-out
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                      `}
                      style={{
                        aspectRatio: '3/4',
                        width: '22vw',
                        maxWidth: '340px',
                        minWidth: '200px',
                        height: 'auto'
                      }}
                    >
                      <img
                        src={url}
                        alt={`Gallery ${slideStart + idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl"
                        style={{ aspectRatio: '3/4' }}
                        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          {/* Carousel Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {Array.from({ length: Math.ceil(TOTAL_IMAGES / IMAGES_PER_SLIDE) }).map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full ${currentSlide === idx ? 'bg-amber-500' : 'bg-slate-300'} transition-colors`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Custom fade-in animation for images */}
      <style>
        {`
          .opacity-100 {
            opacity: 1 !important;
            transition: opacity 0.7s, transform 0.7s;
          }
          .opacity-0 {
            opacity: 0 !important;
            transition: opacity 0.7s, transform 0.7s;
          }
          .scale-100 {
            transform: scale(1) !important;
            transition: transform 0.7s;
          }
          .scale-90 {
            transform: scale(0.9) !important;
            transition: transform 0.7s;
          }
        `}
      </style>
    </section>
  );
};