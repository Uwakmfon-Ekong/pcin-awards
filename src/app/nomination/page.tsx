import { Navigation } from "../components/navbar"
import { Footer } from "../components/footer"
import { Award } from "lucide-react"
import { DecorativeBorder } from "../components/decorativebackground"

const categories = [
  { number: 1, title: "Life Time Achievement Award" },
  { number: 2, title: "Legendary Photography/Cinematography Industry Icon Award" },
  { number: 3, title: "Rookie Cinematographer of the year" },
  { number: 4, title: "Rookie Photographer of the year" },
  { number: 5, title: "Professional Photographer of the year" },
  { number: 6, title: "Professional Cinematographer of the year" },
  { number: 7, title: "Photo frames Production Company of the year" },
  { number: 8, title: "Photo lab/Enlargement Print Company of the year" },
  { number: 9, title: "Most Entrepreneurial Creative of the year" },
  { number: 10, title: "Most visual Creative Brand of the year" },
  { number: 11, title: "Aerial Photographer/Cinematographer of the year" },
  { number: 12, title: "Best Macro Photographer of the year" },
  { number: 13, title: "Documentary Photographer/Cinematographers of the year" },
  { number: 14, title: "Portrait Photographer of the year" },
  { number: 15, title: "Content Creator of the year" },
  { number: 16, title: "Mobile Photographer of the Year" },
  { number: 17, title: "Media Influencer of the year" },
  { number: 18, title: "Most Impactful Photographer of the year" },
  { number: 19, title: "Wedding Cinematographer of the year" },
  { number: 20, title: "Best Wedding Photographer of the year" },
  { number: 21, title: "Event Vendor of the year!" },
  { number: 22, title: "Women Icon Award in Photography" },
  { number: 23, title: "Photographers Makeup Artist Choice of the year" },
  { number: 24, title: "Photographers Wedding Planner Choice of the year" },
  { number: 25, title: "Photographers' DJ Choice of the year" },
  { number: 26, title: "Event Decorator of the year" },
  { number: 27, title: "Sports Photographer of the year" },
  { number: 28, title: "DOP of the year" },
  { number: 29, title: "Media Personality of the year" },
  { number: 30, title: "Event Reporter of the Year" },
  { number: 31, title: "Event Media Blog of the Year" },
  { number: 32, title: "Newspaper of the year" },
  { number: 33, title: "Radio Station of the year" },
  { number: 34, title: "Frame Vendor of the year" },
]

export default function NominationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-10 md:py-24">
        <div className="mb-16 text-center">
          <p className="text-gray-600 text-sm md:text-base tracking-widest mb-4 font-sans uppercase">
            Photography/Cinematography Industry and Award Night 2024
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-black font-serif">NOMINATION CATEGORIES</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="space-y-4">
            {categories.slice(0, 17).map((category) => (
              <div
                key={category.number}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold font-sans text-sm">{category.number}</span>
                </div>
                <p className="text-black font-medium pt-2 font-sans">{category.title}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {categories.slice(17).map((category) => (
              <div
                key={category.number}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold font-sans text-sm">{category.number}</span>
                </div>
                <p className="text-black font-medium pt-2 font-sans">{category.title}</p>
              </div>
            ))}

            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-black">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-black" />
                <h3 className="text-xl font-bold text-black font-serif">Ready to Nominate?</h3>
              </div>
              <p className="text-gray-600 mb-4 font-sans">For further inquiry please reach out to us via:</p>
              <div className="space-y-2 text-black font-sans">
                <p className="font-semibold">07064976480, 07013 682 5543</p>
                <p className="text-sm text-gray-600">www.pcinaawards.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
<DecorativeBorder />
      <Footer />
    </div>
  )
}
