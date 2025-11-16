"use client"

import { motion } from "framer-motion"

interface GradientBlobProps {
  className?: string
  color?: "purple" | "blue" | "cyan"
}

export function GradientBlob({ className, color = "purple" }: GradientBlobProps) {
  const colorClasses = {
    purple: "from-purple-500/30 via-purple-600/20 to-transparent",
    blue: "from-blue-500/30 via-blue-600/20 to-transparent",
    cyan: "from-cyan-500/30 via-cyan-600/20 to-transparent",
  }

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${colorClasses[color]} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

