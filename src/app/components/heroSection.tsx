// import { VideoBackground } from "@/components/video-background"
// import { Navigation } from "../components/navbar";

import { Navigation } from "./navbar"

export default function HeroSection() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* <VideoBackground /> */}

      <div className="relative z-10">
       {/* <Navigation> */}
       <Navigation />

        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight text-balance">
              Photography and Cinematography Industry Night and Awards 2026
            </h1>
            
          </div>
        </div>
      </div>
    </main>
  )
}
