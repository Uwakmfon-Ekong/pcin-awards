import { Navigation } from "../components/navbar"
import { ContactForm } from "../components/contactForm";
import { Footer } from "../components/footer"
import { Mail, Phone, Instagram, Youtube, Facebook } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-foreground font-poppins ">
      <Navigation />

      <main className="container mx-auto px-6 py-16 lg:px-12 lg:py-24 font-poppins">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left side - Contact details */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-background">Contact details</h1>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                  <Mail className="h-5 w-5 text-background" />
                </div>
                <a
                  href="mailto:aksphotoandvideoguild@gmail.com"
                  className="text-background hover:text-primary transition-colors text-lg"
                >
                 aksphotoandvideoguild@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                  <Phone className="h-5 w-5 text-background" />
                </div>
                <a href="tel:+2348153042126" className="text-background hover:text-primary transition-colors text-lg">
                  +234 815 304 2126
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              >
                <Youtube className="h-5 w-5 text-foreground" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              >
                <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
