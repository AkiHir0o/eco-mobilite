"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, Map, Users, Lightbulb, ChevronDown } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnimatedGradient from "@/components/animated-gradient"

// Composant pour les sections avec animation au défilement
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

// Composant pour les cartes de fonctionnalités
const FeatureCard = ({
  icon,
  title,
  description,
  link,
  color,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  color: string
  delay?: number
}) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="group">
      <Link href={link} className="block h-full">
        <div
          className={`h-full rounded-xl p-6 transition-all duration-300 ${color} hover:shadow-lg hover:-translate-y-1`}
        >
          <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">{icon}</div>
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-4 text-sm opacity-90">{description}</p>
          <div className="flex items-center text-sm font-medium">
            <span>Découvrir</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Composant pour les statistiques
const StatItem = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="text-3xl font-bold text-white md:text-4xl">{value}</div>
      <div className="text-sm text-eco-100">{label}</div>
    </motion.div>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  // Modifier l'animation de scroll pour que l'éclaircissement commence plus bas
  // Ajuster la valeur de scrollYProgress pour que l'effet commence plus tard

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden text-white"
        >
          <AnimatedGradient />

          <div className="container relative z-10 mx-auto px-4 py-16 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                <span className="block">Repensez vos</span>
                <span className="bg-gradient-to-r from-eco-300 to-eco-100 bg-clip-text text-transparent">
                  déplacements quotidiens
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mb-4 max-w-2xl text-lg text-eco-50 md:text-xl"
            >
              Découvrez l'impact positif des transports doux sur l'environnement, votre santé et votre budget.
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mx-auto mb-8 text-xl font-medium text-white md:text-2xl"
            >
              Moins de moteur, plus de bonheur
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/calculateur"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-[#0B5D2E] font-medium hover:bg-white/90 transition-colors"
              >
                Calculer mon impact <Calculator className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/carte"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-[#0B5D2E] font-medium hover:bg-white/90 transition-colors"
              >
                Explorer la carte <Map className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center"
          >
            <ChevronDown className="h-8 w-8 animate-bounce text-white opacity-80" />
          </motion.div>
        </motion.section>

        {/* Introduction Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  Adoptez <span className="text-eco-600">ÉcoMouv'</span>
                </h2>
                <p className="mb-10 text-lg text-gray-600">
                  Notre application vous accompagne dans votre transition vers une mobilité plus respectueuse de
                  l'environnement, plus économique et meilleure pour votre santé.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center rounded-lg bg-eco-50 p-6 text-center">
                  <div className="mb-4 rounded-full bg-eco-100 p-3">
                    <Calculator className="h-6 w-6 text-eco-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-eco-800">Écologique</h3>
                  <p className="text-gray-600">
                    Réduisez votre empreinte carbone et contribuez à un air plus pur dans votre ville.
                  </p>
                </div>

                <div className="flex flex-col items-center rounded-lg bg-eco-50 p-6 text-center">
                  <div className="mb-4 rounded-full bg-eco-100 p-3">
                    <Users className="h-6 w-6 text-eco-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-eco-800">Communautaire</h3>
                  <p className="text-gray-600">
                    Rejoignez une communauté engagée et participez à des défis collectifs pour la mobilité douce.
                  </p>
                </div>

                <div className="flex flex-col items-center rounded-lg bg-eco-50 p-6 text-center">
                  <div className="mb-4 rounded-full bg-eco-100 p-3">
                    <Calculator className="h-6 w-6 text-eco-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-eco-800">Économique</h3>
                  <p className="text-gray-600">
                    Économisez sur vos frais de transport tout en améliorant votre santé et votre bien-être.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-b from-eco-50 to-white py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Découvrez nos fonctionnalités</h2>
                <p className="text-lg text-gray-600">
                  ÉcoMouv' vous propose des outils pratiques pour faciliter votre transition vers une mobilité plus
                  douce.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Calculator className="h-6 w-6 text-white" />}
                title="Calculateur d'impact"
                description="Mesurez l'impact environnemental, économique et sur votre santé de vos choix de mobilité."
                link="/calculateur"
                color="bg-gradient-to-br from-eco-600 to-eco-700 text-white"
                delay={0.1}
              />

              <FeatureCard
                icon={<Map className="h-6 w-6 text-white" />}
                title="Carte interactive"
                description="Explorez les infrastructures de mobilité douce et trouvez les meilleurs itinéraires."
                link="/carte"
                color="bg-gradient-to-br from-eco-500 to-eco-600 text-white"
                delay={0.2}
              />

              <FeatureCard
                icon={<Users className="h-6 w-6 text-white" />}
                title="Défi communautaire"
                description="Participez à des défis collectifs et suivez l'impact positif de la communauté."
                link="/defi"
                color="bg-gradient-to-br from-eco-600 to-eco-700 text-white"
                delay={0.3}
              />

              <FeatureCard
                icon={<Lightbulb className="h-6 w-6 text-white" />}
                title="Conseils pratiques"
                description="Découvrez des astuces et recommandations pour adopter facilement les transports doux."
                link="/conseils"
                color="bg-gradient-to-br from-eco-500 to-eco-600 text-white"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-eco-700 to-eco-600 p-8 text-white shadow-lg md:p-12">
                <div className="mb-8 text-center">
                  <h2 className="mb-2 text-2xl font-bold md:text-3xl">Notre impact collectif</h2>
                  <p className="text-eco-100">Ensemble, nous faisons la différence pour notre planète</p>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <StatItem value="5 635" label="Participants" delay={0.1} />
                  <StatItem value="56,4" label="Tonnes de CO2 économisées" delay={0.2} />
                  <StatItem value="2 820" label="Arbres virtuels plantés" delay={0.3} />

                  <StatItem value="12 500" label="Trajets écologiques" delay={0.4} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-eco-50 py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  Prêt à changer vos habitudes de déplacement ?
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                  Commencez dès aujourd'hui à mesurer l'impact de vos choix de mobilité et rejoignez notre communauté
                  engagée pour un avenir plus durable.
                </p>
                <Button asChild size="lg" className="bg-eco-600 px-8 text-white hover:bg-eco-700">
                  <Link href="/calculateur" className="inline-flex items-center">
                    Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Ce que disent nos utilisateurs</h2>
                <p className="text-lg text-gray-600">
                  Découvrez les témoignages de personnes qui ont adopté l'ÉcoMouv' au quotidien.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  name: "Sophie L.",
                  role: "Utilisatrice quotidienne du vélo",
                  quote:
                    "Grâce à ÉcoMouv', j'ai découvert des pistes cyclables sécurisées que je ne connaissais pas. J'économise maintenant 120€ par mois en transport !",
                },
                {
                  name: "Thomas M.",
                  role: "Adepte de la marche urbaine",
                  quote:
                    "L'application m'a aidé à prendre conscience de l'impact positif de mes déplacements à pied. Je me sens en meilleure forme et plus connecté à ma ville.",
                },
                {
                  name: "Léa K.",
                  role: "Utilisatrice multimodale",
                  quote:
                    "Je combine désormais vélo et transports en commun grâce aux conseils de l'app. Mon empreinte carbone a diminué de 40% en seulement 3 mois !",
                },
              ].map((testimonial, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <div className="h-full rounded-lg border border-eco-100 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                    <p className="mb-4 italic text-gray-600">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-eco-700">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-gradient-to-r from-eco-800 to-eco-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="mb-6 text-3xl font-bold">Rejoignez le mouvement ÉcoMouv'</h2>
              <p className="mx-auto mb-4 max-w-2xl text-lg text-eco-100">
                Chaque trajet compte. Ensemble, transformons nos habitudes de déplacement pour un avenir plus durable.
              </p>
              <p className="mx-auto mb-8 max-w-2xl text-xl font-medium text-white">Moins de moteur, plus de bonheur</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/calculateur"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-[#0B5D2E] font-medium hover:bg-white/90 transition-colors"
                >
                  Calculer mon impact <Calculator className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />
      </main>
    </>
  )
}
