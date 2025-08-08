import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { properties } from '../data/mockData';
import { Property, Amenity } from '../types';
import StarRating from '../components/StarRating';
import ImageSlider from '../components/ImageSlider';
import { AmenityIcons } from '../constants';
import NotFoundPage from './NotFoundPage';
import PropertyCard from '../components/PropertyCard';
import PropertyDescription from '../components/PropertyDescription';
import ShareButton from '../components/ShareButton';

const AmenityBadge: React.FC<{ amenity: Amenity }> = ({ amenity }) => (
    <div className="flex items-center space-x-3 bg-bg-light p-3 rounded-lg">
      <span className="text-primary">{AmenityIcons[amenity]}</span>
      <span className="text-black">{amenity}</span>
    </div>
);

const PropertyPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  const property: Property | undefined = properties.find(p => p.id === id && p.type === type);

  useEffect(() => {
    if (property) {
      document.title = `${property.name} - MealVilla`;
      // You could also update meta description tags here
    }
  }, [property]);

  useEffect(() => {
    if (property?.instagramReelEmbed && (window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
    }
  }, [property?.id, property?.instagramReelEmbed]);
  
  const relatedProperties = useMemo(() => {
    if (!property) return [];
    
    return properties
      .filter(p => p.destination === property.destination && p.id !== property.id)
      .sort(() => 0.5 - Math.random()) // Shuffle to show different properties
      .slice(0, 3);
  }, [property]);

  if (!property) {
    return <NotFoundPage />;
  }
  
  const textForWhatsapp = property.whatsappMessage || `Hi! I'm interested in booking ${property.name}.`;
  const whatsappLink = `https://wa.me/${property.contactPhone}?text=${encodeURIComponent(textForWhatsapp)}`;
  const mapUrl = property.mapEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <button onClick={() => navigate(-1)} className="mb-8 inline-flex items-center text-primary hover:text-primary-dark transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          Back to listings
        </button>

        <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-black mb-2">{property.name}</h1>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-text-muted">
                    <div className="flex items-center gap-1">
                        <StarRating rating={property.rating} />
                        <span className="font-bold text-black">{property.rating.toFixed(1)}</span>
                    </div>
                    <span>·</span>
                    <span className="underline">{property.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShareButton property={property} />
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-3">
            <ImageSlider images={property.images} alt={property.name} />

            <div className="mt-12 pt-8 border-t border-gray-200">
                <PropertyDescription description={property.description} />
            </div>

            {/* Instagram Reel Embed */}
            {property.instagramReelEmbed && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-black mb-6 text-center">Take a Video Tour!</h3>
                    <div 
                        className="flex justify-center"
                        dangerouslySetInnerHTML={{ __html: property.instagramReelEmbed }} 
                    />
                </div>
            )}
          </div>

          {/* Right Column: Booking & Amenities */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 sticky top-28">
              <p className="text-3xl font-bold text-accent mb-4">
                ₹{property.pricePerNight.toLocaleString('en-IN')}
                <span className="text-base font-normal text-text-muted">
                  /night{property.priceSuffix ? ` ${property.priceSuffix}` : ''}
                </span>
              </p>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-accent text-white font-bold py-4 px-6 rounded-lg text-center text-lg block hover:bg-orange-700 transition-colors duration-300"
              >
                Book on WhatsApp
              </a>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-black mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map(amenity => (
                    <AmenityBadge key={amenity} amenity={amenity} />
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-black mb-4">Location</h3>
                <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                  <iframe
                    className="w-full h-full"
                    title={`Map of ${property.name}`}
                    src={mapUrl}
                    frameBorder="0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties Section */}
        {relatedProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif text-primary">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProperties.map(relatedProperty => (
                <PropertyCard key={relatedProperty.id} property={relatedProperty} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyPage;