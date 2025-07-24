"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"
import { FaFootball } from "react-icons/fa6"

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Players", path: "/players" },
  { label: "Live Scores", path: "/livescore" },
  { label: "Submit Profile", path: "/submit-profile" },
  { label: "Agent", path: "/agent" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
  { label: "Shop", path: "/shop" },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isShopOrCart = pathname.startsWith("/shop") || pathname === "/cart" || pathname === "/shop/cart"
  const isCartPage = pathname === "/cart" || pathname === "/shop/cart"

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-primary-card sticky top-0 z-50 border-b border-divider shadow-sm">
      <div className="max-w-full mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-poppins font-bold text-2xl text-accent-blue cursor-pointer flex items-center gap-2">
            <div className="block  md:hidden">
              <FaFootball className="rounded-full" />
            </div>
            <div className="hidden md:block md:text-lg xl:text-2xl">
              FootballBank<span className="text-accent-red">.soccer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6  text-nowrap">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`transition-colors ${
                  pathname === path
                    ? "text-accent-red font-semibold"
                    : "text-primary-text hover:text-accent-red"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Always visible cart icon if on shop/cart pages */}
            {isShopOrCart && (
              <Link href="/shop/cart" className="relative">
                <FaShoppingCart
                  className={`text-xl ${
                    isCartPage ? "text-accent-red" : "text-accent-red hover:text-[var(--accent)]"
                  }`}
                />
              </Link>
            )}
            <Link
              href="/signup"
              className="hidden lg:block bg-accent-red hover:bg-opacity-90 text-white px-4 py-2 rounded-md font-medium text-nowrap"
            >
              Sign Up
            </Link>
            <button onClick={toggleMenu} className="lg:hidden text-primary-text">
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-primary-card z-50 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col p-6 space-y-4 pt-24">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`text-base ${
                pathname === path
                  ? "text-accent-red font-semibold"
                  : "text-primary-text hover:text-accent-red"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/signup"
            className="bg-accent-red text-white text-center py-2 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Optional backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}
