"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Atrações", href: "#attractions" },
  { name: "Programação", href: "#schedule" },
  { name: "Galeria", href: "#gallery" },
  { name: "Informações", href: "#info" },
  { name: "Notícias", href: "#news" },
  { name: "Contato", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-lg sm:text-2xl font-bold text-orange hover:text-green-light transition-colors duration-300 flex items-center gap-1 sm:gap-2"
            >
              <img 
                src="/lua.png" 
                alt="Festival da Lua" 
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
              <span className="hidden xs:inline">Festival da Lua</span>
              <span className="xs:hidden">Festival</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-green-light hover:text-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault()
                    const targetId = item.href.slice(1)
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      const yOffset = -80
                      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
                      window.scrollTo({ top: y, behavior: "smooth" })
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-green-light hover:text-orange hover:bg-green-light hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange"
            >
              {isOpen ? <X className="block h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="block h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[var(--festival-green-dark)] shadow-md border-t border-green-light border-opacity-20"
        >
          <div className="px-3 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-green-light hover:text-orange block px-3 py-2 rounded-md text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  const targetId = item.href.slice(1)
                  const targetElement = document.getElementById(targetId)
                  if (targetElement) {
                    const yOffset = -80
                    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
