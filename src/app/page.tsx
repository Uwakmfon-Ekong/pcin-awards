import AwardsSection from "./components/awardsection";
import { CountdownSection } from "./components/countdownSection";
import { Footer } from "./components/footer";
import HeroSection from "./components/heroSection";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <AwardsSection />
         <CountdownSection />
         <Footer />
      

    </div>
  );
}
