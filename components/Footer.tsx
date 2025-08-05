
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcons } from '../constants';
import { destinations } from '../data/mockData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo and About */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="text-3xl font-serif text-accent">MealVilla.com</span>
          </Link>
          <p className="mt-2 text-sm text-gray-300">
            Curated stays for unforgettable travel experiences.
          </p>
        </div>
        
        {/* Links Grid */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Company Links */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-accent tracking-widest text-sm mb-3">COMPANY</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </nav>
          </div>
          {/* Destinations Links */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-accent tracking-widest text-sm mb-3">DESTINATIONS</h2>
            <nav className="list-none mb-10 space-y-2">
              {destinations.map(dest => (
                <li key={dest.id}><Link to={`/destination/${dest.id}`} className="text-gray-300 hover:text-white transition-colors capitalize">{dest.name}</Link></li>
              ))}
            </nav>
          </div>
           {/* Legal Links */}
           <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-accent tracking-widest text-sm mb-3">LEGAL</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-primary-dark bg-opacity-50">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} MealVilla.com — All Rights Reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-300 hover:text-white transition-colors" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              {SocialIcons.Facebook}
            </a>
            <a className="ml-3 text-gray-300 hover:text-white transition-colors" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              {SocialIcons.Twitter}
            </a>
            <a className="ml-3 text-gray-300 hover:text-white transition-colors" href="https://instagram.com/mealvilla" target="_blank" rel="noopener noreferrer">
              {SocialIcons.Instagram}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;