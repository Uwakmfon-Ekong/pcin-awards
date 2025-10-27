"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Navigation } from "../components/navbar";
import { DecorativeBorder } from "../components/decorativebackground";
import { Footer } from "../components/footer";

// import your logos
import logo1 from "../../../public/lyfstan.jpeg";
import logo2 from "../../../public/rittwill.jpeg";
import logo3 from "../../../public/sirvic.jpeg";
import logo4 from "../../../public/classicimage.jpeg";
import logo5 from "../../../public/wildefx.jpeg";
import logo6 from "../../../public/blezman.jpeg";

export default function SponsorsPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="min-h-screen bg-white text-black font-poppins">
      <Navigation />
      <DecorativeBorder />

      {/* Hero */}
      <section className="relative pt-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
          Our Sponsors & Partners
        </h1>
        <p className="text-black/70 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay={100}>
          We are proud to be supported by amazing organizations and brands who share our vision for the photography and cinematography industry.
        </p>
      </section>

      {/* Logos Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="transition transform hover:scale-110 duration-300 cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <Image
                src={logo}
                alt={`Sponsor ${idx + 1}`}
                className="object-contain h-24 w-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center px-6">
        <h2 className="text-2xl font-semibold mb-3" data-aos="fade-up">Want to Partner with Us?</h2>
        <p className="text-black/70 max-w-xl mx-auto mb-6" data-aos="fade-up" data-aos-delay={100}>
          Become a sponsor and join our mission to empower visual storytellers across Nigeria.
        </p>
        <a
          href="/sponsorship"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition shadow-lg"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          Become a Sponsor
        </a>
      </section>

      <DecorativeBorder />
      <Footer />
    </div>
  );
}
