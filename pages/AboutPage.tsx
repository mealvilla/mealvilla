import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
    useEffect(() => {
        document.title = 'About Us - MealVilla';
    }, []);

  return (
    <div className="bg-bg-light py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-accent mb-6">About MealVilla</h1>
          <p className="text-xl text-text-muted mb-12">
            Your trusted partner in discovering the world's most unique and comfortable stays.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
          <div className="prose prose-lg max-w-none text-text-muted">
            <h2 className="text-primary font-serif">Our Mission</h2>
            <p>
              At MealVilla, our mission is to simplify travel planning by providing a curated selection of the finest hotels, resorts, villas, and homestays. We believe that finding the perfect accommodation is the cornerstone of a memorable journey. We are dedicated to showcasing properties that offer exceptional quality, unique character, and outstanding hospitality.
            </p>
            
            <h2 className="text-primary font-serif">Our Vision</h2>
            <p>
              Our vision is to become the most beloved and trusted platform for travelers seeking not just a place to stay, but an experience to cherish. We aim to connect discerning travelers with hidden gems and celebrated establishments alike, ensuring every trip is extraordinary. By fostering a community built on trust and transparency, we want to inspire and enable more people to explore the world with confidence.
            </p>

            <h2 className="text-primary font-serif">Our Team</h2>
            <p>
              We are a passionate team of travelers, tech enthusiasts, and hospitality experts who believe in the power of a great vacation. We meticulously vet each property to ensure it meets our high standards, so you can book with peace of mind.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
            <img src="https://picsum.photos/seed/about-team/1200/400" alt="Our Team" className="rounded-lg shadow-xl mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;