import Image from "next/image";
import border from "../../../public/WhatsApp_Image_2025-10-15_at_12.39.42__1_-removebg-preview.png";

export function DecorativeBorder() {
  return (
    <div className="w-full max-h-20 overflow-hidden">
      <Image
        src={border}
        alt="decorative border"
        className="w-full object-cover"
      />
    </div>
  );
}


  