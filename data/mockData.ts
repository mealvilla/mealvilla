
import { Property, PropertyType, Amenity, Destination, Testimonial } from '../types';

export const properties: Property[] = [
  {
    id: 'luxury-palace',
    name: 'Luxury Palace Hotel',
    type: PropertyType.Hotel,
    rating: 5,
    location: 'Goa, India',
    destination: 'goa',
    pricePerNight: 28000,
    description: 'Experience unparalleled luxury and service at the heart of Goa. Our hotel offers world-class amenities and breathtaking ocean views, making it the perfect escape.',
    amenities: [Amenity.WiFi, Amenity.Pool, Amenity.Spa, Amenity.Restaurant, Amenity.Gym],
    images: ['https://picsum.photos/seed/luxpalace1/1200/800', 'https://picsum.photos/seed/luxpalace2/1200/800', 'https://picsum.photos/seed/luxpalace3/1200/800'],
    thumbnail: 'https://picsum.photos/seed/luxpalace-thumb/400/300',
    contactPhone: '911234567890'
  },
  {
    id: 'ocean-resort',
    name: 'Ocean Breeze Resort',
    type: PropertyType.Resort,
    rating: 4,
    location: 'Kerala, India',
    destination: 'kerala',
    pricePerNight: 20000,
    description: 'Nestled in the serene backwaters of Kerala, Ocean Breeze Resort is a paradise for nature lovers. Enjoy authentic cuisine and rejuvenating Ayurvedic treatments.',
    amenities: [Amenity.WiFi, Amenity.Pool, Amenity.Spa, Amenity.Restaurant, Amenity.Parking],
    images: ['https://picsum.photos/seed/oceanresort1/1200/800', 'https://picsum.photos/seed/oceanresort2/1200/800', 'https://picsum.photos/seed/oceanresort3/1200/800'],
    thumbnail: 'https://picsum.photos/seed/oceanresort-thumb/400/300',
    contactPhone: '911234567891'
  },
  {
    id: 'goan-serenity-villa',
    name: 'Goan Serenity Villa',
    type: PropertyType.Villa,
    rating: 5,
    location: 'Goa, India',
    destination: 'goa',
    pricePerNight: 42000,
    description: 'An exclusive-use villa offering ultimate privacy, a personal chef, and a stunning private pool. Ideal for families or groups seeking a luxurious, secluded holiday.',
    amenities: [Amenity.WiFi, Amenity.Pool, Amenity.AirConditioning, Amenity.Parking, Amenity.PetFriendly],
    images: ['https://picsum.photos/seed/goanvilla1/1200/800', 'https://picsum.photos/seed/goanvilla2/1200/800', 'https://picsum.photos/seed/goanvilla3/1200/800'],
    thumbnail: 'https://picsum.photos/seed/goanvilla-thumb/400/300',
    contactPhone: '911234567892'
  },
  {
    id: 'cozy-nest',
    name: 'Cozy Nest Homestay',
    type: PropertyType.Homestay,
    rating: 4,
    location: 'Manali, India',
    destination: 'manali',
    pricePerNight: 6400,
    description: 'Experience authentic local culture at Cozy Nest. Our family-run homestay offers comfortable rooms, home-cooked meals, and a warm, welcoming atmosphere.',
    amenities: [Amenity.WiFi, Amenity.Parking],
    images: ['https://picsum.photos/seed/cozynest1/1200/800', 'https://picsum.photos/seed/cozynest2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/cozynest-thumb/400/300',
    contactPhone: '911234567893'
  },
  {
    id: 'serene-waters',
    name: 'Serene Waters Hotel',
    type: PropertyType.Hotel,
    rating: 4,
    location: 'Kerala, India',
    destination: 'kerala',
    pricePerNight: 22400,
    description: 'A beautiful hotel situated on the banks of the Kerala backwaters, offering peace and tranquility.',
    amenities: [Amenity.WiFi, Amenity.Restaurant, Amenity.Spa],
    images: ['https://picsum.photos/seed/serenewaters1/1200/800', 'https://picsum.photos/seed/serenewaters2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/serenewaters-thumb/400/300',
    contactPhone: '911234567894'
  },
  {
    id: 'goa-beachfront',
    name: 'Goa Beachfront Villa',
    type: PropertyType.Villa,
    rating: 5,
    location: 'Goa, India',
    destination: 'goa',
    pricePerNight: 48000,
    description: 'Wake up to the sound of waves in this stunning beachfront villa with direct access to the beach.',
    amenities: [Amenity.WiFi, Amenity.Pool, Amenity.AirConditioning, Amenity.Parking],
    images: ['https://picsum.photos/seed/goavilla1/1200/800', 'https://picsum.photos/seed/goavilla2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/goavilla-thumb/400/300',
    contactPhone: '911234567895'
  },
  {
    id: 'heritage-haveli',
    name: 'Heritage Haveli',
    type: PropertyType.Hotel,
    rating: 4.5,
    location: 'Jaipur, India',
    destination: 'jaipur',
    pricePerNight: 15000,
    description: 'A restored haveli offering a glimpse into Rajputana royalty, with modern comforts.',
    amenities: [Amenity.WiFi, Amenity.Restaurant, Amenity.AirConditioning, Amenity.Spa],
    images: ['https://picsum.photos/seed/haveli1/1200/800', 'https://picsum.photos/seed/haveli2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/haveli-thumb/400/300',
    contactPhone: '911234567896'
  },
  {
    id: 'royal-rajputana',
    name: 'The Royal Rajputana',
    type: PropertyType.Hotel,
    rating: 4.9,
    location: 'Jaipur, India',
    destination: 'jaipur',
    pricePerNight: 18000,
    description: 'Live like royalty in this magnificent heritage hotel. The Royal Rajputana blends historic charm with modern luxury, offering an unforgettable cultural experience.',
    amenities: [Amenity.WiFi, Amenity.Pool, Amenity.Restaurant, Amenity.Spa, Amenity.AirConditioning],
    images: ['https://picsum.photos/seed/rajputana1/1200/800', 'https://picsum.photos/seed/rajputana2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/rajputana-thumb/400/300',
    contactPhone: '911234567901'
  },
  {
    id: 'mountain-retreat',
    name: 'The Mountain Retreat',
    type: PropertyType.Resort,
    rating: 4.2,
    location: 'Shimla, India',
    destination: 'shimla',
    pricePerNight: 12000,
    description: 'Escape to the cool hills of Shimla. Our resort offers stunning valley views and cozy fireplaces.',
    amenities: [Amenity.WiFi, Amenity.Restaurant, Amenity.Parking],
    images: ['https://picsum.photos/seed/shimla1/1200/800', 'https://picsum.photos/seed/shimla2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/shimla-thumb/400/300',
    contactPhone: '911234567897'
  },
  {
    id: 'pine-peak-cottage',
    name: 'Pine Peak Cottage',
    type: PropertyType.Homestay,
    rating: 4.7,
    location: 'Shimla, India',
    destination: 'shimla',
    pricePerNight: 8500,
    description: 'A charming and cozy cottage nestled among pine trees. Enjoy personalized service, home-cooked meals, and a tranquil atmosphere away from the city bustle.',
    amenities: [Amenity.WiFi, Amenity.Parking, Amenity.PetFriendly],
    images: ['https://picsum.photos/seed/pinepeak1/1200/800', 'https://picsum.photos/seed/pinepeak2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/pinepeak-thumb/400/300',
    contactPhone: '911234567902'
  },
  {
    id: 'lake-palace',
    name: 'The Lake Palace Inn',
    type: PropertyType.Hotel,
    rating: 4.8,
    location: 'Udaipur, India',
    destination: 'udaipur',
    pricePerNight: 25000,
    description: 'An ethereal hotel that appears to float on the waters of Lake Pichola. Unforgettable romantic getaways.',
    amenities: [Amenity.WiFi, Amenity.Pool, Amenity.Spa, Amenity.Restaurant],
    images: ['https://picsum.photos/seed/udaipur1/1200/800', 'https://picsum.photos/seed/udaipur2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/udaipur-thumb/400/300',
    contactPhone: '911234567898'
  },
  {
    id: 'pichola-view-villa',
    name: 'Pichola View Villa',
    type: PropertyType.Villa,
    rating: 4.9,
    location: 'Udaipur, India',
    destination: 'udaipur',
    pricePerNight: 35000,
    description: 'An exquisite villa with panoramic views of Lake Pichola and the City Palace. Features a private terrace and elegant interiors for a truly royal stay.',
    amenities: [Amenity.WiFi, Amenity.Pool, Amenity.AirConditioning, Amenity.Restaurant],
    images: ['https://picsum.photos/seed/pichola1/1200/800', 'https://picsum.photos/seed/pichola2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/pichola-thumb/400/300',
    contactPhone: '911234567903'
  },
  {
    id: 'himalayan-hideaway',
    name: 'Himalayan Hideaway Resort',
    type: PropertyType.Resort,
    rating: 4.6,
    location: 'Manali, India',
    destination: 'manali',
    pricePerNight: 14000,
    description: 'A secluded resort offering breathtaking views of the Himalayas. Perfect for both relaxation and adventure, with trekking and skiing opportunities nearby.',
    amenities: [Amenity.WiFi, Amenity.Restaurant, Amenity.Parking, Amenity.Spa],
    images: ['https://picsum.photos/seed/himalayan1/1200/800', 'https://picsum.photos/seed/himalayan2/1200/800'],
    thumbnail: 'https://picsum.photos/seed/himalayan-thumb/400/300',
    contactPhone: '911234567900'
  },
];

export const destinations: Destination[] = [
    {
        id: 'goa',
        name: 'Goa',
        image: 'https://picsum.photos/seed/dest-goa/800/600',
        description: 'Famous for its pristine beaches, vibrant nightlife, and Portuguese heritage.'
    },
    {
        id: 'kerala',
        name: 'Kerala',
        image: 'https://picsum.photos/seed/dest-kerala/800/600',
        description: 'Known as "God\'s Own Country", with its lush backwaters and serene landscapes.'
    },
    {
        id: 'manali',
        name: 'Manali',
        image: 'https://picsum.photos/seed/dest-manali/800/600',
        description: 'A Himalayan resort town offering cool climates and adventure sports.'
    },
    {
        id: 'jaipur',
        name: 'Jaipur',
        image: 'https://picsum.photos/seed/dest-jaipur/800/600',
        description: 'The Pink City, known for its stunning forts, palaces, and vibrant markets.'
    },
    {
        id: 'shimla',
        name: 'Shimla',
        image: 'https://picsum.photos/seed/dest-shimla/800/600',
        description: 'The former summer capital of British India, nestled in the Himalayan foothills.'
    },
    {
        id: 'udaipur',
        name: 'Udaipur',
        image: 'https://picsum.photos/seed/dest-udaipur/800/600',
        description: 'The City of Lakes, famous for its romantic lakeside palaces and scenery.'
    }
];

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Anika Sharma',
        location: 'Mumbai',
        comment: 'MealVilla helped us find the perfect resort in Kerala. The entire experience was seamless and the property was exactly as described. Highly recommended!',
        avatar: 'https://picsum.photos/seed/anika-sharma/150/150'
    },
    {
        id: 2,
        name: 'Rohan Verma',
        location: 'Delhi',
        comment: 'We booked a private villa in Goa through MealVilla and it was incredible. The pictures were accurate and the booking process was a breeze.',
        avatar: 'https://picsum.photos/seed/rohan-verma/150/150'
    },
    {
        id: 3,
        name: 'Priya Patel',
        location: 'Bangalore',
        comment: 'A fantastic platform for discovering unique homestays. We found a gem in Manali that wasn\'t listed anywhere else. Will definitely use MealVilla again.',
        avatar: 'https://picsum.photos/seed/priya-patel/150/150'
    },
];
