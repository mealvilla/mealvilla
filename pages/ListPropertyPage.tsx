import React, { useEffect } from 'react';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="bg-accent/10 text-accent p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-text-muted">{description}</p>
  </div>
);

const ListPropertyPage: React.FC = () => {
    useEffect(() => {
        document.title = 'List Your Property - MealVilla.com';
    }, []);

    // IMPORTANT: Replace this placeholder with your actual Google Form embed URL
    const googleFormEmbedUrl = "https://forms.gle/FERtgxj61AX5WPxQ6?embedded=true";

  return (
    <div className="bg-bg-light py-20">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-accent mb-6">Partner With MealVilla</h1>
          <p className="text-xl text-text-muted">
            Showcase your property to a global audience of discerning travelers and grow your business with us.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
            <BenefitCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                title="Wider Audience"
                description="Connect with thousands of travelers looking for unique stays, from luxury hotels to cozy homestays."
            />
            <BenefitCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                title="Simple Process"
                description="Our straightforward submission process makes it easy to get your property listed in no time."
            />
            <BenefitCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="Dedicated Support"
                description="Our team is here to help you optimize your listing and answer any questions you may have."
            />
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary text-center mb-8">Submit Your Property Details</h2>
            {/* 
              IMPORTANT: Replace the `src` attribute below with the embed URL for your own Google Form.
              You can get this from Google Forms by clicking "Send" -> "<>" (Embed HTML) -> Copy the URL from the `src` attribute.
            */}
            <iframe 
              src={googleFormEmbedUrl} 
              width="100%" 
              className="h-[1000px] md:h-[1200px] rounded-lg"
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Property Listing Submission Form"
              aria-label="Property Listing Submission Form"
            >
              Loading…
            </iframe>
        </div>
      </div>
    </div>
  );
};

export default ListPropertyPage;
