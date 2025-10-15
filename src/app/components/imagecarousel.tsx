"use client"

import { useState, useEffect, useRef } from "react"
import Image, { StaticImageData } from "next/image"

interface CarouselImage {
  src: string | StaticImageData
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
}

export function ImageCarousel({ images, autoPlayInterval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const thumbnailsRef = useRef<HTMLDivElement>(null)

  // Auto play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)
    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval])

  // Scroll thumbnails in sync with main image
  useEffect(() => {
    if (thumbnailsRef.current) {
      const thumbnailWidth = thumbnailsRef.current.scrollWidth / images.length
      thumbnailsRef.current.scrollTo({
        left: thumbnailWidth * currentIndex,
        behavior: "smooth",
      })
    }
  }, [currentIndex, images.length])

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Main image */}
      <div className="relative w-full aspect-[20/9] rounded-sm overflow-hidden shadow-lg">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-opacity duration-700 ease-in-out"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div
        ref={thumbnailsRef}
        className="flex gap-4 w-full overflow-x-auto scroll-smooth scrollbar-hide overflow-y-hidden"
      >
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex-shrink-0 w-1/3 lg:w-1/5 aspect-[16/9] rounded-sm overflow-hidden transition-transform hover:scale-105 ${
              index === currentIndex
                ? "ring-2 ring-orange-600"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
