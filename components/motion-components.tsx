"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

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
      {/* Contenu de la carte */}
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

// Exporter les composants motion pour une utilisation avec import dynamique
const MotionDiv = motion.div
const MotionP = motion.p
const MotionSection = motion.section

// Hook personnalisé pour l'animation de défilement
const useScrollAnimation = () => {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  return { heroOpacity, heroScale }
}

export default {
  AnimatedSection,
  FeatureCard,
  StatItem,
  MotionDiv,
  MotionP,
  MotionSection,
  useScrollAnimation,
}
