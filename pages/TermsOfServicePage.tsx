import React, { useEffect } from 'react';

const TermsOfServicePage: React.FC = () => {
    useEffect(() => {
        document.title = 'Terms of Service - MealVilla';
    }, []);

  return (
    <div className="bg-bg-light py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold font-serif text-primary mb-6">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-text-muted">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-primary font-serif">1. Terms</h2>
            <p>
              By accessing the website at MealVilla, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2 className="text-primary font-serif">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on MealVilla's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            
            <h2 className="text-primary font-serif">3. Disclaimer</h2>
            <p>
              The materials on MealVilla's website are provided on an 'as is' basis. MealVilla makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-primary font-serif">4. Limitations</h2>
            <p>
              In no event shall MealVilla or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MealVilla's website.
            </p>

            <h2 className="text-primary font-serif">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;