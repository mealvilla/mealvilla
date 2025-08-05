import React, { useEffect } from 'react';

const PrivacyPolicyPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Privacy Policy - MealVilla';
    }, []);

  return (
    <div className="bg-bg-light py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold font-serif text-primary mb-6">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-text-muted">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              MealVilla ("us", "we", or "our") operates the MealVilla website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            
            <h2 className="text-primary font-serif">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your email address when you subscribe to our newsletter.
            </p>
            
            <h2 className="text-primary font-serif">Use of Data</h2>
            <p>MealVilla uses the collected data for various purposes:</p>
            <ul>
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer care and support</li>
                <li>To provide you with news, special offers and general information about other goods, services and events which we offer.</li>
            </ul>

            <h2 className="text-primary font-serif">Security of Data</h2>
            <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-primary font-serif">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;