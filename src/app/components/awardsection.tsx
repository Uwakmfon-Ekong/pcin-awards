"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import TrophyImage from "../../../public/camera-equipment-capturing-single-macro-object-generative-ai-removebg-preview.png"; // replace with your image path

const AwardsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = [
    "Life Acheivement",
    "Corporate social investment",
    "Academic Excellence",
    "Entertainment",
    "Enterpreneurship",
    "Innovation Pacesetter",
    "Social Advocacy"
  ];

  return (
    <section className="bg-black py-16 px-6 md:px-16">
      {/* Main content block */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text + Categories */}
        <div className="md:w-1/2" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Celebrating Outstanding Achievements
          </h2>
          <ul className="space-y-3 mb-6">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className="text-lg md:text-xl font-medium text-white before:content-['•'] before:text-[#ff6600] before:mr-2"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Trophy Images */}
        <div className="md:w-1/2 flex flex-wrap justify-center gap-6" data-aos="fade-left">
          
          <Image src={TrophyImage} alt="Trophy" className="object-contain transform transition duration-500 hover:scale-105" />

        </div>
      </div>

      {/* Quote Section */}
      <div
        className="mt-16 text-center max-w-3xl mx-auto px-4"
        data-aos="fade-up"
      >
        <blockquote className="text-xl md:text-2xl italic text-white">
          "Greatness is not what we have, but what we give to humanity."
        </blockquote>
      </div>
    </section>
  );
};

export default AwardsSection;
