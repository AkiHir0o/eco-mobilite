"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Car, DollarSign, Flame, Leaf, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const formSchema = z.object({
  distance: z.coerce.number().min(0.1, {
    message: "La distance doit être supérieure à 0.1 km",
  }),
  currentTransport: z.string(),
  newTransport: z.string(),
})

type Transport = {
  name: string
  co2PerKm: number // g/km
  caloriesPerKm: number // calories/km
  costPerKm: number // €/km
  speedKmh: number // km/h
}

const transports: Record<string, Transport> = {
  car: {
    name: "Voiture",
    co2PerKm: 120,
    caloriesPerKm: 0,
    costPerKm: 0.15,
    speedKmh: 30,
  },
  motorcycle: {
    name: "Moto",
    co2PerKm: 80,
    caloriesPerKm: 0,
    costPerKm: 0.1,
    speedKmh: 35,
  },
  bus: {
    name: "Bus",
    co2PerKm: 30,
    caloriesPerKm: 0,
    costPerKm: 0.05,
    speedKmh: 20,
  },
  bicycle: {
    name: "Vélo",
    co2PerKm: 0,
    caloriesPerKm: 30,
    costPerKm: 0.01,
    speedKmh: 15,
  },
  walking: {
    name: "Marche",
    co2PerKm: 0,
    caloriesPerKm: 65,
    costPerKm: 0,
    speedKmh: 5,
  },
  scooter: {
    name: "Trottinette",
    co2PerKm: 0,
    caloriesPerKm: 25,
    costPerKm: 0.02,
    speedKmh: 12,
  },
}

export default function CalculatorPage() {
  const [results, setResults] = useState<{
    co2Saved: number
    caloriesBurned: number
    moneySaved: number
    timeDifference: number
  } | null>(null)

  const [timeframe, setTimeframe] = useState<"week" | "month" | "year">("week")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distance: 5,
      currentTransport: "car",
      newTransport: "bicycle",
    },
  })

  const calculateResults = (values: z.infer<typeof formSchema>) => {
    const current = transports[values.currentTransport]
    const newT = transports[values.newTransport]
    const distance = values.distance

    // Daily calculations
    const dailyCO2Saved = (current.co2PerKm - newT.co2PerKm) * distance
    const dailyCaloriesBurned = newT.caloriesPerKm * distance
    const dailyMoneySaved = (current.costPerKm - newT.costPerKm) * distance
    const dailyTimeDifference = (distance / current.speedKmh - distance / newT.speedKmh) * 60 // in minutes

    // Multiply by days based on timeframe
    const multiplier = timeframe === "week" ? 7 : timeframe === "month" ? 30 : 365

    setResults({
      co2Saved: dailyCO2Saved * multiplier,
      caloriesBurned: dailyCaloriesBurned * multiplier,
      moneySaved: dailyMoneySaved * multiplier,
      timeDifference: dailyTimeDifference * multiplier,
    })
  }

  // Recalculate when timeframe changes
  useEffect(() => {
    const values = form.getValues()
    if (values.distance && values.currentTransport && values.newTransport) {
      calculateResults(values)
    }
  }, [timeframe, form])

  // Calculer les résultats initiaux au chargement
  useEffect(() => {
    const values = form.getValues()
    if (values.distance && values.currentTransport && values.newTransport) {
      calculateResults(values)
    }
  }, [])

  const chartData = results
    ? [
        {
          name: "CO2 économisé",
          value: Math.round(results.co2Saved / 1000), // Convert to kg
          unit: "kg",
          fill: "#22c55e",
        },
        {
          name: "Calories brûlées",
          value: Math.round(results.caloriesBurned),
          unit: "kcal",
          fill: "#4ade80",
        },
        {
          name: "Argent économisé",
          value: Math.round(results.moneySaved),
          unit: "€",
          fill: "#15803d",
        },
      ]
    : []

  // Style moderne pour les graphiques
  // const modernChartStyle = {
  //   barSize: 40,
  //   barRadius: 6,
  //   barGap: 8,
  // }

  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Calculateur d'impact</h1>
        <p className="text-gray-600 mb-8">Découvrez les bénéfices du passage à un mode de transport plus doux.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Vos trajets</CardTitle>
              <CardDescription>Entrez les détails de vos déplacements quotidiens</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(calculateResults)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="distance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Distance quotidienne (km)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" {...field} />
                        </FormControl>
                        <FormDescription>Distance parcourue chaque jour (aller-retour)</FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentTransport"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mode de transport actuel</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez votre mode de transport actuel" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="car">Voiture</SelectItem>
                            <SelectItem value="motorcycle">Moto</SelectItem>
                            <SelectItem value="bus">Bus</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="newTransport"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mode de transport envisagé</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez le mode de transport envisagé" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bicycle">Vélo</SelectItem>
                            <SelectItem value="walking">Marche</SelectItem>
                            <SelectItem value="scooter">Trottinette</SelectItem>
                            <SelectItem value="bus">Bus</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-eco-600 hover:bg-eco-700">
                    Calculer l'impact
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Résultats</CardTitle>
              <Tabs
                defaultValue="week"
                value={timeframe}
                onValueChange={(v) => setTimeframe(v as "week" | "month" | "year")}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="week">Par semaine</TabsTrigger>
                  <TabsTrigger value="month">Par mois</TabsTrigger>
                  <TabsTrigger value="year">Par année</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <motion.div
                      className="bg-gradient-to-br from-eco-50 to-eco-100 p-4 rounded-lg text-center shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Leaf className="h-8 w-8 text-eco-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">CO2 économisé</p>
                      <p className="text-2xl font-bold text-eco-700">{(results.co2Saved / 1000).toFixed(1)} kg</p>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-eco-50 to-eco-100 p-4 rounded-lg text-center shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Flame className="h-8 w-8 text-eco-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Calories brûlées</p>
                      <p className="text-2xl font-bold text-eco-700">{Math.round(results.caloriesBurned)}</p>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-eco-50 to-eco-100 p-4 rounded-lg text-center shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <DollarSign className="h-8 w-8 text-eco-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Argent économisé</p>
                      <p className="text-2xl font-bold text-eco-700">{results.moneySaved.toFixed(2)} €</p>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-eco-50 to-eco-100 p-4 rounded-lg text-center shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Clock className="h-8 w-8 text-eco-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Différence de temps</p>
                      <p className="text-2xl font-bold text-eco-700">
                        {results.timeDifference > 0 ? "+" : ""}
                        {Math.round(results.timeDifference)} min
                      </p>
                    </motion.div>
                  </div>

                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value, name, props) => [`${value} ${props.payload.unit}`, name]} />
                        <Legend />
                        <Bar dataKey="value" name="Valeur" fill="#22c55e" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="bg-gradient-to-r from-eco-50 to-eco-100 p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2">Saviez-vous que...</h3>
                    <p className="text-gray-600">
                      {results.co2Saved > 10000
                        ? `En économisant ${(results.co2Saved / 1000).toFixed(1)} kg de CO2, c'est comme si vous plantiez ${Math.round(results.co2Saved / 20000)} arbres !`
                        : `Chaque kilogramme de CO2 non émis contribue à préserver notre planète pour les générations futures.`}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                  <Car className="h-16 w-16 mb-4" />
                  <p>Remplissez le formulaire pour voir les résultats</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
