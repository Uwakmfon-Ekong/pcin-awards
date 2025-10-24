"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/pcinlogo.png";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 ">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="PCIN Logo" className="w-30 h-30" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/gallery" className="hover:text-primary transition">
            Gallery
          </Link>
          <Link href="/sponsorship" className="hover:text-primary transition">
            Sponsorship
          </Link>
          <Link
            href="/partners"
            className="hover:text-primary transition"
          >
            Partners & Friends
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Link href="/nomination">
            <button className="bg-primary cursor-pointer hover:bg-primary/80 text-white px-6 py-2 rounded-lg transition shadow-lg hover:shadow-primary/50">
              NOMINATE
            </button>
          </Link>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden h-[100vh]  bg-white text-black flex flex-col  px-6 gap-6 py-6">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/sponsorship" onClick={() => setMenuOpen(false)}>
            Sponsorship
          </Link>
          <Link href="/partners" onClick={() => setMenuOpen(false)}>
            Partners & Friends
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/nomination" onClick={() => setMenuOpen(false)}>
            <Button className="bg-primary w-full  text-white px-6 py-2 rounded-[20px]">
              NOMINATE
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
