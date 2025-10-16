"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/pcinlogo.png"
import { Button } from "./button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDarkBg, setIsDarkBg] = useState(false)

  // Detect dark background behind navbar (scroll-based)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bg = window.getComputedStyle(entry.target).backgroundColor
            const [r, g, b] = bg.match(/\d+/g)?.map(Number) || [255, 255, 255]
            const brightness = (r * 299 + g * 587 + b * 114) / 1000
            setIsDarkBg(brightness < 128)
          }
        })
      },
      { threshold: 0.6 }
    )

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const linkColor = isDarkBg ? "text-white hover:text-orange-400" : "text-gray-900 hover:text-orange-600"

  return (
    <nav
      className={`relative z-30 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 transition-colors duration-300 ${
        isDarkBg ? "text-white" : "text-gray-900"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <Image src={logo} alt="PCIN Logo" className="w-28 h-auto object-contain" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/gallery", label: "Gallery" },
          { href: "/eventregistration", label: "Registration" },
          { href: "/partners", label: "Partners" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${linkColor} text-base lg:text-lg font-medium transition-colors`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Nominate Button (Desktop) */}
      <div className="hidden md:block">
        <Link href="/nomination">
          <Button className="bg-orange-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-orange-700 transition-all duration-300">
            NOMINATE
          </Button>
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`md:hidden ${isDarkBg ? "text-white" : "text-gray-900"}`}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute h-[100vh] top-full left-0 w-full backdrop-blur-md ${
          isDarkBg ? "bg-gray-900/90 text-white" : "bg-white/90 text-gray-900"
        } shadow-lg md:hidden flex flex-col items-center gap-4 py-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/gallery", label: "Gallery" },
          { href: "/eventregistration", label: "Event Registration" },
          { href: "/partners", label: "Partners & Sponsors" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-orange-500 text-lg font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}

        <Link href="/nomination" onClick={() => setMenuOpen(false)}>
          <Button className="bg-orange-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-orange-700 transition-all duration-300">
            NOMINATE
          </Button>
        </Link>
      </div>
    </nav>
  )
}
