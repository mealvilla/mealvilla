
import React, { useState, useMemo, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/mockData';
import { PropertyType, Amenity } from '../types';
import StarRating from '../components/StarRating';

const AllPropertiesPage: React.FC = () => {
    useEffect(() => {
        document.title = 'All Properties - MealVilla';
    }, []);
    
    // State for filters and sorting
    const [ratingFilter, setRatingFilter] = useState<number>(0);
    const [priceFilter, setPriceFilter] = useState<number>(80000);
    const [typeFilters, setTypeFilters] = useState<Set<PropertyType>>(new Set());
    const [amenityFilters, setAmenityFilters] = useState<Set<Amenity>>(new Set());
    const [sortOrder, setSortOrder] = useState<'price_asc' | 'price_desc' | 'rating_desc'>('rating_desc');

    // Handlers for updating filters
    const handleTypeFilterChange = (type: PropertyType) => {
        setTypeFilters(prev => {
            const newSet = new Set(prev);
            if (newSet.has(type)) {
                newSet.delete(type);
            } else {
                newSet.add(type);
            }
            return newSet;
        });
    };

    const handleAmenityFilterChange = (amenity: Amenity) => {
        setAmenityFilters(prev => {
            const newSet = new Set(prev);
            if (newSet.has(amenity)) {
                newSet.delete(amenity);
            } else {
                newSet.add(amenity);
            }
            return newSet;
        });
    };

    // Memoized filtering and sorting logic
    const filteredProperties = useMemo(() => {
        let props = [...properties];

        props = props.filter(p => p.rating >= ratingFilter);
        props = props.filter(p => p.pricePerNight <= priceFilter);

        if (typeFilters.size > 0) {
            props = props.filter(p => typeFilters.has(p.type));
        }

        if (amenityFilters.size > 0) {
            props = props.filter(p => [...amenityFilters].every(amenity => p.amenities.includes(amenity)));
        }

        switch (sortOrder) {
            case 'price_asc':
                props.sort((a, b) => a.pricePerNight - b.pricePerNight);
                break;
            case 'price_desc':
                props.sort((a, b) => b.pricePerNight - a.pricePerNight);
                break;
            case 'rating_desc':
            default:
                props.sort((a, b) => b.rating - a.rating);
                break;
        }

        return props;
    }, [ratingFilter, priceFilter, typeFilters, amenityFilters, sortOrder]);

    const allAmenities: Amenity[] = Object.values(Amenity);

    return (
        <div className="bg-bg-light py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Explore Our Stays</h1>
                    <p className="text-lg text-text-muted mt-4">Find the perfect accommodation from our entire collection.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-1/4">
                        <div className="bg-white p-6 rounded-lg shadow-lg sticky top-28">
                            <h3 className="text-xl font-bold text-black mb-4 border-b border-gray-200 pb-2">Filter & Sort</h3>
                            {/* Rating Filter */}
                            <div className="mb-6">
                                <label className="block text-black font-semibold mb-2">Minimum Rating</label>
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <button key={star} onClick={() => setRatingFilter(star)} className={`p-1 rounded ${ratingFilter >= star ? 'bg-yellow-500' : 'bg-gray-200'}`}>
                                            <StarRating rating={star} maxStars={1} />
                                        </button>
                                    ))}
                                </div>
                                {ratingFilter > 0 && <button onClick={() => setRatingFilter(0)} className="text-xs text-primary hover:underline mt-2">Clear</button>}
                            </div>
                            {/* Price Filter */}
                            <div className="mb-6">
                                <label htmlFor="price" className="block text-black font-semibold mb-2">Max Price: <span className="text-primary">₹{priceFilter.toLocaleString('en-IN')}</span></label>
                                <input type="range" id="price" min="4000" max="80000" step="1000" value={priceFilter} onChange={e => setPriceFilter(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                            </div>
                            {/* Type Filter */}
                            <div className="mb-6">
                                <h4 className="text-black font-semibold mb-2">Property Type</h4>
                                <div className="space-y-2">
                                    {Object.values(PropertyType).map(type => (
                                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                            <input type="checkbox" checked={typeFilters.has(type)} onChange={() => handleTypeFilterChange(type)} className="w-4 h-4 rounded text-primary bg-gray-100 border-gray-300 focus:ring-primary"/>
                                            <span className="text-black capitalize">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            {/* Amenities Filter */}
                            <div className="mb-6">
                                <h4 className="text-black font-semibold mb-2">Amenities</h4>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {allAmenities.map(amenity => (
                                        <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                                            <input type="checkbox" checked={amenityFilters.has(amenity)} onChange={() => handleAmenityFilterChange(amenity)} className="w-4 h-4 rounded text-primary bg-gray-100 border-gray-300 focus:ring-primary"/>
                                            <span className="text-black text-sm">{amenity}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            {/* Sort Order */}
                            <div>
                                <label htmlFor="sort" className="block text-black font-semibold mb-2">Sort By</label>
                                <select id="sort" value={sortOrder} onChange={e => setSortOrder(e.target.value as any)} className="w-full p-2 rounded bg-bg-light border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option value="rating_desc">Rating: High to Low</option>
                                    <option value="price_asc">Price: Low to High</option>
                                    <option value="price_desc">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </aside>

                    {/* Property Grid */}
                    <main className="lg:w-3/4">
                        {filteredProperties.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {filteredProperties.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-black">No Properties Found</h3>
                                <p className="text-text-muted mt-2">Try adjusting your filters to find your perfect stay.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AllPropertiesPage;
