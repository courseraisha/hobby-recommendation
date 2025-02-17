// NavigationMenu.js
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-[#8B1E3F]" />
        ) : (
          <Menu className="h-6 w-6 text-[#8B1E3F]" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4">
      {["Home", "Quiz", "Blogs", "Progress", "FAQ"].map((item) => (
        <Link
          key={item}
          href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
          className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium py-2 px-4 rounded hover:shadow-lg"
        >
          {item}
        </Link>
      ))}
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t absolute top-16 left-0 right-0 bg-white backdrop-blur-sm">
        {["Home", "Quiz", "Blogs", "Progress", "FAQ"].map((item) => (
          <Link
            key={item}
            href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
            className="block px-4 py-3 text-[#8B1E3F] hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
        </nav>
      )}
    </>
  )
}