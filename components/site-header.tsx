"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Calculateur", path: "/calculateur" },
    { name: "Carte", path: "/carte" },
    { name: "Défi", path: "/defi" },
    { name: "Conseils", path: "/conseils" },
  ]

  // Utilisation de useCallback pour éviter les re-rendus inutiles
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-eco-100 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1" aria-label="Accueil ÉcoMouv'">
            <Image
              src="/logo.svg"
              alt="Logo ÉcoMouv'"
              width={56}
              height={56}
              className="h-14 w-14"
              priority // Priorité pour les images above the fold
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1E3A29]">ÉcoMouv'</span>
              <span className="text-xs text-eco-600 -mt-1">Moins de moteur, plus de bonheur</span>
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6" aria-label="Navigation principale">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-eco-600 focus:outline-none focus:ring-2 focus:ring-eco-600 focus:ring-offset-2 rounded-md px-2 py-1",
                  pathname === route.path ? "text-eco-600" : "text-gray-600",
                )}
                aria-current={pathname === route.path ? "page" : undefined}
              >
                {route.name}
              </Link>
            ))}
          </nav>
          <Button asChild variant="default" className="bg-eco-600 hover:bg-eco-700">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-600 focus:ring-offset-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="container py-4 flex flex-col gap-4" aria-label="Navigation mobile">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-eco-600 py-2 focus:outline-none focus:ring-2 focus:ring-eco-600 focus:ring-offset-2 rounded-md px-2",
                  pathname === route.path ? "text-eco-600" : "text-gray-600",
                )}
                onClick={closeMenu}
                aria-current={pathname === route.path ? "page" : undefined}
              >
                {route.name}
              </Link>
            ))}
            <div className="mt-2">
              <Button asChild variant="default" className="w-full bg-eco-600 hover:bg-eco-700">
                <Link href="/contact" onClick={closeMenu}>
                  Nous contacter
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
