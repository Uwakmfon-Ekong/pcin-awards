"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DecorativeBorder } from "../components/decorativebackground";
import { Navigation } from "../components/navbar";
import Image from "next/image";
import friendsImage from "../../../public/WhatsApp Image 2025-10-25 at 16.39.23.jpeg";

export default function Partnerspage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-poppins">
      <Navigation />
      <DecorativeBorder />
      <div className="" data-aos="zoom-in">
        <Image src={friendsImage} alt="" className="w-full lg:h-full h-[100vh]" />
      </div>
    </div>
  );
}
