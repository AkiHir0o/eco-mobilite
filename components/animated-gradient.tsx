"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedGradient() {
  const [gradientIndex, setGradientIndex] = useState(0)

  // Différentes combinaisons de gradients verts plus foncés
  const gradients = [
    "linear-gradient(135deg, #0B4D1E 0%, #0F5D2D 50%, #0E4424 100%)",
    "linear-gradient(135deg, #0E4424 0%, #0B4D1E 50%, #0C3D1D 100%)",
    "linear-gradient(135deg, #0C3D1D 0%, #0E4424 50%, #0B4D1E 100%)",
    "linear-gradient(135deg, #0F5D2D 0%, #0C3D1D 50%, #0E4424 100%)",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length)
    }, 8000) // Change toutes les 8 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: gradients[gradientIndex],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
        }}
      />

      {/* Formes abstraites qui se déplacent lentement */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"
        animate={{
          x: ["-20%", "10%", "-20%"],
          y: ["-20%", "10%", "-20%"],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["10%", "-5%", "10%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}
