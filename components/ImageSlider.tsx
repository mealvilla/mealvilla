import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-text-muted">No Images Available</div>;
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
      <div className="w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${alt} - slide ${index + 1}`} className="w-full h-full object-cover flex-shrink-0" />
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentIndex === index ? 'bg-accent scale-125' : 'bg-black/30'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;