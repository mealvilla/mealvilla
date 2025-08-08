


import { Property, PropertyType, Amenity, Destination, Testimonial } from '../types';

export const properties: Property[] = [
  {
    id: 'affcasa-luxury-goa',
    name: 'Affcasa Luxury Goa - Apartment',
    type: PropertyType.Apartment,
    rating: 4.8,
    location: 'Opposite Oxford Supermarket, Anjuna Mapusa Rd, Dmello Vaddo, Anjuna, Goa - 403509, India',
    destination: 'goa',
    pricePerNight: 5999,
    priceSuffix: 'Onwards',
    description: `**Your Luxury Anjuna Escape Awaits! ✨ Just 700m from the beach.**

Welcome to 'Lux' by Affcasa, an elegantly designed 2BHK apartment in the heart of Anjuna. This well-lit and tastefully furnished home is your perfect Goan retreat, ideal for families, couples, and remote workers seeking a blend of comfort and style.

**The Space**
Our ground-floor apartment is designed for ultimate relaxation and convenience.
- 2 spacious bedrooms with A/C and comfy memory foam mattresses.
- Cozy living room with A/C and a flat-screen TV for movie nights.
- Fully equipped kitchen with a fridge, induction cooktop, and all necessary utensils.
- 2 modern and clean bathrooms.
- 3 private balconies to enjoy your morning coffee or a quiet evening.
- High-speed WiFi to keep you connected.

**The Neighborhood**
You're perfectly positioned to experience the best of Goa!
- **Beach Bliss:** Just 700 meters from Anjuna Beach, and a short hop to Vagator & Ozran beaches (under 1km).
- **Food & Fun:** Steps away from Goa’s top restaurants, beach clubs, and vibrant nightlife, including Titli, Antares, Purple Martini, and W Goa.
- **Convenience:** Baga Beach is 3km away, and local markets are within easy walking distance.

**Guest Access**
As our guest, you'll have access to the entire apartment and the wonderful society amenities.
- **Full Apartment:** The entire 2BHK space is yours to enjoy.
- **Swimming Pool:** Take a dip between 8 AM – 7 PM.
- **Fitness & Fun:** Access to the on-site gym and a children's play area.
- **Hassle-free Parking:** Ample parking space available.
- **Secure Complex:** The society offers 24/7 security with CCTV for your peace of mind.

**Other things to note**
A few important details to ensure a smooth and pleasant stay for everyone:
- The apartment is on the ground floor (no elevator).
- Maximum 6 guests, including children.
- Valid government ID is required at check-in.
- Housekeeping is provided daily, with linens refreshed every other day.
- Power backup is available for fans & lights.
- Smoking is permitted only on the balconies.
- Please respect the community rules: no food, drinks, or loud music at the pool area.

Whether you're here for a relaxing holiday or a productive workcation, we're dedicated to making your stay exceptional.

**Book your luxury Goan getaway with us today!**`,
    amenities: [Amenity.WiFi, Amenity.Pool, Amenity.AirConditioning, Amenity.Parking],
    images: ['https://ik.imagekit.io/utz2qnv8b/affcasa-luxury-image-5.webp', 'https://ik.imagekit.io/utz2qnv8b/affcasa-luxury-image-1.webp', 'https://ik.imagekit.io/utz2qnv8b/affcasa-luxury-image-2.webp','https://ik.imagekit.io/utz2qnv8b/affcasa-luxury-image-3.webp','https://ik.imagekit.io/utz2qnv8b/affcasa-luxury-image-4.webp' ],
    thumbnail: 'https://ik.imagekit.io/utz2qnv8b/affcasa-luxury-image-5.webp',
    contactPhone: '918006568000',
    whatsappMessage: "Hi! I'm interested in booking a stay at Affcasa. I found your property on MealVilla.com and would love more details. Could you please assist me with availability and pricing?",    
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.755490076214!2d73.73953097589634!3d15.58666368499245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe9003366a95b%3A0xae5a3bb059fa8f2d!2sLuxury%20Homes%20by%20Affcasa!5e0!3m2!1sen!2sin!4v1719246950710!5m2!1sen!2sin'
  },
  {
    id: 'luxury-palace',
    name: 'Luxury Palace Hotel',
    type: PropertyType.Hotel,
    rating: 5,
    location: 'Goa, India',
    destination: 'goa',
    pricePerNight: 28000,
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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
    priceSuffix: 'Onwards',
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