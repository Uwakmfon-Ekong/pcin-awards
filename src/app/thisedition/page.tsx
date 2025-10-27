"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Navigation } from "../components/navbar";
import { DecorativeBorder } from "../components/decorativebackground";
import { Footer } from "../components/footer";
import chairPlaceholder from "../../../public/WhatsApp Image 2025-10-27 at 17.39.30.jpeg";
import AdminBoard from "../components/adminBoard";

export default function Edition2025Page() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Navigation />
      <DecorativeBorder />

      {/* Hero background */}
      <section className="pt-10 relative w-full flex items-center" aria-hidden>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/65" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl text-center mx-auto" data-aos="zoom-in" data-aos-delay="50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="h-1 w-14 bg-[#ff6600] rounded" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
                2025 Edition — <span className="text-[#ff6600]">Shutters of Hope</span>
              </h1>
              <span className="h-1 w-14 bg-[#ff6600] rounded" />
            </div>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/80">
              Celebrating vision, bravery and the power of visual narratives — join us
              for a night where creativity meets prestige.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman + speech section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Chairman photo */}
          <div
            className="flex flex-col items-center lg:items-start"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <div className="relative w-full h-80 sm:h-96 md:h-[80vh] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={chairPlaceholder}
                alt="Chairman - Benaiah Pius"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 text-center lg:text-left">
              <p className="text-sm text-white/70">Chairman</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Benaiah Pius</h3>
              <p className="mt-1 text-sm text-white/70 italic">Photography & Cinematography Advocate</p>
            </div>
          </div>

          {/* Right: Speech */}
          <div className="prose prose-invert max-w-none leading-7 sm:leading-8 text-white/90" data-aos="zoom-in" data-aos-delay="150">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Chairman’s Speech
            </h2>

            <p className="" data-aos= "fade-up">
              Every great story begins with a single frame — a frame filled with hope, vision,
              and the courage to see possibilities where others see limits.
            </p>

            <p className="" data-aos= "fade-up">
              As we prepare for the 2025 edition of the Photography and Cinematography Industry Night
              and Awards (PCINA), I am filled with excitement and deep pride for what lies ahead.
            </p>

            <p className="font-semibold text-[#ff6600]">Theme: “Shutters of Hope… Inspiring Possibilities”</p>

            <p className="" data-aos= "fade-up">
              This year’s theme captures the spirit of our time. Across Nigeria and Africa,
              creatives are redefining narratives, breaking barriers, and shaping a new visual culture
              that reflects resilience, innovation, and pride. The lens has become more than just a tool;
              it is now a voice — powerful, expressive, and transformative.
            </p>

            <p className="" data-aos= "fade-up">
              The 2025 PCINA will not just be another award night. It will be a convergence of brilliance,
              where legends meet emerging voices, where passion meets purpose, and where every click of the shutter
              echoes stories of hope and endless possibilities.
            </p>

            <p className="" data-aos= "fade-up">
              We are building a movement that celebrates creativity, inspires collaboration, and projects
              Nigeria’s visual storytellers to the world stage.
            </p>

            <p className="" data-aos= "fade-up">
              To every photographer, cinematographer, drone pilot, editor, and visual artist out there,
              this is your moment. The future belongs to those who dare to see beauty in chaos and hope in the unseen.
              Let your creativity be your voice; let your lens be your legacy.
            </p>

            <p className="" data-aos= "fade-up">
              Join us this December as we celebrate the artistry, innovation, and courage behind the images that shape
              our nation’s imagination.
            </p>

            <p className="mt-4 font-semibold">Welcome to PCINA 2025 — Shutters of Hope… Inspiring Possibilities.</p>

            <div className="mt-3">
              <p className="text-sm text-white/70">— Benaiah Pius</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Board */}
      <section className="bg-gradient-to-b from-black/70 to-black/85 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8" data-aos="zoom-in" data-aos-delay="50">
            <AdminBoard />
          </div>
        </div>
      </section>

      <DecorativeBorder />
      <Footer />
    </div>
  );
}
