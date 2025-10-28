"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.14.jpeg";
import image2 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.22.jpeg";
import image3 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.23.jpeg";
import image4 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.24 (1).jpeg";
import image5 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.24 (2).jpeg";
import image6 from "../../../public/WhatsApp Image 2025-10-10 at 22.28.08.jpeg";
import image7 from "../../../public/WhatsApp Image 2025-10-11 at 20.39.40.jpeg";
import { GalleryFadeCarousel } from "../components/imagecarousel";
import { Button } from "../components/button";

import { EyeIcon } from "lucide-react";


export default function AboutPage() {
   useEffect(() => {
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

  const GalleryImages = [
    { src: image1, alt: "Gallery Image 1" },
    { src: image2, alt: "Gallery Image 2" },
    { src: image3, alt: "Gallery Image 3" },
    { src: image4, alt: "Gallery Image 4" },
    { src: image5, alt: "Gallery Image 5" },
    { src: image6, alt: "Gallery Image 6" },
    { src: image7, alt: "Gallery Image 7" },
  ];

  return (
    <div className="min-h-screen items-center justify-center bg-foreground font-poppins">
    
      <div className="flex flex-col items-center justify-center px-6">
        
        <h1 className="lg:text-[56px] text-[40px] font-serif font-bold py-16 text-background" data-aos ="zoom-in">Gallery</h1>

        <div className="w-full mx-auto container">
        <GalleryFadeCarousel images={GalleryImages} />

        </div>
        <div className="py-10">
          <Button className="bg-orange-600 flex gap-2 items-center text-white hover:bg-primary/90 font-semibold px-4 py-3 cursor-pointer">View more photos
          <EyeIcon className=" h-5 w-5" />
          </Button>
        </div>
      </div>
      
    </div>
  );
}
