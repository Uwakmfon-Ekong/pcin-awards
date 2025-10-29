import AwardsSection from "./components/awardsection";
import { CountdownSection } from "./components/countdownSection";
import { Footer } from "./components/footer";
import HeroSection from "./components/heroSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <meta property="og:image" content="https://pcin-awards.pxxl.pro/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
     <div className="min-h-screen overflow-x-hidden font-poppins">
      <HeroSection />
      <AwardsSection />
      <CountdownSection />
    </div>
    </>
   
  );
}
