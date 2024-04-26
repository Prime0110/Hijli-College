import React, { useState, useEffect } from 'react';

function Slides({ item }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const photos = [
    
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(currentSlide === photos.length - 1 ? 0 : currentSlide + 1);
    }, 3000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [currentSlide, photos.length]);

  return (
    <>
       <div className="max-w-3xl mx-auto relative left-0">
        <div className="overflow-hidden bg-white shadow-xl rounded-xl">
          <img src={photos[0]} alt="Slideshow" className="w-full h-96 object-cover ml-0" />
        </div>
      </div>
    </>
  );
}

export default Slides;
