"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/pcinlogo.png"
import { Menu, X } from "lucide-react"
import { Button } from "./button"

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 ">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="PCIN Logo" className="w-30 h-30" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white">
          {["Home", "About", "Gallery", "Sponsorship", "Partners&friends", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-primary transition">
              {item}
            </Link>
          ))}
          <Link href="/nomination">
            <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg transition shadow-lg hover:shadow-primary/50">
              NOMINATE
            </button>
          </Link>
        </div>

        <button className="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden h-[100vh] bg-white text-black flex flex-col items-center gap-6 py-6">
          {["Home", "About", "Gallery", "Sponsorship", "Partners&friends", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}
          <Link href="/nomination">
            <Button className="bg-primary text-white px-6 py-2 rounded-[20px]">NOMINATE</Button>
          </Link>
        </div>
      )}
    </nav>
  )
}
