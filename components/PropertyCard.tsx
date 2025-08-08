import React from 'react';
import { Link } from 'react-router-dom';
import { Property, PropertyType } from '../types';
import StarRating from './StarRating';

interface PropertyCardProps {
  property: Property;
}

const typeColors: Record<PropertyType, string> = {
  [PropertyType.Hotel]: 'bg-blue-500',
  [PropertyType.Resort]: 'bg-teal-500',
  [PropertyType.Villa]: 'bg-purple-500',
  [PropertyType.Homestay]: 'bg-orange-500',
  [PropertyType.Apartment]: 'bg-green-500',
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
      <Link to={`/property/${property.type}/${property.id}`} className="block">
        <div className="relative">
          <img className="w-full h-56 object-cover" src={property.thumbnail} alt={property.name} />
          <div className={`absolute top-0 right-0 mt-2 mr-2 px-2 py-1 text-xs font-bold text-white rounded ${typeColors[property.type]}`}>
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </div>
        </div>
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-black mb-1">{property.name}</h3>
        <p className="text-sm text-text-muted mb-2">{property.location}</p>
        <div className="flex items-center mb-4">
          <StarRating rating={property.rating} />
          <span className="text-text-muted text-xs ml-2">{property.rating.toFixed(1)} stars</span>
        </div>
        <p className="text-text-muted text-sm flex-grow">{property.description.substring(0, 100)}...</p>
        <div className="mt-auto pt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-accent">₹{property.pricePerNight.toLocaleString('en-IN')}<span className="text-sm font-normal text-text-muted">/night{property.priceSuffix ? ` ${property.priceSuffix}` : ''}</span></p>
          <Link to={`/property/${property.type}/${property.id}`} className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;