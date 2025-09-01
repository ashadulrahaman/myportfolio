import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';

const TOTAL_CERTIFICATES = 7;

export const Certifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImgIdx, setModalImgIdx] = useState<number | null>(null);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL_CERTIFICATES);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animation
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

  // Certificate names (optional, for alt/title)
  const certificateNames = [
    "Certificate 1",
    "Certificate 2",
    "Certificate 3",
    "Certificate 4",
    "Certificate 5",
    "Certificate 6",
    "Certificate 7"
  ];

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalOpen]);

  return (
    <section id="certifications" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-4">
            <Icon path="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z M12 1.5a10.5 10.5 0 1 0 10.5 10.5A10.512 10.512 0 0 0 12 1.5Z" className="w-10 h-10 text-amber-500"/>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Certifications & Awards</h2>
          </div>
          <p className="mt-4 text-lg text-slate-600">Recognized for Excellence and Dedication in Law</p>
        </div>
        {/* Carousel Container */}
        <div className="relative flex justify-center items-center w-full h-[70vh] sm:h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden">
          <div
            className="flex w-full h-full"
            style={{
              width: `calc(100% * ${TOTAL_CERTIFICATES})`,
              transition: 'transform 0.7s cubic-bezier(0.77,0,0.175,1)',
              transform: `translateX(-${current * 100}%)`
            }}
          >
            {[...Array(TOTAL_CERTIFICATES)].map((_, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center"
                style={{ minWidth: '100%', height: '100%' }}
              >
                <img
                  src={`/certificates/c${idx + 1}.jpeg`}
                  alt={certificateNames[idx]}
                  title={certificateNames[idx]}
                  className="w-full h-full object-cover rounded-xl cursor-pointer"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  onClick={() => { setModalOpen(true); setModalImgIdx(idx); }}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {[...Array(TOTAL_CERTIFICATES)].map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full ${current === idx ? 'bg-amber-500' : 'bg-slate-300'} transition-colors`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to certificate ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Fullscreen Modal */}
      {modalOpen && modalImgIdx !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <img
            src={`/certificates/c${modalImgIdx + 1}.jpeg`}
            alt={certificateNames[modalImgIdx]}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
            style={{ objectFit: 'contain' }}
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-4 py-2 hover:bg-opacity-80 transition"
            onClick={() => setModalOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};