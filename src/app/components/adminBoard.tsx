import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import lifImg from "../../../public/lif.jpeg";
import dicksonImg from "../../../public/dickson.jpeg";
import aritImg from "../../../public/arit.jpeg";
import emediongImg from "../../../public/emediong.jpeg";

type TeamMember = {
  name: string;
  role: string;
  img: StaticImageData;
};

const teamMembers: TeamMember[] = [
  { name: "Mr Life Stanley", role: "Trustee", img: lifImg },
  { name: "Mr Dickson Enoh", role: "Trustee", img: dicksonImg },
  { name: "Ms Arit Otioro", role: "Trustee", img: aritImg },
  { name: "Mr Johnny", role: "Trustee", img: emediongImg },
];

export default function AdminBoard() {
  return (
    <section className="bg-gradient-to-b from-black/70 to-black/85 py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1 h-6 bg-[#ff6600]" />
            <h3 className="text-2xl font-semibold text-white">PCINA Administrative Board</h3>
            <div className="w-1 h-6 bg-[#ff6600]" />
          </div>
          <p className="mt-3 text-sm text-white/70 max-w-2xl mx-auto">
            Meet the team helping steer the vision and operations for PCINA 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="zoom-in">
          {teamMembers.map((member, idx) => (
            <FlipCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ member }: { member: TeamMember }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-72 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""}`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white/5 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-white/5 shadow-lg cursor-pointer">
          <div className="relative w-36 h-36 rounded-lg overflow-hidden border-2 border-white/10 shadow-sm">
            <Image src={member.img} alt={member.name} fill className="object-cover" />
          </div>
          <h4 className="mt-4 text-lg font-semibold text-white">{member.name}</h4>
          <h4 className="mt-4 text-lg font-normal text-white/90">{member.role}</h4>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/10 rounded-xl flex flex-col items-center justify-center border border-white/5 shadow-lg cursor-pointer">
          <h4 className="text-lg font-semibold text-white">{member.role}</h4>
          <p className="mt-2 text-sm text-white/70 text-center">Click to flip back</p>
        </div>
      </div>
    </div>
  );
}
