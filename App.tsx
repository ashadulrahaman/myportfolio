
import React from 'react';
import type { PracticeArea, Testimonial, Certification, GalleryItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { PracticeAreas } from './components/PracticeAreas';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Icon } from './components/Icon';

const practiceAreasData: PracticeArea[] = [
  {
    icon: <Icon path="M9 4.5a.75.75 0 0 1 .75.75v1.5h4.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a3 3 0 0 1 3 3v9.75a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-9.75a3 3 0 0 1 3-3h1.5v-1.5a.75.75 0 0 1 .75-.75Zm3.75 3h-3a1.5 1.5 0 0 0-1.5 1.5v1.5h6v-1.5a1.5 1.5 0 0 0-1.5-1.5Z" />,
    title: "Criminal Defense",
    description: "Vigorous defense for individuals facing criminal charges. Committed to protecting your rights and securing the best possible outcome."
  },
  {
    icon: <Icon path="M12.512 2.002a.75.75 0 0 0-1.024 0L2.49 9.813A.75.75 0 0 0 3 11.25h1.5v7.5A1.5 1.5 0 0 0 6 20.25h2.25a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 0 .75.75H18a1.5 1.5 0 0 0 1.5-1.5v-7.5H21a.75.75 0 0 0 .51-1.438L12.512 2.002Z" />,
    title: "Family & Personal Law",
    description: "Expert guidance through sensitive family matters including divorce, custody, and adoption with compassion and discretion."
  },
  {
    icon: <Icon path="M10.5 1.875a1.125 1.125 0 0 1 1.866.69l.163.535a.75.75 0 0 0 .565.565l.535.163a1.125 1.125 0 0 1 .69 1.866l-.163.535a.75.75 0 0 0 0 1.13l.163.535a1.125 1.125 0 0 1-.69 1.866l-.535.163a.75.75 0 0 0-.565.565l-.163.535a1.125 1.125 0 0 1-1.866.69l-.163-.535a.75.75 0 0 0-.565-.565l-.535-.163a1.125 1.125 0 0 1-.69-1.866l.163-.535a.75.75 0 0 0 0-1.13l-.163-.535a1.125 1.125 0 0 1 .69-1.866l.535-.163a.75.75 0 0 0 .565-.565l.163-.535Zm-3 0a1.125 1.125 0 0 1 1.866.69l.163.535a.75.75 0 0 0 .565.565l.535.163a1.125 1.125 0 0 1 .69 1.866l-.163.535a.75.75 0 0 0 0 1.13l.163.535a1.125 1.125 0 0 1-.69 1.866l-.535.163a.75.75 0 0 0-.565.565l-.163.535a1.125 1.125 0 0 1-1.866.69l-.163-.535a.75.75 0 0 0-.565-.565l-.535-.163a1.125 1.125 0 0 1-.69-1.866l.163-.535a.75.75 0 0 0 0-1.13l-.163-.535a1.125 1.125 0 0 1 .69-1.866l.535-.163a.75.75 0 0 0 .565-.565l.163-.535Zm-3.02 9.01a1.125 1.125 0 0 1 1.866.69l.163.535a.75.75 0 0 0 .565.565l.535.163a1.125 1.125 0 0 1 .69 1.866l-.163.535a.75.75 0 0 0 0 1.13l.163.535a1.125 1.125 0 0 1-.69 1.866l-.535.163a.75.75 0 0 0-.565.565l-.163.535a1.125 1.125 0 0 1-1.866.69l-.163-.535a.75.75 0 0 0-.565-.565l-.535-.163a1.125 1.125 0 0 1-.69-1.866l.163-.535a.75.75 0 0 0 0-1.13l-.163-.535a1.125 1.125 0 0 1 .69-1.866l.535-.163a.75.75 0 0 0 .565-.565l.163-.535Z" />,
    title: "Corporate Law",
    description: "Strategic counsel for businesses, from startups to established corporations, covering formation, contracts, and compliance."
  }  
];

const testimonialsData: Testimonial[] = [
  {
    quote: "Ashadul Rahaman handles criminal matters including bail matters, anticipatorybail, 498A issues with enormous expertise and vigilance.",
    author: "Mrinal Rahaman",
    relation: "Criminal Defense Client"
  },
  {
    quote: "Ashadul Rahaman is well-equipped to tackle divorce issues.",
    author: "Vishal",
    relation: "Family Law Client"
  },
  {
    quote: "Ashadul Rahaman's professionalism outshines all the other lawyers that I’ve come across.",
    author: "Sourav",
    relation: "Corporate Law Client"
  }
];

const certificationsData: Certification[] = [
  { logoUrl: 'https://picsum.photos/seed/award1/200/100?grayscale', name: 'Super Lawyers 2023' },
  { logoUrl: 'https://picsum.photos/seed/award2/200/100?grayscale', name: 'National Trial Lawyers Top 100' },
  { logoUrl: 'https://picsum.photos/seed/award3/200/100?grayscale', name: 'Avvo Client\'s Choice Award' },
  { logoUrl: 'https://picsum.photos/seed/award4/200/100?grayscale', name: 'Martindale-Hubbell AV Preeminent' },
  { logoUrl: 'https://picsum.photos/seed/award5/200/100?grayscale', name: 'Best Lawyers in America' },
];

const galleryData: GalleryItem[] = [
  { imageUrl: 'https://picsum.photos/seed/gallery1/600/400', title: 'Landmark Corporate Merger Case', description: 'Successfully navigated a complex billion-dollar merger.' },
  { imageUrl: 'https://picsum.photos/seed/gallery2/600/400', title: 'Pro Bono Community Service', description: 'Providing free legal aid at the local community center.' },
  { imageUrl: 'https://picsum.photos/seed/gallery3/600/400', title: 'Supreme Court Appearance', description: 'Arguing a pivotal case before the Supreme Court.' },
  { imageUrl: 'https://picsum.photos/seed/gallery4/600/400', title: 'Firm Expansion 2023', description: 'Opening our new downtown office to better serve clients.' },
  { imageUrl: 'https://picsum.photos/seed/gallery5/600/400', title: 'Annual Legal Conference Keynote', description: 'Invited to speak on the future of intellectual property law.' },
  { imageUrl: 'https://picsum.photos/seed/gallery6/600/400', title: 'Winning a High-Profile Case', description: 'Celebrating a significant victory for our client.' },
];


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Certifications certifications={certificationsData} />
        <PracticeAreas areas={practiceAreasData} />
        <Gallery items={galleryData} />
        <Testimonials testimonials={testimonialsData} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
