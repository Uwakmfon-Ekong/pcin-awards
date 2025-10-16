import { CountdownSection } from "./components/countdownSection";
import { DecorativeBorder } from "./components/decorativebackground";
import { Footer } from "./components/footer";
import HeroSection from "./components/heroSection";

export default function Home() {

  return (
    <div>
      <HeroSection />
         <CountdownSection />
         <DecorativeBorder />
         <Footer />
      

    </div>
  );
}
