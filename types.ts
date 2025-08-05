
export enum PropertyType {
  Hotel = 'hotel',
  Resort = 'resort',
  Villa = 'villa',
  Homestay = 'homestay',
}

export enum Amenity {
  WiFi = 'WiFi',
  Pool = 'Pool',
  AirConditioning = 'Air Conditioning',
  Parking = 'Parking',
  Gym = 'Gym',
  Spa = 'Spa',
  Restaurant = 'Restaurant',
  PetFriendly = 'Pet Friendly',
}

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  rating: number;
  location: string;
  destination: string;
  pricePerNight: number;
  description: string;
  amenities: Amenity[];
  images: string[];
  thumbnail: string;
  contactPhone: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  avatar: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}