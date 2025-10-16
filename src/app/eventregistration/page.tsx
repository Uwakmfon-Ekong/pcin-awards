import { DecorativeBorder } from "../components/decorativebackground"
import { Navigation } from "../components/navbar"


export default function EventRegistration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <DecorativeBorder />

      <main className="container mx-auto px-4 py-10 md:py-24">
        <div className="mb-16 text-center">
          <p className="text-gray-600 text-sm md:text-base tracking-widest mb-4 font-sans uppercase">
            Photography/Cinematography Industry and Award Night 2024
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-black font-serif">EVENT REGISTRATION</h1>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-black font-serif">Register for the Event</h2>
          <form action="https://formspree.io/f/mnqyojpj" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full h-12 px-4 border-b border-gray-300 rounded-md focus:outline-none text-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full h-12 px-4 border-b border-gray-300 rounded-md focus:outline-none text-black"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-4 border-b border-gray-300 rounded-md focus:outline-none text-black"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full h-12 px-4 border-b border-gray-300 rounded-md focus:outline-none text-black"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="organization" className="text-sm font-medium text-gray-700">
                Organization (if applicable)
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                placeholder="Enter your organization"
                className="w-full h-12 px-4 border-b border-gray-300 rounded-md focus:outline-none text-black"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="guests" className="text-sm font-medium text-gray-700">
                Number of Guests
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="0"
                placeholder="Enter number of guests"
                className="w-full h-12 px-4 border-b border-gray-300 rounded-md focus:outline-none text-black"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="comments" className="text-sm font-medium text-gray-700">
                Additional Comments or Requirements
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                placeholder="Enter any additional comments or requirements"
                className="w-full px-4 py-2 border-b border-gray-300 rounded-md focus:outline-none text-black"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition-colors"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )    
}     