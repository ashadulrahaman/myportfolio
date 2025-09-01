import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url('/Hero-banner.jpeg')` }} // Use relative path from public folder
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-60"></div>
      <div className="relative z-10 p-8 max-w-3xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-md [animation-delay:200ms]">
          Ashadul Rahaman
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-200 font-light drop-shadow-md [animation-delay:400ms]">
          Criminal Lawyer at Calcutta High Court
        </p>
        <a
          href="https://wa.me/9775011207"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg [animation-delay:600ms]"
        >
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.81L2 22L7.33 20.59C8.75 21.39 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.63C16.56 3.63 20.32 7.39 20.32 11.91C20.32 16.43 16.56 20.19 12.04 20.19C10.49 20.19 9 19.78 7.74 19.05L7.25 18.78L4.85 19.45L5.53 17.11L5.24 16.61C4.44 15.21 3.76 13.59 3.76 11.91C3.76 7.39 7.52 3.63 12.04 3.63M9.88 7.21C9.68 7.21 9.51 7.26 9.34 7.59C9.18 7.92 8.5 9.53 8.5 10.76C8.5 11.99 9.36 13.11 9.53 13.28C9.7 13.45 10.87 15.22 12.67 15.98C14.48 16.74 15.04 16.54 15.42 16.5C15.8 16.46 16.93 15.8 17.15 15.11C17.37 14.42 17.37 13.86 17.29 13.73C17.21 13.6 17.04 13.54 16.78 13.41C16.52 13.28 15.42 12.75 15.19 12.65C14.96 12.55 14.81 12.5 14.65 12.83C14.49 13.16 13.98 13.79 13.83 13.96C13.68 14.13 13.53 14.17 13.27 14.04C13.01 13.91 12.06 13.59 10.91 12.59C10.01 11.83 9.42 10.9 9.27 10.64C9.12 10.38 9.24 10.25 9.37 10.12C9.48 10.01 9.62 9.83 9.77 9.67C9.92 9.51 9.97 9.41 10.12 9.15C10.27 8.89 10.22 8.7 10.15 8.57C10.08 8.44 9.88 7.21 9.88 7.21Z" />
          </svg>
          Request a Consultation
        </a>
        <div className="mt-8 flex justify-center space-x-6 animate-fade-in-up [animation-delay:800ms]">
          <a href="https://www.linkedin.com/in/ashadulrahaman" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.instagram.com/iam_ashadul?igsh=MWRtM2Rwendsc25sdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
            <span className="sr-only">Instagram</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
            </svg>
          </a>
           <a href="https://www.facebook.com/share/1BSGv6FvLf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
            <span className="sr-only">Facebook</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm2.25 10.12h-1.62v4.84h-2.24v-4.84H9v-1.89h1.39V9.1c0-1.1.48-2.31 2.31-2.31h1.5v1.89h-.94c-.31 0-.69.16-.69.72v1.37h1.63l-.21 1.89z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
