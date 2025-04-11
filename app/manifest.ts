import type { MetadataRoute } from "next"

// Manifest pour les PWA
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ÉcoMouv'",
    short_name: "ÉcoMouv'",
    description: "Transports doux pour un avenir durable",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16a34a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
