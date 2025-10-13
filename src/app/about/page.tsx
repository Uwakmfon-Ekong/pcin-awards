import { Navigation } from "../components/navbar";
import Image from "next/image"; 
import picture1 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.14.jpeg";
import image1 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.14.jpeg";
import image2 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.22.jpeg";
import image3 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.23.jpeg";
import image4 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.24 (1).jpeg";
import image5 from "../../../public/WhatsApp Image 2025-10-10 at 22.22.24 (2).jpeg";
import image6 from "../../../public/WhatsApp Image 2025-10-10 at 22.28.08.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen items-center justify-center bg-background text-foreground font-poppins">
        <Navigation />
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <h1 className="text-[56px] font-bold">2025 Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl w-full">
<Image src={image1} alt="Gallery Image 1" className="w-full h-auto rounded-lg shadow-lg" />
<Image src={image2} alt="Gallery Image 2" className="w-full h-auto rounded-lg shadow-lg" />
<Image src={image3} alt="Gallery Image 3" className="w-full h-auto rounded-lg shadow-lg" />
<Image src={image4} alt="Gallery Image 4" className="w-full h-auto rounded-lg shadow-lg" />
<Image src={image5} alt="Gallery Image 5" className="w-full h-auto rounded-lg shadow-lg" />
<Image src={image6} alt="Gallery Image 6" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}