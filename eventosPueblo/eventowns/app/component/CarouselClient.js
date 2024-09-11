'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/img/carousel1.jpg',
  '/img/carousel2.jpeg',
  '/img/carousel3.jpg'
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <Image src={src} alt={`Slide ${index + 1}`} width={800} height={400} layout="responsive" />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}