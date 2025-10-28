"use client"
import "aos/dist/aos.css"
import { useEffect } from "react"
import AOS from "aos"
import { Navigation } from "./navbar"
import { VideoBackground } from "./videoBackground"
import Link from "next/link"

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])

  return (
    <main className="relative overflow-hidden">
      <VideoBackground />

      <div className="relative z-10 flex flex-col min-h-screen bg-black/50">
        <Navigation />

        <section className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-white font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Photography & Cinematography
              <br />
              <span className="text-primary">Industry Night & Awards</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white/80 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl"
            >
              Celebrating creative excellence across Nigeria and Africa.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <button className="bg-primary px-6 py-3 rounded-md text-black font-medium hover:bg-white transition w-full sm:w-auto">
                Get a seat
              </button>
              <Link href="/nomination" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
                  Nominate now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
