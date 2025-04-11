"use client"

import { useState } from "react"
import { Bike, Footprints, Bus, Search, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"

type Advice = {
  id: number
  title: string
  description: string
  category: string
  icon: JSX.Element
  tips: string[]
  difficulty: "easy" | "medium" | "hard"
}

// Conseils plus pertinents et concrets
const adviceData: Advice[] = [
  {
    id: 1,
    title: "Débuter le vélo en ville",
    description: "Conseils pour commencer à se déplacer à vélo en milieu urbain en toute sécurité.",
    category: "velo",
    icon: <Bike className="h-6 w-6" />,
    tips: [
      "Commencez par des trajets courts (moins de 5 km) et évitez les heures de pointe",
      "Investissez dans un casque de qualité et des lumières puissantes (avant blanche, arrière rouge)",
      "Utilisez des applications comme Geovelo pour trouver les itinéraires cyclables sécurisés",
      "Apprenez les gestes de signalisation manuelle pour indiquer vos changements de direction",
      "Positionnez-vous correctement sur la chaussée : ni trop à droite, ni trop au centre",
      "Anticipez les obstacles : portières de voitures, piétons, nids-de-poule",
    ],
    difficulty: "easy",
  },
  {
    id: 2,
    title: "Équipement essentiel pour le vélo",
    description: "Les accessoires indispensables pour une pratique confortable et sécurisée du vélo.",
    category: "velo",
    icon: <Bike className="h-6 w-6" />,
    tips: [
      "Un casque à votre taille avec certification CE EN 1078",
      "Des lumières puissantes : 100+ lumens à l'avant, LED rouge visible à 150m à l'arrière",
      "Un antivol en U de qualité (évitez les câbles facilement sectionnables)",
      "Des vêtements réfléchissants ou un gilet haute visibilité pour la nuit",
      "Des garde-boue pour les jours de pluie et un porte-bagages pour vos affaires",
      "Un kit de réparation basique : pompe, démonte-pneus, chambre à air de rechange",
    ],
    difficulty: "medium",
  },
  {
    id: 3,
    title: "Optimiser ses trajets quotidiens",
    description: "Comment intégrer plus de marche dans votre routine quotidienne sans perdre de temps.",
    category: "marche",
    icon: <Footprints className="h-6 w-6" />,
    tips: [
      "Descendez un arrêt plus tôt du bus ou métro pour ajouter 10-15 minutes de marche",
      "Utilisez une application de comptage de pas avec des objectifs progressifs (commencez à 5000/jour)",
      "Remplacez les courts trajets en voiture (moins de 1 km) par de la marche",
      "Transformez vos pauses déjeuner en promenades de 15-20 minutes",
      "Organisez des réunions en marchant pour les discussions informelles",
      "Stationnez volontairement plus loin de votre destination finale",
    ],
    difficulty: "easy",
  },
  {
    id: 4,
    title: "Choisir les bons itinéraires piétons",
    description: "Comment trouver et planifier les meilleurs chemins pour vos déplacements à pied.",
    category: "marche",
    icon: <Footprints className="h-6 w-6" />,
    tips: [
      "Utilisez des applications comme Citymapper qui proposent des itinéraires piétons optimisés",
      "Privilégiez les rues avec des trottoirs larges (minimum 1,5m) et bien entretenus",
      "Évitez les grands axes routiers et préférez les zones 30 ou rues piétonnes",
      "Explorez votre quartier pour découvrir les passages et raccourcis cachés",
      "Alternez entre plusieurs itinéraires pour éviter la monotonie",
      "Choisissez des parcours avec des espaces verts pour améliorer votre bien-être",
    ],
    difficulty: "easy",
  },
  {
    id: 5,
    title: "Multimodalité efficace",
    description: "Comment combiner intelligemment différents modes de transport pour des trajets optimaux.",
    category: "transport",
    icon: <Bus className="h-6 w-6" />,
    tips: [
      "Téléchargez l'application officielle de votre réseau de transport pour les horaires en temps réel",
      "Identifiez les pôles d'échange où vous pouvez facilement passer d'un mode à l'autre",
      "Renseignez-vous sur les abonnements combinés (transport public + vélo en libre-service)",
      "Utilisez un vélo pliable pour les premiers/derniers kilomètres (autorisé dans les transports)",
      "Planifiez vos trajets avec des applications multimodales comme Moovit ou Transit",
      "Voyagez en dehors des heures de pointe quand c'est possible (7h-9h et 17h-19h)",
    ],
    difficulty: "medium",
  },
  {
    id: 6,
    title: "Entretien basique de votre vélo",
    description: "Les gestes essentiels pour maintenir votre vélo en bon état sans être mécanicien.",
    category: "velo",
    icon: <Bike className="h-6 w-6" />,
    tips: [
      "Vérifiez la pression des pneus chaque semaine (la valeur recommandée est inscrite sur le flanc)",
      "Nettoyez et lubrifiez votre chaîne tous les 200-300 km ou après la pluie",
      "Contrôlez régulièrement l'usure des plaquettes de frein (elles doivent avoir au moins 1mm d'épaisseur)",
      "Serrez les boulons et écrous tous les mois avec une clé adaptée",
      "Apprenez à réparer une crevaison vous-même (nombreux tutoriels en ligne)",
      "Faites réviser votre vélo par un professionnel une fois par an ou tous les 2000 km",
    ],
    difficulty: "medium",
  },
  {
    id: 7,
    title: "Équipement pour la marche quotidienne",
    description: "Comment s'équiper pour marcher confortablement au quotidien, quelle que soit la météo.",
    category: "marche",
    icon: <Footprints className="h-6 w-6" />,
    tips: [
      "Investissez dans des chaussures avec semelles amortissantes et support de voûte plantaire",
      "Choisissez des matériaux respirants et évitez les coutures aux points de friction",
      "Optez pour des chaussettes techniques anti-ampoules en fibres synthétiques (pas de coton)",
      "Prévoyez un petit sac à dos ergonomique pour transporter vos affaires",
      "Équipez-vous d'une veste imperméable légère et compressible pour les imprévus météo",
      "Utilisez des semelles orthopédiques si vous avez des problèmes de pieds ou de posture",
    ],
    difficulty: "easy",
  },
  {
    id: 8,
    title: "Réduire l'impact environnemental de vos déplacements",
    description: "Actions concrètes pour minimiser votre empreinte carbone liée aux transports.",
    category: "transport",
    icon: <Bus className="h-6 w-6" />,
    tips: [
      "Regroupez vos déplacements pour réduire le nombre de trajets hebdomadaires",
      "Pratiquez le covoiturage pour les trajets domicile-travail (applications comme BlaBlaCar Daily)",
      "Négociez avec votre employeur 1-2 jours de télétravail par semaine",
      "Pour les longues distances, privilégiez le train à l'avion quand c'est possible",
      "Adoptez l'écoconduite si vous devez utiliser une voiture (accélérations douces, anticipation)",
      "Envisagez l'autopartage plutôt que la possession d'un véhicule personnel",
    ],
    difficulty: "medium",
  },
]

export default function AdvicePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAdvice, setSelectedAdvice] = useState<Advice | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const filteredAdvice = adviceData.filter((advice) => {
    const matchesCategory = activeCategory ? advice.category === activeCategory : true
    const matchesSearch = searchQuery
      ? advice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        advice.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-emerald-100 text-emerald-800"
      case "medium":
        return "bg-amber-100 text-amber-800"
      case "hard":
        return "bg-rose-100 text-rose-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "velo":
        return <Bike className="h-5 w-5" />
      case "marche":
        return <Footprints className="h-5 w-5" />
      case "transport":
        return <Bus className="h-5 w-5" />
      default:
        return null
    }
  }

  const handleOpenDialog = (advice: Advice) => {
    setSelectedAdvice(advice)
    setDialogOpen(true)
  }

  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Conseils pratiques</h1>
        <p className="text-gray-600 mb-8">
          Découvrez nos conseils pour adopter facilement les transports doux au quotidien.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Rechercher un conseil..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs
            defaultValue="all"
            value={activeCategory === null ? "all" : activeCategory}
            onValueChange={(value) => setActiveCategory(value === "all" ? null : value)}
            className="w-full md:w-auto"
          >
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="velo">Vélo</TabsTrigger>
              <TabsTrigger value="marche">Marche</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAdvice.map((advice) => (
            <motion.div
              key={advice.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        advice.category === "velo"
                          ? "bg-emerald-100 text-emerald-600"
                          : advice.category === "marche"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {advice.icon}
                    </div>
                    <Badge variant="outline" className={`${getDifficultyColor(advice.difficulty)}`}>
                      {advice.difficulty === "easy"
                        ? "Facile"
                        : advice.difficulty === "medium"
                          ? "Intermédiaire"
                          : "Avancé"}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{advice.title}</CardTitle>
                  <CardDescription>{advice.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <Button
                    variant="outline"
                    className="w-full justify-between mt-4"
                    onClick={() => handleOpenDialog(advice)}
                  >
                    Voir les conseils
                    <Info className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredAdvice.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun conseil ne correspond à votre recherche.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("")
                setActiveCategory(null)
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        <div className="mt-12 bg-emerald-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Vous avez d'autres questions ?</h2>
          <p className="mb-4">
            Nous enrichissons régulièrement notre base de conseils. N'hésitez pas à consulter cette page régulièrement
            ou à nous contacter pour des conseils personnalisés.
          </p>
          <Button asChild className="bg-eco-600 hover:bg-eco-700 text-white">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>

      {/* Dialog pour afficher les détails des conseils */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md md:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  selectedAdvice?.category === "velo"
                    ? "bg-emerald-100 text-emerald-600"
                    : selectedAdvice?.category === "marche"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-orange-100 text-orange-600"
                }`}
              >
                {selectedAdvice?.icon}
              </div>
              {selectedAdvice?.title}
            </DialogTitle>
            <DialogDescription>{selectedAdvice?.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="font-medium text-lg mb-3">Conseils pratiques :</h3>
            <ul className="space-y-3">
              {selectedAdvice?.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-eco-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-eco-700 text-xs">{index + 1}</span>
                  </div>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-eco-50 rounded-lg">
              <p className="text-sm text-eco-700 flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>
                  <strong>Difficulté :</strong>{" "}
                  {selectedAdvice?.difficulty === "easy"
                    ? "Facile - Conseils accessibles à tous"
                    : selectedAdvice?.difficulty === "medium"
                      ? "Intermédiaire - Nécessite un peu de préparation"
                      : "Avancé - Pour utilisateurs expérimentés"}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setDialogOpen(false)}>Fermer</Button>
          </div>
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </>
  )
}
