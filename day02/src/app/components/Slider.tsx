"use client"
// components/Slider.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-l-lg"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-r-lg"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="carousel">
        {images?.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={400}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
