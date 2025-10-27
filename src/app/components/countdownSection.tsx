"use client"
import { Button } from "./button";
import { CountdownTimer } from "./countdown";
import { Armchair } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function CountdownSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])
      const eventDate = new Date("2025-12-21T18:00:00")
  return (
    <div className="py-16 md:py-24 px-6 " data-aos="zoom-in">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 font-inter">
              Dec. 21st 2025
            </h2>

            <CountdownTimer targetDate={eventDate} />

            <div className="mt-12 flex justify-center">
              <Button  className="flex gap-2 items-center bg-primary/80 text-white hover:bg-primary/50 text-lg px-8 py-4">
                Reserve a Seat
                <Armchair className=" h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
    )   
}