import AwardsSection from "./components/awardsection";
import { CountdownSection } from "./components/countdownSection";
import { DecorativeBorder } from "./components/decorativebackground";
import { Footer } from "./components/footer";
import HeroSection from "./components/heroSection";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <AwardsSection />
         <CountdownSection />

         {/* <DecorativeBorder /> */}
         <Footer />
      

    </div>
  );
}
