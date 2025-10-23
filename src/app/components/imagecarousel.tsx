"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface CarouselImage {
  src: string | StaticImageData;
  alt: string;
}

interface GalleryFadeCarouselProps {
  images: CarouselImage[];
}

export function GalleryFadeCarousel({ images }: GalleryFadeCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto" data-aos="fade-up">
      <div className="relative h-[450px] overflow-hidden rounded-md">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + images.length) % images.length)
          }
          className="bg-black/40 text-white px-4 py-2 rounded-md hover:bg-black/70"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
          className="bg-black/40 text-white px-4 py-2 rounded-md hover:bg-black/70"
        >
          ›
        </button>
      </div>
    </div>
  );
}
