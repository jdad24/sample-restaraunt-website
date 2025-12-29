'use client';

import Ramen from '../../_assets/ramen.png';
import Restaraunt from '../../_assets/restauraunt.jpeg';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageGallery()  {    
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [Ramen, Restaraunt]

   useEffect(() => {
    const intervalId = setInterval(() => {
      // Use the functional form of set state to get the previous value
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

    return <Image src={images[currentIndex]} alt="Ichiraku Ramen Shop" className="w-full h-auto rounded-lg shadow-lg" />
  }