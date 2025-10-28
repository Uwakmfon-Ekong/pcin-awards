import AwardsSection from "./components/awardsection";
import { CountdownSection } from "./components/countdownSection";
import { Footer } from "./components/footer";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden font-poppins">
      <HeroSection />
      <AwardsSection />
      <CountdownSection />
      <Footer />
    </div>
  );
}
