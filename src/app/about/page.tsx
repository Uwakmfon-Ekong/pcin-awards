"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "../components/navbar";
import { Footer } from "../components/footer";
import { DecorativeBorder } from "../components/decorativebackground";
import Image from "next/image";
import { CountdownSection } from "../components/countdownSection";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <DecorativeBorder />

      <main className="px-6 py-16 lg:px-12 font-poppins">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left my-12">
            <h2
              className="lg:text-5xl text-3xl font-bold tracking-tight leading-tight"
              data-aos="zoom-in"
            >
              A Night of Prestige, <br />
              Passion and Creative Brilliance
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="flex lg:flex-row flex-col items-center justify-between gap-12">
            {/* Left Column - About Content */}
            <div className="space-y-8 lg:w-1/2" data-aos="fade-right">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-3 tracking-wider">
                  PCINA 2025
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  This is an annual national awards event organized by the Akwa
                  Ibom State Professional Photography and Cinematography Guild.
                  In our quest, we seek to recognize and award individuals and
                  organizations whose outstanding impact has contributed to
                  development, inspiration, capacity building, innovation and
                  breakthroughs in the photography and cinematography industry.
                </p>

                <p>
                  PCINA exemplifies talent, dedication and
                  innovation—celebrating individuals and teams across every
                  aspect of cinematography and photography. The event has
                  brought to light countless reasons why Nigerian creatives
                  should continue to be recognized, celebrated and amplified.
                </p>

                <p>
                  Photography is the bridge between yesterday and today. A photo
                  allows you to live in the past while seeing the future.
                </p>

                <blockquote
                  className="border-l-4 border-primary/80 bg-black/5 p-6 rounded-md"
                  data-aos="fade-up"
                >
                  <p className="text-lg italic text-gray-900 leading-relaxed">
                    “Photography is more than just a profession; it is the
                    bridge between yesterday and tomorrow — a frame that
                    preserves legacy.”
                  </p>
                  <cite className="block mt-4 text-sm font-semibold text-gray-700">
                    — Benaiah Pius O.
                  </cite>
                  <div className="text-xs text-gray-500 mt-1">
                    AKWA IBOM STATE PROFESSIONAL PH
                  </div>
                </blockquote>
              </div>
            </div>

            {/* Right Column - Image + Quote */}
            <div className="space-y-6 lg:w-1/2" data-aos="fade-left">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/WhatsApp Image 2025-10-15 at 15.47.35.jpeg"
                  alt="PCINA Event"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Quote block */}
            </div>
          </div>
        </div>
      </main>

      {/* Countdown Section */}
      <div
        className="bg-black py-20 flex flex-col items-center justify-center text-center px-6 text-white"
        data-aos="zoom-in"
      >
        <CountdownSection />
      </div>

      <Footer />
    </div>
  );
}
