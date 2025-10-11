"use client"
import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/pcinlogo.svg'
// import { Button } from "@/components/ui/button"


export function Navigation() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-12">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="flex items-center gap-2">
         <Image src={logo} className="w-30 h-30" alt="PCIN Logo" />
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-foreground hover:underline transition-colors text-sm font-medium">
          Home
        </Link>
        <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
          About
        </Link>
        <Link href="/awards" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
          2025 Awards
        </Link>
        <Link href="/partners" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
          Partners & Sponsors
        </Link>
        <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
          Contact
        </Link>
      </div>

      <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">NOMINATE</button>
    </nav>
  )
}
