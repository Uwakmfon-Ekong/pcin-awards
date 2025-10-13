import { Button } from "./button";
import { CountdownTimer } from "./countdown";
import { Armchair } from "lucide-react";

export function CountdownSection() {
      const eventDate = new Date("2025-10-09T18:00:00")
  return (
    <div className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 font-inter">
              Oct. 9th - 10th, 2025
            </h2>

            <CountdownTimer targetDate={eventDate} />

            <div className="mt-12 flex justify-center">
              <Button  className="flex gap-2 items-center bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
                Reserve a Seat
                <Armchair className=" h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
    )   
}