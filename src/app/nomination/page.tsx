"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "../components/navbar";
import { Footer } from "../components/footer";
import { Award } from "lucide-react";
import { DecorativeBorder } from "../components/decorativebackground";

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
  "Newspaper of the year",
  "Radio Station of the year",
  "Frame Vendor of the year",
];

function CategoryCard({ number, title, delay }: { number: number; title: string; delay?: number }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="p-6 py-10 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
          {number}
        </div>
        <h3 className="text-black font-semibold text-lg">{title}</h3>
      </div>
    </div>
  );
}

export default function NominationPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-poppins">
      <Navigation />
      <DecorativeBorder/>

      <main className="container mx-auto px-4 py-16 md:py-28">
        <header className="text-center mb-16" data-aos="fade-down">
          <p className="text-sm md:text-base tracking-widest mb-2 uppercase text-gray-400">
            Photography/Cinematography Industry and Award Night 2024
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nomination Categories</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Explore the awards and nominate your favorite creatives in the industry.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((title, idx) => (
            <CategoryCard key={idx} number={idx + 1} title={title} delay={idx * 50} />
          ))}
        </div>

        <div
          data-aos="zoom-in"
          className="mt-16 p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl max-w-3xl mx-auto shadow-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-7 h-7 text-slate-900" />
            <h2 className="text-2xl font-bold">Ready to Nominate?</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Reach out to us for inquiries or more information.
          </p>
          <div className="space-y-1 text-slate-900 font-medium">
            <p>07064976480, 07013 682 5543</p>
            <p className="text-gray-400 text-sm">www.pcinaawards.com</p>
          </div>
        </div>
      </main>

      <DecorativeBorder />
      <Footer />
    </div>
  );
}
