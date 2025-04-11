"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { TreeDeciduous, Leaf, Flower2 } from "lucide-react"

type Tree = {
  id: number
  x: number
  y: number
  size: number
  type: "tree" | "pine" | "flower"
  color: string
  rotation: number
}

type VirtualForestProps = {
  treeCount: number
}

export default function VirtualForest({ treeCount }: VirtualForestProps) {
  // Utiliser useRef pour maintenir les arbres entre les rendus
  const treesRef = useRef<Tree[]>([])

  // Générer les arbres une seule fois ou lorsque treeCount change
  useEffect(() => {
    // Ne régénérer que si le nombre d'arbres a changé
    if (treesRef.current.length !== treeCount) {
      const newTrees: Tree[] = []

      for (let i = 0; i < treeCount; i++) {
        // Distribuer les arbres de manière plus naturelle
        // Utiliser une distribution en cluster pour simuler une forêt réelle
        const cluster = Math.floor(i / 10)
        const clusterX = 20 + (cluster % 5) * 20
        const clusterY = 20 + Math.floor(cluster / 5) * 20

        // Ajouter une variation aléatoire autour du centre du cluster
        const x = clusterX + (Math.random() * 10 - 5)
        const y = clusterY + (Math.random() * 10 - 5)

        // Varier les types d'arbres
        const typeRandom = Math.random()
        let type: "tree" | "pine" | "flower"
        let color: string

        if (typeRandom < 0.7) {
          type = "tree"
          // Différentes nuances de vert pour les arbres
          const greenHues = ["#15803d", "#16a34a", "#22c55e", "#166534"]
          color = greenHues[Math.floor(Math.random() * greenHues.length)]
        } else if (typeRandom < 0.9) {
          type = "pine"
          // Nuances plus foncées pour les pins
          const pineHues = ["#14532d", "#166534", "#15803d"]
          color = pineHues[Math.floor(Math.random() * pineHues.length)]
        } else {
          type = "flower"
          // Couleurs pour les fleurs
          const flowerHues = ["#e879f9", "#c084fc", "#a855f7", "#d946ef"]
          color = flowerHues[Math.floor(Math.random() * flowerHues.length)]
        }

        newTrees.push({
          id: i,
          x,
          y,
          size: 0.5 + Math.random() * 0.5, // Taille variable
          type,
          color,
          rotation: Math.random() * 10 - 5, // Légère rotation aléatoire
        })
      }

      treesRef.current = newTrees
    }
  }, [treeCount])

  return (
    <div className="relative h-64 bg-eco-50 rounded-lg p-4 overflow-hidden">
      <h3 className="text-lg font-medium mb-4 relative z-10">Notre forêt virtuelle</h3>

      {/* Sol de la forêt */}
      <div className="absolute inset-0 bg-gradient-to-b from-eco-50 to-eco-100"></div>

      {/* Soleil */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-yellow-200 opacity-70"></div>

      {/* Arbres */}
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
              transition={{
                duration: 0.5,
                delay: tree.id * 0.01,
                type: "spring",
                stiffness: 100,
              }}
            >
              {tree.type === "tree" && (
                <TreeDeciduous className="text-eco-600" style={{ color: tree.color }} size={24} />
              )}
              {tree.type === "pine" && <Leaf className="text-eco-800" style={{ color: tree.color }} size={24} />}
              {tree.type === "flower" && <Flower2 style={{ color: tree.color }} size={20} />}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brume/Brouillard */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-eco-100/50 to-transparent"></div>
    </div>
  )
}
