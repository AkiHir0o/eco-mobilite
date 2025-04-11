"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
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

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-eco-100 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" alt="ÉcoMouv' Logo" width={56} height={56} className="h-14 w-14" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1E3A29]">ÉcoMouv'</span>
              <span className="text-xs text-eco-600 -mt-1">Moins de moteur, plus de bonheur</span>
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-eco-600",
                  pathname === route.path ? "text-eco-600" : "text-gray-600",
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>
          <Button asChild className="bg-eco-600 hover:bg-eco-700 text-white">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container py-4 flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-eco-600 py-2",
                  pathname === route.path ? "text-eco-600" : "text-gray-600",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Button asChild className="bg-eco-600 hover:bg-eco-700 text-white mt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Nous contacter
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
