"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import { NominateNowDialog } from "../components/nominationModal";

const categories = [
  "Life Time Achievement Award",
  "Legendary Photography/Cinematography Industry Icon Award",
  "Rookie Cinematographer of the year",
  "Rookie Photographer of the year",
  "Professional Photographer of the year",
  "Professional Cinematographer of the year",
  "Photo frames Production Company of the year",
  "Photo lab/Enlargement Print Company of the year",
  "Most Entrepreneurial Creative of the year",
  "Most visual Creative Brand of the year",
  "Aerial Photographer/Cinematographer of the year",
  "Best Macro Photographer of the year",
  "Documentary Photographer/Cinematographers of the year",
  "Portrait Photographer of the year",
  "Content Creator of the year",
  "Mobile Photographer of The Year",
  "Media Influencer of the year",
  "Most Impactful Photographer of the year",
  "Wedding Cinematographer of the year",
  "Best Wedding Photographer of the year",
  "Event Vendor of the year!",
  "Women Icon Award in Photography",
  "Photographers Makeup Artist Choice of the year",
  "Photographers Wedding Planner Choice of the year",
  "Photographers' DJ Choice of the year",
  "Event Decorator of the year",
  "Sports Photographer of the year",
  "DOP of the year",
  "Media Personality of the year",
  "Event Reporter of the Year",
  "Event Media Blog of the Year",
  "Photopreneur of the year",
  "Frame Vendor of the year",
  "Studio Equipment of the year"
];

function CategoryCard({
  number,
  title,
  delay,
}: {
  number: number;
  title: string;
  delay?: number;
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="relative p-6 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg transition-transform duration-300 cursor-pointer will-change-transform"
    >
      <div className="absolute -top-3 -left-3 bg-primary text-white px-4 py-2 text-sm font-bold shadow-md">
        {number}
        <span className="absolute -bottom-2 left-0 w-0 h-0 border-l-[12px] border-l-primary border-t-[12px] border-t-transparent"></span>
      </div>

      <h3 className="text-black font-semibold text-lg mt-4">{title}</h3>
    </div>
  );
}

export default function NominationPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-poppins overflow-x-hidden">
      
      <main className="container mx-auto px-4 py-16 md:py-28">
        <header className="text-center mb-16" data-aos="fade-down">
          <p className="text-sm md:text-base tracking-widest mb-2 uppercase text-gray-400">
            Photography/Cinematography Industry and Award Night 2025
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Nomination Categories
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Explore the awards and nominate your favorite creatives in the
            industry.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-0">
          {categories.map((title, idx) => (
            <CategoryCard
              key={idx}
              number={idx + 1}
              title={title}
              delay={idx * 50}
            />
          ))}
        </div>

        <div data-aos="zoom-in" className="mt-16 text-center">
          <NominateNowDialog />
        </div>
      </main>

    </div>
  );
}
