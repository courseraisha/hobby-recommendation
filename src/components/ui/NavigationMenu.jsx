// NavigationMenu.js
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ["Home", "Quiz", "Blogs", "Progress", "About Us", "FAQ"]

  const getHref = (item) => {
    if (item.toLowerCase() === "home") return "/"
    if (item.toLowerCase() === "about us") return "/about"
    return `/${item.toLowerCase()}`
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        {menuItems.map((item) => (
          <Link
            key={item}
            href={getHref(item)}
            className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium py-2 px-4 rounded hover:shadow-lg"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t absolute top-16 left-0 right-0 bg-white backdrop-blur-sm">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={getHref(item)}
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