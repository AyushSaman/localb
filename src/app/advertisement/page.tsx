// import React from 'react';
'use client'
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ad.module.css'; // Import your CSS file for transitions
import CountdownTimer from '../../components/Advertisement/CountdownTimer';
import Captca from '../../components/Advertisement/Captca';


function Advertisement() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [allImagesShown, setAllImagesShown] = useState(false);

    const images = [
      'https://tse4.mm.bing.net/th?id=OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4&pid=Api&P=0&h=180',
      'https://tse1.mm.bing.net/th?id=OIP.hF8_3tDhRrZvxm-j1kZwgwHaE9&pid=Api&P=0&h=180', // Add more image URLs as needed
      'https://tse4.mm.bing.net/th?id=OIP.3l2nfzcHhMemSZooiH3B3AHaFj&pid=Api&P=0&h=180',
    ];
  
    const switchToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        switchToNextImage();
  
        // Check if all images have been shown
        if (currentImageIndex === images.length - 1) {
          setAllImagesShown(true);
        }
      }, 10000); // 30 seconds in milliseconds
  
      return () => clearTimeout(timer);
    }, [currentImageIndex, images]);

  
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      {/* Display the current image with transitions */}
      <CSSTransition
         in={true}
         key={currentImageIndex}
         timeout={3000} // Duration of the transition in milliseconds
         classNames="fade" // CSS class for the transition
         unmountOnExit
      >
        <div className="relative fade duration-1000 opacity-100">
          <img
            src={images[currentImageIndex]}
            alt={`Status Update ${currentImageIndex + 1}`}
            className="w-screen h-screen object-cover rounded-lg md:w-full"
          />
          {/* Additional UI elements, like a countdown timer */}
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full">
            <CountdownTimer initialTime={10} onTimeout={switchToNextImage} />
          </div>
        </div>
      </CSSTransition>
    </div>
    {allImagesShown && <Captca />}
    </>
  )
}

export default Advertisement