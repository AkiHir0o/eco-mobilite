import type { MetadataRoute } from "next"

// Configuration des robots pour le SEO
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://ecomouv.fr/sitemap.xml",
  }
}
