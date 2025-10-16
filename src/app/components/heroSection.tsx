import { Navigation } from "./navbar"
import { VideoBackground } from "./videoBackground"

export default function HeroSection() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      
      <VideoBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
       
        <Navigation />

       
        <section className="flex flex-1 items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="
              font-serif 
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
              font-bold 
             
              leading-snug sm:leading-tight md:leading-tight lg:leading-[1.1] 
              text-balance
              mb-6
            ">
              Photography and Cinematography Industry Night and Awards
            </h1>

          </div>
        </section>
      </div>
    </main>
  )
}
