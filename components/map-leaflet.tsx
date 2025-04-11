"use client"

import { useEffect, useRef, useState, memo } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Bike, MapPin, Users } from "lucide-react"

type MapPoint = {
  id: number
  type: "bikePath" | "pedestrianZone" | "bikeStation"
  lat: number
  lng: number
  title: string
  description: string
  stats: string
}

// Points d'intérêt réels de Bordeaux
const mapPoints: MapPoint[] = [
  {
    id: 1,
    type: "bikePath",
    lat: 44.841792,
    lng: -0.573557,
    title: "Piste cyclable des quais",
    description: "Piste cyclable longeant la Garonne sur les quais de Bordeaux.",
    stats: "4,5 km de longueur, l'une des plus fréquentées de la ville avec plus de 1000 cyclistes par jour",
  },
  {
    id: 2,
    type: "pedestrianZone",
    lat: 44.837789,
    lng: -0.57918,
    title: "Rue Sainte-Catherine",
    description: "La plus longue rue piétonne d'Europe avec ses nombreuses boutiques et restaurants.",
    stats: "1,2 km de longueur, accueille plus de 60 000 visiteurs par jour",
  },
  {
    id: 3,
    type: "bikeStation",
    lat: 44.840405,
    lng: -0.570788,
    title: "Station VCub Place de la Bourse",
    description: "Station de vélos en libre-service située face au miroir d'eau.",
    stats: "20 emplacements, l'une des stations les plus utilisées du réseau VCub",
  },
  {
    id: 4,
    type: "bikePath",
    lat: 44.829647,
    lng: -0.566797,
    title: "Pont de Pierre - Voie cyclable",
    description: "Voie cyclable traversant la Garonne sur le Pont de Pierre historique.",
    stats: "Permet à plus de 2000 cyclistes par jour de traverser la Garonne en toute sécurité",
  },
  {
    id: 5,
    type: "pedestrianZone",
    lat: 44.843293,
    lng: -0.57544,
    title: "Place des Quinconces",
    description: "L'une des plus grandes places d'Europe avec de nombreux espaces piétons.",
    stats: "12 hectares d'espace public, lieu de nombreux événements et rassemblements",
  },
  {
    id: 6,
    type: "bikeStation",
    lat: 44.835655,
    lng: -0.580777,
    title: "Station VCub Place de la Victoire",
    description: "Station de vélos en libre-service au cœur de la vie étudiante.",
    stats: "25 emplacements, très utilisée par les étudiants de l'Université de Bordeaux",
  },
  {
    id: 7,
    type: "bikePath",
    lat: 44.851192,
    lng: -0.572133,
    title: "Piste cyclable Bordeaux-Blanquefort",
    description: "Voie verte reliant Bordeaux à sa périphérie nord.",
    stats: "8 km de piste sécurisée, utilisée par les navetteurs quotidiens",
  },
  {
    id: 8,
    type: "pedestrianZone",
    lat: 44.838861,
    lng: -0.571852,
    title: "Place de la Bourse",
    description: "Place historique avec son célèbre miroir d'eau, entièrement piétonne.",
    stats: "Réduit les émissions de CO2 de 1,5 tonnes par mois grâce à l'absence de véhicules",
  },
]

// Composant pour créer des icônes personnalisées
const createCustomIcon = (type: string) => {
  const getColor = () => {
    switch (type) {
      case "bikePath":
        return "#16a34a" // eco-600
      case "pedestrianZone":
        return "#22c55e" // eco-500
      case "bikeStation":
        return "#15803d" // eco-700
      default:
        return "#6b7280"
    }
  }

  return L.divIcon({
    className: "custom-icon",
    html: `<div style="background-color: ${getColor()}; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">
      ${
        type === "bikePath"
          ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>'
          : type === "pedestrianZone"
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
      }
    </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15], // Positionne la popup au-dessus du marqueur
  })
}

// Composant pour centrer la carte
function SetViewOnChange({ center }: { center: [number, number] }) {
  const map = useMap()
  map.setView(center, map.getZoom())
  return null
}

// Memoization du composant pour éviter les re-rendus inutiles
const MapLeaflet = memo(function MapLeaflet({ activeFilter }: { activeFilter: string | null }) {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null)
  const mapRef = useRef<L.Map | null>(null)
  const [filteredPoints, setFilteredPoints] = useState<MapPoint[]>(mapPoints)

  // Fix pour les icônes Leaflet dans Next.js
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    })
  }, [])

  useEffect(() => {
    setFilteredPoints(activeFilter ? mapPoints.filter((point) => point.type === activeFilter) : mapPoints)
  }, [activeFilter])

  const getIconForType = (type: string) => {
    switch (type) {
      case "bikePath":
        return <Bike className="h-5 w-5" />
      case "pedestrianZone":
        return <Users className="h-5 w-5" />
      case "bikeStation":
        return <MapPin className="h-5 w-5" />
      default:
        return <MapPin className="h-5 w-5" />
    }
  }

  const getColorForType = (type: string) => {
    switch (type) {
      case "bikePath":
        return "bg-eco-600"
      case "pedestrianZone":
        return "bg-eco-500"
      case "bikeStation":
        return "bg-eco-700"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="h-[500px] w-full relative z-0">
      <MapContainer
        center={[44.837789, -0.57918]} // Centré sur Bordeaux
        zoom={14}
        style={{ height: "100%", width: "100%" }}
        whenCreated={(map) => {
          mapRef.current = map
        }}
      >
        {/* Utilisation du fond de carte CartoDB */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {filteredPoints.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={createCustomIcon(point.type)}
            eventHandlers={{
              click: () => {
                setSelectedPoint(point)
              },
            }}
          >
            <Popup className="leaflet-popup-custom">
              <div className="p-2 max-w-[250px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`rounded-full p-1 text-white ${getColorForType(point.type)}`}>
                    {getIconForType(point.type)}
                  </div>
                  <h3 className="font-bold text-sm">{point.title.replace("Bordeaux", "")}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-2">{point.description}</p>
                <div className="bg-eco-50 p-2 rounded text-xs">
                  <strong>Le saviez-vous ?</strong> {point.stats}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {selectedPoint && <SetViewOnChange center={[selectedPoint.lat, selectedPoint.lng]} />}
      </MapContainer>
    </div>
  )
})

export default MapLeaflet
