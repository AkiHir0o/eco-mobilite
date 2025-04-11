import type { MetadataRoute } from "next"

// Génération dynamique du sitemap pour le SEO
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ecomouv.fr"

  // Liste des routes statiques
  const routes = [
    "",
    "/calculateur",
    "/carte",
    "/defi",
    "/conseils",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cgu",
    "/cgv",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
