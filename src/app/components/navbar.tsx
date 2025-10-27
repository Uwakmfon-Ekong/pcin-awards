"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/pcinlogo.png";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sponsorship", href: "/sponsorship" },
    { name: "2025 edition", href: "/thisedition" },
    { name: "Partners & Friends", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:px-6 md:py-4">
    <Link href="/" className="flex items-center">
      <Image src={logo} alt="PCIN Logo" className="h-20 w-auto md:h-30" priority />
    </Link>
    



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`transition ${
                pathname === href
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link href="/nomination">
            <button className="bg-primary cursor-pointer hover:bg-primary/80 text-white px-6 py-2 rounded-lg transition shadow-lg hover:shadow-primary/50">
              NOMINATE
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden h-[100vh] bg-white text-black flex flex-col px-6 gap-6 py-6">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                pathname === href ? "text-primary font-semibold" : ""
              }`}
            >
              {name}
            </Link>
          ))}
          <Link href="/nomination" onClick={() => setMenuOpen(false)}>
            <Button className="bg-primary w-full text-white px-6 py-2 rounded-[20px]">
              NOMINATE
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
