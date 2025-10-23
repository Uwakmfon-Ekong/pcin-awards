"use client"
import "aos/dist/aos.css"
import { useEffect } from "react"
import AOS from "aos"
import { Navigation } from "./navbar"
import { VideoBackground } from "./videoBackground"

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])
  return (
    <main className="relative min-h-screen overflow-hidden">
      <VideoBackground />

      <div className="relative z-10 flex flex-col min-h-screen bg-black/40">
        <Navigation />

        <section className="flex flex-1 items-center justify-center px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-white font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Photography & Cinematography
              <br />
              <span className="text-primary">Industry Night & Awards</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white/80 mt-4 text-lg sm:text-xl"
            >
              Celebrating creative excellence across Nigeria and Africa.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-6 flex justify-center gap-4"
            >
              <button className="bg-primary px-6 py-3 rounded-md text-black font-medium hover:bg-white transition">
                Get Tickets
              </button>
              <button className="border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
