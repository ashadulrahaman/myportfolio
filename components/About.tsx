import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';

export const About: React.FC = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className={`py-24 bg-white transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4">
            <Icon path="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75a17.933 17.933 0 0 1-7.499-1.632Z" className="w-10 h-10 text-amber-500"/>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              About Me
            </h2>
          </div>
          <p className="mt-4 text-lg text-slate-600">
            Committed to Justice, Driven by Integrity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/profile.jpeg"
              alt="Ashadul Rahaman" 
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              I am <b>Ashadul Rahaman</b>, a B.Sc LL.B graduate from Kingston Law College, West Bengal State University, India. An optimist and a doer, I am driven to learn new skills, gain knowledge, and apply them effectively in practice.
              </p>
            <p>
              Through internships with various organizations, I have gained valuable experience in the legal field, particularly in criminal law. I have also completed specialized courses in <b>Criminal Litigation Practice & Drafting</b> at Bettering Results, instructed by <b>Mr. Ashish Dixit</b> (Criminal Lawyer & Central Government Standing Counsel, Delhi High Court) and <b>Ms. Shriya Maini</b> (Advocate on Record, Supreme Court), as well as the Criminal Litigation Program at LawSikho, led by Ramanuj Mukherjee (CEO) and Abhyuday Agarwal (COO).
              </p>
            <p>
              These experiences have provided me with a strong foundation in litigation and legal drafting, preparing me to build a successful career in the legal profession.
              </p>
            <h3 className="text-2xl font-bold text-slate-800 font-serif mb-3">Education</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>LL.B, Kingston Law College, West Bengal State University</li>
              <li>B.Sc in Mathematics Honours, Kalyani University</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};