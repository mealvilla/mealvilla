import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { properties, testimonials, destinations } from '../data/mockData';

const HomePage: React.FC = () => {
  const featuredProperties = properties.slice(0, 4);

  return (
    <div className="bg-bg-light">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[60vh] md:h-[80vh] flex items-center justify-center text-center" 
        style={{ backgroundImage: `url('https://images.pexels.com/photos/30336520/pexels-photo-30336520.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif mb-4 drop-shadow-lg">Find Your Perfect Stay</h1>
          <p className="text-lg md:text-2xl mb-8 font-light max-w-2xl mx-auto drop-shadow-md">Discover curated hotels, resorts, villas, and homestays for an unforgettable experience.</p>
          <a href="#featured-properties" className="bg-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </a>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="featured-properties" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif text-primary">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Destinations Section */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif text-primary">Popular Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map(dest => (
                    <Link to={`/destination/${dest.id}`} key={dest.id} className="relative rounded-lg overflow-hidden shadow-lg group">
                        <img src={dest.image} alt={dest.name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white font-serif">{dest.name}</h3>
                            <p className="text-gray-200 mt-1">{dest.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif text-primary">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-bg-light p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-accent" />
                <p className="text-text-muted italic mb-4">"{testimonial.comment}"</p>
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-text-muted">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;