import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Fonction utilitaire pour combiner les classes CSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fonction pour optimiser les images avec next/image
export function getImageProps(src: string, width: number, height: number, alt = "") {
  return {
    src,
    width,
    height,
    alt,
    loading: "lazy" as const,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  }
}

// Fonction pour formater les nombres
export function formatNumber(num: number, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat("fr-FR", options).format(num)
}

// Fonction pour formater les dates
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}
