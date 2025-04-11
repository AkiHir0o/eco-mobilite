"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TreeDeciduous, Award, Users, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

type City = {
  name: string
  participants: number
  co2Saved: number
  trees: number
}

const cities: City[] = [
  { name: "Paris", participants: 3245, co2Saved: 32450, trees: 1622 },
  { name: "Lyon", participants: 1980, co2Saved: 19800, trees: 990 },
  { name: "Marseille", participants: 1560, co2Saved: 15600, trees: 780 },
  { name: "Toulouse", participants: 1350, co2Saved: 13500, trees: 675 },
  { name: "Nantes", participants: 1100, co2Saved: 11000, trees: 550 },
]

// Ajouter un useRef pour stocker les arbres et éviter les re-renders inutiles

type Tree = {
  id: number
  x: number
  y: number
  size: number
  color: string
  rotation: number
}

export default function ChallengePage() {
  const [name, setName] = useState("")
  const [transport, setTransport] = useState("")
  const [distance, setDistance] = useState("")
  const [committed, setCommitted] = useState(false)
  const [totalParticipants, setTotalParticipants] = useState(9235)
  const [totalCO2Saved, setTotalCO2Saved] = useState(92350)
  const [totalTrees, setTotalTrees] = useState(4617)

  // Référence pour stocker les arbres et éviter les re-renders
  const treesRef = useRef<Tree[]>([])

  // Générer les arbres une seule fois au chargement initial
  if (treesRef.current.length === 0) {
    treesRef.current = Array.from({ length: Math.min(100, totalTrees) }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60 + 20,
      size: Math.random() * 0.5 + 0.5,
      color: `hsl(${140 + Math.random() * 20 - 10}, ${70 + Math.random() * 10}%, ${30 + Math.random() * 10}%)`,
      rotation: Math.random() * 10 - 5,
    }))
  }

  const [trees, setTrees] = useState<
    {
      x: number
      y: number
      size: number
      delay: number
      hueRotate: number
      opacity: number
    }[]
  >([])

  // const treesRef = useRef(trees)

  const handleCommit = () => {
    if (name && transport && distance) {
      // Calculate impact based on real-world data
      const distanceNum = Number.parseFloat(distance)
      const daysPerWeek = 5 // Assuming weekday commutes
      const weeksPerYear = 48 // Accounting for holidays
      const annualDistance = distanceNum * daysPerWeek * weeksPerYear

      // CO2 savings in g based on transport type (compared to car emissions)
      const co2Impact =
        transport === "bicycle"
          ? annualDistance * 0.130 // Car emissions minus bicycle emissions
          : transport === "walking"
            ? annualDistance * 0.140 // Car emissions minus walking emissions
            : transport === "scooter"
              ? annualDistance * 0.110 // Car emissions minus e-scooter emissions
              : annualDistance * 0.080 // Car emissions minus public transport emissions

      // Update totals
      const newTotalParticipants = totalParticipants + 1
      const newTotalCO2Saved = totalCO2Saved + co2Impact
      const newTotalTrees = totalTrees + Math.floor(co2Impact / 20)

      setTotalParticipants(newTotalParticipants)
      setTotalCO2Saved(newTotalCO2Saved)
      setTotalTrees(newTotalTrees)

      // Mettre à jour les arbres seulement lors de la soumission
      const treesToAdd = Math.floor(co2Impact / 20)
      if (treesToAdd > 0) {
        const currentLength = treesRef.current.length
        const newTrees = Array.from({ length: Math.min(treesToAdd, 100 - currentLength) }).map((_, i) => ({
          id: currentLength + i,
          x: Math.random() * 100,
          y: Math.random() * 60 + 20,
          size: Math.random() * 0.5 + 0.5,
          color: `hsl(${140 + Math.random() * 20 - 10}, ${70 + Math.random() * 10}%, ${30 + Math.random() * 10}%)`,
          rotation: Math.random() * 10 - 5,
        }))

        treesRef.current = [...treesRef.current.slice(0, Math.min(100 - treesToAdd, currentLength)), ...newTrees]
      }

      // Show success state
      setCommitted(true)

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  const resetForm = () => {
    setName("")
    setTransport("")
    setDistance("")
    setCommitted(false)
  }

  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Défi communautaire</h1>
        <p className="text-gray-600 mb-8">
          Rejoignez notre communauté et contribuez à créer un impact positif sur l'environnement.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Notre impact collectif</CardTitle>
                <CardDescription>Ensemble, nous faisons la différence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-eco-50 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-eco-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Participants</p>
                    <motion.p
                      className="text-3xl font-bold text-eco-700"
                      key={totalParticipants}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    >
                      {totalParticipants.toLocaleString()}
                    </motion.p>
                  </div>

                  <div className="bg-eco-50 rounded-lg p-4 text-center">
                    <Award className="h-8 w-8 text-eco-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">CO2 économisé</p>
                    <motion.p
                      className="text-3xl font-bold text-eco-700"
                      key={totalCO2Saved}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    >
                      {(totalCO2Saved / 1000).toFixed(1)} tonnes
                    </motion.p>
                  </div>

                  <div className="bg-eco-50 rounded-lg p-4 text-center">
                    <TreeDeciduous className="h-8 w-8 text-eco-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Arbres virtuels</p>
                    <motion.p
                      className="text-3xl font-bold text-eco-700"
                      key={totalTrees}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    >
                      {totalTrees.toLocaleString()}
                    </motion.p>
                  </div>
                </div>

                {/* Mettre à jour le rendu de la forêt virtuelle pour utiliser treesRef */}
                <div className="relative h-64 bg-eco-50 rounded-lg p-4 overflow-hidden">
                  <h3 className="text-lg font-medium mb-4">Notre forêt virtuelle</h3>
                  <div className="absolute inset-0 pt-12">
                    <div className="relative h-full">
                      {treesRef.current.map((tree) => (
                        <motion.div
                          key={tree.id}
                          className="absolute"
                          style={{
                            left: `${tree.x}%`,
                            top: `${tree.y}%`,
                            transform: `rotate(${tree.rotation}deg)`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: tree.size, opacity: 1 }}
                          transition={{ delay: tree.id * 0.01 }}
                        >
                          <TreeDeciduous
                            className="text-eco-600"
                            style={{
                              color: tree.color,
                              opacity: 0.7 + Math.random() * 0.3,
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Classement des villes</CardTitle>
                <CardDescription>Les villes les plus engagées dans notre défi</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="participants">
                  <TabsList className="mb-4">
                    <TabsTrigger value="participants">Participants</TabsTrigger>
                    <TabsTrigger value="co2">CO2 économisé</TabsTrigger>
                    <TabsTrigger value="trees">Arbres virtuels</TabsTrigger>
                  </TabsList>

                  <TabsContent value="participants">
                    <div className="space-y-4">
                      {[...cities]
                        .sort((a, b) => b.participants - a.participants)
                        .map((city, index) => (
                          <div key={city.name} className="flex items-center">
                            <div className="w-6 text-gray-500 font-medium">#{index + 1}</div>
                            <div className="flex-1 ml-2">{city.name}</div>
                            <div className="w-24 text-right font-medium">{city.participants.toLocaleString()}</div>
                            <div className="w-1/2 ml-4">
                              <Progress value={city.participants / 16} className="h-2 bg-eco-100" />
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="co2">
                    <div className="space-y-4">
                      {[...cities]
                        .sort((a, b) => b.co2Saved - a.co2Saved)
                        .map((city, index) => (
                          <div key={city.name} className="flex items-center">
                            <div className="w-6 text-gray-500 font-medium">#{index + 1}</div>
                            <div className="flex-1 ml-2">{city.name}</div>
                            <div className="w-24 text-right font-medium">{(city.co2Saved / 1000).toFixed(1)} t</div>
                            <div className="w-1/2 ml-4">
                              <Progress value={city.co2Saved / 160} className="h-2 bg-eco-100" />
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="trees">
                    <div className="space-y-4">
                      {[...cities]
                        .sort((a, b) => b.trees - a.trees)
                        .map((city, index) => (
                          <div key={city.name} className="flex items-center">
                            <div className="w-6 text-gray-500 font-medium">#{index + 1}</div>
                            <div className="flex-1 ml-2">{city.name}</div>
                            <div className="w-24 text-right font-medium">{city.trees.toLocaleString()}</div>
                            <div className="w-1/2 ml-4">
                              <Progress value={city.trees / 8} className="h-2 bg-eco-100" />
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Rejoignez le défi</CardTitle>
                <CardDescription>Engagez-vous à utiliser des transports doux</CardDescription>
              </CardHeader>
              <CardContent>
                {!committed ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Votre prénom</Label>
                      <Input
                        id="name"
                        placeholder="Entrez votre prénom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transport">Mode de transport doux</Label>
                      <Select value={transport} onValueChange={setTransport}>
                        <SelectTrigger id="transport">
                          <SelectValue placeholder="Sélectionnez un mode de transport" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bicycle">Vélo</SelectItem>
                          <SelectItem value="walking">Marche</SelectItem>
                          <SelectItem value="scooter">Trottinette</SelectItem>
                          <SelectItem value="public">Transport en commun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="distance">Distance quotidienne (km)</Label>
                      <Input
                        id="distance"
                        type="number"
                        placeholder="Distance en km"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <motion.div className="text-center py-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <div className="bg-eco-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TreeDeciduous className="h-10 w-10 text-eco-600" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">Merci pour votre engagement !</h3>
                    <p className="text-gray-600 mb-4">
                      Vous venez d'ajouter un arbre à notre forêt virtuelle et de contribuer à un monde plus vert.
                    </p>
                    <div className="flex justify-center space-x-2">
                      <Button variant="outline" size="sm" onClick={resetForm}>
                        Nouveau défi
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Partager
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
              {!committed && (
                <CardFooter>
                  <Button
                    className="w-full bg-eco-600 hover:bg-eco-700"
                    onClick={handleCommit}
                    disabled={!name || !transport || !distance}
                  >
                    Je m'engage
                  </Button>
                </CardFooter>
              )}
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Objectif communautaire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Participants</span>
                      <span>{totalParticipants} / 10 000</span>
                    </div>
                    <Progress value={totalParticipants / 100} className="h-2 bg-eco-100" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>CO2 économisé</span>
                      <span>{(totalCO2Saved / 1000).toFixed(1)} / 100 tonnes</span>
                    </div>
                    <Progress value={totalCO2Saved / 1000} className="h-2 bg-eco-100" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Forêt virtuelle</span>
                      <span>{totalTrees} / 5 000 arbres</span>
                    </div>
                    <Progress value={totalTrees / 50} className="h-2 bg-eco-100" />
                  </div>
                </div>

                <div className="mt-4 p-3 bg-eco-50 rounded-lg text-sm text-eco-700">
                  <p>
                    <strong>Saviez-vous que</strong> : Si chaque habitant remplaçait un trajet en voiture par semaine
                    par un mode de transport doux, nous pourrions réduire les émissions de CO2 de plus de 500 000 tonnes
                    par an en France.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
