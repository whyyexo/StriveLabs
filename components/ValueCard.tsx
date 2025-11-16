"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ValueCardProps {
  title: string
  description: string
  delay?: number
}

export function ValueCard({ title, description, delay = 0 }: ValueCardProps) {
  return (
    <motion.div
      className="glass rounded-2xl p-8 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </motion.div>
  )
}

