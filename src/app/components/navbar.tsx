"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/pcinlogo.png";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="PCIN Logo"
            width={140}
            height={80}
            className="w-auto h-14 md:h-26 lg:h-26 object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-white text-sm">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`transition ${
                pathname === href
                  ? "text-[#FF7A00] font-semibold"
                  : "hover:text-[#FF7A00]"
              }`}
            >
              {name}
            </Link>
          ))}

          <Link href="/nomination">
            <button className="bg-[#FF7A00] hover:bg-[#d96800] transition text-white px-6 py-2 rounded-lg shadow">
              NOMINATE
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden h-100vh bg-white text-black flex flex-col gap-6 px-6 py-6 shadow-md animate-slideDown">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                pathname === href ? "text-[#FF7A00] font-semibold" : ""
              }`}
            >
              {name}
            </Link>
          ))}
          <Link href="/nomination" onClick={() => setMenuOpen(false)}>
            <button className="bg-[#FF7A00] w-full py-2 rounded-lg text-white">
              NOMINATE
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
