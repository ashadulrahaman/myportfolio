// Fix: Add missing import for React.
import React from 'react';

export interface PracticeArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  relation: string;
}

export interface Certification {
  logoUrl: string;
  name: string;
}

export interface GalleryItem {
  imageUrl: string;
  title: string;
  description: string;
}
