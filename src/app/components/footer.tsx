import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import Logo from "../../../public/pcinlogo.png"

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 font-poppins">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <Image src={Logo} alt="PCIN Logo" className="w-32 h-auto mb-4" />
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link href="/gallery" className="hover:text-primary">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-white/70 text-sm">
           <li> <a
                  href="mailto:pcinaofficial@gmail.com"
                  className=" hover:text-primary transition-colors"
                >
                 pcinaofficial@gmail.com
                </a></li>
            <li>Phone: +234 706 487 6480</li>
            <li>Address: Uyo, Nigeria</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <Link
              href="https://www.instagram.com/pcinaofficial/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:border-primary hover:text-primary"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://web.facebook.com/pcinawards"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:border-primary hover:text-primary"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/Pcina274175"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:border-primary hover:text-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} PCIN Awards. All rights reserved. | Developed by{" "}
        <Link href="#" className="hover:text-primary">Whakee</Link>
      </div>
    </footer>
  )
}
