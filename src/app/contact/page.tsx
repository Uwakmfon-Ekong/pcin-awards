"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "../components/navbar";
import { ContactForm } from "../components/contactForm";
import { Footer } from "../components/footer";
import { Mail, Phone, Instagram, Youtube, Facebook } from "lucide-react";
import Link from "next/link";
import { DecorativeBorder } from "../components/decorativebackground";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      value: "pcinaofficial@gmail.com",
      href: "mailto:pcinaofficial@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone",
      value: "+234 815 304 2126",
      href: "tel:+2348153042126",
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5 text-white" />, href: "https://instagram.com/pcinaofficial" },
    { icon: <Facebook className="h-5 w-5 text-white" />, href: "https://facebook.com/pcinawards" },
    {
      icon: (
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/pcina274175",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-slate-900">
      <Navigation />
      <DecorativeBorder />

      <main className="container mx-auto w-full py-24 lg:px-12  lg:py-24">
        <header className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have questions, inquiries, or want to nominate? Reach out to us through any of the methods below.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row xl:items-center gap-12 lg:gap-16 ">
         
          <div className="space-y-8 W-full px-6 lg:w-1/2">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                data-aos="fade-right"
                data-aos-delay={idx * 100}
                className="flex items-center gap-4 space-y-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-transform duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{method.title}</h3>
                  <p className="text-gray-500">{method.value}</p>
                </div>
              </a>
            ))}

            <div data-aos="fade-up" className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary border border-white/20 hover:bg-white  transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div data-aos="fade-left" className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
