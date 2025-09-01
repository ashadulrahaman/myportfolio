import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Testimonial } from '../types';
import { Icon } from './Icon';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startSlider = useCallback(() => {
    stopSlider(); // Ensure no multiple intervals are running
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  }, [testimonials.length]);

  const stopSlider = useCallback(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        startSlider();
        observer.unobserve(entry.target);
      } else {
        stopSlider();
      }
    }, { threshold: 0.1 });

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      stopSlider();
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startSlider, stopSlider]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    // Reset interval on manual navigation
    startSlider();
  };
  
  const goToPrev = () => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => goToSlide((currentIndex + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-slate-800 text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-4">
            <Icon path="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.16c-1.152.05-2.095.988-2.095 2.146v.337c0 .53-.43.96-.96.96H8.96c-.53 0-.96-.43-.96-.96v-.337c0-1.158-.943-2.096-2.095-2.146l-3.72-.16c-1.133-.093-1.98-.95-1.98-2.093v-4.286c0-.97.616-1.813 1.5-2.097v-.034c.884-.284 1.5-1.128 1.5-2.097V5.592c0-1.136.847-2.1 1.98-2.193l3.72-.16c1.152-.05 2.095-.988 2.095-2.146V.96c0-.53.43-.96.96-.96h2.08c.53 0 .96.43.96.96v.337c0 1.158.943 2.096 2.095 2.146l3.72.16c1.133.093 1.98.95 1.98 2.093v4.286c0 .97-.616 1.813-1.5 2.097v.034Z" className="w-10 h-10 text-amber-400"/>
            <h2 className="text-3xl font-extrabold sm:text-4xl">What Clients Say</h2>
          </div>
          <p className="mt-4 text-lg text-slate-300">Real stories from those I've had the privilege to represent.</p>
        </div>
        <div 
          className="max-w-4xl mx-auto relative h-80 md:h-64"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={index !== currentIndex}
            >
              <blockquote className="bg-slate-900/50 p-8 rounded-lg shadow-lg max-w-3xl">
                <p className="text-slate-200 italic mb-6 text-center text-lg">"{testimonial.quote}"</p>
                <footer className="text-center">
                  <cite className="font-bold text-amber-400 not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-slate-400">{testimonial.relation}</p>
                </footer>
              </blockquote>
            </div>
          ))}
          <button onClick={goToPrev} className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300" aria-label="Previous testimonial">
            <Icon path="M15.75 19.5 8.25 12l7.5-7.5" className="w-6 h-6 text-white" />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300" aria-label="Next testimonial">
            <Icon path="M8.25 4.5 15.75 12l-7.5 7.5" className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-amber-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};