// Fix: Add missing import for React.
import React from 'react';

export interface PracticeArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  author: string;
  relation?: string;
  quote: string;
  rating?: number; // added
  // ...existing fields like id/created_at if present...
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
