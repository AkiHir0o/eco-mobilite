"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import dynamic from "next/dynamic"
// Ajouter l'import en haut du fichier
import SiteFooter from "@/components/site-footer"

// Import dynamique de la carte Leaflet pour éviter les erreurs SSR
const MapLeaflet = dynamic(() => import("@/components/map-leaflet"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-eco-50 flex items-center justify-center">Chargement de la carte...</div>
  ),
})

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Carte interactive</h1>
        <p className="text-gray-600 mb-8">
          Explorez les infrastructures de transport doux et découvrez comment votre ville favorise la mobilité douce.
        </p>

        <Tabs defaultValue="all" onValueChange={(value) => setActiveFilter(value === "all" ? null : value)}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">Tout afficher</TabsTrigger>
            <TabsTrigger value="bikePath">Pistes cyclables</TabsTrigger>
            <TabsTrigger value="pedestrianZone">Zones piétonnes</TabsTrigger>
            <TabsTrigger value="bikeStation">Stations Vélos</TabsTrigger>
          </TabsList>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>ÉcoMobile - Carte des aménagements</CardTitle>
            <CardDescription>Cliquez sur les points d'intérêt pour plus d'informations</CardDescription>
          </CardHeader>
          <CardContent>
            <MapLeaflet activeFilter={activeFilter} />

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-eco-600 mr-1"></div>
                <span className="text-sm text-gray-600">Pistes cyclables</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-eco-500 mr-1"></div>
                <span className="text-sm text-gray-600">Zones piétonnes</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-eco-700 mr-1"></div>
                <span className="text-sm text-gray-600">Stations Vélos</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Ajouter le footer à la fin du composant, juste avant la fermeture de la balise </> : */}
      <SiteFooter />
    </>
  )
}
