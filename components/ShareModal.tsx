import React, { useState, useEffect } from 'react';
import { Property } from '../types';

interface ShareModalProps {
    property: Property;
    onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ property, onClose }) => {
    const [copied, setCopied] = useState(false);
    const urlToShare = window.location.href;
    const textToShare = `Check out this amazing place: ${property.name}`;

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(urlToShare).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const socialLinks = [
        { name: 'Copy link', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>, action: handleCopyLink, text: copied ? 'Copied!' : 'Copy link' },
        { name: 'WhatsApp', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.317 4.814 4.905-1.294z" /></svg>, href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${textToShare} ${urlToShare}`)}` },
        { name: 'Facebook', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}` },
        { name: 'Twitter', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.353.23-2.06.088.58 1.881 2.268 3.247 4.272 3.284-1.795 1.407-4.067 2.245-6.533 2.245-.424 0-.84-.025-1.249-.073 2.308 1.482 5.063 2.348 8.041 2.348 9.645 0 14.935-7.994 14.935-14.935 0-.227-.005-.453-.015-.678.982-.713 1.835-1.6 2.525-2.618z" /></svg>, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}` },
    ];

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-bg-light" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <h2 id="share-modal-title" className="text-lg font-bold text-black">Share this property</h2>
                </div>
                
                <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <img src={property.thumbnail} alt={property.name} className="w-24 h-24 object-cover rounded-lg" />
                        <div>
                            <p className="text-sm text-text-muted capitalize">{property.type}</p>
                            <h3 className="text-lg font-semibold text-black">{property.name}</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {socialLinks.map(link => (
                            link.href ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-bg-light hover:border-gray-300 transition-colors"
                                >
                                    {link.icon}
                                    <span className="font-semibold">{link.name}</span>
                                </a>
                            ) : (
                                <button
                                    key={link.name}
                                    onClick={link.action}
                                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-bg-light hover:border-gray-300 transition-colors"
                                >
                                    {link.icon}
                                    <span className="font-semibold">{link.text || link.name}</span>
                                </button>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
