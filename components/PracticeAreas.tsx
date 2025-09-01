import React, { useState, useEffect, useRef } from 'react';
import type { PracticeArea } from '../types';
import { Icon } from './Icon';

interface PracticeAreasProps {
  areas: PracticeArea[];
}

const PracticeAreaCard: React.FC<PracticeArea & { index: number; isVisible: boolean }> = ({ icon, title, description, index, isVisible }) => (
  <div 
    className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ease-in-out group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <div className="text-amber-500 mb-4 w-12 h-12 transition-colors duration-300 group-hover:text-amber-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);


export const PracticeAreas: React.FC<PracticeAreasProps> = ({ areas }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Swap Criminal Defence and Family Law cards
  const swappedAreas = [...areas];
  const criminalIdx = swappedAreas.findIndex(a => a.title === "Criminal Defence");
  const familyIdx = swappedAreas.findIndex(a => a.title === "Family Law");
  if (criminalIdx !== -1 && familyIdx !== -1) {
    // Swap positions
    [swappedAreas[criminalIdx], swappedAreas[familyIdx]] = [swappedAreas[familyIdx], swappedAreas[criminalIdx]];
    // Change Family Law heading
    swappedAreas[criminalIdx].title = "Family & Personal Law";
  }

  return (
    <section id="practice-areas" className="py-24 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-4">
            <Icon path="M12.928 2.33a.75.75 0 0 0-1.033-.216l-8.25 5.5a.75.75 0 0 0-.445.686v.293c0 .351.226.668.555.733l1.5.3V15a3 3 0 0 0 3 3h4.5a3 3 0 0 0 3-3V9.332l1.5-.3a.75.75 0 0 0 .555-.733v-.293a.75.75 0 0 0-.445-.686l-8.25-5.5Z M5.25 8.355l6-4 6 4v.293l-6 1.2-6-1.2V8.355Z M17.25 15a1.5 1.5 0 0 1-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5V9.895l3.75.75a.75.75 0 0 0 .5-.001l3.75-.75v5.106Z" className="w-10 h-10 text-amber-500"/>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Practice Areas
            </h2>
          </div>
          <p className="mt-4 text-lg text-slate-600">
            Providing expert legal counsel across a range of specialties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {swappedAreas.map((area, index) => (
            <PracticeAreaCard key={index} {...area} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};