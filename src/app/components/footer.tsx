import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"
import Image from "next/image"
import Logo from "../../../public/pcinlogo.png"

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 font-poppins overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:gap-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-8">
          
          {/* Left: Links */}
          <div className="lg:w-1/3 flex items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <Link
              href="#submit-nomination"
              className="flex items-center gap-2 hover:text-[#06cbdc] transition-colors font-roboto"
            >
              <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                <span className="text-xs">+</span>
              </div>
              <span>Submit Exhibition</span>
            </Link>

            <Link
              href="#event-registration"
              className="flex items-center gap-2 hover:text-[#5074fc] transition-colors font-roboto"
            >
              <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                <span className="text-xs">+</span>
              </div>
              <span>Event Registration</span>
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="w-1/3 flex justify-center ">
            <Image
              src={Logo}
              alt="PCIN Logo"
              className="w-40 h-auto sm:w-48 md:w-56 object-contain"
              priority
            />
          </div>

          {/* Right: Social Media */}
          <div className="w-1/3 flex items-center justify-center gap-4">
            {[
              { href: "https://instagram.com", icon: <Instagram className="w-5 h-5" /> },
              { href: "https://youtube.com", icon: <Youtube className="w-5 h-5" /> },
              { href: "https://facebook.com", icon: <Facebook className="w-5 h-5" /> },
              {
                href: "https://x.com",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map(({ href, icon }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#06cbdc] hover:text-[#06cbdc] transition-colors"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm sm:text-base text-white/50 mt-6">
          <p>
            Developed by{" "}
            <Link href="#" className="hover:text-[#06cbdc] transition-colors">
              Whakee
            </Link>{" "}
            © {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  )
}
