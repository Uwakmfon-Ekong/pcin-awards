
import { CountdownTimer } from "./components/countdown";
import HeroSection from "./components/heroSection";
import { Navigation } from "./components/navbar";

export default function Home() {
  return (
    <div>
      {/* <Navigation /> */}
      <HeroSection />
      <CountdownTimer targetDate={new Date("2026-11-15T19:00:00")} />
    </div>
  );
}
