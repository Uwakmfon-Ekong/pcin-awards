"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "../components/navbar";
import { Footer } from "../components/footer";
import { DecorativeBorder } from "../components/decorativebackground";
import Image from "next/image";
import eventImage from "../../../public/WhatsApp Image 2025-10-15 at 15.47.35.jpeg";
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
          <div className="flex lg:flex-row flex-col items-start justify-between gap-12">
            {/* Left Column - About Content */}
            <div className="space-y-8 lg:w-1/2" data-aos="fade-right">
              {/* ABOUT */}
              <section>
                <h3 className="text-xl font-bold text-[#ff6600] mb-3">ABOUT PCINA</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                  <p>
                    The Photography and Cinematography Industry Night and Awards (PCINA) is
                    Nigeria’s premier national celebration of excellence in visual
                    storytelling.
                  </p>

                  <p>
                    An annual gathering of legends, trailblazers, and emerging talents in
                    photography, cinematography, and drone piloting, PCINA is dedicated to
                    recognizing and honoring individuals and organizations whose creativity,
                    innovation, and impact are shaping the future of the visual arts industry.
                  </p>

                  <p>
                    At PCINA, we celebrate the visionaries behind the lens — those whose craft
                    inspires, educates, and transforms perspectives. The event showcases
                    exceptional talent, groundbreaking innovation, and unwavering dedication
                    across every aspect of photography and cinematography.
                  </p>

                  <p>
                    Over the years, PCINA has become a beacon of inspiration, shining a
                    spotlight on the brilliance and global relevance of Nigerian creatives.
                  </p>
                </div>
              </section>

              {/* RATIONALE */}
              <section className="" data-aos="fade-up">
                <h3 className="text-xl font-bold text-[#ff6600] mt-6 mb-3">RATIONALE</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                  <p>
                    The visual and multimedia industry is one of the fastest-growing sectors
                    contributing to Nigeria’s creative economy and GDP. With Nigerian
                    photographers, filmmakers, and drone pilots making global waves, there’s
                    never been a more important time to celebrate our pacesetters.
                  </p>

                  <p>
                    PCINA stands as a platform to honor legends, empower emerging creatives,
                    and inspire innovation across the nation and beyond. Our mission is simple
                    yet profound — to recognize excellence, celebrate achievement, and amplify
                    creativity in every form of visual expression.
                  </p>

                  <p>
                    From amateurs to professionals, from fresh ideas to legendary achievements,
                    PCINA welcomes every voice, every vision, and every story that defines the
                    art of image-making.
                  </p>
                </div>
              </section>

              {/* HIGHLIGHTS */}
              <section className="" data-aos="fade-up">
                <h3 className="text-xl font-bold text-[#ff6600] mt-6 mb-3">HIGHLIGHTS</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                  <p>
                    This year’s edition — widely regarded as the “Oscars” of Photography and
                    Cinematography in Nigeria — promises to be even bigger and better. Bringing
                    together creatives, brands, and thought leaders from across West Africa,
                    the 2025 PCINA will feature over 30 award categories, spotlighting
                    individuals and organizations that are pushing boundaries and redefining
                    excellence.
                  </p>

                  <p>
                    This is the 3rd edition — expect something unusual……
                  </p>

                  <p>
                    PCINA is more than an award ceremony; it’s a movement of creatives, a
                    celebration of vision, and a testament to the power of visual storytelling.
                  </p>
                </div>
              </section>

              
             

              {/* Quote block */}
             
            </div>

            {/* Right Column - Image */}
            <div className="space-y-6 lg:w-1/2" data-aos="fade-left">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={eventImage}
                  alt="PCINA Event"
                  width={900}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* small highlights / quick facts */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-[#fff8f4] p-4 rounded-md border border-gray-100">
                  <h4 className="text-sm font-semibold text-[#ff6600]">Edition</h4>
                  <p className="text-sm text-gray-800">3rd Edition (2025)</p>
                </div>
                <div className="bg-[#fff8f4] p-4 rounded-md border border-gray-100">
                  <h4 className="text-sm font-semibold text-[#ff6600]">Categories</h4>
                  <p className="text-sm text-gray-800">30+ Award Categories</p>
                </div>
              </div>

               <blockquote
                className="border-l-4 border-[#ff6600]/80 bg-[#fff7f0] p-6 rounded-md mt-8"
                data-aos="fade-up"
              >
                <p className="text-lg italic text-gray-900 leading-relaxed">
                  &ldquo;Photography is more than just a profession; it is the bridge between
                  yesterday and tomorrow — a frame that preserves legacy.&rdquo;
                </p>
                <cite className="block mt-4 text-sm font-semibold text-gray-700">
                  — Benaiah Pius O.
                </cite>
                <div className="text-xs text-gray-500 mt-1">AKWA IBOM STATE PROFESSIONAL PH</div>
              </blockquote>
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
