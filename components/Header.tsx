
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { destinations } from '../data/mockData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const navLinkClasses = "block lg:inline-block py-2 px-4 text-white hover:text-accent transition-colors duration-300";
  const activeLinkClasses = "text-accent font-bold";

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-serif text-white">
          MealVilla.com
        </Link>
        <div className="hidden lg:flex items-center space-x-2">
          <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Home</NavLink>
          <NavLink to="/properties" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>All Properties</NavLink>
          <div className="relative" onMouseEnter={() => setIsDestinationsOpen(true)} onMouseLeave={() => setIsDestinationsOpen(false)}>
            <button className={`${navLinkClasses} flex items-center`}>
              Destinations
              <svg className={`w-4 h-4 ml-1 transform transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isDestinationsOpen && (
              <div className="absolute top-full left-0 mt-1 bg-primary rounded-md shadow-xl py-2 w-48">
                {destinations.map(dest => (
                  <NavLink key={dest.id} to={`/destination/${dest.id}`} className={({ isActive }) => `block px-4 py-2 text-sm text-white hover:bg-primary-dark hover:text-accent ${isActive ? activeLinkClasses : ''}`}>
                    {dest.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact</NavLink>
          <Link to="/list-your-property" className="ml-4 bg-accent text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
            List Your Property
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary">
          <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/properties" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>All Properties</NavLink>
          <div className="relative">
             <button onClick={() => setIsDestinationsOpen(!isDestinationsOpen)} className={`${navLinkClasses} w-full text-left flex justify-between items-center`}>
              Destinations
              <svg className={`w-4 h-4 ml-1 transform transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isDestinationsOpen && (
               <div className="pl-4">
               {destinations.map(dest => (
                  <NavLink key={dest.id} to={`/destination/${dest.id}`} className={({ isActive }) => `block px-4 py-2 text-sm text-white hover:bg-primary-dark hover:text-accent ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>
                    {dest.name}
                  </NavLink>
                ))}
                </div>
            )}
          </div>
          <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <Link to="/list-your-property" className="block w-full text-center bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-orange-700 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              List Your Property
            </Link>
        </div>
      )}
    </header>
  );
};

export default Header;