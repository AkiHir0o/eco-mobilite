"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function CityAnimation() {
  const [isGreen, setIsGreen] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Toggle between polluted and green city every 5 seconds
    intervalRef.current = setInterval(() => {
      setIsGreen((prev) => !prev)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          backgroundColor: isGreen ? "rgba(16, 185, 129, 0.1)" : "rgba(75, 85, 99, 0.2)",
        }}
        transition={{ duration: 2 }}
      />

      {/* City silhouette */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 300" className="w-full">
          <motion.path
            d="M0,250 L50,250 L50,150 L100,150 L100,250 L150,250 L150,100 L200,100 L200,250 L250,250 L250,200 L300,200 L300,250 L350,250 L350,150 L400,150 L400,250 L450,250 L450,180 L500,180 L500,250 L550,250 L550,120 L600,120 L600,250 L650,250 L650,200 L700,200 L700,250 L750,250 L750,150 L800,150 L800,250 L850,250 L850,180 L900,180 L900,250 L950,250 L950,120 L1000,120 L1000,250 L1050,250 L1050,200 L1100,200 L1100,250 L1150,250 L1150,150 L1200,150 L1200,300 L0,300 Z"
            fill={isGreen ? "#15803d" : "#4B5563"}
            transition={{ duration: 2 }}
          />

          {/* Trees that appear in green mode */}
          <motion.g animate={{ opacity: isGreen ? 1 : 0 }} transition={{ duration: 2 }}>
            {[100, 200, 350, 500, 650, 800, 950, 1100].map((x, i) => (
              <g key={i} transform={`translate(${x}, 240) scale(0.5)`}>
                <circle cx="0" cy="-20" r="20" fill="#22c55e" />
                <rect x="-5" y="0" width="10" height="20" fill="#15803d" />
              </g>
            ))}
          </motion.g>

          {/* Pollution clouds that appear in gray mode */}
          <motion.g animate={{ opacity: isGreen ? 0 : 1 }} transition={{ duration: 2 }}>
            {[150, 400, 600, 900, 1050].map((x, i) => (
              <g key={i} transform={`translate(${x}, 100)`}>
                <circle cx="0" cy="0" r="15" fill="#9CA3AF" />
                <circle cx="15" cy="-5" r="15" fill="#9CA3AF" />
                <circle cx="-15" cy="-5" r="15" fill="#9CA3AF" />
                <circle cx="0" cy="-15" r="15" fill="#9CA3AF" />
              </g>
            ))}
          </motion.g>
        </svg>
      </div>

      {/* Vehicles */}
      <div className="absolute bottom-10 w-full">
        {/* Green vehicle (bicycle) */}
        <motion.div
          className="absolute"
          animate={{
            x: ["-10%", "110%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "linear",
          }}
          style={{ display: isGreen ? "block" : "none" }}
        >
          <svg width="60" height="30" viewBox="0 0 60 30">
            <circle cx="15" cy="25" r="5" fill="#15803d" />
            <circle cx="45" cy="25" r="5" fill="#15803d" />
            <path d="M15,25 L30,15 L45,25" stroke="#22c55e" strokeWidth="2" fill="none" />
            <circle cx="30" cy="15" r="3" fill="#dcfce7" />
            <path d="M30,15 L30,10" stroke="#22c55e" strokeWidth="2" />
            <path d="M27,10 L33,10" stroke="#22c55e" strokeWidth="2" />
            <motion.g
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
              style={{ transformOrigin: "15px 25px" }}
            >
              <line x1="15" y1="25" x2="15" y2="20" stroke="#15803d" strokeWidth="2" />
              <line x1="15" y1="25" x2="10" y2="25" stroke="#15803d" strokeWidth="2" />
              <line x1="15" y1="25" x2="20" y2="25" stroke="#15803d" strokeWidth="2" />
              <line x1="15" y1="25" x2="15" y2="30" stroke="#15803d" strokeWidth="2" />
            </motion.g>
            <motion.g
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
              style={{ transformOrigin: "45px 25px" }}
            >
              <line x1="45" y1="25" x2="45" y2="20" stroke="#15803d" strokeWidth="2" />
              <line x1="45" y1="25" x2="40" y2="25" stroke="#15803d" strokeWidth="2" />
              <line x1="45" y1="25" x2="50" y2="25" stroke="#15803d" strokeWidth="2" />
              <line x1="45" y1="25" x2="45" y2="30" stroke="#15803d" strokeWidth="2" />
            </motion.g>
          </svg>
        </motion.div>

        {/* Polluting vehicle (car) */}
        <motion.div
          className="absolute"
          animate={{
            x: ["-10%", "110%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "linear",
          }}
          style={{ display: isGreen ? "none" : "block" }}
        >
          <svg width="80" height="40" viewBox="0 0 80 40">
            <rect x="10" y="15" width="60" height="15" rx="5" fill="#4B5563" />
            <rect x="5" y="20" width="70" height="10" rx="2" fill="#6B7280" />
            <circle cx="20" cy="30" r="7" fill="#1F2937" />
            <circle cx="60" cy="30" r="7" fill="#1F2937" />
            <rect x="15" y="15" width="15" height="10" fill="#9CA3AF" />
            <rect x="40" y="15" width="15" height="10" fill="#9CA3AF" />
            <motion.path
              d="M70,25 L75,25 L75,20 L70,20"
              fill="#6B7280"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
