import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    useEffect(() => {
        document.title = '404 Not Found - MealVilla';
    }, []);

  return (
    <div className="bg-bg-light flex items-center justify-center h-[calc(100vh-150px)]">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200 tracking-widest">404</h1>
        <div className="bg-accent text-white px-2 text-sm rounded rotate-12 absolute -translate-x-1/2 -translate-y-1/2 ml-4">
          Page Not Found
        </div>
        <p className="text-2xl md:text-3xl font-bold text-black mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-text-muted mt-4 mb-8">
          You may have mistyped the address or the page may have moved.
        </p>
        <Link 
          to="/"
          className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;