import React, { useEffect } from 'react';
import { SocialIcons } from '../constants';

const ContactPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Contact Us - MealVilla';
    }, []);

  return (
    <div className="bg-bg-light py-20">
      <div className="container mx-auto px-6">
        <section className="text-black body-font relative">
          <div className="absolute inset-0 bg-bg-light">
            <div className="w-full h-full bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/contact-bg/1200/800')"}}></div>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-primary text-lg mb-1 font-medium title-font">Get in Touch</h2>
              <p className="leading-relaxed mb-5 text-text-muted">Have a question or a suggestion? Drop us a line! We'd love to hear from you.</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-text-muted">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-bg-light rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-text-muted">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-bg-light rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-text-muted">Message</label>
                <textarea id="message" name="message" className="w-full bg-bg-light rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-dark rounded text-lg font-bold">Send Message</button>
              <p className="text-xs text-text-muted mt-3">We typically respond within 24 hours.</p>
               <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-gray-200">
                <a className="text-text-muted hover:text-primary" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    {SocialIcons.Facebook}
                </a>
                <a className="text-text-muted hover:text-primary" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    {SocialIcons.Twitter}
                </a>
                <a className="text-text-muted hover:text-primary" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    {SocialIcons.Instagram}
                </a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;