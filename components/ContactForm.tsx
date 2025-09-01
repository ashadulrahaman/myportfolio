import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    // Format WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    );

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/919775011207?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

    setStatus('WhatsApp will open in a new tab. Please send your message.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus(''), 7000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className={`py-24 bg-white transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4">
            <Icon path="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" className="w-10 h-10 text-amber-500"/>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Get In Touch
            </h2>
          </div>
          <p className="mt-4 text-lg text-slate-600">
            Ready to discuss your case? Please use the form or contact me directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-amber-500 focus:border-amber-500 border-slate-300 rounded-md" placeholder="Full Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-amber-500 focus:border-amber-500 border-slate-300 rounded-md" placeholder="Email Address" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-amber-500 focus:border-amber-500 border-slate-300 rounded-md" placeholder="Phone Number (Optional)" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-amber-500 focus:border border-slate-300 rounded-md" placeholder="Briefly describe your legal matter..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-slate-900 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-300">
                  Send Message via WhatsApp
                </button>
              </div>
            </form>
            {status && <p className="mt-4 text-center text-green-600">{status}</p>}
          </div>

          <div className="bg-slate-50 p-8 rounded-lg shadow-inner space-y-6 lg:mt-0">
            <h3 className="text-2xl font-bold text-slate-900 font-serif border-b border-slate-300 pb-4">Contact Information</h3>
            <div className="flex items-start space-x-4 text-slate-700">
              <Icon path="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
              <div className="leading-relaxed">
                <p>𝐂𝐚𝐥𝐜𝐮𝐭𝐭𝐚 𝐇𝐢𝐠𝐡 𝐂𝐨𝐮𝐫𝐭, 𝐌𝐚𝐢𝐧 𝐁𝐮𝐢𝐥𝐝𝐢𝐧𝐠,𝟐𝐧𝐝 𝐅𝐥𝐨𝐨𝐫,𝐁𝐚𝐫 𝐀𝐬𝐬𝐨𝐜𝐢𝐚𝐭𝐢𝐨𝐧 𝐑𝐨𝐨𝐦 𝐍𝐨.- 𝟏𝟕</p>
                <p className="mt-2">& 𝐁𝐞𝐫𝐡𝐚𝐦𝐩𝐨𝐫𝐞 𝐃𝐢𝐬𝐭𝐫𝐢𝐜𝐭 𝐂𝐢𝐯𝐢𝐥 𝐚𝐧𝐝 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐂𝐨𝐮𝐫𝐭 𝐌𝐮𝐫𝐬𝐡𝐢𝐝𝐚𝐛𝐚𝐝.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-slate-700">
              <Icon path="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488a2.25 2.25 0 0 1-2.316 0l-6.478-3.488A2.25 2.25 0 0 1 2.25 9.906V9a2.25 2.25 0 0 1 2.25-2.25h15A2.25 2.25 0 0 1 21.75 9Z" className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
              <p>armlegalservice@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4 text-slate-700">
              <Icon path="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <p>(+91)9775011207</p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Disclaimer: Contacting me through this form does not create an attorney-client relationship. Please do not send any confidential information until such a relationship has been established.
        </p>
      </div>
    </section>
  );
};