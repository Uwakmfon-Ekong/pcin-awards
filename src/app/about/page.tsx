import { Navigation } from "../components/navbar";
import { Footer } from "../components/footer";
import { Button } from "../components/button";
import { DecorativeBorder } from "../components/decorativebackground";
import Image from "next/image";
import eventImage from "../../../public/WhatsApp Image 2025-10-15 at 15.47.35.jpeg";
import { CountdownTimer } from "../components/countdown";

export default function AboutPage() {
    const eventDate = new Date("2025-12-10T18:30:00");
  return (
    <div className="min-h-screen bg-white">
        <Navigation />
      <DecorativeBorder />
      <main className="px-6 py-16 lg:px-12 font-poppins">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[18px] font-semibold text-gray-600 mb-4 tracking-wider">
              JOIN US AT
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-[70px]">
              Photography & Cinematography
              <br />
              Industry Night and Awards 2025
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="flex items-center justify-between gap-12 flex-col lg:flex-row">
            {/* Left Column - About Content */}
            <div className="space-y-8 w-full lg:w-1/2">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-3 tracking-wider">
                  PCINA 2025
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Hello Visual Storyteller
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Photography and Cinematography Industry Night and Awards
                  is aimed at contributing to the human capital and economic
                  value development of visual creatives, thereby enhancing the
                  overall growth of the photography and cinematography industry
                  and the country at large.
                </p>

                <p>
                  Our vision is to build a platform for photographers,
                  cinematographers, and visual creatives through a community
                  give-back initiative and an award "program" that is
                  standardised and industrialised to recognise and validate the
                  timeless works of impact makers, trailblazing in their arts.
                </p>
              </div>

              <Button className="bg-orange-600 focus:ring-0 text-white px-8 py-6 text-base font-semibold">
                MEET THE FOUNDER
              </Button>
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                src={eventImage}
                alt="Event"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="bg-black py-20 flex flex-col items-center justify-center text-center px-6">
        <div className="py-5 space-y-5 font-semibold font-playfair text-[30px]">
            <h1>REGISTER TO ATTEND</h1>
        <p>The events starts in</p>
        </div>
  <CountdownTimer targetDate={eventDate} />
  <Button className="bg-orange-600 focus:ring-0 text-white px-8 py-6 text-base font-semibold mt-10">
                RESERVE A SEAT
              </Button>
</div>

      <DecorativeBorder />
      <Footer />
    </div>
  );
}
